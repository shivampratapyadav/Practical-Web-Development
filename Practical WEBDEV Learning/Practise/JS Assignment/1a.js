/*
Q1.  Print Fizz Buzz:


---> Description:

Write a program that prints the numbers from 1 to 20 ,
also for multiples of '3' print "Fizz",
for multiples of '5' print "Buzz",
and for multiples of both'3' and '5' print "FizzBuzz",
else print number itself.

*/

let i=1;
while(i<=20)
{

    if(i%3==0 && i%5==0)
    console.log("FizzBuzz");

    else if(i%3==0)
    console.log("Fizz");

    else if(i%5==0)
    console.log("Buzz");

    else
    console.log(i);

    i++;
}

