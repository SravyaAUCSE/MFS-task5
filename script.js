// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform calculation based on the current display value
function calculate() {
    let displayValue = document.getElementById('display').value;
    let result;

    try {
        result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function deletelast() {
    document.getElementById('display').value = currentInput;
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}
