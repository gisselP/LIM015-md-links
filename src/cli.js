#!/usr/bin/env node 
const {mdlinks} = require('./mdLinks.js');
const { statsLinks, brokenLinks,helpMsg,errorPath,noExists} = require('./cli-methods.js');
const chalk = require('chalk');

const option = process.argv.slice(2);

const userPath=process.argv[2]

const validate = option.includes("--validate");
const stats = option.includes("--stats");

if(option.length===1){
    mdlinks(userPath, {validate:false})
    .then(res=> console.log(res))
    .catch((rej)=>{
        if(rej==='noExist'){
            console.log(chalk.redBright(noExists));
        }else{
            console.log(chalk.greenBright(errorPath));
        }
    })
}else{
    if(validate && stats){
        mdlinks(userPath, {validate:true})
        .then(res =>{
            console.table(chalk.greenBright(statsLinks(res)))
            console.table(chalk.red(brokenLinks(res)))})
        .catch(()=>console.log(chalk.greenBright(errorPath)))
    }else if (validate){
        mdlinks(userPath, {validate:true})
        .then(res => console.log(res))
        .catch(()=>console.log(chalk.greenBright(errorPath)))
    }else if(stats){
        mdlinks(userPath, {validate:true})
        .then(res => console.table(chalk.greenBright(statsLinks(res))))
        .catch(()=>console.log(chalk.greenBright(errorPath)))
    }else{
       mdlinks(userPath, {validate:true})
        .then( console.log(chalk.cyanBright(helpMsg)))
        .catch(()=>console.log(chalk.greenBright(errorPath)))
    }
}

/* console.log(argv) */                