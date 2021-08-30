const path = require('path');
const fs= require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

/* const userPath=process.argv[2] */
const existsPath = (paths) => fs.existsSync(paths); //retorna booleano 
/* console.log(existsPath(userPath)) */
const pathAbsolute = (paths) => path.isAbsolute(paths) ? (paths) : path.resolve(paths) //retorna la ruta absoluta

const isFileMd = (paths)=> path.extname(paths); //retorna la extensión de la ruta

const isDir = (paths) => fs.statSync(paths).isDirectory(); //retorna booleano 

const isFile = (paths) => fs.statSync(paths).isFile(); //retorna booleano


const contentFile = (paths) => fs.readFileSync(paths,'utf-8');

// Obtiene los archivos md en un array
const getFilesMd = (paths) =>{
  let allFile = [];
  if(isFile(paths)){
      allFile.push(paths);
  }else if (isDir(paths)){
    const readContentDir = fs.readdirSync(paths); //arrays de archivos o carpetas que hay en el directorio
    for(const key in readContentDir){
      const pathFile = path.join(paths, readContentDir[key]); //Muestra las rutas de los carpetas y los archivos
      allFile = allFile.concat(getFilesMd(pathFile)); 
    }
  }
  const allFileMd = allFile.filter((paths) => isFileMd(paths) ==='.md');//Filtra las rutas para que solo sean md
  return allFileMd;
};


// Obtiene los links de los archivos md 
const getLinks = (paths)=>{
  let allLinks=[];
  const renderer = new marked.Renderer();
  getFilesMd(paths).map((file)=>{
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

const getValidLinks = (result) =>{
  return fetch(result.href)
  .then(res => {
    const statusText = (res.status == 200)? res.statusText :'FAIL';
    const objRes = {
      href: result.href,
      title: result.title,
      file: result.file,
      status: res.status,
      message: statusText
      }
    return objRes
  }).catch(rej => {
    const objRej ={
      href: result.href,
      title: result.title,
      file:result.file,
      status: rej.status,
      message: 'ERROR SERVER'
    }
    return objRej
  })
}


 
module.exports = {
  pathAbsolute,
  existsPath,
  getFilesMd,
  getLinks,
  getValidLinks
};
