function jogar(){
    
        var vetor=['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];
        var ran = Math.floor(Math.random() * 6);
        var play1 = ran;
        document.querySelector('img.img1').setAttribute('src', ''+vetor[ran]);
        ran = Math.floor(Math.random() * 6);
        var play2 = ran;
        document.querySelector('img.img2').setAttribute('src', ''+vetor[ran]);
        
        if(play1 > play2){
          document.getElementById("titulo").innerHTML = "<h1>Jogador 1 ganhou!</h1>"; //inner so funciona com ByID 
        }else if (play1 < play2){
          document.getElementById("titulo").innerHTML = "<h1>Jogador 2 ganhou!</h1>";
        }else{
          document.getElementById("titulo").innerHTML = "<h1>Houve um empate!</h1>";
        }
      }