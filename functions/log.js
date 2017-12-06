const fs = require("fs");
const path = require("path");

exports.createFile = () => {
    fs.writeFile("./sorteo.txt","Lista de Amigo secreto 2017 \n\n","utf-8", err => {
        if(err){
            console.log(err);
        } else {
            console.log("Documento lista creado!");
        }
    })
}

exports.createFileSms = () => {
    fs.writeFile("./sms.txt","SMS enviados Amigo secreto 2017 \n\n","utf-8", err => {
        if(err){
            console.log(err);
        } else {
            console.log("Documento sms creado!");
        }
    })
}

exports.createFileMail = () => {
    fs.writeFile("./mails.txt","Emails enviados Amigo secreto 2017 \n\n","utf-8", err => {
        if(err){
            console.log(err);
        } else {
            console.log("Documento mail creado!");
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

exports.appendSms = line => {
    fs.appendFile("./sms.txt",line + "\n",err => {
        if(err){
            console.log(err);
        } else {
            console.log(line)
        }
    })
}
exports.appendMail = line => {
    fs.appendFile("./mails.txt",line + "\n",err => {
        if(err){
            console.log(err);
        } else {
            console.log(line)
        }
    })
}