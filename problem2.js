//Coding Problem 2 

//What is a callback? What is callback hell? Why does callback hell occur and why should we avoid callback hell?  Please code an example of callback hell to show to the class. Make sure to go into detail as you explain your code to the class.

// What is a call back ?
// A call back is a function that is passed as an argument to another function and is executed at a later point in the program
// by enabling a function to be called once an operation or task is completed

//What is a callback hell ?
//refers to a situation where multiple nested callbacks are used , making the code difficult to read and to maintain

operation1(function(result1) {

    operation2(result1, function(result2) {

        operation3(result2, function(result3) {
            console.log(result3);
        });
    });
});