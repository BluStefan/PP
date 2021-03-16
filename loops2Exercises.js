/* 
1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

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

/*
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/ 

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

/* 
4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

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


/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

var arr = [3, 11, -5, -3, 2];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
console.log("sum is " + sum)

/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */ 