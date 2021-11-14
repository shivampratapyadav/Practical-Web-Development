// fn()-> key: value->(property)
//fn()-> key: function->(method)


let cap={
    name :"Steve",
    lastName :"Rogers",
    address : {
        city : "Manhatten",
        state : "New York"
    },
    age : 35,
    isAvenger : true,
    movies : ["First Avenger", "Winter Soldier", "Civil War"],
    sayHi : function(){
        console.log("Cap Says Hi");
    }
};

/*
console.log(cap);
console.log(cap.name);
console.log(cap.age);
console.log(cap.isAvenger);
console.log(cap.movies);
cap.age =37;
cap.isAvenger = false;
console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''");
console.log(cap);
//How to delete a key value pair:
delete cap.address;
//how to add a key value in the object:
cap.friends = ["tony", "bruce", "peter"]
*/

for (let key in cap) {
    console.log(key, " : ", cap[key]);
}

let propKey = "age";
console.log(1,cap.age);
console.log(2,cap[propKey]);
console.log(3,cap["age"]);

