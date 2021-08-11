let Name="Shivam Pratap";

// //Print the ASCII values of each element of the string:
// for(let i=0;i<Name.length;i++){

//     console.log(Name.charCodeAt(i));
// }


// //Index Traversing of String:
// let hg=0;
// for(let i=0;i<Name.length;i++){
// if(Name[i]=='a')
//   hg+=1;

// }
// console.log(hg);


// let number="12648244561947231846";

// let sum=0;
// for(let i=0;i<number.length;i++){
//     sum+=parseInt(number[i]);
//     console.log(sum);
// }

// console.log(sum);


// let a='1A2';


// let sum=0;

// for(let i=0;i<a.length;i++){
// if(a.charCodeAt(i)>=48 && a.charCodeAt(i)<=57)
//     sum+=parseInt(a.charAt(i));

// else
//     sum+=a.charCodeAt(i);
// }

// console.log(sum);



// let you="Shivam Pratap";


// let ans="";
// let sp=0,ep=you.length;

// for(let i=ep;i>=sp;i--)
// {
//     if(you.charAt(i)==" ")
//     {
//         ans=ans+you.substring(i+1,ep)+" ";
//         ep=i;
//     }

//     else if(i==0)
//     {
//         ans+=you.substring(i,ep);
//     }

    
// }

// console.log(ans);

// let f="dfghghrhhhbfhhjtkihghhckbjcjxcb";


// let a= [];
// for(let i=0;i<f.length;i++){
//     a[i]=f.charAt(i);
// }


// for(let j=0;j<a.length;j++){
//     let count=0;
//     for(let k=j;k<a.length;k++){
//         if(f.charAt(j)==a[k])
//         count+=1;
//     }
//     console.log(f.charAt(j)," -->",count);
// }


let d=[1,2,3,4,5,6,7,8];
/*for(let i=0;i<d.length;i++){
    d[i]=d[i]+2;
}

console.log(d); */


for(let i=d.length-1;i>=0;i--){
    if(d[i]%2!=0)
}