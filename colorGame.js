var colors = [];
var NumBlocks = 6;



var boxContent = document.getElementsByClassName("boxContent");
var displayColor = document.getElementById("colorAskRect");
var squareBox = document.getElementsByClassName("square");

var message = document.getElementById("message");

var body = document.querySelector("body");

var newGameButton = document.getElementById("newGame");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

init();


// main function which calls other functions
function init(){
    reset(NumBlocks);
    clickColor(NumBlocks);
}



newGameButton.addEventListener("click", function(){


    init();
})


easyButton.addEventListener("click", function(){
    NumBlocks = 3;
    for (let i = 3; i < 6; i++) {
        squareBox[i].style.visibility = "hidden";
        
    }
    
   init();
})


hardButton.addEventListener("click", function () {
    NumBlocks = 6;
    for (let i = 3; i < 6; i++) {
        squareBox[i].style.visibility = "visible";

    }
   init();
})




//resets colors array, message(notification) box, background color of body and display color(Asked color)
function reset(num)
{
    colorArray(num);
    var rando = Math.floor(Math.random() * num);
    console.log(rando);
    displayColor.style.backgroundColor = colors[rando];

    for (let i = 0; i < num; i++) {
        boxContent[i].textContent = colors[i];
        squareBox[i].style.backgroundColor = "white";

    };

    message.textContent = "Notification";
    body.style.backgroundColor = "#bdbdbd"
}


// listens to clicked box and grabs color value of the box and performs two action:
// (1) changes the box background color with the labeld rgb value
// (2) comapares with the "display color" and then display message "correct" or "try again"
// if user click the correct box than than this fuction changes body background color with correct
//  color and resets wrong boxes with white(default) color but leaves the correct color box as it is

function clickColor(num){
    for (let i = 0; i < num; i++) {

        squareBox[i].addEventListener

            ("click", function () {
                var dispColor = displayColor.style.backgroundColor;
                // squareBox[i].style.backgroundColor = "black";
                console.log(squareBox[i].textContent, dispColor);



                if (squareBox[i].textContent === dispColor) {
                    message.textContent = "Correct!";
                    console.log("correct!");

                    squareBox[i].style.backgroundColor = squareBox[i].textContent;
                    for (let j = 0; j < squareBox.length; j++) {
                        if (i === j) {
                            continue;
                        }
                        console.log(i, j);
                        squareBox[j].style.backgroundColor = "white";
                        // squareBox[j].textContent = squareBox[i].textContent;
                        
                    };

                    body.style.backgroundColor = squareBox[i].textContent;

                }
                else {
                    message.textContent = "Try Again";
                    console.log("Try Again!");
                    squareBox[i].style.backgroundColor = squareBox[i].textContent;
                }

            }
            )
    }


};

//makes an array of length NumBlocks with random color
function colorArray(num)
{
    for (let i = 0; i < num; i++) {
        colors[i] = randomColor();        
    }

}


//random color generator
function randomColor()
{
    var r = Math.floor(Math.random()*255);

    var g = Math.floor(Math.random() * 255);

    var b = Math.floor(Math.random() * 255);

    return ("rgb(" + r + ", " + g + ", " + b +")")


   
}


