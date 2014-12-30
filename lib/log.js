import npmlog from 'npmlog';

let log = {};

for (let level in npmlog.levels) {
  log[level] = npmlog[level].bind(npmlog, 'appium-support');
}

export default log;
