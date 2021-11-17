let path = require("path");


/*
Write a program to make 10 folders using node js -> fileSystem module and in them 

let fs = require("fs");


for(let i=1;i<=10;i++){

    let dirPathToMake = `Lecture-${i}`;

    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(path.join(dirPathToMake, "readme.md"), `# readme for ${dirPathToMake}`);

}
*/

let ext = path.extname( path.join(__dirname, "abc.js") );
console.log("ext", ext);

let name = path.basename(__dirname);
console.log(name);

name =path.basename(path.join(__dirname, "abc.js"));
console.log(name);