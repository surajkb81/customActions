const core = require('@actions/core');
const github = require('@actions/github');
const execs = require('@actions/exec');
function run(){{
    // deply to AWS s3
// 1. get some input values
// use core to get input
 core.notice("Hello from my custom Javascript Actions")
 const buckets = core.getInput("bucket", {required: true});
const bucketRegions = core.getInput("bucket-region", {required: false});
const distFolders = core.getInput("dist-folder", {required: true});


//2 upload files
AWS_ACCESS_KEY_ID ="84948jkrk983039303903"
const s3URL= 's3://${buckets}'
execs.exec('aws s3 sync ${distFolders} ${s3URL} --region ${bucketRegions}')

}}
run();