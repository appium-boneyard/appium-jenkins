/*
 * Promisified version of jenkins package
 */

import Promise from 'bluebird';
import _Jenkins from 'jenkins';

let promisify = Promise.promisify;

class Jenkins {
  constructor (url) {
    this._jenkins = new _Jenkins(url);
  }

  info() {
    return promisify(this._jenkins.info, this._jenkins)(); }

  listJobs() {
    return promisify(this._jenkins.job.list, this._jenkins.job)(); }

  buildJob(jobName) {
    return promisify(this._jenkins.job.build, this._jenkins.job)(jobName); }

  createJob(jobName, xmlConfig) {
    return promisify(this._jenkins.job.create, this._jenkins.job)(jobName, xmlConfig); }

  destroyJob(jobName) {
    return promisify(this._jenkins.job.destroy, this._jenkins.job)(jobName); }

  getJobConfig(jobName) {
    return promisify(this._jenkins.job.config, this._jenkins.job)(jobName); }


}

export default Jenkins;
