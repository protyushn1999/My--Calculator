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
   if(text.innerHTML.length > 1) {
    const len = text.innerHTML.length;
    text.innerHTML = text.innerHTML.substring(0, len - 1);
    operand1 = text.innerHTML;
   }
    else {
      text.innerHTML = "";
    }
}



for (let btn of button) {
  btn.addEventListener("click", function (e) {
        console.log(btn.id);
        if(btn.id === 'clc')
        {
            clear();
            return;
        }

        if(btn.id === 'del')
        {
            deleteLast();
            return;
        }

        if(btn.id === '=')
        {
            text.innerHTML = result;
            res.innerHTML =  0;
            operand1 = text.innerHTML;
            console.log(operand1);
            return;
        }

        // if(btn.id === '.' && text.innerText.indexOf('.') !== -1)
        // {
        //     // if(text.innerText.indexOf('.') !== -1)
        //     // {
        //         const slicedText = text.innerText.slice(text.innerText.indexOf('.')+1);
        //         if(slicedText.includes('.'))
        //         {
        //             return;
        //         }
        //         else {
        //             text.innerText += btn.id;
        //             return;
        //         } 
                
            
            
        // }


        text.innerText += btn.id;
        operand1 = (text.innerText);
        result = eval(operand1).toFixed(5);
        res.innerHTML = result;
    
        

        

        if(btn.id === '+' || btn.id === '-' || btn.id === '*' || btn.id === '/')
        {
            operator = btn.id;
            operand1 = parseInt(res.innerHTML);
            text.innertext = `operand1 ${operator}`;
            return;
        }
        // if(btn.id === '.')
        // {
        //     if(btn.id === '.' && text.innerHTML.includes('.'))
        //     {
        //         const slicedText = y.slice(text.innerHTML.indexOf('.')+1);
        //         if(slicedText.includes('.'))
        //         {
        //             return;
        //         }
                
        //     }
        //     else {
        //         text.innerHTML += btn.id;
        //     } 
        //     return;  
        // }


        // const result = eval(`operand1 ${operator} operand2`);
        // res.innerHTML = result;
        

  });
}



// function


// calc function
// render res
// render typed values


