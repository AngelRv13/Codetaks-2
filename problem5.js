//What is a async/await? Why is async/await useful?  What are pro/cons to using async/await?  Please code some examples of async/await to show to the class. Make sure to go into detail as you explain your code to the class.

// what is async await ? 
// is a syntatctic feature introduce in Javascript to handle  asynchronus operation in a more reliable manner

// why is async / awaits useful
// Readabillity : Async /await allow you to write asychronous code which is easier to read and understand compared to nested callbacks or chain promises

//Pros of async/awaits ?
// Compataibility with Promises , allowing seamless integration with existing codebases

//cons of async/awaits ?
// it may not be suited for all scenerios

function getMessage() {
    return new Promise (resolve => resolve ("Hello world")
    )
}

 async function main() {
 const message = await getMessage();
 console.log(message);
   
}
main();