  //Clique no button
  var NButtons = document.querySelectorAll(".drum").length; // recebe a quantidade de buttons com classe .drum
  for (var i = 0; i < NButtons; i++){  
    var drum = document.querySelectorAll(".drum")[i]; //drum recebe todos buttons
    drum.addEventListener("click", function(){ //tira o () da funçao a funções ser chamada apenas quando o click acontecer
    //função que envia o botão clicado para a função som
    var buttonInner = this.innerHTML; //objeto refereciado anteriormente  
      sound(buttonInner);
      animation(buttonInner);
    });
  }

//Tecla do teclado
document.addEventListener("keydown", function(Event){
 sound(Event.key);
 animation(Event.key);
});

//função som 
    function sound(key){
      switch(key){
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          var tom2= new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio ("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var snare = new Audio ("sounds/snare.mp3");
          snare.play();
          break;
        case "k":
          var crash= new Audio ("sounds/crash.mp3");
          crash.play();
          break;
        case "l":
          var kickB = new Audio ("sounds/kick-bass.mp3");
          kickB.play();
          break;
        default: 
          alert("Erro em reproduzir o som! Por favor tente novamente");
      }
    }

  
  function animation(anime){
   var activeAnime = document.querySelector("." + anime);
   activeAnime.classList.add('pressed');

   setTimeout(function(){ //time out vai esperar 100milisecundos para executar a remoçaõ da classe pressed 
      activeAnime.classList.remove('pressed');
   }, 100);
  }