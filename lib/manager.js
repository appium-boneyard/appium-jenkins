import Jenkins from './jenkins';
import log from './log';
import config from './config';

let username = process.env.JENKINS_USERNAME;
let password = process.env.JENKINS_KEY;
let baseUrl = process.env.JENKINS_ROOT_URL;


if(!username || !password || !baseUrl) {
  throw new Error('The following env variables need to be defined: JENKINS_USERNAME, JENKINS_KEY, JENKINS_ROOT_URL');
}

let url = baseUrl.replace('://', '://' + encodeURIComponent(username) + ':' + password + '@');

let destroyAllJobs = async () => {
  let jenkins = new Jenkins(url);
  let jobList = await jenkins.listJobs();
  for(let job of jobList) {
    log.info('Deleting job ', job.name);
    await jenkins.destroyJob(job.name);
  }
};

let clearJenkins = async () => {
  await destroyAllJobs();
};

let configureJenkins = async () => {
  let jenkins = new Jenkins(url);
  await jenkins.createJob('appium-support', await config.simpleJob('appium-support'));
};

export default {
  clearJenkins: clearJenkins,
  configureJenkins: configureJenkins
};
