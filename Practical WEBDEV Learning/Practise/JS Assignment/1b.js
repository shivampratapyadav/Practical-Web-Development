/*
Question 1b:

Print All Primes from low Till high.
1. You've to print all prime numbers between a range. 
2. Take as input "low", the lower limit of range.
3. Take as input "high", the higher limit of range.
4. For the range print all the primes numbers between low and high (both included).

Input Format:
low 
high

Output Format:
n1
n2
.. all primes between low and high (both included)
_________________________________________________________________________________________________
-------------------------------------------------------------------------------------------------
Constraints:
2 <= low < high < 10 ^ 6

Sample Input:
6 
24

Sample Output:
7
11
13
17
19
23
_________________________________________________________________________________________________
-------------------------------------------------------------------------------------------------
_________________________________________________________________________________________________
*/

let low,high;
low=6;
high=24;

for(let i=low;i<=high;i++)
{
    let flag =true;
    let j=2;
    
    while(j*j<=i)
    {
        if(parseInt(i%j)==0)
        {
        flag=false;    
        break;
        }

     

     j++
    }

    if(flag==true)
    console.log(i);
}