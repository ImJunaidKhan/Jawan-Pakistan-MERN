// // Assignment 14 - JS Class 5 - Math and Date

// // Chapter 26 - 30

// // Q1
// var posInt = +prompt("Enter a positive integer number:");

// document.write("<h3>Number: " + posInt + "</h3>");
// document.write("<h3>Round Off Value: " + Math.round(posInt) + "</h3>");
// document.write("<h3>Floor Value: " + Math.floor(posInt) + "</h3>");
// document.write("<h3>Ceil Value: " + Math.ceil(posInt) + "</h3>");

// // Q2
// var negInt = +prompt("Enter a negative integer number:");

// document.write("<h3>Number: " + negInt + "</h3>");
// document.write("<h3>Round Off Value: " + Math.round(negInt) + "</h3>");
// document.write("<h3>Floor Value: " + Math.floor(negInt) + "</h3>");
// document.write("<h3>Ceil Value: " + Math.ceil(negInt) + "</h3>");

// // Q3
// var absValue = +prompt("Give any number for absolute value:");
// document.write("<h3>The absolute value of " + absValue + " is " + Math.abs(absValue) + "</h3>");

// // Q4
// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("<h3>Random Dice Value: " + diceValue + "</h3>");

// // Q5
// var coinFace = Math.floor(Math.random() * 2) + 1;

// if (coinFace === 1) {
//     document.write("<h3>" + coinFace + "<br>Random Coin Value: Tails</h3>");
// }

// else {
//     document.write("<h3>" + coinFace + "<br>Random Coin Value: Heads</h3>");
// }

// // Q6
// var randNum = Math.floor(Math.random() * 100) + 1;
// document.write("<h3>Random number between 1 and 100: " + randNum + "</h3>");

// // Q7
// var userWeight = parseFloat(prompt("Please enter your weight in KG:"));
// document.write("<h3>The weight of user is " + userWeight + " Kilograms</h3>");

// // Q8
// var secretKey = Math.floor(Math.random() * 10);
// var guessKey = +prompt("Guess the secret number:");

// secretKey == guessKey ? alert("Correct Guess!") : alert("Sorry, Wrong Guess! Try Again.");

// document.write("<h3>Random Secret Key: " + secretKey + "</h3>");
// document.write("<h3>Your Guessed Key: " + guessKey + "</h3>");


// // Chapter 31 - 34

// // Q1
// document.write("<h3>" + new Date() + "</h3>");

// // Q2
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write("<h3>Current Month: " + months[new Date().getMonth()] + "</h3>");

// // Q3
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert("Today is " + days[new Date().getDay()].slice(0, 3));

// // Q4
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// if (days[new Date().getDay()] == "Sunday" || days[new Date().getDay()] == "Saturday") {
//     alert("Today is Fun Day!");
// }

// else {
//     alert("It's a working day!");
// }

// // Q5
// var currentDate = new Date().getDate();

// currentDate <= 15 ? document.write("<h3>First fifteen days of the month</h3>") : document.write("<h3>Last days of the month</h3>");

// // Q6
// var date = new Date();
// var milliSeconds = date.getTime();
// var minutes = milliSeconds / (1000 * 60 * 60);

// document.write("<h3>Current Date: " + date + "</h3>");
// document.write("<h3>Elapsed milliseconds since January 1, 1970: " + milliSeconds + "</h3>");
// document.write("<h3>Elapsed minutes since January 1, 1970: " + minutes + "</h3>");

// // Q7
// var currentDate = new Date();
// var hours = currentDate.getHours();

// if (hours < 12) {
//     alert("Its AM");
// } else {
//     alert("Its PM");
// }

// // Q8
// var laterDate = new Date("December 31, 2020");
// document.write("<h3>Later date: " + laterDate + "</h3>");

// // Q9
// var ramadanDate = new Date("February 19, 2026");
// var currentDate = new Date();
// var diff = currentDate.getTime() - ramadanDate.getTime();
// var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
// alert(daysPassed + " days have passed since 1st Ramadan, 2026");

// // Q10
// var referenceDate = new Date("Dec 05, 2015 22:50:16");
// var beginning2015 = new Date("Jan 01, 2015");
// var diffSeconds = (referenceDate.getTime() - beginning2015.getTime()) / 1000;

// document.write("<h3>On reference date " + referenceDate + ",</h3>");
// document.write("<h3>" + diffSeconds + " seconds had passed since beginning of 2015</h3>");

// // Q11
// var currentDate = new Date();
// document.write("<h3>current date: " + currentDate + "</h3>");

// var agoDate = new Date();
// agoDate.setHours(currentDate.getHours() - 1);
// document.write("<h3>1 hour ago, it was " + agoDate + "</h3>");

// // Q12
// var currentDate = new Date();
// var hundredYearsBack = new Date();
// hundredYearsBack.setFullYear(currentDate.getFullYear() - 100);

// alert("current date: " + currentDate + "\n100 years back, it was " + hundredYearsBack);

// // Q13
// var age = +prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// document.write("<h3>Your age is " + age + "</h3>");
// document.write("<h3>Your birth year is " + birthYear + "</h3>");

// // Q14
// var customerName = "ABC Customer";
// var currentMonth = "February";
// var numberOfUnits = 410;
// var chargesPerUnit = 16;

// var netAmount = numberOfUnits * chargesPerUnit;
// var lateSurcharge = 350;
// var grossAmount = netAmount + lateSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<h3>Customer Name: <b>" + customerName + "</b></h3>");
// document.write("<h3>Month: <b>" + currentMonth + "</b></h3>");
// document.write("<h3>Number of units: <b>" + numberOfUnits + "</b></h3>");
// document.write("<h3>Charges per unit: <b>" + chargesPerUnit + "</b></h3>");
// document.write("<br>");
// document.write("<h3>Net Amount Payable (within Due Date): <b>" + netAmount + "</b></h3>");
// document.write("<h3>Late payment surcharge: <b>" + lateSurcharge + "</b></h3>");
// document.write("<h3>Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b></h3>");


