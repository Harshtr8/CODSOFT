const display = document.getElementById('display');
const buttons = document.querySelectorAll('.number, .operator');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.value;
    display.value = currentInput;
  });
});

clearButton.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});

calculateButton.addEventListener('click', () => {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
});
