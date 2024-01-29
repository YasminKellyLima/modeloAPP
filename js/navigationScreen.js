login = localStorage.getItem("user");

user = login.toUpperCase();
document.getElementById("welcome").innerHTML="Olá "+user+" !";

function geracao(){
    window.location.replace("navScreen.html");
}