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
