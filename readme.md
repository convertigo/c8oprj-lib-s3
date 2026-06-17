


# lib_s3

Convertigo library for Amazon S3 bucket operations. Provides HTTP connector and sequences for S3 API access including: list buckets, list objects, upload (put), download (get), delete objects, create bucket, and delete bucket operations. Configure AWS credentials (accessKey, secretKey, region, sessionToken) in each sequence before use.


For more technical informations : [documentation](./project.md)

- [Sequences](#sequences)
    - [createBucket](#createbucket)
    - [deleteBucket](#deletebucket)
    - [deleteObject](#deleteobject)
    - [getObject](#getobject)
    - [listBuckets](#listbuckets)
    - [listObjects](#listobjects)
    - [putObject](#putobject)
    - [s3_regression_test](#s3_regression_test)


## Sequences

### createBucket

Sequence to create a new S3 bucket. Calls createBucket transaction with bucket name and optional region parameter.

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>accessKey</td><td>AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.</td>
</tr>
<tr>
<td>bucketName</td><td>S3 Bucket Name - Name for the new bucket to be created. Must be globally unique across all AWS accounts and follow S3 naming conventions.</td>
</tr>
<tr>
<td>bucketRegion</td><td>Bucket Region - Geographic region where the new bucket will be created. If empty, uses the connector's default region.</td>
</tr>
<tr>
<td>region</td><td>AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.</td>
</tr>
<tr>
<td>secretKey</td><td>AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.</td>
</tr>
<tr>
<td>sessionToken</td><td>AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.</td>
</tr>
</table>

### deleteBucket

Sequence to delete an S3 bucket. Calls deleteBucket transaction with bucket name to delete. Bucket must be empty to be successfully deleted.

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>accessKey</td><td>AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.</td>
</tr>
<tr>
<td>bucketName</td><td>S3 Bucket Name - Name of the bucket to delete. Must be a valid existing bucket name and must be empty to be deleted.</td>
</tr>
<tr>
<td>region</td><td>AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.</td>
</tr>
<tr>
<td>secretKey</td><td>AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.</td>
</tr>
<tr>
<td>sessionToken</td><td>AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.</td>
</tr>
</table>

### deleteObject

Sequence to delete an object from S3 bucket. Calls deleteObject transaction with bucket name and object key to delete.

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>accessKey</td><td>AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.</td>
</tr>
<tr>
<td>bucketName</td><td>S3 Bucket Name - Name of the bucket containing the object to delete. Must be a valid existing bucket name.</td>
</tr>
<tr>
<td>objectKey</td><td>Object Key - The key (path) of the object to delete from the S3 bucket. Must be a valid existing object key.</td>
</tr>
<tr>
<td>region</td><td>AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.</td>
</tr>
<tr>
<td>secretKey</td><td>AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.</td>
</tr>
<tr>
<td>sessionToken</td><td>AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.</td>
</tr>
</table>

### getObject

Sequence to download an object from S3 bucket. Calls getObject transaction with bucket name and object key to retrieve.

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>accessKey</td><td>AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.</td>
</tr>
<tr>
<td>bucketName</td><td>S3 Bucket Name - Name of the bucket containing the object to download. Must be a valid existing bucket name.</td>
</tr>
<tr>
<td>objectKey</td><td>Object Key - The key (path) of the object to download from the S3 bucket. Must be a valid existing object key.</td>
</tr>
<tr>
<td>region</td><td>AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.</td>
</tr>
<tr>
<td>secretKey</td><td>AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.</td>
</tr>
<tr>
<td>sessionToken</td><td>AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.</td>
</tr>
</table>

### listBuckets

Sequence to list all S3 buckets accessible with configured AWS credentials. Calls listBuckets transaction with required authentication parameters.

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>accessKey</td><td>AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.</td>
</tr>
<tr>
<td>region</td><td>AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.</td>
</tr>
<tr>
<td>secretKey</td><td>AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.</td>
</tr>
<tr>
<td>sessionToken</td><td>AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.</td>
</tr>
</table>

### listObjects

Sequence to list objects in a specific S3 bucket. Calls listObjects transaction with optional filtering parameters (prefix, delimiter, maxKeys).

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>accessKey</td><td>AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.</td>
</tr>
<tr>
<td>bucketName</td><td>S3 Bucket Name - Name of the bucket to list objects from. Must be a valid existing bucket name.</td>
</tr>
<tr>
<td>delimiter</td><td>Delimiter - Character used to group keys that share a common prefix. Optional parameter for hierarchical listing.</td>
</tr>
<tr>
<td>maxKeys</td><td>Max Keys - Maximum number of object keys to return in response. Default is 1000, maximum is 1000.</td>
</tr>
<tr>
<td>prefix</td><td>Prefix - Filter to list only objects whose keys begin with this prefix. Optional parameter.</td>
</tr>
<tr>
<td>region</td><td>AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.</td>
</tr>
<tr>
<td>secretKey</td><td>AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.</td>
</tr>
<tr>
<td>sessionToken</td><td>AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.</td>
</tr>
</table>

### putObject

Sequence to upload an object to S3 bucket. Calls putObject transaction with bucket name, object key, MIME type and content to upload.

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>accessKey</td><td>AWS Access Key ID - Unique identifier to authenticate requests to Amazon S3. Replace with your actual AWS Access Key ID.</td>
</tr>
<tr>
<td>bucketName</td><td>S3 Bucket Name - Name of the bucket where the object will be uploaded. Must be a valid existing bucket name.</td>
</tr>
<tr>
<td>contentType</td><td>Content Type - MIME type of the object being uploaded (e.g., text/plain, application/json, image/png). Default is application/octet-stream.</td>
</tr>
<tr>
<td>fileContent</td><td>File Content - The actual content to upload to S3. Can be text, binary data, or base64 encoded content depending on the object type.</td>
</tr>
<tr>
<td>objectKey</td><td>Object Key - The key (path) where the object will be stored in the S3 bucket. This will be the object's unique identifier.</td>
</tr>
<tr>
<td>region</td><td>AWS Region - Geographic region for S3 service (e.g., us-east-1, eu-west-1, ap-southeast-1). Default is us-east-1.</td>
</tr>
<tr>
<td>secretKey</td><td>AWS Secret Access Key - Secret key used in conjunction with Access Key ID to sign requests. Replace with your actual AWS Secret Access Key.</td>
</tr>
<tr>
<td>sessionToken</td><td>AWS Session Token - Temporary security token for AWS STS credentials. Optional for standard AWS credentials, required for temporary security credentials.</td>
</tr>
</table>

### s3_regression_test

Non-regression test sequence for lib_s3 S3 connector. Executes all 7 S3 operations with proper error handling using TryCatch.

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>accessKey</td><td>AWS Access Key ID for S3 test operations</td>
</tr>
<tr>
<td>finalMessage</td><td>Final test result message</td>
</tr>
<tr>
<td>overallSuccess</td><td>Overall test success flag</td>
</tr>
<tr>
<td>region</td><td>AWS Region for S3 test operations</td>
</tr>
<tr>
<td>secretKey</td><td>AWS Secret Access Key for S3 test operations</td>
</tr>
<tr>
<td>sessionToken</td><td>AWS Session Token for S3 test operations (optional)</td>
</tr>
<tr>
<td>testBucketName</td><td>Unique test bucket name with timestamp</td>
</tr>
<tr>
<td>testContent</td><td>Content to upload for test</td>
</tr>
<tr>
<td>testObjectKey</td><td>Unique test object key with timestamp</td>
</tr>
<tr>
<td>testResults</td><td>JSON object storing all test results with status for each operation test</td>
</tr>
<tr>
<td>testsFailed</td><td>Count of failed tests</td>
</tr>
<tr>
<td>testsPassed</td><td>Count of passed tests</td>
</tr>
<tr>
<td>testTimestamp</td><td>Timestamp for test execution</td>
</tr>
</table>



