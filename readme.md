


# lib_s3

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

Usage: configure these project symbols before calling the public sequences:

| Symbol | Required | Default | Description |
| --- | --- | --- | --- |
| lib_s3.s3.endpoint | No | s3.amazonaws.com | S3 API endpoint host used by the HTTP connector and by Signature V4. Use another S3-compatible host when needed. |
| lib_s3.s3.accessKey | Yes | | S3 access key ID. |
| lib_s3.s3.secretKey.secret | Yes | | S3 secret access key. Store it as a secret symbol. |
| lib_s3.s3.region | Yes | | S3 signing region used for bucket and object requests. |
| lib_s3.s3.sessionToken.secret | No | | Session token for temporary credentials. Store it as a secret symbol when used. |

The AmazonS3 connector server property references lib_s3.s3.endpoint, and the same endpoint is used as the signed Host header. If the endpoint is not provided to the signing helper, it falls back to s3.amazonaws.com.

For putObject, provide fileContent as a file upload variable. Convertigo stores the upload as a temporary file and sends that file as the raw S3 PUT body.




For more technical informations : [documentation](./project.md)

- [Installation](#installation)
- [Sequences](#sequences)
    - [createBucket](#createbucket)
    - [deleteBucket](#deletebucket)
    - [deleteObject](#deleteobject)
    - [getObject](#getobject)
    - [listBuckets](#listbuckets)
    - [listObjects](#listobjects)
    - [putObject](#putobject)
    - [s3_regression_test](#s3_regression_test)


## Installation

1. In your Convertigo Studio click on ![](https://github.com/convertigo/convertigo/blob/develop/eclipse-plugin-studio/icons/studio/project_import.gif?raw=true "Import a project in treeview") to import a project in the treeview
2. In the import wizard

   ![](https://github.com/convertigo/convertigo/blob/develop/eclipse-plugin-studio/tomcat/webapps/convertigo/templates/ftl/project_import_wzd.png?raw=true "Import Project")
   
   paste the text below into the `Project remote URL` field:
   <table>
     <tr><td>Usage</td><td>Click the copy button at the end of the line</td></tr>
     <tr><td>To contribute</td><td>

     ```
     lib_s3=https://github.com/convertigo/c8oprj-lib-s3.git:branch=master
     ```
     </td></tr>
     <tr><td>To simply use</td><td>

     ```
     lib_s3=https://github.com/convertigo/c8oprj-lib-s3/archive/master.zip
     ```
     </td></tr>
    </table>
3. Click the `Finish` button. This will automatically import the __lib_s3__ project


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
<td>endpoint</td><td>S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.</td>
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
<td>endpoint</td><td>S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.</td>
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
<td>endpoint</td><td>S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.</td>
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
<td>endpoint</td><td>S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.</td>
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
<td>endpoint</td><td>S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.</td>
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
<td>endpoint</td><td>S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.</td>
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
<td>endpoint</td><td>S3 API endpoint host. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.</td>
</tr>
<tr>
<td>fileContent</td><td>File Content - Uploaded file to send as the S3 object body. Convertigo stores the upload in a temporary file and passes its path to the sequence.</td>
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
<td>endpoint</td><td>S3 API endpoint host for non-regression tests. Defaults to s3.amazonaws.com for Amazon S3; configure lib_s3.s3.endpoint for S3-compatible services.</td>
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
</table>



