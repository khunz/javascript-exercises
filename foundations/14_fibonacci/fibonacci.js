const fibonacci = function (n) {
  n = parseInt(n);
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n < 0) return "OOPS";

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
