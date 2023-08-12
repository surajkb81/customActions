const core = require('@actions/core');
const github = require('@actions/github');
const execs = require('@actions/exec');
function run(){{
//print("hello");
core.notice("Hello from my custom Javascript Actions")
}}
run();