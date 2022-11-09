//Objects are key value pairs in javascript. There are several ways to describe and initializes an object 

var details = {
    name : 'sourabh' ,
    age : 20,
    class: 'BCA ' ,
}
console.log(details)
//we also can access properties of objects 
console.log(details.name);
console.log(details.age);

//another way to create an objects in javascript is as follow :
var obj = new Object;
obj.name = 'Raghav';
obj.marks = 100;
console.log(obj);

//another way to create an objects in javascript is as follow :
var obj1 = Object.create(null);  //null show that it is not inheriting any features from other objects 
obj1.name = 'aryan';
console.log(obj1);

//It must be noted that in javascript each and every object has prototype of the global objects and this global
//objects have predefined properties and features we can use them in the properties of our object
var person = {
    name : 'kalu'
}
Object.prototype.randomfn = function() {    //we add our properties in global objects which can be user with every object
    console.log("hello sourabh ");
}
console.log(person.__proto__)
person.randomfn();
details.randomfn();
//we can inherit properties of one object to other oobject
var stud = {
    name : 'kajal'
}
var det = Object.create(stud);

console.log(det.name);

// We can say that prototype is inheritance for any object and each object always has an prototype global object
//we can create instance of objects




