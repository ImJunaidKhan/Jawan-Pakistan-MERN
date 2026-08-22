// // Chapter 35 - 38

// // Q1
// function tellDateTime() {
//     var currentDate = new Date();
//     return currentDate;
// }

// document.write(tellDateTime());

// // Q2
// function getFullName() {
//     var firstName = prompt("Enter First Name:");
//     var lastName = prompt("Enter Last Name:");
//     var fullName = firstName + " " + lastName;

//     return fullName;
// }

// alert("Hello " + getFullName() + "! How are you doing?");

// // Q3
// function sumAll(num1, num2) {
//     var sumNum = num1 + num2;
//     return sumNum;
// }

// var num1 = +prompt("Enter first number to sum:");
// var num2 = +prompt("Enter second number to sum:");

// alert(sumAll(num1, num2));

// // Q4
// function calculate(num1, num2, operator) {
//     if (operator === "+") {
//         return num1 + num2;
//     }

//     else if (operator === "-") {
//         return num1 - num2;
//     }

//     else if (operator === "*") {
//         return num1 * num2;
//     }

//     else if (operator === "/") {
//         return num1 / num2;
//     }

//     else {
//         return "Invalid operator";
//     }
// }

// var userNum1 = +prompt("Enter first number:");
// var userNum2 = +prompt("Enter second number:");
// var userOperator = prompt("Enter operator (+, -, *, /):");

// alert(calculate(userNum1, userNum2, userOperator));

// // Q5
// function squareOfNum(num) {
//     return num * num;
// }

// var userNum = +prompt("Enter a number to get the square of:");

// alert("The square of " + userNum + " is " + squareOfNum(userNum));

// // Q6
// function factorial(num) {
//     var result = 1;

//     for (var i = 1; i <= num; i++) {
//         result = result * i;
//     }

//     return result;
// }

// var userNum = +prompt("Enter a number to get the factorial of:");

// alert("The factorial of " + userNum + " is " + factorial(userNum));

// // Q7
// function counting(num1, num2) {

//     for (var i = num1; i <= num2; i++) {
//         document.write(i + " ");
//     }
// }

// var userNum1 = +prompt("Enter a number to start counting from:");
// var userNum2 = +prompt("Enter a number to count up to:");

// counting(userNum1, userNum2);

// // Q8
// function calcHypotenuse(base, perpendicular) {
//     function calcSquare(num) {
//         return num * num;
//     }

//     var baseSquare = calcSquare(base);
//     var perpendicularSquare = calcSquare(perpendicular);

//     var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

//     return hypotenuse;
// }

// var base = +prompt("Enter the base of the right-angled triangle:");
// var perpendicular = +prompt("Enter the perpendicular of the right-angled triangle:");

// alert("The hypotenuse of the right-angled triangle is " + calcHypotenuse(base, perpendicular));

// // Q9
// function calcArea(num1, num2) {
//     var area = num1 * num2;
//     return area;
// }

// var length = +prompt("Enter the length of the rectangle:");
// var width = +prompt("Enter the width of the rectangle:");

// alert("The area of the rectangle is " + calcArea(length, width));

// alert("The area of rectangle with 10 length and 20 width is: " + calcArea(10, 20));

// // Q10
// function isPalindrome(str) {
//     // 1. Convert to lowercase and remove non-alphanumeric characters
//     var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     // 2. Reverse the string
//     var reversedStr = cleanStr.split('').reverse().join('');

//     // 3. Compare and return
//     return cleanStr === reversedStr;
// }

// var input = prompt("Enter a word or phrase to check if it's a palindrome:");

// if (isPalindrome(input)) {
//     alert(input + " is a palindrome!");
// }

// else {
//     alert(input + " is not a palindrome.");
// }

// // Q11
// function capitalize(str) {
//     var words = str.split(" ");

//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }

//     return words.join(" ");
// }

// var input = prompt("Enter a string to capitalize:");

// alert(capitalize(input));

// // Q12
// function findLongestWord(str) {
//     var words = str.split(" ");
//     var longestWord = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// var input = prompt("Enter a string to find the longest word in:");

// alert("The longest word in the string is: " + findLongestWord(input));

// // Q13
// function findLetterOccurence(str, letter) {
//     str = str.toLowerCase()
//     letter = letter.toLowerCase()
//     var occurance = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == letter) {
//             occurance += 1;
//         }
//     }

//     return occurance;
// }

// var str = "Quaid e Azam Muhammad Ali Jinnah";
// var letter = 'a';

// alert("The occurance of " + letter + " in " + str + " is " + findLetterOccurence(str, letter));

// // Q14
// function calcCircumference(radius) {
//     var circumference = 2 * 3.142 * radius;
//     return Math.round(circumference);
// }

// function calcArea(radius) {
//     var area = 3.142 * radius * radius;
//     return Math.round(area);
// }

// var radius = +prompt("Enter the radius of the circle:");

// alert("The circumference of the circle is " + calcCircumference(radius));
// alert("The area of the circle is " + calcArea(radius));


// // Chapter 39 - 42

// // Q1
// function calcPower(a, b) {
//     return a ** b;
// }

// var num = +prompt("Enter a number:");
// var power = +prompt("Enter a power:");

// alert(num + " raised to the power of " + power + " is " + calcPower(num, power));

