const fs = require('fs-extra');
const path = require('path');

const whiteList = [
  'theme-chalk'
]

function isDir(dir) {
    return fs.lstatSync(dir).isDirectory();
}

function transformStr3(str) {
    var re = /-(\w)/g;
    return str.replace(re, function ($0, $1) {
      return $1.toUpperCase();
    });
}

const json = {};
const dir = path.join(__dirname, '../packages');
const files = fs.readdirSync(dir);
files.forEach(file => {
  const absolutePath = path.join(dir, file);
  if (isDir(absolutePath) && !whiteList.includes(file)) {
    let fileKey = transformStr3(file.replace('orange_', ''))
    json[fileKey] = `./packages/${file}/index.js`;
  }
});

fs.writeFileSync(path.resolve(path.join(__dirname, './components.json')), JSON.stringify(json))

module.exports = { json }

// console.log(JSON.stringify(json));