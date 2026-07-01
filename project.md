
# ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/core/images/project_color_16x16.png?raw=true "Project") lib_s3

Amazon S3 helper library for Convertigo.

What this library can do:

| Capability | Sequence | Description |
| --- | --- | --- |
| List buckets | listBuckets | Returns the S3 buckets accessible with the configured S3 credentials and endpoint. |
| Create a bucket | createBucket | Creates a new S3 bucket in the configured region. |
| Upload an object | putObject | Uploads a file to a bucket using a Convertigo file upload variable as the object body. |
| List objects | listObjects | Lists objects in a bucket with optional prefix, delimiter, and maxKeys filters. |
| Download an object | getObject | Retrieves an object from a bucket by object key. |
| Delete an object | deleteObject | Deletes one object from a bucket. |
| Delete a bucket | deleteBucket | Deletes an empty S3 bucket. |
| Run regression checks | s3_regression_test | Executes the create/upload/list/get/delete cleanup flow to validate the configured project. |

Usage: configure these project symbols before calling the library sequences:

| Symbol | Required | Default | Description |
| --- | --- | --- | --- |
| lib_s3.s3.endpoint | No | s3.amazonaws.com | S3 API endpoint host used by the HTTP connector and by Signature V4. Use another S3-compatible host when needed. |
| lib_s3.s3.accessKey | Yes | | S3 access key ID. |
| lib_s3.s3.secretKey.secret | Yes | | S3 secret access key. Store it as a secret symbol. |
| lib_s3.s3.region | Yes | | S3 signing region used for bucket and object requests. |
| lib_s3.s3.sessionToken.secret | No | | Session token for temporary credentials. Store it as a secret symbol when used. |

The AmazonS3 connector server property references lib_s3.s3.endpoint, and the same endpoint is used as the signed Host header. If the endpoint is not provided to the signing helper, it falls back to s3.amazonaws.com.

For putObject, provide fileContent as a file upload variable. Convertigo stores the upload as a temporary file and sends that file as the raw S3 PUT body.



<details><summary><span style="color:DarkGoldenRod"><i>Connectors</i></span></summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/connectors/images/httpconnector_color_16x16.png?raw=true "HttpConnector") AmazonS3

HTTP Connector for Amazon S3 REST API. This connector allows interaction with Amazon S3 storage service through signed HTTP requests. Configure AWS credentials (Access Key, Secret Key) in sequences before use.

<details><summary><span style="color:DarkGoldenRod"><i>Transactions</i></span></summary><blockquote><p>


<details><summary><b>createBucket</b> : HTTP Transaction to create a new S3 bucket</summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/xmlhttptransaction_color_16x16.png?raw=true "XmlHttpTransaction") createBucket

HTTP Transaction to create a new S3 bucket. Uses PUT method with bucket name in path. Bucket will be created in the region specified by parameters.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__body
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__contentType
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_Authorization
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_content_sha256
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_date
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_security_token
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;bucketName
</td>
<td>

</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>deleteBucket</b> : HTTP Transaction to delete an S3 bucket</summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/xmlhttptransaction_color_16x16.png?raw=true "XmlHttpTransaction") deleteBucket

HTTP Transaction to delete an S3 bucket. Uses DELETE method with bucket name in path. Bucket must be completely empty to be deleted.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_Authorization
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_content_sha256
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_date
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_security_token
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;bucketName
</td>
<td>

</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>deleteObject</b> : HTTP Transaction to delete an object from S3 bucket</summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/xmlhttptransaction_color_16x16.png?raw=true "XmlHttpTransaction") deleteObject

HTTP Transaction to delete an object from S3 bucket. Uses DELETE method with /bucket/object path. Object will be permanently deleted and cannot be recovered.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_Authorization
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_content_sha256
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_date
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_security_token
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;bucketName
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;objectKey
</td>
<td>

</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>deleteTags</b> : HTTP Transaction to delete all tags from an object from S3 bucket</summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/httptransaction_color_16x16.png?raw=true "HttpTransaction") deleteTags

HTTP Transaction to delete all tags from an object from S3 bucket. Uses DELETE method with /bucket/object path. Tags will be permanently deleted and cannot be recovered.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_Authorization
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_content_sha256
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_date
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_security_token
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;bucketName
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;objectKey
</td>
<td>

</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>getObject</b> : HTTP Transaction to download an object from S3 bucket</summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/downloadhttptransaction_color_16x16.png?raw=true "DownloadHttpTransaction") getObject

HTTP Transaction to download an object from S3 bucket. Uses GET method with /bucket/object path and stores the response in a downloaded file.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_Authorization
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_content_sha256
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_date
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_security_token
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;bucketName
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;objectKey
</td>
<td>

