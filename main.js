function submit() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email != "") {
    localStorage.setItem("user", email);

    window.location.replace("./screens/navigationScreen.html");
  } else {
    document.getElementById("menssage").innerHTML =
      "Insira as credenciais corretamente.";
  }
}
