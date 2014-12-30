curl -s -o use-node https://repository-cloudbees.forge.cloudbees.com/distributions/ci-addons/node/use-node
NODE_VERSION={{{nodeJsVersion}}} source ./use-node
npm install
npm test
