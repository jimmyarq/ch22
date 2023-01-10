console.log("Mensaje Script Externo")

function changeColor(){
    document.getElementById("demo").style.color = "blue";
}

function changeColorH2(reference, color){
    console.log(reference);
    console.log(color);
// document.getElementById.("color-h2").style.color = color;
    reference.style.color = color;
}

function changeColorbyClass(){
    const collection = document.getElementsbyClassName("example");
    console.log(collection);
}