// // Chapter 9 to 11

// // Question 01

// var cityName = prompt("Enter city name");

// if (cityName === "Karachi") {
//     alert("Welcome to the City of Lights");
// }

// else {
//     alert("Welcome to " + cityName);
// }

// // Question 02

// var gender = prompt("Enter your gender");

// if (gender === "male") {
//     alert("Good Morning Sir!");
// }

// else {
//     alert("Good Morning Ma'am!");
// }

// // Question 03

// var signal = prompt("Enter traffic signal color");

// if (signal === "red") {
//     alert("Must Stop");
// }

// else if (signal === "yellow") {
//     alert("Ready to Move");
// }

// else if (signal === "green") {
//     alert("Move Now");
// }

// // Question 04

// var fuel = +prompt("Enter fuel level in liters");

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// else {
//     alert("Fuel is enough");
// }

// // Question 05

// var a = 4;

// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// //It worked.

// var b = 82;

// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// // It didn't worked. B is 82.

// var c = 12;

// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// // It didn't worked. C is 12.

// if (c === 13) {
//     alert("condition 2 is true");
// }
// // It worked. C is 13 now.

// if (++c < 14) {
//     alert("condition 3 is true");
// }
// // It didn't worked. C is 14 and not less than 14.

// if (c === 14) {
//     alert("condition 4 is true");
// }
// // It worked. C is 14.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// // It worked. Because totalCost is equal to laborCost + materialCost.

// if (true) {
//     alert("True");
// }
// // It worked.

// if (false) {
//     alert("False");
// }
// // It didn't worked because condition is false.

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// // It worked. Because 'r' comes before 't' in the alphabet.

// // Question 06
// var obtMarks1 = +prompt("Enter the marks for your 1st subject (0-100):");
// var obtMarks2 = +prompt("Enter the marks for your 2nd subject (0-100):");
// var obtMarks3 = +prompt("Enter the marks for your 3rd subject (0-100):");

// var totalMarks = 300;
// var obtMarks = obtMarks1 + obtMarks2 + obtMarks3;
// var percentage = (obtMarks / totalMarks) * 100;
// var grade;
// var remarks;

// if (percentage >= 80) {
//     grade = "A-One";
//     remarks = "Excellent";
// }

// else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }

// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }

// else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h2>Mark Sheet</h2>");
// document.write("<p>Total Marks : " + totalMarks + "</p>");
// document.write("<p>Marks Obtained : " + obtMarks + "</p>");
// document.write("<p>Percentage : " + percentage + "%</p>");
// document.write("<p>Grade : " + grade + "</p>");
// document.write("<p>Remarks : " + remarks + "</p>");

// // Question 07
// var secretNum = 4;
// var userNum = +prompt("Guess the number between 0 to 10:");

// if (userNum === secretNum) {
//     alert("Bingo! Correct answer");
// }

// else if (userNum === secretNum + 1 || userNum === secretNum - 1) {
//     alert("Close enough to the correct answer");
// }

// else {
//     alert("Wrong Guess");
// }

// // Question 08
// var userNum2 = +prompt("Enter a number to check if it is divisible by 3:");

// if (userNum2 % 3 === 0) {
//     alert("The number is divisible by 3.");
// }

// else {
//     alert("The number is not divisible by 3.");
// }

// // Question 09
// var userNum3 = +prompt("Enter a number to check if it is even or odd:");

// if (userNum3 % 2 === 0) {
//     alert("The number is even.");
// }

// else {
//     alert("The number is odd.");
// }

// // Question 10
// var temp = parseInt(prompt("Enter the temperature in degree celcius:"));

// if (temp > 40) {
//     alert("It is too hot outside.");
// }

// else if (temp > 30) {
//     alert("The weather today is normal.");
// }

// else if (temp > 20) {
//     alert("Today's weather is cool.");
// }

// else if (temp > 10) {
//     alert("OMG! Today's weather is so cool.");
// }

// else {
//     alert("It's very cold outside.");
// }

// // Question 11
// var firstNumber = +prompt("Enter the first number for simple calculator:");
// var secondNumber = +prompt("Enter the second number for simple calculator:");
// var operation = prompt("Enter the operation for simple calculator (+, -, *, /, %):");

// var result;

// if (operation === "+") {
//     alert(firstNumber + secondNumber);
// }

// else if (operation === "-") {
//     alert(firstNumber - secondNumber);
// }

// else if (operation === "*") {
//     alert(firstNumber * secondNumber);
// }

// else if (operation === "/") {
//     alert(firstNumber / secondNumber);
// }

// else if (operation === "%") {
//     alert(firstNumber % secondNumber);

// }

// else {
//     alert("Invalid operation.");
// }

// Chapter 12 to 13

// // Question 01

// var char = prompt("Enter a character:");

// if (char >= 0 && char <= 9) {
//     alert("Number");
// }

// else if (char >= "a" && char <= "z") {
//     alert("Lowercase Alphabet");
// }

// else if (char >= "A" && char <= "Z") {
//     alert("Uppercase Alphabet");
// }

// else {
//     alert("Special Character");
// }

// // Question 02

// var userNum1 = +prompt("Enter the first number:");
// var userNum2 = +prompt("Enter the second number:");

// if (userNum1 === userNum2) {
//     alert("Numbers are equal");
// }

// else if (userNum1 > userNum2) {
//     alert(userNum1 + " is greater");
// }

