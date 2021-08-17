const {mdlinks} = require('./mdLinks.js');
mdlinks("C:\Users\PC\Documents\GitHub\LIM015-md-links\README.md",{validate:false})
.then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})