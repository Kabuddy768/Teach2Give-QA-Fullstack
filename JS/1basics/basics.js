function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
const sub = (a, b) => a - b;
console.log(sub(10, 20));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(10, 20));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, val) => acc + val, 0);
}
let numbers = [10, 20, 30, 40, 50];
console.log(add2(2, 3, ...numbers));