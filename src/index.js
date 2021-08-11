const path = require('path');
const fs= require('fs');
const marked = require('marked');

const userPath = process.argv[2];
const pathAbsolute = (paths) => path.isAbsolute(paths) ? paths : path.resolve(paths);

const existsPath = (paths) => fs.existsSync(paths);

const isDir = (paths) => fs.statSync(paths).isDirectory(paths);

const isFile =(paths) => fs.statSync(paths).isFile();

const isFileMd =(paths)=> path.extname(paths);

const readFile = (paths)=>{
  const contentFile= fs.readFileSync(paths,'utf8');
  if(contentFile=='error'){
    return 'no se pudo leer este archivo'
  }else{
    let allLinks=[];
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      allLinks.push({
        href: href,
        title: text,
        file: paths
      });
    };
    marked(contentFile, {renderer}); 
    const filteredLinks = allLinks.filter(url => url.href.slice(0, 4) == 'http');
    return filteredLinks;
  }
}  


const getFilesMd = (paths) =>{
  let allFile = [];
  if(isFile(paths)){
      allFile.push(paths);
  }else if (isDir(paths)){
    const readContentDir = fs.readdirSync(paths);
    for(const key in readContentDir){
      const pathFile = path.join(paths, readContentDir[key]); // Muestra las rutas de las carpetas 
      allFile = allFile.concat(getFilesMd(pathFile)); 
    }
  }
  const allFileMd = allFile.filter((paths) => isFileMd(paths));
  return allFileMd;
};

/* console.log(getFilesMd(userPath)); */
const getMdLinks = (paths) =>{
  let allLinks=[];
  const allFileMd = getFilesMd(paths);// trae la ruta de los archivos md
  for(const key in allFileMd){
    allLinks=allLinks.concat(readFile(allFileMd[key]));
  }
  return allLinks
  
}
console.log(getMdLinks(userPath));
/* console.log(getMdLinks(userPath)); */

/* const options = (paths)=>{
  if(getMdLinks(paths).length == 0){
    console.log('holi')
  }else if(getMdLinks(paths).length !== 0)[
    console.log('ta bien')
  ]
}
console.log(options(userPath)); */

module.exports = {
  pathAbsolute
};
