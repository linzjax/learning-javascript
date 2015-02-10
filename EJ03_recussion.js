function isEven(number){
  if (number % 2 == 0){
    return true;
  }
  else if (number % 2 == 1){
    return false;
  }
  else {
    return "??";
  };
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
