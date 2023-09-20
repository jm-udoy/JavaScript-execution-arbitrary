document.getElementById("head1").innerHTML = "Complex";

// function 
function headingChange(){
    document.getElementById("head2").innerHTML = "Heading 02";
}

// Array loop test 01 
let code = "";
let cars = ["BMW", "Honda", "Nissan"];
cars.forEach(loopFunction);

document.getElementById("loop").innerHTML = code;

function loopFunction(item, index) {
    code += index + ": " + item + "<br>";
}


// Array loop test 02 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("loop2").innerHTML = text;




// JS Math
document.getElementById("math").innerHTML = Math.PI;


// Using Map.get()
// Create a Map
const fruits2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

document.getElementById("map").innerHTML = fruits2.get("apples");


// JS Error
try{
  alerttt("Welcom Guest!");
}catch(err){
  document.getElementById("err").innerHTML = err.message;
}

// Input Validation
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try { 
    if(x.trim() == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
