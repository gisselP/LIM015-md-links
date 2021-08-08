const path = require('path');
const fs= require('fs');
const marked = require('marked');

const userPath = process.argv[2];
const pathAbsolute = (paths) => path.isAbsolute(paths) ? paths : path.resolve(paths);

const existsPath = (paths) => fs.existsSync(paths);

const isDir = (paths) => fs.statSync(paths).isDirectory();

const isFile =(paths) => fs.statSync(paths).isFile();

const isFileMd =(paths)=> path.extname(paths);

const readFile = (paths)=>{
  const contentFile= fs.readFileSync(paths,'utf8',(err,data)=>{
    if(err){
      return 'error';
    }else{
      return data;
    }
  });
  if(contentFile=='error'){
    return 'no se pudo leer este archivo'
  }else{
    let allLinks=[];
    const renderer = new marked.Renderer();
        renderer.link = function(href, title, text) {
          allLinks.push({
            href: href,
            text: text,
            file: paths
          });
        };
        marked(contentFile, { renderer: renderer }); 
    const filteredLinks = allLinks.filter(url=>url.href.substring(0, 4) == 'http');
    return filteredLinks;
  }

}  

const readDirectory = (paths) =>{
  let allFileMd = [];
  const readContentDir = fs.readdirSync(paths);
  for(let key in readContentDir){
    const pathFile = path.join(paths, readContentDir[key]);
    if(isDir(pathFile)){
      allFileMd = allFileMd.concat(readDirectory(pathFile)); 
    }else if(isFileMd(pathFile)=='.md'){
      allFileMd.push(pathFile);
    }
  }
  return allFileMd;
}

const mdLinks = (paths) =>{
  let allLinks=[];
  if(isDir(paths)){
    const allFileMd = readDirectory(paths);
    for(let key in allFileMd){
      allLinks.push(readFile(allFileMd[key]));
    }

  }else if(isFile(paths)){
    if(isFileMd(paths) =='.md'){
      allLinks.push(readFile(paths));
    }else{
      console.log('no es un archivo md');
    }
  }
  console.log(allLinks)
}
mdLinks(userPath);



module.exports = {
  pathAbsolute,
  existsPath
};
