//print
console.log("Hello in JS");
//Declare Variable
//JS only tells you that this is a variable not its type;
/*

let a;
console.log(a);
a=5;
console.log(a);
a="shivam pratap";
console.log(a);
a='s';
console.log(a);
a=5.2;
console.log(a);

*/
//types of variables : primitive-> number, string, boolean, null, symbol.
/*

a=5;
a=5.5;
a= '*';
a=true;
a=null;

*/
// JS -> JAVA, C++, C.
// QUESTION: PRINT NUMBER IN DECREASING ORDER FROM 10 TO 1:

/*

let num = 10;
for(let i=10;i>0;i--){
    console.log("num is ->",i);
}

*/


// QUESTION : IS PRIME ?

let n = 19;
let i;
for(i=2;i*i<=n;i++){
    if(n%i==0){
        console.log(n,"is Not Prime");
        break;
    }
}
if(i*i>n){
    console.log(n,"Is Prime")
}