//checking if the night mode was enabled last time
let state = localStorage.getItem("nightModeStatus");
if(state === "enabled")
{
    document.body.classList.add("darkmode");
}

// button for changing the mode 
const darkMode = document.getElementById("nightModeImg");
darkMode.addEventListener("click", function(){
    state = localStorage.getItem("nightModeStatus");
    if(state === "enabled")
    {
        localStorage.setItem("nightModeStatus", "disabled");
        document.body.classList.remove("darkmode");
    }
    else{
        localStorage.setItem("nightModeStatus", "enabled");
        document.body.classList.add("darkmode");
    }
});

//working of convert app
const input = document.getElementById("input");
const convert = document.getElementById("Convert");

//length
const lengthm =document.getElementById("metToFet");
const lengthf =document.getElementById("fetToMet");

function metToFet(){
    let result = input.value*3.281;
    return result;
}

function fetToMet(){
    let result = input.value/3.281;
    return result;
}

//volume
const volL =document.getElementById("litToGal");
const volG =document.getElementById("galToLit");

function litToGal(){
    let result = input.value/3.785;
    return result;
}

function galToLit(){
    let result = input.value*3.785;
    return result;
}

//mass
const massKg =document.getElementById("kgToP");
const massP =document.getElementById("pToKg");

function kgToP(){
    let result = input.value*2.205;
    return result;
}

function pToKg(){
    let result = input.value/2.205;
    return result;
}

convert.addEventListener("click", function(){
    lengthm.textContent= `${input.value} meter(s) = ${metToFet().toFixed(3)} feet(s)`;
    lengthf.textContent= `${input.value} feet(s) = ${fetToMet().toFixed(3)} meter(s)`;

    volL.textContent= `${input.value} liter(s) = ${litToGal().toFixed(3)} gallon(s)`;
    volG.textContent= `${input.value} gallons(s) = ${galToLit().toFixed(3)} liters(s)`;

    massKg.textContent= `${input.value} kilogram(s) = ${kgToP().toFixed(3)} pound(s)`;
    massP.textContent= `${input.value} pound(s) = ${pToKg().toFixed(3)} kilogram(s)`;

});




