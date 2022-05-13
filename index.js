history.scrollRestoration = 'manual';
var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var threshold = 0;

// document.querySelector(".img1").setAttribute("src","images/dice6.png");
// document.querySelector(".img2").setAttribute("src","images/dice6.png");

//const txt = document.querySelector('.button p');
const btn = document.querySelector('.button-throw');
const rectangleUnder = document.querySelector('#under-threshold');
const rectangleAbove = document.querySelector('#above-threshold');
const txtUnder = document.querySelector('.txt-under');
const txtAbove = document.querySelector('.txt-above');
const txtError = document.querySelector('.error-threshold');

btn.addEventListener('click', throwEvent);

const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const menu = document.querySelector('.menu-open-button');

two.addEventListener('click', updateSorting2);
three.addEventListener('click', updateSorting3);
four.addEventListener('click', updateSorting4);
five.addEventListener('click', updateSorting5);
six.addEventListener('click', updateSorting6);
menu.addEventListener('click', updateSortingMenu);

function updateSorting2() {
  document.getElementById("sorting-selected").innerHTML = "Sorting by 2-up";
  threshold = 2;
  txtError.textContent = "";
}
function updateSorting3() {
  document.getElementById("sorting-selected").innerHTML = "Sorting by 3-up";
  threshold = 3;
  txtError.textContent = "";
}
function updateSorting4() {
  document.getElementById("sorting-selected").innerHTML = "Sorting by 4-up";
  threshold = 4;
  txtError.textContent = "";
}
function updateSorting5() {
  document.getElementById("sorting-selected").innerHTML = "Sorting by 5-up";
  threshold = 5;
  txtError.textContent = "";
}
function updateSorting6() {
  document.getElementById("sorting-selected").innerHTML = "Sorting by 6-up";
  threshold = 6;
  txtError.textContent = "";
}
function updateSortingMenu() {
  document.getElementById("sorting-selected").innerHTML = "";
  threshold = 0;
}

function throwDice() {
  var dice = Math.random();
  dice = Math.floor((dice*6)) + 1;

  return dice;
}

function throwEvent() {
  //var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
  rectangleUnder.textContent = "";
  rectangleAbove.textContent = "";
  numberOfDices = document.getElementById('dices-quantity').value;
  under = 0;
  above = 0;
  for (let i = 0; i < numberOfDices; i++) {
    var dice = throwDice();
    if (dice<threshold) {
      under ++;
      switch(dice) {
      case 1:
        document.getElementById("under-threshold").innerHTML += ' <i class="fa-solid fa-dice-one"></i> ';
        break;
      case 2:
        document.getElementById("under-threshold").innerHTML += ' <i class="fa-solid fa-dice-two"></i> ';
        break;
      case 3:
        document.getElementById("under-threshold").innerHTML += ' <i class="fa-solid fa-dice-three"></i> ';
        break;
      case 4:
        document.getElementById("under-threshold").innerHTML += ' <i class="fa-solid fa-dice-four"></i> ';
        break;
      case 5:
        document.getElementById("under-threshold").innerHTML += ' <i class="fa-solid fa-dice-five"></i> ';
        break;
      case 6:
        document.getElementById("under-threshold").innerHTML += ' <i class="fa-solid fa-dice-six"></i> ';
        break;
      default:
      }
    } else {
      above ++;
      switch(dice) {
      case 1:
        document.getElementById("above-threshold").innerHTML += ' <i class="fa-solid fa-dice-one"></i> ';
        break;
      case 2:
        document.getElementById("above-threshold").innerHTML += ' <i class="fa-solid fa-dice-two"></i> ';
        break;
      case 3:
        document.getElementById("above-threshold").innerHTML += ' <i class="fa-solid fa-dice-three"></i> ';
        break;
      case 4:
        document.getElementById("above-threshold").innerHTML += ' <i class="fa-solid fa-dice-four"></i> ';
        break;
      case 5:
        document.getElementById("above-threshold").innerHTML += ' <i class="fa-solid fa-dice-five"></i> ';
        break;
      case 6:
        document.getElementById("above-threshold").innerHTML += ' <i class="fa-solid fa-dice-six"></i> ';
        break;
      default:
        // code block
      }
    }
  }
  txtAbove.textContent = (': ' + above);
  txtUnder.textContent = (': ' + under);
  if (threshold == 0) {
    txtError.textContent = "Please select a threshold by clicking on the dices";
  }
  document.querySelector("#above-threshold").scrollIntoView();
}
