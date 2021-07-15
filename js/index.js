var redNoise = new Audio("sounds/red.mp3");
var yellowNoise = new Audio("sounds/yellow.mp3");
var blueNoise = new Audio("sounds/blue.mp3");
var greenNoise = new Audio("sounds/green.mp3");
var wrongNoise = new Audio("sounds/wrong.mp3");
var blue = ".blue";
var yellow = ".yellow";
var green = ".green";
var red = ".red";
var winning = true;

function userChoice() {
  $(colorChoice)
}

function ColorSquare(randVal, noise, color) {
  this.randVal = randVal;
  this.noise = noise;
  this.animate = function() {
    $(color).addClass("white-border");
    setTimeout(function() {
      $(color).removeClass("white-border");
    }, 250);
  }
}

var redSquare = new ColorSquare(1, redNoise, red);
var yellowSquare = new ColorSquare(2, yellowNoise, yellow);
var greenSquare = new ColorSquare(3, greenNoise, green);
var blueSquare = new ColorSquare(4, blueNoise, blue);


$(document).keydown(function(event) {
  if (event.key === "a") {
    console.log("Program has started.");
    // console.log("This is simon game main")
    $("h1").text("Level 1");


    var selectedColor = randomizeSquare();

    while (winning === true) {
      console.log("winning is true");
      winning = false;

      $(red).click(function() {
        if (redSquare.randVal === selectedColor) {
          redSquare.noise.play();
          redSquare.animate();
          winning = true;
          setTimeout(function() {
            selectedColor = randomizeSquare();
          }, 500);
        } else {
          wrongNoise.play();
          winning = false;
          losingHeader();
        }
      });

      $(blue).click(function() {
        if (blueSquare.randVal === selectedColor) {
          blueSquare.noise.play();
          blueSquare.animate();
          winning = true;
          setTimeout(function() {
            selectedColor = randomizeSquare();
          }, 500);
        } else {
          wrongNoise.play();
          winning = false;
          losingHeader();
        }
      });

      $(green).click(function() {
        if (greenSquare.randVal === selectedColor) {
          greenSquare.noise.play();
          greenSquare.animate();
          winning = true;
          setTimeout(function() {
            selectedColor = randomizeSquare();
          }, 500);
        } else {
          wrongNoise.play();
          winning = false;
          losingHeader();
        }
      });

      $(yellow).click(function() {
        if (yellowSquare.randVal === selectedColor) {
          yellowSquare.noise.play();
          yellowSquare.animate();
          winning = true;
          setTimeout(function() {
            selectedColor = randomizeSquare();
          }, 500);
        } else {
          wrongNoise.play();
          winning = false;
          losingHeader();
        }
      });


    }
    console.log("program has ended.");
  }

});



function randomizeSquare() {
  var randNum = Math.floor((Math.random() * 4) + 1);
  var selected;
  if (randNum === redSquare.randVal) {
    console.log("red");
    redSquare.noise.play();
    redSquare.animate();
    selected = redSquare.randVal;
  } else if (randNum === yellowSquare.randVal) {
    console.log("yellow");
    yellowSquare.noise.play();
    yellowSquare.animate();
    selected = yellowSquare.randVal;
  } else if (randNum === blueSquare.randVal) {
    console.log("blue");
    blueSquare.noise.play();
    blueSquare.animate();
    selected = blueSquare.randVal;
  } else {
    console.log("green");
    greenSquare.noise.play();
    greenSquare.animate();
    selected = greenSquare.randVal;
  }

  return selected;
}


function losingHeader() {
  $("h1").text("Sorry Dedicated Player; You Have Lost");
}
