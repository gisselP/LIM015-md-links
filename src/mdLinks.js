const index = require('./index.js');
const mdlinks = (path,option ) => new Promise((res,rej)=>{
    const pathValid = index.pathAbsolute(path);
    if(index.existsPath(pathValid)){
        const getLinks = index.getLinks(pathValid);
        if(getLinks.length===0){
           rej('error')
        }else {
            if(option.validate===true){
                const validLinks = getLinks.map(obj => index.getValidLinks(obj));
                res(Promise.all(validLinks));        
            }else {
                res(index.getLinks(pathValid));
            }
        }
    }else {
        rej ('noExist');
  }
}) 

module.exports={
    mdlinks
}
