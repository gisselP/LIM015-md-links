const {index,pathAbsolute} = require('./index.js');

const mdlinks = (path,option={validate:false}) => new Promise((res,rej)=>{
    const pathValid = pathAbsolute(path);
    console.log(pathValid)
    if(index.existsPath(pathValid)){
        const allFilesMd = index.getFilesMd(path);
        if(option.validate){
            const statusLinks = index.getValidLinks(allFilesMd);
            if(statusLinks=="notlinks"){
                rej('no hay links :c')
            }else{
                res(statusLinks)
            }
        }else if(option.validate ===false){
            res(index.getLinks(allFilesMd));
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