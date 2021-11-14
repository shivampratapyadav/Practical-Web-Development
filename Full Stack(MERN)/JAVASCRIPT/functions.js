//Non primitive -> arrays, objects, functions.
//Simple Function:
function helloUser(name){
    console.log("Hello ",name);
    return "returned from the function";
}

//Function Call
let funcVal = helloUser("Shivam");
console.log(funcVal );

function test(Parameter){
}


let i = test(1);//this will store default return value(undefined) of the function  into i.
console.log(i);
