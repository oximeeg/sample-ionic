'use strict';

const fs = require('fs');
const path = require('path');

function fileExists(path) {
  try {
    return fs.statSync(path).isFile();
  } catch (e) {
    return false;
  }
}

function readFile(path) {
  return fs.readFileSync(path, 'utf-8');
}

function applicationId() {
  const filePath = path.join('config.xml');
  if (!fileExists(filePath)) {
    return;
  }

  const file = readFile(filePath);
  const match = file.match(/id="([^"]+)"/);
  if (!match) {
    return;
  }

  return match[1];
}

module.exports = function (context) {
  const appId = applicationId();
  if (!appId) {
    return;
  }

  const filePath = path.join(
    'platforms',
    'android',
    'app',
    'src',
    'main',
    'java',
    'nl',
    'xservices',
    'plugins',
    'SocialSharing.java'
  );
  if (!fileExists(filePath)) {
    return;
  }

  var file = readFile(filePath);
  file = file.replace(
    /import .+.MainActivity;/,
    `import ${appId}.MainActivity;`
  );
  fs.writeFileSync(filePath, file);
};
