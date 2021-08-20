#!/usr/bin/env node 
const {mdlinks} = require('./mdLinks.js');
mdlinks("C:\\Users\\PC\\Documents\\GitHub\\LIM015-md-links\\prueba\\README1.md",{validate:true})
.then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})