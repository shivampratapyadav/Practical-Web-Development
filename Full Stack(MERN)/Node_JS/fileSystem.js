//fileSystem
//File System:  create, read, update, delete:

let fs = require("fs");

//Read:
//let buffer = fs.readFileSync("abc.js");

//console.log("Binary Data "+buffer);

//Create:
//fs.openSync("abc.txt", "w");

//Write in the file:
//no file -> create and if file already exists ->replace content:
//fs.writeFileSync("abc.txt","Hum aaj cowding Kar rahe hain 🤷‍♂️😜.");

//Update file:
//if file not present -> create, otherwise, appends the entered content at the last of the content of given file.
//fs.appendFileSync("abc.txt", " Coding karte raho, maje lete raho.\nRojj lo mauj lo.😂👍😎😉");

//Folder System

//Make a folder/Dirctory:
// fs.mkdirSync("meriDirectory");

// fs.writeFileSync("meriDirectory/meriFile.txt", "Mera content.");
// fs.writeFileSync("meriDirectory/abc2.txt","abc2 ka content.");
// fs.writeFileSync("meriDirectory/abc.txt","abc ka content.");


//To Read A Directory and gives the names of files in an array:
//let content = fs.readdirSync("meriDirectory");
//console.log(content);

/*

for(let i=0;i<content.length;i++){
    console.log("file ", content[i], " is removed.");
    //Remove File:
    fs.unlinkSync("meriDirectory/"+content[i]);

}

*/

//Remove Folder:
//fs.rmdirSync("meriDirectory");

//fs.existSync -> if a file exiss at a path -> true/false
let doesPathExist =fs.existsSync("abc.txt");
console.log(doesPathExist);

doesPathExist =fs.existsSync("abcd.txt");
console.log(doesPathExist);

//fs.lstatSync -> fs.lstatSync
let detailsObj = fs.lstatSync(__dirname+"\\fileSystem.js");
let ans= detailsObj.isFile();
console.log(ans);

ans = detailsObj.isDirectory();
console.log(ans);

