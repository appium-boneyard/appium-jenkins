// transpile:mocha

import config from '../lib/config';
import log from '../lib/log';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mochawait';

chai.should();
chai.use(chaiAsPromised);

describe('config', function () {
  it('should-work',async () => {
    let xmlConfig = await config.simpleJob('new-appium-package');
    log.silly(xmlConfig);
    xmlConfig.should.not.match(/{{/);
    xmlConfig.should.include('new-appium-package');
    xmlConfig.should.include('https://github.com/appium/new-appium-package.git');
    xmlConfig.should.include('m1.small');
    xmlConfig.should.include('NODE_VERSION=0.10.26');
    xmlConfig.should.include('npm test');
  });
});

