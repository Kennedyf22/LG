function Login(){
var done=0;
var password=document.login.password.value;
var matricula=document.login.matricula.value;
password=password.toLowerCase();
matricula=matricula.toLowerCase();
if (password=="admin"&matricula=="220298") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*K*/
if (password=="04102004"&matricula=="2020062") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*RLS*/
if (password=="24062003"&matricula=="2020034") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*JSC*/
if (password=="05021978"&matricula=="2020061") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*ZFL*/
if (password=="19041996"&matricula=="2020051") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*MOG*/
if (password=="25072002"&matricula=="2020033") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*KRS*/
if (password=="15111978"&matricula=="2020101") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*JRS*/
if (password=="15111975"&matricula=="2020111") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*ZO*/
if (password=="04122003"&matricula=="2020121") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*JVPR*/
if (password=="12031991"&matricula=="2021031") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*LGB*/
if (password=="28032006"&matricula=="2021032") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*ISA*/
if (password=="30121985"&matricula=="2021033") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*APG*/
if (password=="19042001"&matricula=="2021034") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*GRS*/
if (password=="14032007"&matricula=="2021111") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*DKRS*/
if (password=="24092007"&matricula=="2022011") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*IGDS*/
if (done==0) { alert("Senha ou Usuário inválido."); }
}

function Login(){
alert("Olá! Não se esqueça de preencher a lista de presença sempre que for assistir uma nova aula!");
}

/*Tempo de inatividade*/
function noBack(){window.history.forward()
}
noBack();
window.onload=noBack;
window.onpageshow=function(evt){if(evt.persisted)noBack()
}
window.onunload=function(){void(0)
}
setTimeout(function() {
    alert("Logout por inatividade");
    window.location.href = "login.html";
}, 1800000);
