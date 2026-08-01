// // Chapter 14 to 16 - Arrays

// // Q1
// var studentNames1 = [];

// // Q2
// var studentNames2 = new Array();

// // Q3
// var alphaVowels = ['a', 'e', 'i', 'o', 'u'];

// // Q4
// var numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Q5
// var booleanArray = [true, false, true, false, true];

// // Q6
// var mixedArray = ['apple', 10, 'banana', 20, 'cherry', 30, 'date', 40, 'elderberry', 50];

// // Q7
// var eduQualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
// document.write("<h2>Education Qualifications:</h2><br>");

// for (var i = 0; i < eduQualifications.length; i++) {
//     document.write(i + 1 + ") " + eduQualifications[i] + "<br>");;
// }

// // Q8
// var studentNames3 = ["Michael", "John", "Tony"];
// var studentsScore = [320, 230, 480];

// for (var i = 0; i < studentNames3.length; i++) {
//     document.write("<h3>Score of " + studentNames3[i] + " is " + studentsScore[i] + ". Percentage: " + ((studentsScore[i] / 500) * 100) + "</h3>");
// }

// // Q9

// document.write("<h2>Available Colors:</h2>");
// var colorNames = ["Red", "Green", "Blue", "Yellow", "Purple"];

// var newColor = prompt("Enter a color to add to the beginning of the Array:");

// colorNames.unshift(newColor);

// newColor = prompt("Enter a color to add to the end of the Array:");

// colorNames.push(newColor);

// colorNames.unshift("Purple", "Violet");

// colorNames.shift();

// colorNames.pop();

// newColor = prompt("Enter a color to add at your desired Index");
// var desiredIndex = +prompt("Enter the index at which you want to add the color");

// colorNames.splice(desiredIndex, 0, newColor);

// desiredIndex = +prompt("Enter the index from which you want to delete the color");
// var colorsToDelete = +prompt("How many colors to delete from that index?");

// colorNames.splice(desiredIndex, colorsToDelete);

// for (var i = 0; i < colorNames.length; i++) {
//     document.write("<h3>" + colorNames[i] + "</h3>");
// }

// // Q10
// var studentScores2 = [320, 230, 480, 120];

// document.write("<h3> Score Unsorted " + studentScores2.join(", ") + "</h3>");

// studentScores2.sort();

// document.write("<h3> Score Sorted " + studentScores2.join(", ") + "</h3>");

// // Q11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var selectedCities = cities.slice(0, 3);

// document.write("<h3> Cities List: " + cities.join(", ") + "</h3>");
// document.write("<h3> Selected Cities: " + selectedCities.join(", ") + "</h3>");

// // Q12
// var arr = ["This ", "is ", "my  ", "cat "];

// document.write("<h3>" + arr.join("") + "</h3>");

// // Q13
// var fifoArray = [];

// fifoArray.push("Keyboard");
// document.write(fifoArray + "<br>");
// fifoArray.push("Mouse");
// document.write(fifoArray + "<br>");
// fifoArray.push("Printer");
// document.write(fifoArray + "<br>");
// fifoArray.push("Monitor");
// document.write(fifoArray + "<br><br>");

// fifoArray.shift();
// document.write(fifoArray + "<br>");
// fifoArray.shift();
// document.write(fifoArray + "<br>");
// fifoArray.shift();
// document.write(fifoArray + "<br>");
// fifoArray.shift();
// document.write(fifoArray + "<br>");

// // Q14
// var lifoArray = [];

// lifoArray.push("Keyboard");
// document.write(lifoArray + "<br>");
// lifoArray.push("Mouse");
// document.write(lifoArray + "<br>");
// lifoArray.push("Printer");
// document.write(lifoArray + "<br>");
// lifoArray.push("Monitor");
// document.write(lifoArray + "<br><br>");

// lifoArray.pop();
// document.write(lifoArray + "<br>");
// lifoArray.pop();
// document.write(lifoArray + "<br>");
// lifoArray.pop();
// document.write(lifoArray + "<br>");
// lifoArray.pop();
// document.write(lifoArray + "<br>");

// // Q15
// var mobileBrands = ["Apple","Samsung", "Motorolla", "Nokia", "Sony", "Huawei"];

// document.write("<select><option>" + mobileBrands.join("</option><option>") + "</option></select>");