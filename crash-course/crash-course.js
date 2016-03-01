// VARIABLES are defined with var

var foo = 3;      // Remember to put semicolons at the end of stuff!
                  // Javascript _won't_ yell at you about this, but
                  // weird stuff will break!
                  
var bar = "hello world!";  // Assigning integers, floats, strings, etc. all work the same way







// PRINTING
console.log("-------------");
console.log("PRINTING");
console.log("-------------");

console.log(foo);  // '3' will appear in the JS console (note: NOT the webpage itself!)
console.log(bar);








/*
// CONTROL FLOW
console.log("-------------");
console.log("CONTROL FLOW");
console.log("-------------");

// If statements should be familiar
if (foo > 0) {
  console.log("foo is greater than zero!");
}
else {
  console.log("foo is less than or equal to zero");
}

// Similarly with while loops
while (foo > 0) {
  console.log("foo is " + foo);
  foo = foo - 1;
}

// For loops are weirder than in Python
for(var i = 0; i < bar.length; ++i) {
  console.log( bar[i] );
}
*/






/*
// DATA STRUCTURES
console.log("-------------");
console.log("DATA STRUCTURES");
console.log("-------------");

// Lists are called "arrays" but work very similar to python
var arr = ['a', 'b', 'c'];
console.log(arr);
console.log(arr[0]);

// Dictionary-style structures are called "Objects" in JS
var obj = {
  daz: 3,
  bip: 'this is bip!',
  hab: true
}
console.log(obj);
console.log( obj['bip'] );   // Array-style bracketing
console.log( obj.bip );      // Fancy dot syntax!

// Add a new property to our object
obj.tulp = 'tulp value';
console.log( obj.tulp );
*/




/*
// FUNCTIONS
console.log("-------------");
console.log("FUNCTIONS");
console.log("-------------");

// Functions are awesome and weird in JS

// Define a named function
function double(input) {
  return input * 2;
}

var doubledFive = double(5); // Call the function
console.log(doubledFive);

// Define a function and assign it to a name
// Functions are values now! We can assign them to variables!
var triple = function(input) {
  return input * 3;
}

var tripledSeven = triple(7); // Call the function exactly the same way
console.log(tripledSeven);

*/


/*
console.log("-------------");
console.log("FUNCTIONS AS PARAMETERS");
console.log("-------------");

// Functions can now be passed to other functions as arguments
function helloWorldWithCallback(callback) { // callback will be a function itself!
  console.log("\n")
  console.log("hello");
  callback();
  console.log("world!");
  console.log("\n")
};

function fooBar() {
  console.log("foo bar!");
}

helloWorldWithCallback(fooBar); // Pass foobar function as a parameter!

// Pass an ANONYMOUS FUNCTION as a parameter:
helloWorldWithCallback(function() {
  console.log("anonymous function!");
});
*/
