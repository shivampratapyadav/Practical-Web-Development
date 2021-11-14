//array declare
//let arr = [];

let array = [1,2,3,4,5];

console.log(array);
console.log(array.length);
let i = 0;

/*

while(i<array.length){
    console.log("elem at idx ", i, " is ", array[i]);
    i++;
}

*/

//push, unshift
array.push("last value");//push pushes the value at the end of the array.

array.unshift("first value");//unshift shifts all the elements one place ahead and addres the given value to the 0th index.
console.log("'''''''''''''''''''''''''''''''''''''''''''");
console.log(array);


//shift,pop;

array.shift();//revomes one elements from the 0th index;
array.pop();//removes the last elements rom the last of the array.
console.log(array);


//start idx, ending index(exclusive):
let partOfTheArray = array.slice(2,4);//this will give us values but will not change the original array
console.log(partOfTheArray);
console.log("'''''''''''''''''''''''''")
//start idx, count of values to be removed:
console.log("value spliced from the array : ",array.splice(2,1));
console.log("original array after doing splice ->", array);
console.log(array.indexOf(2,0));



