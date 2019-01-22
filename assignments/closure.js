// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const showIncreasedFrustration = () => {
  let frustrationLevel = 0;
  let increaseFrustration = function() {
    let scream = 'Ar';
    for (let i=0; i<frustrationLevel; i++) {
      scream = scream + 'r';
    }
    scream = scream + 'gh';
    frustrationLevel = frustrationLevel + 1;
    console.log(scream);
  }
  return increaseFrustration;
};

const newScream = showIncreasedFrustration();
newScream();
newScream();
newScream();
newScream();
newScream();
newScream();
newScream();
newScream();
newScream();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  let inc = function() {
    count = count + 1;
    console.log(count);
    return count;
  };
  return inc;
};
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
