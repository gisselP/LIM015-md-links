const path = require('path');
const fs= require('fs');

const userPath = process.argv[2];
const pathAbsolute = (paths) => path.isAbsolute(paths) ? paths : path.resolve(paths);

const existsPath = (paths) => fs.existsSync(paths);

const checkPath = (paths) =>{
  const statsObj =  fs.statSync(paths);
  const isDir = statsObj.isDirectory(paths);
  const isFile = statsObj.isFile(paths);
  if(isDir){
    console.log('es un directorio');
  }else if(isFile){
    const isFileMd = path.extname(paths);
    console.log('es un archivo')
    console.log(isFileMd);
  }
}
checkPath(userPath);



module.exports = {
  pathAbsolute,
  existsPath
};