</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>getTags</b> : HTTP Transaction to get tags of an objects in a specific S3 bucket</summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/xmlhttptransaction_color_16x16.png?raw=true "XmlHttpTransaction") getTags

HTTP Transaction to get tags of an objects in a specific S3 bucket.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_Authorization
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_content_sha256
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_date
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_security_token
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;bucketName
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;objectKey
</td>
<td>

</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>listBuckets</b> : HTTP Transaction to list all S3 buckets accessible with configured AWS credentials</summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/xmlhttptransaction_color_16x16.png?raw=true "XmlHttpTransaction") listBuckets

HTTP Transaction to list all S3 buckets accessible with configured AWS credentials. Uses GET method on S3 API root. Returns complete list of available buckets for the AWS account.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_Authorization
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_content_sha256
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_date
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_security_token
</td>
<td>

</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>listObjects</b> : HTTP Transaction to list objects in a specific S3 bucket</summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/xmlhttptransaction_color_16x16.png?raw=true "XmlHttpTransaction") listObjects

HTTP Transaction to list objects in a specific S3 bucket. Uses ListObjectsV2 API with list-type=2 parameter. Allows filtering with prefix and delimiter, and limits results with max-keys.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_Authorization
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_content_sha256
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_date
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_security_token
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;bucketName
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;delimiter
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;maxKeys
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;prefix
</td>
<td>

</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>putObject</b> : HTTP Transaction to upload an object to S3 bucket</summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/xmlhttptransaction_color_16x16.png?raw=true "XmlHttpTransaction") putObject

HTTP Transaction to upload an object to S3 bucket. Uses PUT method with /bucket/object path. Content to upload must be provided in request body with appropriate Content-Type.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__body
</td>
<td>
Reserved body variable. Its value is the file path to upload as the raw PUT body.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__contentType
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_Authorization
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_content_sha256
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_date
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_security_token
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;bucketName
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;objectKey
</td>
<td>

</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>putTags</b> : HTTP Transaction to put tag to an object to S3 bucket</summary><blockquote><p>


### ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/transactions/images/httptransaction_color_16x16.png?raw=true "HttpTransaction") putTags

HTTP Transaction to put tag to an object to S3 bucket. Uses PUT method with /bucket/object path.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__body
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__contentType
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_Authorization
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_content_sha256
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_date
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;__header_x_amz_security_token
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;bucketName
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableHttpVariable" >&nbsp;objectKey
</td>
<td>

</td>
</tr>
</table>

</p></blockquote></details>
</p></blockquote></details>
</p></blockquote></details>

<details><summary><span style="color:DarkGoldenRod"><i>Sequences</i></span></summary><blockquote><p>


<details><summary><b>createBucket</b> : Sequence to create a new S3 bucket</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") createBucket

Sequence to create a new S3 bucket. Calls createBucket transaction with bucket name and optional region parameter.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bucketName
</td>
<td>
S3 Bucket Name - Name for the new bucket to be created. Must be globally unique across all AWS accounts and follow S3 naming conventions.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bucketRegion
</td>
<td>
Bucket Region - Geographic region where the new bucket will be created. If empty, uses the connector's default region.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>deleteBucket</b> : Sequence to delete an S3 bucket</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") deleteBucket

Sequence to delete an S3 bucket. Calls deleteBucket transaction with bucket name to delete. Bucket must be empty to be successfully deleted.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bucketName
</td>
<td>
S3 Bucket Name - Name of the bucket to delete. Must be a valid existing bucket name and must be empty to be deleted.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>deleteObject</b> : Sequence to delete an object from S3 bucket</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") deleteObject

Sequence to delete an object from S3 bucket. Calls deleteObject transaction with bucket name and object key to delete.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bucketName
</td>
<td>
S3 Bucket Name - Name of the bucket containing the object to delete. Must be a valid existing bucket name.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;objectKey
</td>
<td>
Object Key - The key (path) of the object to delete from the S3 bucket. Must be a valid existing object key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>deleteTags</b> : Sequence to delete all tags from an object from S3 bucket</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") deleteTags

Sequence to delete all tags from an object from S3 bucket.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bucketName
</td>
<td>
S3 Bucket Name - Name of the bucket to list objects from. Must be a valid existing bucket name.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;objectKey
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>getObject</b> : Sequence to download an object from S3 bucket</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") getObject

