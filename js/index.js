
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
    $("h1").text("Level 1");


    var selectedColor = randomizeSquare();

    $(".red").click(function() {
      if (this === selectedColor) {
        redSquare.noise.play();
        randomizeSquare();
      } else {
        wrongNoise.play();
      }
    });
  }

});

function randomizeSquare() {
  var randNum = Math.floor((Math.random() * 4) + 1);
  var selected;
  if (randNum === redSquare.randVal) {
    console.log("red");
    redSquare.noise.play();
    redSquare.animate();
    selected = redSquare.color;
  } else if (randNum === yellowSquare.randVal) {
    console.log("yellow");
    yellowSquare.noise.play();
    yellowSquare.animate();
    selected = yellowSquare.color;
  } else if (randNum === blueSquare.randVal) {
    console.log("blue");
    blueSquare.noise.play();
    blueSquare.animate();
    selected = blueSquare.color;
  } else {
    console.log("green");
    greenSquare.noise.play();
    greenSquare.animate();
    selected = greenSquare.color;
  }

  return selected;
}

// $(".red").click(function() {
//   if(this === redSquare.color) {
//     redSquare.noise.play();
//   } else {
//     wrongNoise.play();
//     winning = false;
//   }
// });
//
// $(".blue").click(function() {
//   if(this === blueSquare.color) {
//     blueSquare.noise.play();
//   } else {
//     wrongNoise.play();
//     winning = false;
//   }
// });
// };



// var redClicked = redAnimation();
//
// if (randNum === redAnimation()) {
//   console.log("correct");
// }
//
// function redAnimation() {
//   $(".red").click(function() {
//     console.log("red clicked");
//     var redNoise = new Audio("sounds/red.mp3");
//     redNoise.play();
//     $(".red").addClass("white-border");
//     setTimeout(function() {
//       $(".red").removeClass("white-border");
//     }, 250);
//     return 1;
//   });
// }
//
// function blueAnimation() {
//   $(".blue").click(function() {
//     console.log("blue clicked");
//   });
// }
//
// function yellowAnimation() {
//   $(".yellow").click(function() {
//     console.log("yellow clicked");
//   });
// }
//
// function greenAnimation() {
//   $(".green").click(function() {
//     console.log("green clicked");
//   });
// }
