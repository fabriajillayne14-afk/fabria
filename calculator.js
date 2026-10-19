*/*
 * File name: calculator.js
 * Name: Jillayne Fabria
 * Section and Course: BSTI - 1M
 * Purpose: To perform basic arithmetic operations and calculate
 *           a total price with VAT.
*/

/* FUNCTIONS OF ARITHMETIC
 * These functions perform addition, subtraction, multiplication, modulus, and power using two numbers.
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

/* FUNCTION FOR DIVISION
 * Divides two numbers and returns an error message if the divisor is zero.
*/

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

/* FUNCTION FOR MODULUS
 * Finds the remainder after division and checks if the divisor is zero.
*/

function modulus(a, b) {
    if (b === 0) {
        return "Error: Cannot use zero as divisor";
    }
    return a % b;
}

/* FUNCTION FOR POWER
 * Raises the first number to the exponent of the second number.
*/

function power(a, b) {
    return a ** b;
}

/* FUNCTION TO COMPUTE TOTAL WITH VAT
 * Calculates the subtotal, adds VAT, and rounds the final amount to two decimal places.
*/

function computeTotal(price, qty, vatRate) {
    let subtotal = price * qty;

    // Parentheses calculate 1 + vatRate first.
    // The result is then multiplied by the subtotal to include VAT.
    let total = subtotal * (1 + vatRate);

    return Number(total.toFixed(2));
}

/* TEST CASES
 * These console.log() statements display the results of each operation.
*/

console.log("Addition: 24 + 16 =", add(24, 16));
console.log("Subtraction: 75 - 28 =", subtract(75, 28));
console.log("Multiplication: 12 * 8 =", multiply(12, 8));
console.log("Division: 50 / 5 =", divide(50, 5));
console.log("Modulus: 17 % 5 =", modulus(17, 5));
console.log("Power: 2 ** 4 =", power(2, 4));

console.log("Total with VAT:", computeTotal(100, 2, 0.12));
