// Your code here.
function countChar(thing, ch){
  var x = 0;
  for (var n = 0; n < thing.length; n++)
  	if (thing.charAt(n) == ch)
   		x += 1;
  return x;
}

function countBs(thing){
  return countChar(thing, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
