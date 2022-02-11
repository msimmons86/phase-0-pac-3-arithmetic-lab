function add(num1, num2) {
  return num1 + num2;
}

function subtract(num3, num4) {
  return num3 - num4
}

function multiply(num3, num4) {
  return num3 * num4
}

function divide(num3, num4) {
  return num3 / num4
}

function increment(a) {
   increment = (a + 1)
   return increment;
}

function decrement(a) {
  decrement = (a - 1)
  return decrement;
}

function makeInt(n) {
  const parsed = parseInt(n, 10);
  return parsed
}

function preserveDecimal(n) {
  const numb = parseFloat(n);
  return numb;
}