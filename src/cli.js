#!/usr/bin/env node 
const {mdlinks} = require('./mdLinks.js');
const { statsLinks, brokenLinks,anotherThing} = require('./stats.js');
const argv = process.argv.slice(2);

const userPath=process.argv[2]

const validate =argv.includes("--validate");
const stats =argv.includes("--stats");

if(argv.length===1){
    mdlinks(userPath, {validate:false})
    .then(res=> console.log(res))
}else{
    if(validate && stats){
        mdlinks(userPath, {validate:true})
        .then(res =>{
            console.log(statsLinks(res))
            console.log(brokenLinks(res))})
        .catch(rej=>console.log(rej))
    }else if (validate){
        mdlinks(userPath, {validate:true})
        .then(res => console.log(res))
        .catch(rej=>console.log(rej))
    }else if(stats){
        mdlinks(userPath, {validate:true})
        .then(res => console.log(statsLinks(res)))
        .catch(rej=>console.log(rej))
    }else{
        mdlinks(userPath, {validate:true})
        .then( console.log(anotherThing))
        .catch(rej=>console.log(rej))
    }
}

/* console.log(argv) */                