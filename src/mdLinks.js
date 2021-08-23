const index = require('./index.js');

const mdlinks = (path,option={validate:false}) => new Promise((res,rej)=>{
    const pathValid = index.pathAbsolute(path);
    if(index.existsPath(pathValid)){
        const getLinks = index.getLinks(pathValid);
        if(option.validate===true){
            if(getLinks.length===0) res('No hay links :c')
            
            const validLinks = getLinks.map(obj => index.getValidLinks(obj));
            res(Promise.all(validLinks));

        }else if(option.validate ===false){
            if(getLinks.length===0) res('No hay links :c')
            res(index.getLinks(pathValid));
        }
    }else{
        rej('No existe la ruta :c');
  }
}) 

module.exports={
    mdlinks
}