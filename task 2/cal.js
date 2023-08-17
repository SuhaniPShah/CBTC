let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function addEventListeners() {
    const buttons = document.querySelectorAll('button[data-value]');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            appendToDisplay(value);
        });
    });

    clearButton.addEventListener('click', () => {
        clearDisplay();
    });

    equalButton.addEventListener('click', () => {
        calculate();
    });
}

addEventListeners();

