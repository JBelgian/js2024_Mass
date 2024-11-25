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