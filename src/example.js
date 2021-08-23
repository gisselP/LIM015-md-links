const {mdLinks} = require('./mdLinks.js');
const path = process.argv[2];
mdLinks(path,{validate:true})
.then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})