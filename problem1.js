
//Coding Problem 1

//What is a promise? What are promises used for?  What are pro/cons to using a promise?  Please code some examples of promises to show to the class. Make sure to go into detail as you explain your code to the class.

// Promises are used to handle asynchronous operation in a more organized and reliable way

// Pros of using Promises
//1 Error handling : Promises provide a consistant way to handle error that occur during operation
//2 Native browser support : Promises are supported in modern web browser and are standerize part of the javascript language

// Cons of using Promises
//1  Incompatibility with older browser: promises are not supported in older version of some web browser
//2 Learning Curve : Promises introduce a new concept and require some understanding to use effectively 

const myPromise = new Promise((resolve,reject) => {
    const randomNumber = Math.random();
    if(randomNumber < 0.8) {
        resolve(randomNumber);
    } else {
        reject(new Error('Random number is greater than 0.8'));
    }
});
myPromise.then((result) => {
    console.log('success:', result);
})
.catch((error) => {
    console.log('Error:', error.message);
});