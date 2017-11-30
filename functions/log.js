const fs = require("fs");
const path = require("path");

exports.createFile = () => {
    fs.writeFile("./sorteo.txt","Lista de Amigo secreto 2017 \n\n","utf-8", err => {
        if(err){
            console.log(err);
        } else {
            console.log("Documento creado!");
        }
    })
}

exports.append = line => {
    fs.appendFile("./sorteo.txt",line + "\n",err => {
        if(err){
            console.log(err);
        } else {
            console.log(line)
        }
    })
}