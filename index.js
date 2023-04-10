 
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern =[];
var gamePattern= [];
var started= false;
var level=0;
 

$(document).keydown(function(){
 if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
        userClickedPattern.push(userChosenColour);
     animatePress(this);
       playsound(userChosenColour);

     checkAnswer(userClickedPattern.length-1);
});

function CheckAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
   if(userClickedPattern.length=== gamePattern.length){
    setTimeout(function(){
        nextSequence();
    },1000);
   }
}else{
    playsound("wrong");
    $("body"),addClass("game-over");
    $("#level-title").text("Game over, Press any key to Restart");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    startOver();
}
}





function nextSequence(){
    level++;
    userClickedPattern = [];
    $("#level-title").text("Level " + level);

     var randomNumber= Math.floor((Math.random()* 4)+1);
     var randomChosenColour= buttonColours[randomNumber];
     gamePattern.push(randomChosenColour);
     
     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playsound(randomChosenColour);
       

}








 //$(".btn").click(nextSequence);



function playsound(name){
 var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
}

function animatePress(currentColor){
 
    $('#' + currentColor).addClass("pressed");
    setTimeout(function (){
        $("#"+ currentColor).removeClass("pressed")
    },100)
};


function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}

