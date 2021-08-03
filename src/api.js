const path = require('path');
const userPath = process.argv[2];
const pathAbsolute = (userPath) => path.isAbsolute(userPath) ? userPath : path.resolve(userPath);

/* if(path.isAbsolute(userPath)){
    console.log(true);
    console.log(userPath);
}else{
    console.log(false);
    console.log(path.resolve(userPath));
} 
const pathAbsolute = path.isAbsolute(process.argv[2]) ; */

/* pathAbsolute(userPath); */

function prueba() {
    let prueba2 = pathAbsolute(userPath);
    console.log(prueba2)
}

prueba();