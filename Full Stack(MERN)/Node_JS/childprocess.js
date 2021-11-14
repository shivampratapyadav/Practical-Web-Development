/*
Node js is just like a smart phones:
which has apps in it,
just like that, we have modules in node js.


just like we touch ad use appps and interacts withe them, just like that we use these modules withthe help of js.
*/


let cp = require("child_process");

/*
//Open Calculator using execSync:

console.log("Opening Calculator\n");
cp.execSync("calc");
console.log("Calculator Opened ;)");

*/


/*
//Open VS Code using execSync:

console.log("Opening VS Code\n");
cp.execSync("Code");
console.log("VS Code Opened ;)");

*/

/*

//How to open a website on chrome using child processes -> execSync() in Node JS.

console.log("Opening the given website on chrome");
cp.execSync("start chrome https:\\www.hackerrank.com");

console.log("opened the given website on chrome");
*/


let output = cp.execSync("node abc.js");
console.log("output 🔥 "+output);