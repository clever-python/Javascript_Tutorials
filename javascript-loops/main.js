//We are here to learn about the basic loops understanding in the world of javascript. Loops concept is 
//present in all the language. It make works faster. In javascript we have following loops we will discuss them
//one by one as follows: 

//  (1)-> for loop  : It is one of the most basic loops. it contains three arguments as conditions
//This example prints 1 to 5 numbers :

for (let a = 1; a<6; a++) {
    console.log(a);
}

//  (2)-> If else loop : 

var b = 20;
if(b == 20) {
    console.log("Equal");
}
else {
    console.log("not equal");
}
//In this we also have ternary operator which works similar to the if else loops as shown below :
//Syntax : condition ? true statement : false statement ;

//  (3)-> While loop : 
var c = 30;
while (c<35) {
    console.log(c);
    c++;
}

// (4)-> Do while loop : It Executes one time whether the condition is true or not 

var d  = 5;
do {
    console.log(d);
    d++;
}while(d<10);

//Note -> We have other two different types of keywords to alter our loops and their iteration 
//These are break and continue ....
//Break makes the loops to exit where the break is set 
//whereas continue skips that particular iteration but it does not exit as like as  break ....it just 
//skip that one iteration and keep executing

