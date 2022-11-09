//In javascript, we can store different datatypes in array :

var a = [1,2,'singh', true];
console.log(a);

var b = [2, 4, 1, 8, 10];
//to check index of any element of array 
console.log(b.indexOf(4));
//if we try to find index of that element that is not present in array we get -1
console.log(b.indexOf(11));  //-1

//splice method of array : it returns new array which you splice from the array 
let newArray = b.splice(1, 1); //first argument is index of starting and second for how many items after index
console.log(newArray);   //[4]
//the old array is also changed due to splicing of old array. In order to keep changes in our old array 
//we can use slice it just copy the part of the old array instead of changing old array 
console.log(b);   // [ 2, 1, 8, 10 ]

//join method make array into an string literal 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(','));   //Banana,Orange,Apple,Mango
//we also can use toString method to change an array into string
console.log(fruits.toString()); //Banana,Orange,Apple,Mango

//pop method : it removes the last element of the array and it returns the pop out element 
fruits.pop();
console.log(fruits);  //[ 'Banana', 'Orange', 'Apple' ]

//concatenation of the arrays :
var c = [1, 2];
var d = [5,3,52];
var n = c.concat(d);
console.log(n);


//push method : it add a new element in the end of the array and it returns the new array length
let newArr = fruits.push('Guava');
console.log(newArr);    //4
console.log(fruits);    //[ 'Banana', 'Orange', 'Apple', 'Guava' ]

//we see pop and push method work only for last element to work in array with first element we have 
//shift method : it removes the first elmeent of the array and it returns the value that was shifted out 
fruits.shift();
console.log(fruits);    //[ 'Orange', 'Apple', 'Guava' ]

//unshift method : it add an new element at the beginning of the array and it returns the lenght of the array 
console.log(fruits.unshift('Pineapple'));  //it give 4 as length of array 
console.log(fruits);










