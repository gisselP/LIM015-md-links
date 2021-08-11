const {pathAbsolute} = require('./index.js');
const mdLinks = (path,option={validate:false}) => new Promise((res,rej)=>{
    if(pathAbsolute(path)){
         /* pathAbsolute(path);  */
        res(pathAbsolute(path));
    }
}) 
/* function mdLinks(path){console.log(path)}; */
module.exports={
    mdLinks
}