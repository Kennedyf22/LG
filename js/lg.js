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
if (done==0) { alert("Senha ou Usuário inválido."); }
}