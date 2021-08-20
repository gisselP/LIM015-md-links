const index = require('./index.js');

const mdlinks = (path,option={validate:false}) => new Promise((res,rej)=>{
    const pathValid = index.pathAbsolute(path);
    if(index.existsPath(pathValid)){
        if(option.validate===true){
            const getLinks = index.getLinks(pathValid);
            const validLinks = getLinks.map(obj => index.getValidLinks(obj));
            res(Promise.all(validLinks));
        }else if(option.validate ===false){
            res(index.getLinks(pathValid));
        }else{
            rej('error del segundo parámetro');
        }
    }else{
        rej('no existe la ruta :c');
    }
}) 

module.exports={
    mdlinks
}