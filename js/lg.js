function Login(){
var done=0;
var password=document.login.password.value;
password=password.toLowerCase();
if (password=="220298") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }
if (password=="2020062") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }
if (password=="2020061") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }
if (password=="2020051") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }
if (password=="2020033") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }
if (password=="2020101") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }
if (password=="2020111") { window.location="https://kennedyf22.github.io/LG/warstop.html"; done=1; }
if (password=="2020121") { window.location="https://kennedyf22.github.io/LG/LG.html"; done=1; }
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