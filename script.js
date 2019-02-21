// function calculate() {
//     document.calculator.output.value = eval(document.calculator.output.value);
// }
// function erase() {
//     document.calculator.output.value = '';
// }
// function entries(s) {
//     document.calculator.output.value+=s;
// }

window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");
    container.addEventListener("click", function(e){
        buttonClick(e.target.id);
    });//(e) - default event parameter, calls all info of event
    var calculator = document.getElementById("button=");
    calculator.addEventListener("click", calculate);

    var c = document.getElementById("buttonc");
    c.addEventListener("click", erase);

    function buttonClick(buttonId) {
        if((buttonId != "buttonc") && (buttonId != "button=")) {
            var button = document.getElementById(buttonId);
            var s = buttonId; // s - separate temporary value of button/ string
            s = s.replace("button","");//string replace function "sub_string to be replaced","sub string you need it replace with"
            entries(s);
        }
    }

    function entries(s) {
        input.value += s;
        /*
        button1 : s = 1
        input.value = undefined
        entries("1")
        input.value += s
        input.value = input.value + s = undefined + "1" = "1" //"" + "1" = "1"
        button1 : s = "2"
        input.value = "1"
        entries("2")
        input.value = input.value + s =  "1" + "2" = "12"
        */
    }

    function calculate() {
        if(input.value == ".") {
            alert("Please enter a mathematical epression");
            return;
        }
        input.value = eval(input.value);
    }
    
    function erase() {
        input.value = '';
    }

};