#!/usr/bin/env node
// prints first 'k' prime numbers
// to a file

//finds k prime numbers
var primeFunc = function(k) {
	var arr = [];
	//since we know 2 & 3 are prime
	arr.push(2);
	arr.push(3);
	
	//set the current prime
	var currPrime=arr[arr.length - 1];
	//console.log("Current prime is: " + currPrime);
	
	while (arr.length != k) {
		//console.log("Entering while loop: currPrime " + currPrime + ", arr.length ", arr.length);
		//optimizing, since multiples of 2 are obviously non-prime
		currPrime +=2;
		var foundPrime = true;
		for (var i=2; (i <= Math.ceil(Math.sqrt(currPrime)) && foundPrime); i++) {
			if ((currPrime % i)==0) {
				foundPrime = false;
				//console.log(currPrime + " is not prime");
			}
		}
		if (foundPrime) {
			arr.push(currPrime);
			//console.log("Found " + arr.length + " prime number, prime number: " + arr[arr.length-1]);
		}
	}
	return arr;
};

//format output
var fmt = function(arr) {
	return arr.join(",");
};

//invoke primeFunc
var k=100;

//print arr to file
var fs=require('fs');
var outfile="prime.txt";
fs.writeFileSync(outfile, fmt(primeFunc(k)));

