// /*
// Author: M Junaid Khan
// Last Updated: 10th Oct, 2026
// */

// // BLOCK A

// // A1
// alert("Welcome to JavaScript");

// // A2
// var studentName = "Ali";
// var course = "English";
// var city = "Karachi";
// var birthYear = 2000;

// alert(studentName + " studies " + course + " in " + city + " and was born in " + birthYear);

// // A3
// // Illegal: 1stName, var, total-marks, for, student name
// // Legal: firstName, variable, totalMarks, forVar, studentName are legal versions of it

// // A4
// // 9
// // 14
// // 1
// // 8
// // 20
// // 30

// // A6
// // 510, 15, 15, 105

// // A7
// var name = prompt("Enter your name:");
// var age = +prompt("Enter your age:");
// var myCourse = prompt("Enter your course:");

// alert("My name is " + name + ", I am " + age + " years old and I study " + myCourse);

// // A8
// var num1 = parseInt(prompt("First Num to add"));
// var num2 = parseInt(prompt("Second Num to add"));

// alert("The two numbers sum is " + (num1 + num2));

// A9
// null, Nan, Nan

// // BLOCK B
// // B1
// var shippingAmount = +prompt("What is the shipment amount?");

// if (shippingAmount >= 5000) {
//     alert("You are eligible for a discount.");
// }

// // B2
// // true, false, false, true, true, false

// // B3
// var num01 = +prompt("Num 1:");
// var num02 = +prompt("Num 2:");

// if (num01 > num02) {
//     alert(num01 + " is greater");
// }

// else if (num01 < num02) {
//     alert(num02 + " is greater.")
// }

// else if (num01 == num02) {
//     alert(num01 + " is equal to " + num02);
// }

// else {
//     alert("wrong num input");
// }

// // B4
// // () is missing for marks > 50
// // {} are missing for blocks
// // if block is missing

// // B5
// var orderAmount = +prompt("Enter order amount:");
// if (orderAmount >= 5000) {
//     alert("Free Delivery");
// }
// else if (orderAmount >= 3000 && orderAmount < 5000) {
//     alert("Delivery Free: Rs. 100");
// }
// else {
//     alert("Delivery Free: Rs. 200");
// }

// // B6
// // Normal, false, true, false, true

// // B7
// var marks = +prompt("Enter student marks (0-100)");
// var attendance = +prompt("Enter student percentage (0-100)");
// if(marks >= 80 && attendance >= 75) {
//     alert("Approved");
// }
// else {
//     alert("Not eligible");
// }

// // B8
// var username = "ali";
// var password = "ali123";
// var isActive = true;

// if(username == "ali" && password == "ali123") {
//     if(!isActive) {
//         alert("Account is inactive");
//     }
//     else {
//         alert("Login Successful!");
//     }
// }
// else {
//     alert("Invalid Credentials");
// }

// // BLOCK C
// // C1
// var products = [100, 200, 300, 400, 500];
// var resultSum = 0;

// for(var i = 0; i < products.length; i++) {
//     resultSum += products[i];
// }

// alert("Total products sum is " + resultSum);

// // C2
// // 2, Laptop, undefined, Monitor, Laptop, Mouse

// // C3
// var students = ["Ahsan", "Zain", "Hamza"];
// students.unshift("Talha");
// alert("After unshift method: " + students);
// students.push("Faizan");
// alert("After push method: " + students);
// students.pop();
// alert("After pop method: " + students);

// // C4
// var accessories = ["Laptop", "Mouse", "Keyboard", "Headphones"];
// accessories.splice(1,1);
// alert(accessories);

// // C5
// // B, C / A, D / A / A, D

// // C6
// var num001 = +prompt("Enter a num");

// for (var i = 1; i <= 10; i++) {
//     document.writeln(num001 + " x " + i + " = " + (num001 * i) + "<br/>");
// }

// // C7
// var studentNames = ["Ahsan", "Zain", "Hamza", "Ali"];
// var providedName = prompt("Enter a student name for availability");
// var isAvailable = 0;
// for (var i = 0; i < studentNames.length; i++) {
//     if(studentNames[i] == providedName) {
//         alert("Student Available");
//         isAvailable = 1;
//         break;
//     }
// }

// if (!isAvailable) {
//     alert("Student not available in the list");
// }

// // C8
// // 1,2,3 then 1,2,4,5

// // C9
// var givenNums = [12, 45, 103, 78, 210, 55];

// for (var i = 0; i < givenNums.length; i++) {
//     if(givenNums[i] > 100) {
//         alert(givenNums[i] + " is greater than 100");
//         break;
//     }
// }

// // C11
// var y = 0;
// while (y <= 20) {
//     document.writeln(y + "<br/>");
//     y++;
// }

// var getNum = parseInt(prompt("Enter a positive number"));
// do {
//     if (getNum < 0) {
//         alert("Enter a positive number");
//         getNum = +prompt("Enter a positive number");
//     }
//     else {
//         alert("Number is positive");
//     }
// } while (getNum < 0)

// // C12
// // nothing for while and do ran once for do while.

// // BLOCK D
// // D1
// //

// // D2
// var userName01 = prompt("Enter your name");
// alert(userName01.toUpperCase());
// alert(userName01.length);
// alert(userName01.slice(0,4));

// // D3
// // 14, -1, no, I and J

// // D4
// // a
// var sentence = prompt("Enter a sentence");
// var word = prompt("Enter a word");
// var wordIndex = sentence.lastIndexOf(word);

// if (wordIndex >= 0) {
//     alert("Word is available at " + wordIndex);
// }
// else {
//     alert("word is not in the sentence");
// }

// // b
// var word02 = prompt("Enter a new word")
// var getIndex = +prompt("Enter index to find a char in it");

// alert(word02.charAt(getIndex));

// // c
// var sentence02 = "Hello Ali, welcome to the course.";
// sentence02 = sentence02.replace("Ali", "Fahad");
// alert(sentence02);

// var website = "www.example.com";
// website = website.replace("com", "pk");
// alert(website);

// // D5
// // 79, 1500, 4, 5, 78.46, 3

// // D6
// var decimalNum = +prompt("Enter a decimal number");
// alert("Rounded Down Value " + (Math.floor(decimalNum)))
// alert("Rounded Up Value " + (Math.ceil(decimalNum)));
// alert("Rounded Nearest Value " + (Math.round(decimalNum)));
// alert("2 Decimal Places " + (decimalNum.toFixed(2)))

// D7
// var randomNum = Math.floor(Math.random() * 10000);
// var otp = randomNum.toString().padEnd(4, 0);
// alert("Your OTP is " + otp);

// var randomInt = Math.floor(Math.random() * 9);
// alert(randomInt + 1);

// 