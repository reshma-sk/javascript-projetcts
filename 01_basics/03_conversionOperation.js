let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

let score1 = "33abc"
let convertInNumber = Number(score1)
console.log(convertInNumber);
console.log(typeof convertInNumber);

let score2 = null;
console.log(score2);
console.log(typeof score2);
let changeInNumber = Number(score2)
console.log(changeInNumber);
console.log(typeof changeInNumber);

let score3 = undefined
console.log(score3);
console.log(typeof score3);

let changeInNumber2 = Number(score3)
console.log(changeInNumber2);
console.log(typeof changeInNumber2);

//"33" => 33
//"33abc" =>NaN
//true = 1, false = 0

let isLoggedIn = "r";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//1 => true, 0=>false
//"" => false "reshma"=>true