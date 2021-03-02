/*Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -*/


var a = 3;
var b = -7;
var c = 2;
var result = a * b * c;

if (result < 0) {
    console.log ("produkt je negativan (-)")
} else {
    console.log ("produkt je pozitivan")
}

/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0*/

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a>b && a>c && a>d && a>e) {
    console.log ("najveci broj je " + a)
}
else if (b>c && b>d && b>e) {
    console.log ("najveci broj je " + b)
} else if (c>d && c>e) {
    console.log ("najveci broj je "+ c)
} else if (d>e) {
    console.log ("najveci broj je " + d)
    }    else  {
        console.log ("najveci broj je" + e)
    }

    /*Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/






 /*Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X
 */
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

/*Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.*/

var a = 10;
var b = 20;

if (a>b) {
    console.log(a +" je veci broj");
}
else if (b>a) {
    console.log(b +" je veci broj");
} else {
    console.log ("b = a")
}

/*Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F*/

var c = 60;
var f = 9*c/5 + 32;

console.log(f + "°F")

/*Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38*/

var a = 13;
var b = 11;
var c = 32;



    /*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48*/

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

/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10*/

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

/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400*/

var a = 13
if (a<20 && b)