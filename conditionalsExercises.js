/*Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -*/

console.log("\n\n\n Task no. 1 \n")

var a = 3;
var b = -7;
var c = 2;
var result = a * b * c;

if (result < 0) {
    console.log ("The sign is (-)")
} else {
    console.log ("The sign is (+)")
}

console.log ("\n finished")

/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0*/

console.log("\n\n\n Task no. 2 \n")

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a>b && a>c && a>d && a>e) {
    console.log ("Biggest number is " + a)
}
else if (b>c && b>d && b>e) {
    console.log ("Biggest number is " + b)
} else if (c>d && c>e) {
    console.log ("Biggest number is "+ c)
} else if (d>e) {
    console.log ("Biggest number is " + d)
    }    else  {
        console.log ("Biggest number is " + e)
    }

    console.log ("\n finished")

    /*Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/

console.log("\n\n\n Task no. 3 \n")

var a = 0;
var b = -1;
var c = 4;

if (a>b && a>c && b>c) {
    console.log (a + "," + b + "," + c);
} else if (a>b && a>c && c>b) {
    console.log (a + "," + c + "," + b )
} else if (b>a && b>c && a>c) {
    console.log (b + "," + a + "," + c )
} else if (b>a && b>c && c>a) {
    console.log (b + "," + c + "," + a )
} else if (c>a && c>b && a>b) {
    console.log (c + "," + a + "," + b )
} else if (c>a && c>b && b>a) {
    console.log (c + "," + b + "," + a)
}


console.log ("\n finished")

 /*Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X
 */

console.log("\n\n\n Task no. 4 \n")

var a = 10;
var b = 7;

//a

if ((typeof a === 'number') && (a%2 === 0)) {
    console.log(a/2)
} 
else {
    console.log("x")
}

//b
if ((typeof b === 'number') && (b%2 === 0)) {
    console.log(b/2)
} 
else {
    console.log("x")
}

console.log ("\n finished")

/*Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.*/

console.log("\n\n\n Task no. 5 \n")

var a = 10;
var b = 20;

if (a>b) {
    console.log(a +" is bigger number");
}
else if (b>a) {
    console.log(b +" is bigger number");
} else {
    console.log ("b = a")
}

console.log ("\n finished")

/*Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F*/

console.log("\n\n\n Task no. 6 \n")

var C = 60;
var F = 9*C/5 + 32;

console.log(F + "°F")

console.log ("\n finished")

/*Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38*/

console.log("\n\n\n Task no. 7 \n")

var a = 13;
var b = 11;
var c = 32;
var result1 = a - b;
var result2 = b - a;
var result3 = a - c;
var result4 = c - a;


// b = 11;

if (result1 > a) {
    console.log(result1 * 2) 
} else if (result1 > 0 ) {
    console.log(result1)
} else if (result2 > a) {
    console.log (result2 * 2)
} else if (result2 > 0) {
    console.log (result2)
}

// c = 32;

if (result3 > a) {
    console.log(result3 * 2) 
} else if (result3 > 0 ) {
    console.log(result3)
} else if (result4 > a) {
    console.log (result4 * 2)
} else if (result4 > 0) {
    console.log (result4)
}
console.log ("\n finished")

    /*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48*/

console.log("\n\n\n Task no. 8 \n")

var a = 12;
var b = 5;
var result = a + b;

if (a === b) {
    console.log(result*3)
} else {
    console.log (result)
}

var a = 8;
var b = 8;
var result = a + b;

if (a === b) {
    console.log(result*3)
} else {
    console.log (result)
}

console.log ("\n finished")
/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10*/

console.log("\n\n\n Task no. 9 \n")


var a = 5;
var b = 54;
var c = 50
if ((c === (a + b)) || (c === a) || (c === b)) {
    console.log("true")

} else {
    console.log ("false")
}
var a = 6;
var b = 50;
var c = 50;
if ((c === a + b) || (c === a) || (c === b)) {
    console.log("true")
}
var a = 40;
var b = 10;
var c = 50;

if ((c === a + b) || (c === a) || (c === b)) {
    console.log("true")
}
console.log ("\n finished")
/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400*/
console.log ("\n\n\n Task no. 10 \n")
var a = 13
if (a>20 && a<100) {
    console.log("The number is betwwen 20 and 100")
}
else if (a>100 && a<400) {
    console.log('The number is between 100 and 400');  
}
else {
    console.log('The number is not in range');
}
console.log ("\n finished")