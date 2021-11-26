// test variable
let counter = 0;

let counterNum = document.getElementById("counter_num");

let incrementBtn = document.getElementById("increment");

let decrementBtn = document.getElementById("decrement");

let previewPar = document.getElementById("preview-p");

let saveBtn = document.getElementById("save");

incrementBtn.addEventListener("click", () => {
  //console.log('button clicked !');
  counter += 1;
  counterNum.innerText = counter;
});

decrementBtn.addEventListener("click", () => {
  if (counter == 0) return;
  counter -= 1;
  counterNum.innerText = counter;
});

saveBtn.addEventListener("click", () => {
  previewPar.after(" / " + counter);
  counter = 0;
  counterNum.innerText = 0;
});

counterNum.innerText = counter;

//calculator card

let operator = [];

let operatorType = document.getElementsByClassName("operator-btn");
let submitOperator = document.getElementById("submit-math");
let operatorText = document.getElementById("operator");
let operatorResult = document.getElementById("operator-result");

let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");

for (let index = 0; index < operatorType.length; index++) {
  operatorType[index].addEventListener("click", () => {
    operator = operatorType[index].getAttribute("data-value");
    operatorText.textContent = operator;
  });
}

submitOperator.addEventListener("click", () => {
  if (firstNumber.value == "" || secondNumber.value == "" || operator == null) {
    operatorResult.innerHTML = "Error!! Input Numbers First";
    return;
  }
  let result = 0;
  switch (operator) {
    case "+":
      result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
      break;
    case "-":
      result = parseInt(firstNumber.value) - parseInt(secondNumber.value);
      break;
    case "/":
      result = parseInt(firstNumber.value) / parseInt(secondNumber.value);
      break;
    case "*":
      result = parseInt(firstNumber.value) * parseInt(secondNumber.value);
      break;
    case "%":
      result = parseInt(firstNumber.value) % parseInt(secondNumber.value);
      break;
    default:
      break;
  }

  operatorResult.innerHTML = "Result = " + result;
});

//blackjack Game
let blackjackBtn = document.getElementById("start-blackjack-btn");
let blackjackNewRollBtn = document.getElementById("new-roll-blackjack-btn");
let blackjackMessage = document.getElementsByClassName("blackjack-numbers")[0];
let firstCard = 10;
let secondCard = 20;
const card = [firstCard, secondCard];
let sum = card[0] + card[1];
let hasBlackJack = false;
let isAlive = true;
let message = "";

blackjackNewRollBtn.addEventListener("click", () => {
  blackjackMessage.innerHTML = "Please wait...";

  card[0] = Math.floor(Math.random() * 10) + 1;
  card[1] = Math.floor(Math.random() * 10) * 2;

  sum = card[0] + card[1];
  blackjackRoll();
  setTimeout(() => {
    blackjackMessage.innerHTML =
      message +
      "<br>" +
      " Numbers : " +
      card[0] +
      " " +
      card[1] +
      "<br>" +
      " Sum cards : " +
      sum;
    blackjackBtnStatus();
  }, 1000);
});

function blackjackRoll() {
  if (sum < 21) {
    message = "Do you want to draw new card!";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo!! You have got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "Oops! You're out of the game";
    isAlive = false;
  }
}

function blackjackBtnStatus() {
  if (!isAlive) {
    blackjackNewRollBtn.setAttribute("disabled", "disabled");
    blackjackNewRollBtn.style.cursor = "not-allowed";
    blackjackNewRollBtn.textContent = "Game Over";
  }
}

