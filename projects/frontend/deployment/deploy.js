const deploymentConfig = require('./config');

const fs = require('fs');
const SftpClient = require('ssh2-sftp-client');
const editFile = require('edit-file');

let sftpClient = new SftpClient();

console.log('\nPreparing files...');
// TODO: The base href edit can be removed when the new website replaces the old one
editFile(deploymentConfig.localDirectory + 'index.html', (text) => {
  return text.replace('<base href="/"', '<base href="/new/"');
}, () => {
  console.log('Prepared files.');

  sftpClient.connect(deploymentConfig.serverCredentials).then(() => {
    deployFiles();
    console.log('\nDeployed sucessfully.');
    process.exit();
  }).catch((error) => {
    throw error;
  });
});

function deployFiles() {
  console.log('\nUploading files:');
  let files = getAllFiles(deploymentConfig.localDirectory);
  files.forEach((filePath) => {
    let relativeFilePath = filePath.substring(deploymentConfig.localDirectory.length);
    console.log(relativeFilePath);
    sftpClient.put(deploymentConfig.remoteDirectory + relativeFilePath);
  });
}

function getAllFiles(directoryPath, files = []) {
  let directoryFiles = fs.readdirSync(directoryPath);
  directoryFiles.forEach((fileName) => {
    let filePath = directoryPath + fileName;
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath + '/', files);
    }
    else {
      files.push(filePath);
    }
  });
  return files;
}
