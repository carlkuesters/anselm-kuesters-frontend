const fs = require('fs');
const deploymentConfig = require('../config');

prepareFiles();

function prepareFiles() {
  console.log('\nPreparing files...');

  // TODO: The base href edit can be removed when the new website replaces the old one
  let indexHtmlPath = deploymentConfig.localDirectory + 'index.html';
  let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  indexHtml = indexHtml.replace('<base href="/"', '<base href="/new/"');
  fs.writeFileSync(indexHtmlPath, indexHtml);
  console.log('Replaced base href.');

  console.log('Prepared files.');
}
