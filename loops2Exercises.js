/* 
1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

console.log("\n\n\n Task no. 1 \n")

var e = 3;
var a = [5, -4.2, 3, 7];
var res = ""

for (i = 0; i < a.length; i++) {
    if (a[i] === e) {
        res = "yes";
        break;
    }
    else {
        res = "no";
    }
}
console.log(res);


console.log ("\n finished")


/*
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/ 


console.log("\n\n\n Task no. 2 \n")


var array = [-3, 11, 5, 3.4, -8];

for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
       array[i] = array[i] *2;
    }
    else {
       array[i];
    }
}
console.log(array);

/*
3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/


console.log("\n\n\n Task no. 3 \n")


var arr = [4, 2, 2, -1, 6];
var min = 0;
var index = 0;

for (var i = 0;i < arr.length; i++) {
    if (min > arr[i] ) {
        min = arr[i]
        index = i;
    }
}
console.log("Min = "+min);
console.log("index = "+index);


console.log ("\n finished")


/* 
4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/


console.log("\n\n\n Task no. 4 \n")


var arr = [4, 2, 2, -1, 6];
var min = arr[0];                                                 

for (var i = 0; i < arr.length; i++) {                            
    if (arr[i] < min) {                                                        
        min = arr[i];
    }
}

var min1 = arr[0];                                             
for (var x = 0; x < arr.length; x++) {                            
    if (arr[x] < min1 && arr[x] !== min) {                       
        min1 = arr[x];                                         
    }
}
console.log('The first element larger then the minimum (' + min + ') is: ' + min1);


console.log ("\n finished")


/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */


console.log("\n\n\n Task no. 5 \n")


var arr = [3, 11, -5, -3, 2];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
console.log("sum is " + sum)


console.log ("\n finished")


/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */ 


console.log("\n\n\n Task no. 6 \n")


var array = [2, 43, -2, 7, -2, 4, 2];
var isSym = "The array is symmetric."

for (var start = 0, end = array.length -1; start < end; start++, end--) {
 if (array[start] !== array[end]) {
     isSym = "The array isn’t symmetric.";
 }
} 
console.log (isSym);


console.log ("\n finished")


/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */


console.log("\n\n\n Task no. 7 \n")


var arr = [4, 5, 6, 2];
var arr1 =  [3, 8, 11, 9]
var arr2 = []

for (var i = 0; i < arr.length; i++) {
    arr2[arr2.length] = arr[i];
    arr2[arr2.length] = arr1[i];
}
console.log(arr2)


console.log ("\n finished")


/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/


console.log("\n\n\n Task no. 8 \n")


var arr = [4, 5, 6, 2];
var arr1 = [3, 8, 11, 9];
var arr2 = [];

for (var i = 0; i < arr.length; i++) {
        arr2[i] = arr[i];
}
for (var j = 0; j < arr1.length; j++) {
        arr2 [arr.length + j] = arr1[j];
}

console.log(arr2);


console.log ("\n finished")


/* 9. Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */


console.log("\n\n\n Task no. 9 \n")


var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var aNew = [];

for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        aNew [aNew.length] = a[i];
    }
}

console.log(aNew)


console.log ("\n finished")


/* 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */


console.log("\n\n\n Task no. 10 \n")


var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var newArr = [];

for (var i = 0; i < a.length; i++) {
    if (i === p) {
        newArr[i] = e;
    } else if (p < i) {
        newArr[i] = a[i-1];
    } else {
        newArr[i] = a[i];
    }
}

console.log (newArr)


console.log ("\n finished")