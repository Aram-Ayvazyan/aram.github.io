const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value) + 50;
    }
    catch(error){
        display.value = "ERROR"
    }
}