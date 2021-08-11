//First Question Solution:
/* function frames(a,b){
    console.log(parseInt(a)*parseInt(b)*60);
}

frames(1,1);
frames(10,1);
frames(10,25);
*/

//Second Question Solution:
/*function addUp(a){
    
    let sum=0;
    for(let i=1;i<=a;i++){
        sum+=i;
    }
    console.log(sum);
}

addUp(4);
addUp(13);
addUp(600);
*/

//THIRD Question Solution:
/*function binary(a){
    let num=0;
    let rem;
    let pow=1;
    while(a!=0){
        rem=a%2;
        a=parseInt(a/2);
        num=num+rem*pow;
        pow=pow*10;
    }
    
    console.log(num+"");
}

binary(1);
binary(5);
binary(10);
*/


//Fourth Question Solution:
/*function tuckIn(arr1, arr2){
   let deleted=arr1.splice(1,1);
arr2=arr1.concat(arr2);
console.log(arr2.concat(deleted));
}

tuckIn([1,10],[2,3,4,5,6,7,8,9]);
tuckIn([15,150],[45,75,35]);
tuckIn([[1,2],[5,6]],[[3,4]]);
*/

//Fifth Question Solution:
/*function countTrue(arr1){
    let count=0;
    for(let i of arr1){
        count=count+i;
    }
    console.log(count);
}

countTrue([true,false,false,true,false]);
countTrue([false,false,false,false]);
countTrue([]);
*/



//Sixth Question Solution:
/*function arrayOfMultiples(a,b){
    let arr=new Array(parseInt(b));
    for(let i=0;i<arr.length;i++){
        arr[i]=a*(i+1);   
    }
    console.log(arr);
}

arrayOfMultiples(7,5);
arrayOfMultiples(12,10);
arrayOfMultiples(17,6);
*/

//Seventh Questrion Solution:
/*function getLength(arr){
    let a = arr.flat(Infinity);
    console.log(a);
    let b;
    if (arr.length = 0)
      b = 0;

    else
    b = a.length;
    
    console.log(b);
  }



  getLength([1,[2,[3,4]]]);
  */

  //Eighth Question Solution:
  /*
  function numInStr(arr){
      for(let i=arr.length-1;i>=0;i--){
          let st=arr[i];
          for(let j=0;j<st.length;j++){
              if(st.charCodeAt(j)>=48 && st.charCodeAt(j)<=57){
                  break;
              }
              else{
                  arr.splice(i,1);
              }

          }
      }

      console.log(arr);
  }

  numInStr(["1a","a","2b","b"]);
*/

//Nineth Question Solution:
function missing(arr1,arr2){
for(let i=0;i<arr2.length;i++){
    for(let j=0;j<arr1.length;j++){
        if(arr2[i]==arr1[j]){
            arr1.splice(j,1);
            break;
        }
    }
}
for(let k of arr1){
    console.log(k);
}
}

missing([1,2,3,4,5,6,7,8],[1,3,4,5,6s,7,8]);
missing([true,true,false,false,true],[false,true,false,true]);