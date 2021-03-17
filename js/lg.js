function Login(){
var done=0;
var password=document.login.password.value;
password=password.toLowerCase();
if (password=="220298") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*K*/
if (password=="2020062") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*RLS*/
if (password=="2020061") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*ZFL*/
if (password=="2020051") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*MOG*/
if (password=="2020033") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*KRS*/
if (password=="2020101") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*JRS*/
if (password=="2020111") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }/*ZO*/
if (password=="2020121") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*JVPR*/
if (password=="2021031") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*LGB*/
if (password=="2021032") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*ISA*/
if (password=="2021033") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*APG*/
if (password=="2021034") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }/*GRS*/
if (done==0) { alert("Senha ou Usuário inválido."); }
}

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