const fs= require('fs');
fs.readFile('package-json','utf-8',(error,data)=>{
    if(error){
        throw error
    }
    console.log(data);
});
console.log('el contenido está abierto')