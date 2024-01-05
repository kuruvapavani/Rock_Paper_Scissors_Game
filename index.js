var yourChoice;
var yourScore = 0;
for(var i = 0 ; i < 3 ; i++){
  document.querySelectorAll("button")[i].addEventListener("click",function (){
    main(this.className);
    buttonAnimation(this);
  })
}

function main(y){
  switch(y){
    case "rock":
      yourChoice = 1;
      console.log(yourChoice);
      declareWin(yourChoice);
    break;
    case "paper" :
      yourChoice = 2;
      console.log(yourChoice);
      declareWin(yourChoice);
    break;
    case "scissors" :
      yourChoice = 3;
      console.log(yourChoice);
      declareWin(yourChoice);
    break;
  }
}

function declareWin(move){
  var randomChoice = Math.floor(Math.random()*3+1);
  console.log(randomChoice);
  if(randomChoice == 1){
    var computerMove = "Rock";
    if(move == 1){
      var result = "Tie";
    }
    else if(move == 2){
      var result = "You Won";
      yourScore++;
    }
    else if(move == 3){
      var result = "You Lost";
    }
  }
  if(randomChoice == 2){
    var computerMove = "Paper";
    if(move == 1){
      var result = "You Lost";
    }
    else if(move == 2){
      var result = "Tie";
    }
    else if(move == 3){
      var result = "You Won";
      yourScore++;
    }
  }
  if(randomChoice == 3){
    var computerMove = "Scissors";
    if(move == 1){
      var result = "You Won";
      yourScore++;
    }
    else if(move == 2){
      var result = "You Lost";
    }
    else if(move == 3){
      var result = "Tie";
    }
  }
  console.log(result);
  document.querySelector(".declareResult").innerHTML  = "Computer chose "+computerMove+" , "+ result;
  document.querySelector(".yourScore").innerHTML = "Score = " + yourScore;
}

function buttonAnimation(x){
  x.classList.add("animation");
  setTimeout(function() {
    x.classList.remove("animation");
  }, 100);
}