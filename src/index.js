const path = require('path');
const fs= require('fs');
const marked = require('marked');

const userPath = process.argv[2];
const pathAbsolute = (paths) => path.isAbsolute(paths) ? paths : path.resolve(paths);

const existsPath = (paths) => fs.existsSync(paths);

const isDir = (paths) => fs.statSync(paths).isDirectory(paths);

const isFile = (paths) => fs.statSync(paths).isFile();

const isFileMd = (paths)=> path.extname(paths);

const contentFile = (paths) => fs.readFileSync(paths,'utf-8');

const getFilesMd = (paths) =>{
  let allFile = [];
  if(isFile(paths)){
      allFile.push(paths);
  }else if (isDir(paths)){
    const readContentDir = fs.readdirSync(paths);
    for(const key in readContentDir){
      const pathFile = path.join(paths, readContentDir[key]);//Muestra las rutas de las carpetas 
      allFile = allFile.concat(getFilesMd(pathFile)); 
    }
  }
  const allFileMd = allFile.filter((paths) => isFileMd(paths));
  return allFileMd;
};

const getLinks = (paths)=>{
  let allLinks=[];
  const renderer = new marked.Renderer();
  getFilesMd(paths).forEach((file)=>{
    renderer.link = (href, title, text) => {
      allLinks.push({
        href: href,
        title: text,
        file: paths
      });
    };
    marked(contentFile(file), {renderer}); 
  });
  const filteredLinks = allLinks.filter(url => url.href.slice(0, 4) == 'http'); 
  return filteredLinks;
}  

/* console.log(getLinks(userPath)) */

const getFileLinks = (paths)=>{
  if(getLinks(paths)==[]){
    /* console.log('ta vacio') */
  }else{
    /* console.log('ta lleno') */
  }
}  

/* getFileLinks(userPath); */


module.exports = {
  pathAbsolute
};
