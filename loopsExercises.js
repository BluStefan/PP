// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (var i=0; i<=15; i++) {
    
    if (i === 0) {
            console.log(i +  " is null");
    }
    else if (i % 2 === 0) {
            console.log(i + " is even");   
    }
    else {
            console.log(i + " is odd");
    }
}

// 2. Write a program to sum the multiples of 3 and 5 under 1000.


var a = 0;


for (var i = 0; i < 1000; i++)
{ 
    if (i % 3 === 0 && i % 5 === 0)
    {
       a += i;
    }
}
console.log(a);

// 3. Write a program to compute the sum and product of an array of integers.


var arr = [1, 3, 10, 11.1, 20, 31, 414, -3022, 10.3],
sum = 0,
product = 1; 

for (var i = 0; i < arr.length; i++)
{
        if (arr[i] % 1 === 0 && arr[i]>0) {
            sum += arr[i];
            product *= arr[i];
        }
}
           console.log('Sum : ' + sum + ' Product :  ' + product)

    
    /* 
    4. Write a program which prints the elements of the following array as a single string.
    var a = ["1","A","B","c","r",true,Nan, undefined];
    */
    var string = "";
    var arr = ["1", "A", "B", "c", "r", true, NaN, undefined];
    for (var i = 0; i < arr.length; i++) {
    
        string += arr[i]; 
    
    }
    console.log(string);
     /*
    5. Write a program that prints the elements of the following array.
var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
]; */

var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ]

for (var i = 0; i<a.length; i++) {
        console.log( a[i] + "\n")}

 /*
    6. Write a program that outputs the sum of squares of the first 20 numbers.
    */
   
    var sum = 0;
    for (var i = 0; i <= 20; i++) {
        sum += i * i;
    }
    console.log("Sum is " + sum)
/*
    7. Write a program that computes average marks of the following students. Then use this
    average to determine the corresponding grade.*/

    var students = [["David", 80], ["Marko", 77], ["Dany", 88], ["John", 95], ["Thomas", 68]]
    var averageMark = 0;

    for (var i = 0; i < students.length; i++) {
        averageMark += students[i][1];
        var average = averageMark / students.length;
    } 
    console.log("Average grade is " + average)

    if (average < 60) {
        console.log("Grade : F");
    }
    else if (average <= 70) {
        console.log("Grade : D");
    }
    else if (average <= 80) {
        console.log("Grade : C");
    }
    else if (average <= 90) {
        console.log("Grade : B");
    }
    else if (average <= 100) {
        console.log("Grade : A");
    }



   

/*
    8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
    exceptions. For numbers divisible by 3, print "Fizz"; instead of the number, and for numbers
    divisible by 5 (and not 3), print "Buzz"; instead. When you have that working, modify your
    program to print "FizzBuzz";, for numbers that are divisible by both 3 and 5 (and still print
    "Fizz"; or "Buzz"; for numbers divisible by only one of those).
    */
    // make a loop that goes from 1 to 100

    for (var i = 1; i <=100; i++) {
        var divisibleBy3 = i % 3;
        var divisibleBy5 = i % 5;

        if ((divisibleBy3 === 0) && (divisibleBy5 === 0))
        console.log("FizzBuzz");
        else if (divisibleBy3 === 0)
        console.log("Fizz");
        else if (divisibleBy5 === 0)
        console.log("Buzz");
        else 
        console.log(i);
    }