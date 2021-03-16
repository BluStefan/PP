/*1. Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character.*/

var a = 30;
var b = 540;
var c = 300;

console.log (a)

/*2. Save a string (text) describing your current mood in a variable and print it out in console.*/

var a = "sleepy";

console.log(a)

/*3. Feel free to play around in the console and get familiar with it.*/


/*4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3. Why do we get these results*/

var a = 3;
var b = 2;
var c = 31;
var result = a - b - c;

console.log (result)

var a = 3;
var b = 5;
var c = 7;
var result = a * b - c / a;

console.log (result);

var a = 4;
var b = 2;
var c = 1.14;
var d = 3;
var result = a / b - c * d;

console.log (result)

/*5. How many grams weight 1.2kg of bananas? */

var kg = 1000;
var bananas = 1.2 * kg;
console.log (bananas + "g")

/* 6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What about Tom who is being late half an hour? It is hard to be on time these days…*/

var min = 60;
var Anna = 5 * min;
var Tom = 30 * min;

console.log (Anna + "s")

console.log (Tom + "s")

/*7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it?*/

var gb = 1024;
var mb = 1024;
var usb = 4 * gb * mb;

var news = usb / 98;

console.log(news + "kb")

/*9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?*/

a*=2;
b+=3;
c/=5;
d-=7;

/*10. Create the following variables:
	- a variable containing your name,
	- a variable containing your age,
	- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.*/

var name = "Stefan"
var age = 25
var pet = false

console.log (typeof name)
console.log (typeof age)
console.log (typeof pet)

/*11. Check which type are these values:
	- “number”
	- true
	- null
	- “false”
	- 56*/
var a = "number"
var b = true
var c = null
var d = "false"
var e = 56

    console.log (typeof a)
    console.log (typeof b)
    console.log (typeof c)
    console.log (typeof d)
    console.log (typeof e)
    /*12. Check how good you are at guessing the Boolean equivalent of different values using the console. Do you remember how to check for a Boolean equivalent of a value?*/

    var a = 30; true
    var b = ""; false
    var c = undefined; false
    var d = null; false
    var e = "string"; true
    var f = Infinity; true

    console.log (!!a)
    console.log (!!b)
    console.log (!!c)
    console.log (!!d)
    console.log (!!e)
    console.log (!!f)
    

    /*13. Use the console to check the results you think should go in the following table:

    p;    q;  p && q; p || q
    true true
    true false
    false true
    false false*/

    var p = true
    var q = true 
    console.log(p && q) 
    console.log(p || q)  

    var p = true
    var q = false
    console.log(p && q) 
    console.log(p || q)  

    var p = false
    var q = true
    console.log(p && q) 
    console.log(p || q)  

    var p = false
    var q = true 
    console.log(p && q) 
    console.log(p || q)  
  
    /*  14. If the variable age stores the information about user’s age, how we can check whether it
    contains a correct value? Write expressions for checking:
    ● Is age negative value
    ● Is age greater than 120 */

    var age = 25
    if (age < 0) {
        console.log("negativna vrednost")
    }
    else {
        console.log("nije negativna vrednost")
    }

    var age = 25
    if (age > 120) {
        console.log("jeste")
    }
    else {
        console.log("nije")
    }

    /*15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)*/

var speed = 150
if (speed > 60 && speed <120) {
    console.log ("dozvoljeno")
} else {
console.log("nije dozvoljeno")
}