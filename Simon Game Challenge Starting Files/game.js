
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var flag =false;
var level=0;

function nextSequence(){
    var randomNumber=(Math.random())*4;
    randomNumber=Math.floor(randomNumber);

    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);   

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);

}


 $(".btn").on("click", function(e){
    var userChosenColour =e.target.id;
    userClickedPattern.push(userChosenColour);
    var name=userChosenColour+".mp3";
    playSound(`${name}`);
    animatePress(`${userChosenColour}`);
    checkAnswer(`${userChosenColour}`)
});

function playSound(name){
    
    var audio=new Audio(`./sounds/${name}`);
    audio.play();
}

function animatePress(currentColour){
    $(`#${currentColour}`).addClass("pressed");
    setTimeout(function () {
        $(`#${currentColour}`).removeClass("pressed");
      }, 100);
}


$(document).keypress(function(){
     
    if(flag=false){
        $("#level-title").text("Level " + level);
        nextSequence();
        flag=true;
    }
    
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over,Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 1000);

      gameOver();
    }
}

function gameOver() {
    level = 0;
    gamePattern = [];
    flag = false;
  }
  