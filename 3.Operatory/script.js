// 1

var bool1 = true;
var bool2 = false;

console.log(bool1 == bool2);

// 2

const num1 = 12;
const num2 = 5;
var moduloResult = 0;

moduloResult = num1 % num2;

console.log(moduloResult);

// 3

const str1 = "Witaj";
const str2 = " Świecie";

let stringsResult = str1 + str2;
console.log(stringsResult);

// #4

var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); // true
console.log(someNumber === someString); // false

// #5

var counter = 30;
console.log(counter);
counter ++;
console.log(counter);
counter --;
console.log(counter);


// #6

var n1 = 12;
var n2 = 8;
var result = null;

result = n1 > n2;
console.log(result);

// ZADANIE 7
for(let i = 0; i <= 100; ++i){
	if(i === 0){
		console.log(i);
	}
	else if(i % 3 === 0){
		console.log(" Fizz ");
	}else if(i % 5 === 0){
		console.log(" Buzz ")
	}else{
		console.log(i);
	}

}


// Zadanie 8

// a)


for(var i = 0; i <= 5; i++){
	let res = "";
	for(var j = 0; j < i; j++){
		res += "*";
	}
	console.log(res)
}

// b)



// c)



// d)






// e)
