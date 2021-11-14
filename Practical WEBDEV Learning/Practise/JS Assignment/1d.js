/*
QUESTION:

ROTATE A NUMBER

1. You are given two numbers n and k. You are required to rotate n, k times to the right. If k is positive, rotate to the right i.e. remove rightmost digit and make it leftmost. Do the reverse for negative value of k. Also k can have an absolute value larger than number of digits in n.
2. Take as input n and k.
3. Print the rotated number.
4. Note - Assume that the number of rotations will not cause leading 0's in the result. e.g. such an input will not be given
   n = 12340056
   k = 3
   r = 05612340

Input Format:
"n" where n is any integer.
"K" where k is any integer.

Output Format:
"r", the rotated number.

_______________________________________________________________
---------------------------------------------------------------
Constraints:
1 <= n < 10^9
-10^9 < k < 10^9

Sample Input:
562984
2

Sample Output:
845629
_______________________________________________________________
---------------------------------------------------------------
*/

let k,n,n1;

n = 562984;
k = 2;
n1=n;
let i=0;

while(n1>0)
{
    n1=parseInt(n1/10);
    i++;
}
k=parseInt(k%i);
if(k<0){
k=i+k;
}
//console.log(i);//digits of the given number n;
let divisor =parseInt(Math.pow(10,k));
let pre=parseInt(n%divisor);
n=parseInt(n/divisor);
n=(pre*(parseInt(Math.pow(10,(i-k)))))+n;

console.log(n);