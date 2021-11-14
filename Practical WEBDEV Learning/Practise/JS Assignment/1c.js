/*
QUESTION:

Count Digits In A Number:

1. You've to count the number of digits in a number.
2. Take as input "n", the number for which the digits has to be counted.
3. Print the digits in that number.

Input Format:
"n" where n is any integer.

Output Format:
"d" where d is the number of digits in the number "n"
____________________________________________________________________________________
------------------------------------------------------------------------------------
Constraints:
1 <= n < 10^9

Sample Input:
65784383

Sample Output:
8
____________________________________________________________________________________
------------------------------------------------------------------------------------
*/

let n;
let i=0;

if(n==0)
console.log("Number is zero so, number of digits == ",1);

else
{
    if(n<0)
    {
        n=n*(-1); 
    }

    while(n>0)
    {
        let divisor =10;
        n=parseInt(n/divisor);
        i++;
    }

 console.log("There are ",i," digits in the given number.");

}