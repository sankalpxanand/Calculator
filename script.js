var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

var opoerand1 = null; //var opoerand1 = 0;
var opoerand2 = null;
var operator = null;

function isOperator(value){
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if(isOperator(value)){
            operator = value;
            opoerand1 = parseFloat(text);
            display.textContent = "";
        }
        else if(value == "ac"){
            display.textContent = "";
        }
        else if(value == "sign"){
            opoerand1 = parseFloat(text);
            opoerand1 = -1 * opoerand1;
            display.textContent = opoerand1;
        }
        else if(value == "."){
            if(text.length && !text.includes('.')){
                display.textContent = text + '.';
            }
        }
        else if(value == "%"){
            opoerand1 = parseFloat(text);
            opoerand1 = opoerand1/100;
            display.textContent = opoerand1;
        }
        else if(value == "="){
            opoerand2 = parseFloat(text);
            var result = eval(opoerand1 + ' ' + operator + ' ' + opoerand2);
            if(result){
                display.textContent = result;
                opoerand1 = result;
                opoerand2 = null;
                operator = null;
            }
        }
        else{
            display.textContent = display.textContent + value;
        }
    });
}