Sequence to download an object from S3 bucket. Calls getObject transaction with bucket name and object key to retrieve.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bucketName
</td>
<td>
S3 Bucket Name - Name of the bucket containing the object to download. Must be a valid existing bucket name.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;downloadFolder
</td>
<td>
Download destination folder. This path is either absolute or relative to Convertigo environment. If not specified, the file is downloaded to the _data/download directory of lib_s3
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;objectKey
</td>
<td>
Object Key - The key (path) of the object to download from the S3 bucket. Must be a valid existing object key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>getTags</b> : Sequence to get tags for a an object in a specific S3 bucket</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") getTags

Sequence to get tags for a an object in a specific S3 bucket.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bucketName
</td>
<td>
S3 Bucket Name - Name of the bucket to list objects from. Must be a valid existing bucket name.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;delimiter
</td>
<td>
Delimiter - Character used to group keys that share a common prefix. Optional parameter for hierarchical listing.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;maxKeys
</td>
<td>
Max Keys - Maximum number of object keys to return in response. Default is 1000, maximum is 1000.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;objectKey
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;prefix
</td>
<td>
Prefix - Filter to list only objects whose keys begin with this prefix. Optional parameter.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>listBuckets</b> : Sequence to list all S3 buckets accessible with configured AWS credentials</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") listBuckets

Sequence to list all S3 buckets accessible with configured AWS credentials. Calls listBuckets transaction with required authentication parameters.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>listObjects</b> : Sequence to list objects in a specific S3 bucket</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") listObjects

Sequence to list objects in a specific S3 bucket. Calls listObjects transaction with optional filtering parameters (prefix, delimiter, maxKeys).

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bucketName
</td>
<td>
S3 Bucket Name - Name of the bucket to list objects from. Must be a valid existing bucket name.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;delimiter
</td>
<td>
Delimiter - Character used to group keys that share a common prefix. Optional parameter for hierarchical listing.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;maxKeys
</td>
<td>
Max Keys - Maximum number of object keys to return in response. Default is 1000, maximum is 1000.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;prefix
</td>
<td>
Prefix - Filter to list only objects whose keys begin with this prefix. Optional parameter.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>putObject</b> : Sequence to upload an object to S3 bucket</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") putObject

Sequence to upload an object to S3 bucket. Calls putObject transaction with bucket name, object key, MIME type and content to upload.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bucketName
</td>
<td>
S3 Bucket Name - Name of the bucket where the object will be uploaded. Must be a valid existing bucket name.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;contentType
</td>
<td>
Content Type - MIME type of the object being uploaded (e.g., text/plain, application/json, image/png). Default is application/octet-stream.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;fileContent
</td>
<td>
File Content - Uploaded file to send as the S3 object body. Convertigo stores the upload in a temporary file and passes its path to the sequence.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;objectKey
</td>
<td>
Object Key - The key (path) where the object will be stored in the S3 bucket. This will be the object's unique identifier.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>putTags</b> : Sequence to put tags for a an object in a specific S3 bucket</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") putTags

Sequence to put tags for a an object in a specific S3 bucket. Replace existing tags

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;bucketName
</td>
<td>
S3 Bucket Name - Name of the bucket to list objects from. Must be a valid existing bucket name.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;objectKey
</td>
<td>

</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;tags
</td>
<td>
Map containing the tag as key and the tag value as value. Example : {"tag1":"toto","tag2":"titi","tag3":"tutu"}
</td>
</tr>
</table>

</p></blockquote></details>

<details><summary><b>s3_regression_test</b> : Non-regression test sequence for lib_s3 S3 connector</summary><blockquote><p>


## ![](https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/sequences/images/genericsequence_color_16x16.png?raw=true "GenericSequence") s3_regression_test

Non-regression test sequence for lib_s3 S3 connector. Executes all 7 S3 operations with proper error handling using TryCatch.

<span style="color:DarkGoldenRod">Variables</span>

<table>
<tr>
<th>
name
</th>
<th>
comment
</th>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;accessKey
</td>
<td>
AWS Access Key ID for S3 test operations
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;endpoint
</td>
<td>
S3 API endpoint host for non-regression tests. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;region
</td>
<td>
AWS Region for S3 test operations
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;secretKey
</td>
<td>
AWS Secret Access Key for S3 test operations
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;sessionToken
</td>
<td>
AWS Session Token for S3 test operations (optional)
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;testBucketName
</td>
<td>
Unique test bucket name with timestamp
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;testContent
</td>
<td>
Content to upload for test
</td>
</tr>
<tr>
<td>
<img src="https://github.com/convertigo/convertigo/blob/develop/engine/src/com/twinsoft/convertigo/beans/variables/images/variable_color_16x16.png?raw=true "  alt="RequestableVariable" >&nbsp;testObjectKey
</td>
<td>
Unique test object key with timestamp
</td>
</tr>
</table>

</p></blockquote></details>
</p></blockquote></details>
