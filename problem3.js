//Coding Problem 3

//The “this” keyword works differently in arrow functions vs regularly declared functions.  Explain how the “this” keyword works differently in arrow functions vs normal functions.  Write some code that shows that you understand the difference between how the “this” keyword is used.  Make sure to go into detail as you explain your code to the class.

// Regular Function 
//In a regular function, the value of this is determined on how the function is called

//Arrow Function 
///The value of this inside an arrow function is lexically scoped, meaning it captures the this value from it enclosing context


 function add5(x){
    return x+5
 }
 const subtract = (x,y) => {
    return x-y;
 }