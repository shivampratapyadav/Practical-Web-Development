let singleQuotes = 'Strings of single quotes';
let doubleQuotes = "String of double quotes";

console.log(singleQuotes);
console.log(doubleQuotes);

let ch = singleQuotes.charAt(2);
let substr = singleQuotes.substring(2,8);
let charAscii = singleQuotes.charCodeAt(7);
console.log(charAscii);
console.log(ch);
console.log(substr);


let arrOFstring = singleQuotes.split(" ");
console.log(arrOFstring);

//split splits the strings from the given parameter  and returns it in the form of array:
let arrofstring = singleQuotes.split("i");
console.log(arrofstring);

//join joins the elements of array withe the given parameter between them:
console.log(arrofstring.join("i"));

//trim : -> removes the spaces from the beginning and end of the string:
let str= "            hello                    ";
console.log(str);
console.log(str.trim());