// else {
//     alert(userNum2 + " is greater");
// }

// // Question 03

// var userNum = +prompt("Enter a number:");

// if (userNum > 0) {
//     alert("It is a positive number");
// }

// else if (userNum < 0) {
//     alert("It is a negative number");
// }

// else {
//     alert("It is zero or alphabet or special character");
// }

// // Question 04

// var userChar = prompt("Enter a character:");

// if (userChar === "a" || userChar === "e" || userChar === "i" || userChar === "o" || userChar === "u") {
//     alert("It is a vowel");
// }

// else if (userChar === "A" || userChar === "E" || userChar === "I" || userChar === "O" || userChar === "U") {
//     alert("It is a vowel");
// }

// else {
//     alert("It is a consonant");
// }

// // Question 05

// var pass = "123123";
// var userPass = prompt("Enter your password:");

// if (userPass === pass) {
//     alert("“Correct! The password you entered matches the original password");
// }

// else if (userPass === "") {
//     alert("Please enter your password");
// }

// else {
//     alert("Incorrect Password");
// }

// // Question 06

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// }

// else {
//     greeting = "Good evening";
// }

// // Question 07

// var userTime = +prompt("Enter the time in this format (2400)");

// if (userTime >= 0000 && userTime <= 1200){
//     alert("Good Morning!");
// }

// else if (userTime > 1200 && userTime <= 1700){
//     alert("Good Afternoon!");
// }

// else if (userTime > 1700 && userTime <= 2100){
//     alert("Good Evening!");
// }

// else if (userTime > 2100 && userTime <= 2359){
//     alert("Good Night!");
// }

// else{
//     alert("Invalid Time");
// }



// // Extra Exercises

// // Chapter 10

// // Question 01

// var city = "Karachi";
// if (city === "Karachi") {
//     console.log("The City of Lights");
// }
// // The comparison operator was incorrect. It was fixed.

// // Question 02

// var x = 5;
// var y = 5;

// if (x === y) {
//     var z = +prompt("Enter a value for z:");
// }


// // Question 03

// var zipCode = prompt("Enter your zip code:");

// if (zipCode === "10010") {
//     alert("Karachi");
// }

// else{
//     alert("Please write correct city");
// }

// // Question 04

// var userNum3 = +prompt("Enter a number:");

// if (userNum3 === 4){
//     userNum3 = 1;
// }

// // Chapter 11

// // Question 01

// if (x !== y) {
//     alert("Not equal");
// }

// // Question 02

// if (x >= y) {
//     alert("x is greater than or equal to y");
// }

// // Question 03

// if (x !== 5) {
//     x = 5;
// }

// // Question 04

// if (x !== y) {
//     alert("Congratulations!");
// }

// // Question 05

// var firstName = prompt("Enter your first name:");

// if (firstName !== "Ali") {
//     alert("No Match");
// }

// // Chapter 12

// // Question 01

// var c = 42;
// var d = 52;

// if (c >= d) {
//     alert("c is greater than or equal to d");
// }

// else {
//     alert("c is smaller than d");
// }

// // Question 02

// var totalObtMarks = +prompt("Enter total marks obtained out of 100:");
// var calcPercentage = (totalObtMarks / 100 * 100);

// if (calcPercentage >= 80) {
//     alert("A-One");
// }

// else if (calcPercentage >= 70) {
//     alert("A");
// }

// else if (calcPercentage >= 60) {
//     alert("B");
// }

// else if (calcPercentage >= 50) {
//     alert("C");
// }

// else {
//     alert("Fail");
// }

// // Question 03

// var a = 5;

// if (a === 10) {
//     alert("a is 10");
// }

// else {
//     alert("The correct value of a is " + a);
// }

// // Question 04

// var userCityName = prompt("Enter your city name:");

// if (userCityName === "Karachi") {
//     alert("Acknowleding it's Karachi.");
// }

// else if (userCityName === "Lahore") {
//     alert("Acknowleding it's Lahore.");
// }

// else {
//     alert("It's neither Karachi nor Lahore");
// }

// // Chapter 13

// // Question 01

// if (a === b && c === d) {
//     alert("Both conditions are true.");
// }

// // Question 02

// if (a === b || c !== d) {
//     alert("At least one of the conditions is true.");
// }

// // Question 03

// if (name === "Hamza" || name === "Arsalan" && age < 60) {
//     alert("You are allowed to enter.");
// }

// // Question 04

// var num1 = 50;
// var num2 = 70;

// if (num1 > num2 || num2 > num1){
//     alert("num1 is greater or lesser than num2");
// }

// // Question 05

// var firstName = "Junaid";
// var lastName = "Khan";

// var userFirstName = prompt("Enter your first name:");
// var userLastName = prompt("Enter your last name:");

// if (userFirstName === firstName && userLastName === lastName) {
//     alert("Welcome " + firstName + " " + lastName);
// }

// // Chapter 14

// // Question 01

// if (userPass !== "") {
//     if (userPass < 5) {
//         alert("Password must be greater than 5")
//     }

//     else {
//         alert("OK");
//     }
// }

// // Question 02

// if (a === 1) {
//     if (c === "Max") {
//         alert("OK");
//     }
// }

// // Question 03

// if (a === 1 && c === "Max") {
//     alert("OK");
// }

// // Question 04

// var g = 55;
// var h = 55;

// if (g === h) {
//     if (g <= h) {
//         alert("OK");
//     }
// }