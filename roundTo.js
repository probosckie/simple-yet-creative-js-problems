//create a roundTo function which can round up or round down a decimal based on the part after decimal.
// rT(4.55) -> 5
// rT(4.3) -> 4


function roundTo(floatingNumber) {
  const splitDecimal = floatingNumber.toString().split(".");
  if(splitDecimal[1]) {
    const fiveNumber = Math.pow(10, splitDecimal[1].length - 1) * 5;
    return Number(splitDecimal[1]) > fiveNumber ? Number(splitDecimal[0]) + 1 : Number(splitDecimal[0]);
  } else {
    return "Not a valid decimal number"
  }
}


