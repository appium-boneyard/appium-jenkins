// jshint unused:false
import Promise from 'bluebird';
import _fs from 'fs';
import path from 'path';
import Mustache from 'mustache';
import log from './log';

let fs = Promise.promisifyAll(_fs);

const GIT_URL_TEMPLATE = 'https://github.com/appium/{{{packageName}}}.git';
const NODE_JS_VERSION = '0.10.26';
const BUILD_NODE_LABEL = 'm1.small';

let getTemplate = async (relpath) => {
  return await fs.readFileAsync(path.resolve(
    __dirname, '../../templates', relpath), 'utf8');
};

let simpleJob = async (packageName) => {
  let shellCommandTemplate = await getTemplate('commands/dev-cloud-shell.sh');
  let simpleJobTemplate = await getTemplate('jobs/simple.xml');
  var ctx = {
    packageName: packageName,
    nodeJsVersion: NODE_JS_VERSION,
    buildNodeLabel: BUILD_NODE_LABEL
  };
  ctx.gitUrl = Mustache.render(GIT_URL_TEMPLATE, ctx);
  ctx.shellCommand = Mustache.render(shellCommandTemplate, ctx);
  log.silly('appium-support', ctx);
  return Mustache.render(simpleJobTemplate, ctx);
};

export default {simpleJob: simpleJob};

