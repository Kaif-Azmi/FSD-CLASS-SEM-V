const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const output = document.getElementById("output");
const error = document.getElementById("error");
console.log("num1:", num1.value);
console.log("num2:", num2.value);

let  result = 0;
const add = () =>  {
    if(num1.value==="" ||  num2.value === ""){
        error.innerText = "Please  enter both numbers";
        error.style.color = "red";
    }
    let result = parseInt(num1.value) + parseInt(num2.value);
    output.value = result;
}

const sub = () =>  {
    let result = parseInt(num1.value) - parseInt(num2.value);
     output.value = result;
}

const mul = () =>  {
    let result = parseInt(num1.value) * parseInt(num2.value);
     output.value = result;
}

const div = () =>  {
    let result = parseInt(num1.value) / parseInt(num2.value);
     output.value = result;
}