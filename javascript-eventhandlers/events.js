//In javacript, Event handlers help us to maintain and done task at specific interval of time
count = 0;
var interval;
// setTimeout() => This function is used only once when the timer reaches 
function sayHello() {
    count++;
    console.log("Hello! How are you ")
    //clearing the interval 
    if(count == 5) {
        clearInterval(interval);
    }
}
setTimeout(sayHello, 2000);

// setInterval() => This function is used to maintain an event at regualr intervals 
interval = setInterval(sayHello, 1000);

// in order to stop the interval we need to clear the interval

//we also have addEventListener to handle events : this property does not override the event driver function as
//the only onclick event do 
//It takes two arguments first is the event name and second is the event handler function


