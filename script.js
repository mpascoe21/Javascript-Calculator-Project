console.dir(document);

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".calculator__display");
// const input1 = document.querySelector("calculator__input1");
// const input2 = document.querySelector("calculator__input2");
const numbers = document.querySelectorAll(".calculator__number");
const operators = document.querySelectorAll(".calculator__operator");
const equals = document.querySelector(".calculator__equals");
const clearAll = document.querySelector(".calculator__clear");
const deleteLast = document.querySelector(".calculator__delete");

let haveDot = false;
let input1 = "";
let input2 = "";
let oper = "";
let sum;

const updateOutput = (value) => {
  display.innerText = value;
}

// APPEND BUTTON VALUE TO DISPLAY IF A NUMBER OR OPERATOR

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
     
    // LISTENING FOR BUTTON CLICK
// const clicked = buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//   //  working
//     console.log(button.innerText)

    if (event.target.innerText === "." && !haveDot) {
      haveDot = true;
    // } else if (event.target.innerText === "." && !haveDot && haveOperator) {
    //   haveDot = true;     
    } else if (event.target.innerText === "." && haveDot) {
      return;
    }      
    //input1 = event.target.innerText;
    if (input1) {
      input1 += event.target.innerText;
    } else {
      input1 = event.target.innerText;
    }    
    // display.innerText = input1;
    console.log(input1);  

    updateOutput(input1);
    //display.innerHTML += input2;
    console.log(input1); 
     
    display.innerHTML = input1;   
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    //return display.innerText = input1;
    // display.innerHTML += event.target.innerText;
    
    input2 = input1;    
    console.log(input1, input2);
    input1 ="";    
    console.log(input1, input2);
    oper = event.target.innerText;    
    console.log(oper);   
    display.innerHTML = input2 + oper;
   // display.innerHTML += input1; - NOT WORKING
    haveDot = false;    
  })  
})


// CLEAR DISPLAY IF A/C IS CLICKED
clearAll.addEventListener("click", () => {
  input1 = "";
  input2 = "";
  oper = "";
  display.innerHTML = "";  
  haveDot = false;
})
console.dir(clearAll);


// SUM INPUTS IF = IS CLICKED
equals.addEventListener("click", () => {
  
  display.innerHTML = equals.innerText;
  console.log(input2, oper, input1);     

  if (oper === "+") {
    sum = parseFloat(input2) + parseFloat(input1);   
  } else if (oper === "-") {
    sum = parseFloat(input2) - parseFloat(input1);      
  } else if (oper === "x") {
    sum = parseFloat(input2) * parseFloat(input1)
  } else if (oper === "/") {
    sum = parseFloat(input2) / parseFloat(input1);    
  }; 
  
  console.log(sum);
  //display.innerHTML += sum.toFixed(5);   

  let updateSum = parseFloat(sum.toFixed(7));
  console.log(updateSum);
  display.innerHTML += updateSum;

  // const updateSum = sum.toFixed(5);
  // console.log(updateSum);

  // const finalSum = updateSum.toString();
  // console.log(finalSum);
});


// DELETE LAST INPUT IF DEL IS CLICKED

deleteLast.addEventListener("click", () => {
  input1 = input1.slice(0, -1);
  updateOutput(input1);
  console.log(input1);
});