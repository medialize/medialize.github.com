
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

var targetBaseUrl = 'http://swisnl.github.io/jQuery-contextMenu/';
// find . -name '*.html' -type f | pbcopy
var files = [
  'demo/accesskeys.html',
  'demo/async-create.html',
  'demo/callback.html',
  'demo/custom-command.html',
  'demo/disabled-callback.html',
  'demo/disabled-changing.html',
  'demo/disabled-menu.html',
  'demo/disabled.html',
  'demo/dynamic-create.html',
  'demo/dynamic.html',
  'demo/html5-import.html',
  'demo/html5-polyfill-firefox8.html',
  'demo/html5-polyfill.html',
  'demo/input.html',
  'demo/keeping-contextmenu-open.html',
  'demo/menu-title.html',
  'demo/on-dom-element.html',
  'demo/sub-menus.html',
  'demo/trigger-custom.html',
  'demo/trigger-hover-autohide.html',
  'demo/trigger-hover.html',
  'demo/trigger-left-click.html',
  'demo/trigger-swipe.html',
  'demo.html',
  'docs.html',
  'index.html',
];

function generateHTML(targetUrl) {
  return [
    '<!DOCTYPE html>',
    '<meta charset=utf-8>',
    '<title>Redirecting...</title>',
    '<link rel=canonical href="' + targetUrl + '">',
    '<meta http-equiv=refresh content="0; url=' + targetUrl + '">',
    '<h1>Redirecting...</h1>',
    '<a href="' + targetUrl + '">Click here if you are not redirected.</a>',
    '<script>location="' + targetUrl + '"</script>',
  ].join('\n');
}

files.forEach(function(file) {
  var targetUrl = targetBaseUrl + file;
  var html = generateHTML(targetUrl);
  var targetFile = path.resolve(__dirname, '../jQuery-contextMenu/', file);
  var directory = path.dirname(targetFile);

  mkdirp.sync(directory);
  fs.writeFileSync(targetFile, html, {encoding: 'utf8'});
});

