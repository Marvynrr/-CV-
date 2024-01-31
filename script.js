let button = document.getElementById("buttonMail")

button.addEventListener('click', function(){
    navigator.clipboard.writeText("marvynpro@hotmail.com");
    button.innerText = "Copié !";
  });