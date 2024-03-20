function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var expression = document.getElementById("result").value;
    var numbers = expression.split('+');
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i]); 
    }
    var average = sum / numbers.length; 
    document.getElementById("result").value = average;
}
