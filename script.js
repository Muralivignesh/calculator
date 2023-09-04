function calculate() {
    // Get the input values and the selected operator
    var num1 = parseFloat(document.getElementById("num1").value);
    var operator = document.getElementById("operator").value;
    var num2 = parseFloat(document.getElementById("num2").value);

    // Check if both inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Perform the calculation based on the operator
    var result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator.");
            return;
    }

    // Display the result
    document.getElementById("result").value = result;
}
