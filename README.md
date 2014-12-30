appium-jenkins
===================

Tools and scripts used to manage Appium Jenkins CI server.

## Usage

Define the following env variables:

```
export JENKINS_USERNAME=<cloudbees username (email)>
export JENKINS_KEY=<your cloudbees api key>
export JENKINS_ROOT_URL=https://team-appium.ci.cloudbees.com
```

Run one of the following gulp task:

```
gulp clear-jenkins
gulp configure-jenkins
```

## Doing dev?

### Watch

```
npm run watch
```

### Test

```
npm test
```