// // Q2
// function calcLeapYear(year) {
//     if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//         return "Leap";
//     }

//     else {
//         return "Not Leap";
//     }
// }

// var year = +prompt("Enter a year to check if it's a leap year:");

// alert("The year " + year + " is a " + calcLeapYear(year) + " year.");

// // Q3
// function calcSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calcArea(a, b, c) {
//     var sides = calcSemiPerimeter(a, b, c);

//     var area = Math.sqrt(sides * (sides - a) * (sides - b) * (sides - c));

//     return area;
// }

// var side1 = +prompt("Enter the length of the first side of the triangle:");
// var side2 = +prompt("Enter the length of the second side of the triangle:");
// var side3 = +prompt("Enter the length of the third side of the triangle:");

// alert("The area of the triangle is: " + calcArea(side1, side2, side3));

// // Q4
// function calcAvg(totalObtainedMarks) {
//     return totalObtainedMarks / 3;
// }

// function calcPercentage(totalObtainedMarks) {
//     return (totalObtainedMarks / 300) * 100;
// }

// function main(sub1, sub2, sub3) {
//     var totalObtainedMarks = sub1 + sub2 + sub3;
//     var average = calcAvg(totalObtainedMarks);
//     var percentage = calcPercentage(totalObtainedMarks);

//     alert("The average of the marks is: " + average + " marks");
//     alert("The percentage of the marks is: " + percentage + "%");
// }

// var sub1 = +prompt("Enter marks of first subject out of 100:");
// var sub2 = +prompt("Enter marks of second subject out of 100:");
// var sub3 = +prompt("Enter marks of third subject out of 100:");

// main(sub1, sub2, sub3);

// // Q5
// function indexOf(char, str) {
//     for (var i = 0; i < str.length; i++) {
//         str = str.toLowerCase();
//         char = char.toLowerCase();

//         if (str[i] === char) {
//             return i + 1;
//         }
//     }
// }

// var char = prompt("Enter a character to find the index of:");
// var str = prompt("Enter a string to find the index of the character in:");

// alert("The index of " + char + " in " + str + " is " + indexOf(char, str));

// Q6
// function delVowel(str) {
//     str = str.toLowerCase();

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//             str = str.slice(0, i) + str.slice(i + 1);
//         }
//     }

//     return str;
// }

// var str = prompt("Enter a string to delete vowels from:");

// alert("The string with vowels deleted is: " + delVowel(str));

// // Q7
// function countVowelOccurence(str) {
//     var count = 0;
//     str = str.toLowerCase();

//     for (var i = 0; i < str.length - 1; i++) {
//         switch (str[i]) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch (str[i + 1]) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         count++;
//                         break;
//                 }
//                 break;
//         }
//     }

//     return count;
// }

// var str = prompt("Enter a string to count vowel occurrences in:");

// alert("The number of vowel occurrences in \"" + str + "\" is: " + countVowelOccurence(str));

// // Q8
// function distanceinMeters(km) {
//     return km * 1000;
// }

// function distanceinFeet(km) {
//     return km * 3280.84;
// }

// function distanceinInches(km) {
//     return km * 39370.1;
// }

// function distanceinCentimeters(km) {
//     return km * 100000;
// }

// var km = +prompt("Enter the distance between two cities in km:");

// alert(
//     "Meters: " + distanceinMeters(km) +
//     "\nFeet: " + distanceinFeet(km) +
//     "\nInches: " + distanceinInches(km) +
//     "\nCentimeters: " + distanceinCentimeters(km)
// );

// // Q9
// function calcOvertime(hoursWorked) {
//     var overtimeRate = 12.00;
//     var overtimeHours = Math.max(0, hoursWorked - 40);
//     var overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
// }

// var hoursWorked = +prompt("Enter the number of hours worked:");

// alert("The overtime pay is: Rs. " + calcOvertime(hoursWorked));

// // Q10
// function calcCurrencyNotes(amount) {
//     var notes100 = Math.floor(amount / 100);
//     var remainingAmount = amount % 100;
//     var notes50 = Math.floor(remainingAmount / 50);
//     remainingAmount = remainingAmount % 50;
//     var notes10 = Math.floor(remainingAmount / 10);

//     return {
//         notes100: notes100,
//         notes50: notes50,
//         notes10: notes10
//     };
// }

// var amount = +prompt("Enter the amount to be withdrawn in hundreds:");
// var notes = calcCurrencyNotes(amount);

// alert(
//     "Notes of 100: " + notes.notes100 +
//     "\nNotes of 50: " + notes.notes50 +
//     "\nNotes of 10: " + notes.notes10
// );


// Chapter 43 - 48

// // Q1 and Q2
// // Check HTML

// Q3
function deleteRow(btn) {
    btn.parentElement.parentElement.remove();
    alert("Record deleted successfully");
}

// Q4
function changeImage(img) {
    img.src = "https://img.magnific.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740&q=80"
}

function restoreImage(img) {
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8gEf3t_50jaeskbyNpNvj78QWFk1WKcfEtm3JnDhuEDtGHXa3-SNC9Q&s=10"
}

// Q5
var counter = 0;

function increaseCounter() {
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
}

function decreaseCounter() {
    counter -= 1;
    document.getElementById("counter").innerHTML = counter;
}

