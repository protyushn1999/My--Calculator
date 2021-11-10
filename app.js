console.log("connected");

const res = document.querySelector(".res");
const text = document.querySelector(".text");
const button = document.querySelectorAll(".btn");

var operand1 = 0;
var operand2 = 0;
var operator = "";

// clear function reset the whole screen and set it to initial state

function clear() {
  operand1 = 0;
  operand2 = 0;
  operator = "";
  res.innerHTML = "0";
  text.innerHTML = "&nbsp";
}
// deleteLast funnction => clears the last typed character from the screen

function deleteLast() {
  if (text.innerHTML.length > 1) {
    const len = text.innerHTML.length;
    text.innerHTML = text.innerHTML.substring(0, len - 1);
    operand1 = text.innerHTML;
  } else {
    text.innerHTML = "";
  }
}

// equalTo calculates the result and display it on the screen.

function equalTo() {
  text.innerHTML = result;
  res.innerHTML = 0;
  operand1 = text.innerHTML;
  console.log(operand1);
}

for (let btn of button) {
  btn.addEventListener("click", function (e) {
    // console.log(btn.id);

    if (btn.id === "clc") {
      clear();
      return;
    }

    if (btn.id === "del") {
      deleteLast();
      return;
    }

    if (btn.id === "=") {
      equalTo();
      return;
    }

    if(btn.id === "+" || btn.id === "-" || btn.id === "*" || btn.id === "/") {
      text.innerText += btn.id;
      operand1 = btn.id;
    }

    else{
      text.innerText += btn.id;
      operand1 = text.innerText;
    }
    
      result = eval(operand1).toFixed(3);
      res.innerHTML = result;
    
  });
}
