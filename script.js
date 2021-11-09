console.dir(document);



const buttons = document.querySelectorAll("button");
const display = document.querySelector(".calculator__display");
const numbers = document.querySelectorAll(".calculator__number");
const operators = document.querySelectorAll(".calculator__operator");
const equals = document.querySelector(".calculator__equals");
const clearAll = document.querySelector("calculator__clear");
const deleteLast = document.querySelector("calculator__delete");


// LISTENING FOR BUTTON CLICK

const clicked = buttons.forEach((button) => {
  button.addEventListener("click", () => {
  //  working
    console.log(button.innerText)
  });
});

// APPEND BUTTON VALUE TO DISPLAY IF A NUMBER OR OPERATOR






// CLEAR DISPLAY IF A/C IS CLICKED



// SUM INPUTS IF = IS CLICKED



// DELETE LAST INPUT IF DEL IS CLICKED