const amigoSecreto = require("./functions/amigoSecreto");
const amigos = require("./list/amigos");
const { createFile,append } = require("./functions/log");
const request = require('request');
const message = require("./functions/message");


var sorteo = amigoSecreto(amigos);


//createFile();
//frindsSecrets(-1,sorteo.length -1);
test("+56933235719");

function frindsSecrets(i,arr){
    if(i < arr){
        setTimeout(function(){
            i++;
            console.log(sorteo[i]);
            append(`${sorteo[i].src} => ${sorteo[i].dst}`);
            //sms(sorteo[i].num,sorteo[i].src,sorteo[i].dst);
            test(sorteo[i].num);
            frindsSecrets(i,arr);
        }, 1000);
    }
};

function sms(p,n,f){
    request.post('https://textbelt.com/text', {
        form: {
            phone: p,
            message: "mensaje de pruebas || " + message(n,f),
            key: '  ',
        },
        }, function(err, httpResponse, body) {
        if (err) {
            console.error('Error:', err);
            return;
        }
        console.log(JSON.parse(body), "sms enviado al numero => ",p);
        }
    );
}

function test(p){
    request.post('https://textbelt.com/text', {
        form: {
            phone: p,
            message: "mensaje de pruebas para el amigo secreto, favor notificar al grupo que el sms llego correctamente, gracias. ",
            key: '5fe7344ef89d17ce7fa0a0434695080cf70e17b7sLVbrzb6HhPt5WOfFKJvVh18m',
        },
        }, function(err, httpResponse, body) {
        if (err) {
            console.error('Error:', err);
            return;
        }
        console.log(JSON.parse(body), "sms enviado al numero => ",p);
        }
    );
}