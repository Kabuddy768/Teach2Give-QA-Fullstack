// Constants for operation types
const OPERATIONS = {
    ADD: '+',
    SUBTRACT: '-',
    MULTIPLY: '×',
    DIVIDE: '÷'
  };
  
  // Calculator state
  let displayValue = '0';
  let firstOperand = null;
  let waitingForSecondOperand = false;
  let currentOperation = null;
  
  // Basic arithmetic functions
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
  
  // Helper function to perform calculations
  function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
      case OPERATIONS.ADD:
        return add(firstOperand, secondOperand);
      case OPERATIONS.SUBTRACT:
        return subtract(firstOperand, secondOperand);
      case OPERATIONS.MULTIPLY:
        return multiply(firstOperand, secondOperand);
      case OPERATIONS.DIVIDE:
        return divide(firstOperand, secondOperand);
      default:
        return secondOperand;
    }
  }
  
  // Update display value
  function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = displayValue;
  }
  
  // Handle number input
  function inputDigit(digit) {
    if (waitingForSecondOperand) {
      displayValue = digit;
      waitingForSecondOperand = false;
    } else {
      displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  // Handle decimal point
  function inputDecimal() {
    if (waitingForSecondOperand) {
      displayValue = '0.';
      waitingForSecondOperand = false;
      return;
    }
    if (!displayValue.includes('.')) {
      displayValue += '.';
    }
  }
  
  // Handle operators
  function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);
  
    if (firstOperand === null) {
      firstOperand = inputValue;
    } else if (currentOperation) {
      try {
        const result = calculate(firstOperand, inputValue, currentOperation);
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
      } catch (error) {
        displayValue = 'Error';
        firstOperand = null;
        waitingForSecondOperand = false;
        currentOperation = null;
        updateDisplay();
        return;
      }
    }
  
    waitingForSecondOperand = true;
    currentOperation = nextOperator;
  }
  
  // Clear calculator
  function clearCalculator() {
    displayValue = '0';
    firstOperand = null;
    waitingForSecondOperand = false;
    currentOperation = null;
  }
  
  // Event listeners setup
  document.addEventListener('DOMContentLoaded', () => {
    // Number buttons
    document.querySelectorAll('.buttons-grid button').forEach(button => {
      if (!isNaN(button.textContent)) {
        button.addEventListener('click', () => {
          inputDigit(button.textContent);
          updateDisplay();
        });
      }
    });
  
    // Operator buttons
    const operatorButtons = {
      '+': OPERATIONS.ADD,
      '-': OPERATIONS.SUBTRACT,
      '×': OPERATIONS.MULTIPLY,
      '÷': OPERATIONS.DIVIDE
    };
  
    Object.entries(operatorButtons).forEach(([symbol, operation]) => {
      const button = Array.from(document.querySelectorAll('.buttons-grid button'))
        .find(btn => btn.textContent === symbol);
      if (button) {
        button.addEventListener('click', () => {
          handleOperator(operation);
          updateDisplay();
        });
      }
    });
  
    // Decimal point
    const decimalButton = Array.from(document.querySelectorAll('.buttons-grid button'))
      .find(btn => btn.textContent === '.');
    if (decimalButton) {
      decimalButton.addEventListener('click', () => {
        inputDecimal();
        updateDisplay();
      });
    }
  
    // Clear button
    const clearButton = Array.from(document.querySelectorAll('.buttons-grid button'))
      .find(btn => btn.textContent === 'C');
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        clearCalculator();
        updateDisplay();
      });
    }
  
    // Equals button
    const equalsButton = document.querySelector('.equals');
    if (equalsButton) {
      equalsButton.addEventListener('click', () => {
        if (currentOperation && !waitingForSecondOperand) {
          try {
            const inputValue = parseFloat(displayValue);
            const result = calculate(firstOperand, inputValue, currentOperation);
            displayValue = `${parseFloat(result.toFixed(7))}`;
            firstOperand = null;
            waitingForSecondOperand = false;
            currentOperation = null;
            updateDisplay();
          } catch (error) {
            displayValue = 'Error';
            updateDisplay();
          }
        }
      });
    }
  
    // Initialize display
    updateDisplay();
  });