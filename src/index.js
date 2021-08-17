const path = require('path');
const fs= require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

const userPath = process.argv[2];
const pathAbsolute = (paths) => path.isAbsolute(paths) ? paths : path.resolve(paths);

const existsPath = (paths) => fs.existsSync(paths);

const isDir = (paths) => fs.statSync(paths).isDirectory(paths);

const isFile = (paths) => fs.statSync(paths).isFile();

const isFileMd = (paths)=> path.extname(paths);

const contentFile = (paths) => fs.readFileSync(paths,'utf-8');

// Obtener los archivos md 
const getFilesMd = (paths) =>{
  let allFile = [];
  if(isFile(paths)){
      allFile.push(paths);
  }else if (isDir(paths)){
    const readContentDir = fs.readdirSync(paths);
    for(const key in readContentDir){
      const pathFile = path.join(paths, readContentDir[key]); //Muestra las rutas de las carpetas 
     
      allFile = allFile.concat(getFilesMd(pathFile)); 
    }
  }
  const allFileMd = allFile.filter((paths) => isFileMd(paths) ==='.md');
  return allFileMd;
};
/* console.log(getFilesMd(userPath)) */

// Obtener los links de los archivos md 

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

/*  console.log(getLinks(userPath),56) */

const getValidLinks = (paths)=>{
  if(getLinks(paths).length==0){
    /* console.log('no hay links :c',60)
    console.log(getFilesMd(paths)) */
  }else{
    getLinks(paths).forEach((url)=>{
      fetch(url.href)
      .then(res => {
        const statusText = (res.status == 200)? res.statusText :'FAIL';
        const objRes = {
          href: url.href,
          title: url.title,
          file: url.file,
          status: res.status,
          message: statusText
          }
        console.log(objRes)
        return objRes
      }).catch(rej => {
        const objRej ={
          href: url.href,
          title: url.title,
          file: url.file,
          status: res.status
        }
        console.log(objRej) 
        return objRej
      })
    })
  }
} 

getValidLinks(userPath);

   
module.exports = {
  pathAbsolute,
  existsPath,
  getFilesMd,
  getLinks,
  getValidLinks
};
