// // Chapter 17 to 20

// // Q1
// var emptyArray = [
//     [],
//     []
// ]

// // Q2
// var multiArray = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]

// console.log(multiArray);

// // Q3
// document.write("<h2> Program to Print Counting </h2>");
// for (var i = 1; i < 11; i++) {
//     document.write(i + "<br>");
// }

// // Q4
// document.write("<h2> Multiplication Table </h2>");

// var tableNum = +prompt("Enter a number to show its multiplication table");
// var tableLength = +prompt("Enter the length of multiplication table");

// for (i = 1; i <= tableLength; i++) {
//     document.write("<h4>" + tableNum + " x " + i + " = " + tableNum * i + "</h4>");
// }

// // Q5
// document.write("<h2> Fruits </h2>");

// var fruit = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// for (var i = 0; i < fruit.length; i++) {
//     document.write("<h4>" + fruit[i] + "</h4>");
// }

// for (var i = 0; i < fruit.length; i++) {
//     document.write("<h4>Element at index " + i + " is " + fruit[i] + "</h4>");
// }

// // Q6
// document.write("<h2>Counting:</h2>");

// for (var i = 1; i <= 15; i++) {
//     document.write("<b>" + i + ", </b>");
// }

// document.write("<h2>Reverse Counting:</h2>");

// for (var i = 10; i > 0; i--) {
//     document.write("<b>" + i + ", </b>");
// }

// document.write("<h2>Even:</h2>");

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write("<b>" + i + ", </b>");
//     }
// }

// document.write("<h2>Odd:</h2>");

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//         document.write("<b>" + i + ", </b>");
//     }
// }

// document.write("<h2>Series:</h2>");

// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write("<b>" + i + "k, </b>");
//     }
// }

// // Q7
// document.write("<h2>Finding user's item index in an array:</h2>");

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var findIndexOf = prompt("Welcome to ABC Bakkery. What do you want to order Sir/Ma'am? (Cake, Apple Pie, Cookie, Chips, Patties)");
// findIndexOf = findIndexOf.toLowerCase();

// var foundIt = false;

// for (var i = 0; i < a.length; i++) {
//     if (a[i] == findIndexOf) {
//         foundIt = true;
//         document.write("<h3>" + findIndexOf + " is available at index " + i + " in our bakery</h3>");
//     }
// }

// if (foundIt == false) {
//     alert("We are sorry. " + findIndexOf + " is not available in our bakery.");
// }

// // Q8
// var numberingArray = [24, 53, 78, 91, 12];

// document.write("<h3>Array Items: " + numberingArray.join(", ") + "</h3>");

// var largest = 0;

// for(var i = 0; i < numberingArray.length; i++) {
//     if(numberingArray[i] > largest) {
//         largest = numberingArray[i];
//     }
// }

// document.write("<h3>The largest number is: " + largest + "</h3>");

// var smallest = 1000;

// for(var i = 0; i < numberingArray.length; i++) {
//     if(numberingArray[i] < smallest) {
//         smallest = numberingArray[i];
//     }
// }

// document.write("<h3>The smallest number is: " + smallest + "</h3>");

// for (var i = 1; i <= 20; i++) {
//     document.write("<b>" + i * 5 + ", </b>");
// }

// // Chapter 21 to 25

// // Q1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// var fullName = firstName + " " + lastName;
// document.write("<h3>Hello " + fullName + "!</h3>");

// // Q2
// var favPhone = prompt("Enter your favorite phone model");

// document.write("<h3>My favorite phone is: " + favPhone + "</h3>");
// document.write("<h3>Length of string is: " + favPhone.length + "</h3>");

// // Q3
// var nationality = "Pakistani";

// document.write("<h3>String: " + nationality + "</h3>");
// document.write("<h3>Index of n: " + nationality.indexOf('n') + "</h3>");

// //Q4
// var firstCode = "Hello World";
// document.write("<h3>String: " + firstCode + "</h3>");
// document.write("<h3>Last Index of 'l': " + firstCode.lastIndexOf('l') + "</h3>");

// // Q5
// var nationality2 = "Pakistani";
// document.write("<h3>String: " + nationality2 + "</h3>");
// document.write("<h3>Character at index 3: " + nationality2.charAt(3) + "</h3>");

