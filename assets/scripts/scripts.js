function scrollPara(id) {
   $('html, body').animate({
      scrollTop: $(id).offset().top - 75
   }, 800, function () {
      window.location.hash = id;
   });
}

function maskInput() {
   const tel = document.getElementById('cellnumber')

   tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) 
   tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) 
   
   const mascaraTelefone = (valor) => {
      valor = valor.replace(/\D/g, "")
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
      valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
      tel.value = valor // Insere o(s) valor(es) no campo
   }
}

$(function () {
   maskInput();
   $("#irParaTopo").on("click", function () {
      scrollPara("main");
   });
   $("#irParaForWhat").on("click", function () {
      scrollPara("#for-what");
   });
   $("#irParaUsage").on("click", function () {
      scrollPara("#usage-example");
   });
   $("#irParaHelloWorld").on("click", function () {
      scrollPara("#example-hello");
   });
   $("#irParaVariables").on("click", function () {
      scrollPara("#example-variables");
   });
   $("#irParaOperations").on("click", function () {
      scrollPara("#example-operations");
   });
   $("#irParaScreenshots").on("click", function () {
      scrollPara("#screenshots");
   });
   $("#irParaContact").on("click", function () {
      scrollPara("#contact");
   });
   $("#irParaReferences").on("click", function () {
      scrollPara("#references");
   });

   const body = document.querySelector("body");
   const header = document.querySelector("header#header-principal");
   const nav = document.querySelector("nav#nav-principal");
   const footer = document.querySelector("footer");
   const logo = document.querySelector("img#logo");
   const subtitle = document.querySelector("p#subtitles");

   $("#defaultTheme").on("click", function() {
      body.style.backgroundColor = "#fff";
      body.style.color = "#000";
      logo.src = "./assets/images/pyton-logo-complete.svg";
      header.className = "bg-dark";
      footer.className = "bg-dark";
      nav.className = "navbar navbar-expand-lg navbar-dark bg-dark cor";
      subtitle.className = "lead text-muted";
      $(".card-body").css("background", "#FFF");
   })


   $("#highContrastTheme").on("click", function() {
      body.style.backgroundColor = "#000";
      body.style.color = "#FFF";
      logo.src = "./assets/images/python-logo-white-complete.png";
      header.className = "bg-dark";
      footer.className = "bg-light";
      footer.style.color= "#000"
      nav.className = "navbar navbar-expand-lg navbar-light bg-light cor";
      subtitle.className = "lead text-muted subtitle";
      $(".card-body").css("background", "#000");
   })

   $("#randomTheme").on("click", function() {
      const backgroundColor =  '#'+Math.random().toString(16).substr(-6);
      body.style.backgroundColor = backgroundColor
      body.style.color = '#'+Math.random().toString(16).substr(-6);
      logo.src = "./assets/images/pyton-logo-complete.svg";
      subtitle.className = "lead text-muted";
      $(".card-body").css("background", backgroundColor);
   })
});





