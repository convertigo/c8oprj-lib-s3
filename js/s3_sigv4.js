/*
 * AWS Signature Version 4 helpers for lib_s3.
 * Included from Convertigo sequence SimpleStep objects with:
 *   include("js/s3_sigv4.js");
 */

if (typeof C8O === "undefined") {
  var C8O = {};
}

C8O.s3SigV4 = C8O.s3SigV4 || {};

(function () {
  function text(value) {
    return value == null ? "" : String(value);
  }

  function trim(value) {
    return text(value).trim();
  }

  function utf8(value) {
    return new java.lang.String(text(value)).getBytes("UTF-8");
  }

  function bytesToHex(bytes) {
    var out = [];
    for (var i = 0; i < bytes.length; i++) {
      var value = bytes[i];
      if (value < 0) {
        value += 256;
      }
      var hex = value.toString(16);
      out.push(hex.length === 1 ? "0" + hex : hex);
    }
    return out.join("");
  }

  function sha256Hex(value) {
    var MessageDigest = Packages.java.security.MessageDigest;
    var digest = MessageDigest.getInstance("SHA-256");
    return bytesToHex(digest.digest(utf8(value)));
  }

  function sha256FileHex(path) {
    var MessageDigest = Packages.java.security.MessageDigest;
    var FileInputStream = Packages.java.io.FileInputStream;
    var digest = MessageDigest.getInstance("SHA-256");
    var input = new FileInputStream(path);
    try {
      var buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 8192);
      var read = input.read(buffer);
      while (read !== -1) {
        digest.update(buffer, 0, read);
        read = input.read(buffer);
      }
      return bytesToHex(digest.digest());
    } finally {
      input.close();
    }
  }

  function hmacSha256(keyBytes, value) {
    var Mac = Packages.javax.crypto.Mac;
    var SecretKeySpec = Packages.javax.crypto.spec.SecretKeySpec;
    var mac = Mac.getInstance("HmacSHA256");
    mac.init(new SecretKeySpec(keyBytes, "HmacSHA256"));
    return mac.doFinal(utf8(value));
  }

  function hmacSha256Hex(keyBytes, value) {
    return bytesToHex(hmacSha256(keyBytes, value));
  }

  function signingKey(secretKey, dateStamp, region, service) {
    var kDate = hmacSha256(utf8("AWS4" + secretKey), dateStamp);
    var kRegion = hmacSha256(kDate, region);
    var kService = hmacSha256(kRegion, service);
    return hmacSha256(kService, "aws4_request");
  }

  function amzDate(date) {
    var SimpleDateFormat = Packages.java.text.SimpleDateFormat;
    var TimeZone = Packages.java.util.TimeZone;
    var formatter = new SimpleDateFormat("yyyyMMdd'T'HHmmss'Z'");
    formatter.setTimeZone(TimeZone.getTimeZone("UTC"));
    return String(formatter.format(date || new java.util.Date()));
  }

  function dateStamp(amzDateText) {
    return String(amzDateText).substring(0, 8);
  }

  function awsEncode(value, encodeSlash) {
    var raw = utf8(value);
    var result = [];
    var unreserved = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.~";
    for (var i = 0; i < raw.length; i++) {
      var b = raw[i];
      if (b < 0) {
        b += 256;
      }
      var ch = String.fromCharCode(b);
      if (unreserved.indexOf(ch) >= 0 || (ch === "/" && encodeSlash === false)) {
        result.push(ch);
      } else {
        var hex = b.toString(16).toUpperCase();
        result.push("%" + (hex.length === 1 ? "0" + hex : hex));
      }
    }
    return result.join("");
  }

  function canonicalUri(path) {
    var uri = trim(path) || "/";
    if (uri.charAt(0) !== "/") {
      uri = "/" + uri;
    }
    return awsEncode(uri, false);
  }

  function addQueryPair(pairs, key, value) {
    if (value == null) {
      return;
    }
    pairs.push({
      key: awsEncode(key, true),
      value: awsEncode(value, true)
    });
  }

  function canonicalQueryString(query) {
    var pairs = [];
    query = query || {};
    var keys = Object.keys(query).sort();
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = query[key];
      if (Array.isArray(value)) {
        for (var j = 0; j < value.length; j++) {
          addQueryPair(pairs, key, value[j]);
        }
      } else {
        addQueryPair(pairs, key, value);
      }
    }
    pairs.sort(function (a, b) {
      if (a.key === b.key) {
        return a.value < b.value ? -1 : (a.value > b.value ? 1 : 0);
      }
      return a.key < b.key ? -1 : 1;
    });
    return pairs.map(function (pair) {
      return pair.key + "=" + pair.value;
    }).join("&");
  }

  function normalizeHeaderValue(value) {
    return trim(value).replace(/\s+/g, " ");
  }

  function normalizeHost(value) {
    var host = trim(value) || "s3.amazonaws.com";
    host = host.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "");
    host = host.replace(/\/.*$/, "");
    return host || "s3.amazonaws.com";
  }

  function resolveHost(value, fallback) {
    var raw = trim(value);
    if (!raw || raw.indexOf("${") === 0) {
      raw = trim(fallback) || "s3.amazonaws.com";
    }
    return normalizeHost(raw);
  }

  function requestUrl(options) {
    var opts = options || {};
    var protocol = trim(opts.protocol) || "https";
    var host = resolveHost(opts.host, "s3.amazonaws.com");
    var query = canonicalQueryString(opts.query || {});
    return protocol + "://" + host + canonicalUri(opts.path || "/") + (query ? "?" + query : "");
  }

  function canonicalHeaders(headers) {
    var normalized = {};
    var names = Object.keys(headers || {});
    for (var i = 0; i < names.length; i++) {
      var name = String(names[i]).toLowerCase();
      var value = headers[names[i]];
      if (value == null || value === "") {
        continue;
      }
      normalized[name] = normalizeHeaderValue(value);
    }
    var keys = Object.keys(normalized).sort();
    var lines = [];
    for (var j = 0; j < keys.length; j++) {
      lines.push(keys[j] + ":" + normalized[keys[j]] + "\n");
    }
    return {
      text: lines.join(""),
      signedHeaders: keys.join(";")
    };
  }

  function sign(options) {
    var opts = options || {};
    var accessKey = trim(opts.accessKey);
    var secretKey = trim(opts.secretKey);
    var region = trim(opts.region) || "us-east-1";
    var service = trim(opts.service) || "s3";
    var method = (trim(opts.method) || "GET").toUpperCase();
    var host = normalizeHost(opts.host);
    var payload = opts.payload == null ? "" : text(opts.payload);
    var payloadFile = trim(opts.payloadFile);
    var payloadHash = opts.unsignedPayload === true ? "UNSIGNED-PAYLOAD" : (payloadFile ? sha256FileHex(payloadFile) : sha256Hex(payload));
    var now = trim(opts.amzDate) || amzDate(opts.date);
    var stamp = dateStamp(now);

    if (!accessKey) {
      throw new Error("Missing AWS accessKey");
    }
    if (!secretKey) {
      throw new Error("Missing AWS secretKey");
    }

    var headers = {
      host: host,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": now
    };
    if (trim(opts.sessionToken)) {
      headers["x-amz-security-token"] = trim(opts.sessionToken);
    }
    if (trim(opts.contentType)) {
      headers["content-type"] = trim(opts.contentType);
    }

    var canonical = canonicalHeaders(headers);
    var scope = stamp + "/" + region + "/" + service + "/aws4_request";
    var request = [
      method,
      canonicalUri(opts.path || "/"),
      canonicalQueryString(opts.query || {}),
      canonical.text,
      canonical.signedHeaders,
      payloadHash
    ].join("\n");
    var stringToSign = [
      "AWS4-HMAC-SHA256",
      now,
      scope,
      sha256Hex(request)
    ].join("\n");
    var signature = hmacSha256Hex(signingKey(secretKey, stamp, region, service), stringToSign);
    var authorization = "AWS4-HMAC-SHA256 Credential=" + accessKey + "/" + scope +
      ", SignedHeaders=" + canonical.signedHeaders +
      ", Signature=" + signature;

    return {
      authorization: authorization,
      amzDate: now,
      contentSha256: payloadHash,
      securityToken: trim(opts.sessionToken),
      signedHeaders: canonical.signedHeaders,
      canonicalRequest: request,
      stringToSign: stringToSign
    };
  }

  C8O.s3SigV4.sign = sign;
  C8O.s3SigV4.resolveHost = resolveHost;
  C8O.s3SigV4.url = requestUrl;
})();
