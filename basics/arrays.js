const students = [
    { name: "Alice", age: 22, grade: "A", major: "Computer Science" },
    { name: "Bob", age: 20, grade: "B", major: "Mathematics" },
    { name: "Charlie", age: 23, grade: "A", major: "Physics" },
    { name: "Diana", age: 21, grade: "B", major: "Computer Science" },
    { name: "Eve", age: 19, grade: "C", major: "Biology" }
];

// Tasks:
// 1. Create an array of just student names
const studentNames = students.map(student => student.name);
console.log(studentNames); // ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']

// 2. Filter students with grade "A"
const gradeAStudents = students.filter(student => student.grade === "A");
console.log(gradeAStudents); // [{name: 'Alice', ...}, {name: 'Charlie', ...}]

// 3. Calculate the average age of all students
const totalAge = students.reduce((sum, student) => sum + student.age, 0);
const averageAge = totalAge / students.length;
console.log(averageAge); // 21

// 4. Create a new array with students' names in uppercase
const uppercaseNames = students.map(student => student.name.toUpperCase());
console.log(uppercaseNames); // ['ALICE', 'BOB', 'CHARLIE', 'DIANA', 'EVE']

// 5. Find the youngest student in the roster
// Step 1: Get an array of all ages
const ages = students.map(student => student.age);

// Step 2: Find the minimum age
const minAge = Math.min(...ages);

// Step 3: Filter the student(s) with the minimum age
const youngestStudent = students.filter(student => student.age === minAge)[0];

console.log(youngestStudent); // { name: 'Eve', age: 19, ... }


////////////////////////// OTHER EXAMPLES //////////////////////////
/// WAX-ON / WAX-OFF //////////////////////////////////////////////

let myArray = [
    {
        name: "apple",
        price: 1.99,
        quantity: 5,
        category: "fruit"
    },
    {
        name: "banana",
        price: 2.99,
        quantity: 10,
        category: "fruit"
    },
    {
        name: "carrot",
        price: 0.99,
        quantity: 20,
        category: "vegetable"
    },
    {
        name: "lettuce",
        price: 1.99,
        quantity: 10,
        category: "vegetable"
    },
    {
        name: "broccoli",
        price: 2.99,
        quantity: 5,
        category: "vegetable"
    },
    {
        name: "orange",
        price: 1.99,
        quantity: 10,
        category: "fruit"
    },
    {
        name: "grape",
        price: 2.99,
        quantity: 5,
        category: "fruit"
    }
];

// create a function that takes an array of objects
// and checks if there is fruit in the array
// if there is fruit, return true
// if there is no fruit, return false

// the clasic way
function checkForFruit(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].category === "fruit") {
            return true;
        }
    }
    return false;
}

// Syntactic sugar for the above
// Now using an buil-in array method: includes
// Map does a callback on every item in the array and returns a new array with the results
// If no item matches the condition, it returns undefined

function checkForFruitIncludes(array) {
    const category = array.map(item => item.category);
    return category.includes('fruit');
}


// Now using an buil-in array method: find
// Find does a callback on every item in the array and returns the first item that matches the condition
// If no item matches the condition, it returns undefined

function checkForFruitFind(array) {
    return array.find(item => item.category === "fruit");
    // return array.find(function (item) {
    //     return item.category === "fruit";
    // })
}
console.log(checkForFruitFind(myArray));

// Now using an buil-in array method: some (opposite of every)
// Some is useless in this case because we are not checking if all items match the condition
// Some does a callback on every item in the array and returns true if any item matches the condition (possible scenario check food for nut allergy)
// If no item matches the condition, it returns false

function checkForFruitSome(array) {
    return array.some(item => item.category === "fruit");
}

console.log(checkForFruitSome(myArray));

// Now using an buil-in array method: every
// Every does a callback on every item in the array and returns true if all items match the condition
// If any item does not match the condition, it returns false

function checkForFruitEvery(array) {
    return array.every(item => item.category === "fruit");
}

console.log(checkForFruitEvery(myArray));

// Now using an buil-in array method: filter
// Filter does a callback on every item in the array and returns a new array with the items that match the condition
// If no item matches the condition, it returns an empty array

function checkForFruitFilter(array) {
    return array.filter(item => item.category === "fruit");
}

console.log(checkForFruitFilter(myArray));

// Now using an built-in array method: forEach
// ForEach does a callback on every item in the array
// If no item matches the condition, it returns true or false

function checkForFruitForEach(array) {
    let result = false;
    array.forEach(item => {
        if (item.category === "fruit") {
            result = true;
        }
    });
    return result;
}

console.log(checkForFruitForEach(myArray));

// Get the items that cost more then 5 dollars

function getItemsThatCostMoreThanTwo(array) {
    return array.filter(item => item.price > 5);
}
console.log(getItemsThatCostMoreThanTwo(myArray));

function sortByPrice(array) {
    // make and endpoint call to the api 
    // SELECT * FROM products WHERE category = 'fruit' ORDER BY price DESC;
    return array.sort((a, b) => {
        // if a is less than b, return -1
        if (a.price < b.price) {
            return -1;
        }
        // if a is greater than b, return 1
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    });
}

// Sort the array by price with ternary operator
function sortByPriceTernary(array) {
    return array.sort((a, b) => {
          return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
    });
}

// REDUCE - takes an array of objects and returns a single value
// https://www.youtube.com/watch?v=s1XVfm5mIuU
// total is the accumulator
// item is the current item in the array
// 0 is the initial value of the accumulator
// the initial value of the accumulator is optional
// if you don't provide an initial value, the first item in the array will be used as the initial value
// Get the total quantity of all items in the fruit category

function getTotalQuantityOfFruitReduce(array) {
    return array.reduce((total, item) => {
        if (item.category === "fruit") {
            return total + item.quantity;
        }
        return total;
    }, 0);
}

console.log('amount of fruits: ' + getTotalQuantityOfFruitReduce(myArray));

// Why Is Array/Object Destructuring So Useful And How To Use It
// https://www.youtube.com/watch?v=NIq3qLaHCIs
// Destructuring is a way to extract data from an array or object
// and assign it to a variable
// Destructuring an array
let myArray3 = ["apple", "banana", "carrot"];
let [fruitD1, fruitD2, fruitD3] = myArray3;
console.log(fruitD1); // apple

// Destructuring an object
let myObject = {
    fruitname: "apple",
    price: 1.99,
    quantity: 5,
    category: "fruit",
    origin: {
        country: "USA",
        state: "California"
    }
};

let { fruitname, price, ...rest} = myObject;
let { country, state } = myObject.origin;
let { origin: { country: country2, state: state2 } } = myObject;
console.log(rest); // apple
console.log (country); // USA
console.log (state); // California 
console.log (country2); // USA
console.log (state2); // California