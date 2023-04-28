var randomNumber1=Math.random();
randomNumber1=Math.floor((randomNumber1*6)+1);

var randomNumber2=Math.random();
randomNumber2=Math.floor((randomNumber2*6)+1);

var image_1=document.querySelector(".dice .img1").setAttribute("src",`./images/dice${randomNumber1}.png`);

var image_2=document.querySelector(".dice .img2").setAttribute("src",`./images/dice${randomNumber2}.png`);


if(randomNumber1>randomNumber2)
{
    var title=document.querySelector("h1").innerHTML="Player 1 wins!";
}

else if(randomNumber2>randomNumber1){
    var title=document.querySelector("h1").innerHTML="Player 2 wins!";    
}

else{
    var title=document.querySelector("h1").innerHTML="Draw!";
}