// // Q6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// var fullName = firstName.concat(" ",lastName);
// document.write("<h3>Hello " + fullName + "!</h3>");

// // Q7
// var city = "Hyderabad";
// var replacement = city.replace("Hyder", "Islam");

// document.write("<h3>City: " + city + "</h3>");
// document.write("<h3>After replacement: " + replacement + "</h3>");

// // Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replaceAll("and", "&");

// document.write("<h3>" + newMessage + "</h3>");

// // Q9
// var strNum = "472";
// document.write("<h3>Value: " + strNum + "</h3>");
// document.write("<h3>Type: " + typeof (strNum) + "</h3>");

// var num = Number(strNum);
// document.write("<h3>Value: " + num + "</h3>");
// document.write("<h3>Type: " + typeof (num) + "</h3>");

// // Q10
// var userInput = prompt("Enter text:");
// document.write("<h3>User input: " + userInput + "</h3>");
// document.write("<h3>Upper case: " + userInput.toUpperCase() + "</h3>");

// // Q11
// var userInput = prompt("Enter text:");
// var firstChar = userInput.slice(0, 1).toUpperCase();
// var otherChars = userInput.slice(1).toLowerCase();
// var titleCase = firstChar + otherChars;

// document.write("<h3>User input: " + userInput + "</h3>");
// document.write("<h3>Title case: " + titleCase + "</h3>");

// // Q12
// var num = 35.36;
// var str = num.toString();
// var result = str.replace(".", "");

// document.write("<h3>Number: " + num + "</h3>");
// document.write("<h3>Result: " + result + "</h3>");

// // Q13
// var username = prompt("Enter your username:");
// var isValid = true;

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);

//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         isValid = false;
//         alert("Please enter a valid username");
//         break;
//     }
// }

// // Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var searchItem = userInput.toLowerCase();
// var isFound = false;

// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === searchItem) {
//         isFound = true;
//         document.write("<h3>" + userInput + " is <b>available</b> at index " + i + " in our bakery</h3>");
//         break;
//     }
// }

// if (!isFound) {
//     document.write("<h3>We are sorry. " + userInput + " is <b>not available</b> in our bakery</h3>");
// }

// // Q15
// var password = prompt("Enter password:");

// var hasAlpha = false;
// var hasNum = false;

// var startsWithNum = false;
// var isLongEnough = password.length >= 6;

// var firstCharCode = password.charCodeAt(0);

// if (firstCharCode >= 48 && firstCharCode <= 57) {
//     startsWithNum = true;
// }

// for (var i = 0; i < password.length; i++) {
//     var code = password.charCodeAt(i);
//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         hasAlpha = true;
//     } 
    
//     else if (code >= 48 && code <= 57) {
//         hasNum = true;
//     }
// }

// document.write("<h3>Entered password: " + password + "</h3>");

// if (startsWithNum) {
//     document.write("<h3>Password can not begin with a number</h3>");
//     document.write("<h3>Please enter a valid password</h3>");

// }

// else if (!isLongEnough) {
//     document.write("<h3>Password must be at least 6 characters long</h3>");
//     document.write("<h3>Please enter a valid password</h3>");
// }

// else if (!hasAlpha || !hasNum) {
//     document.write("<h3>Password must contain alphabets and numbers</h3>");
//     document.write("<h3>Please enter a valid password</h3>");
// } 

// else {
//     document.write("<h3>Password is valid!</h3>");
// }

// // Q16
// var university = "University of Karachi";
// var uniArr = university.split("");

// for (var i = 0; i < uniArr.length; i++) {
//     document.write(uniArr[i] + "<br>");
// }

// // Q17
// var userInput = prompt("Enter text:");
// var lastChar = userInput.charAt(userInput.length - 1);

// document.write("<h3>User input: " + userInput + "</h3>");
// document.write("<h3>Last character of input: " + lastChar + "</h3>");

// // Q18
// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;

// var tempStr = str.toLowerCase();
// var words = tempStr.split(" ");

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// document.write("<h3>Text: " + str + "</h3>");
// document.write("<h3>There are " + count + " occurrence(s) of word 'the'</h3>");


