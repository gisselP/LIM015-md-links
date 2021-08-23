const api = require ('./api.js');
const mdLinks = (path, option = {validate:false}) => new Promise ((res,rej) =>{

    const filesMd = api.searchFileMd(path);

    const allLinks = api.mdFileLinks(filesMd);

    const linksValidados = api.validateLinks(allLinks);

if (api.validatePath(path)){
    if(option.validate){
    res(Promise.all(linksValidados));
    }else if(option.validate===false){
        res(allLinks);
    }else{
        rej("error")
    }
}else if(api.validatePath(path)===false){
    rej("no existe la ruta")
}
})

module.exports = {
mdLinks
}