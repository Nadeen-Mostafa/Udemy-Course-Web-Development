$(document).ready(function(){
    $("h1").css("color","red");
});


$("p").addClass("big-title");

$("button").html("hey");  


$("a").attr("href","https://facebook.com");


$("h1").click(function(){
    $("h1").css("color","purple");
})



$("button").click(function(){
    $("h1").css("color","purple");
})

$(document).keypress(function(event){
    var keyPressed=event.key;
    console.log(keyPressed);
    $("h1").text(keyPressed);
})

//Method on

$("h2").on("mouseover", function(){
    $("h2").css("font-size","5rem");
})
//before openeing tag
$("h1").before("<button>new</button>");  //after openeoing tag 
//prepend after openening before text
//append after opening after text 
//remove
//hide
//show
//toggle
//fade out and fade in and fadetoggle
//slide up and slide down and slide toggle
//.animate({add css with numric value not strings like color})