var questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyper Text Markup Language",
        option2: "High Text Machine Language",
        option3: "Hyperlink and Text Markup Language",
        answer: "Hyper Text Markup Language",
        score: 5
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        option1: "&lt;link&gt;",
        option2: "&lt;a&gt;",
        option3: "&lt;href&gt;",
        answer: "&lt;a&gt;",
        score: 5
    },
    {
        question: "Which tag is used to define an internal style sheet in HTML?",
        option1: "&lt;script&gt;",
        option2: "&lt;css&gt;",
        option3: "&lt;style&gt;",
        answer: "&lt;style&gt;",
        score: 5
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "&lt;br&gt;",
        option2: "&lt;break&gt;",
        option3: "&lt;lb&gt;",
        answer: "&lt;br&gt;",
        score: 5
    },
    {
        question: "Which attribute specifies an alternate text for an image if it cannot be displayed?",
        option1: "src",
        option2: "alt",
        option3: "title",
        answer: "alt",
        score: 5
    },
    {
        question: "Which HTML element is used to create an ordered list?",
        option1: "&lt;ul&gt;",
        option2: "&lt;ol&gt;",
        option3: "&lt;li&gt;",
        answer: "&lt;ol&gt;",
        score: 5
    },
    {
        question: "What does CSS stand for?",
        option1: "Creative Style Sheets",
        option2: "Cascading Style Sheets",
        option3: "Computer Style Syntax",
        answer: "Cascading Style Sheets",
        score: 5
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        option1: "color",
        option2: "background-color",
        option3: "bg-color",
        answer: "background-color",
        score: 5
    },
    {
        question: "How do you select an element with id 'demo' in CSS?",
        option1: ".demo",
        option2: "#demo",
        option3: "demo",
        answer: "#demo",
        score: 5
    },
    {
        question: "Which CSS property controls the text size?",
        option1: "font-size",
        option2: "text-style",
        option3: "text-size",
        answer: "font-size",
        score: 5
    },
    {
        question: "Which property is used to change the font of an element?",
        option1: "font-family",
        option2: "font-style",
        option3: "font-weight",
        answer: "font-family",
        score: 5
    },
    {
        question: "How do you make a list display square bullets in CSS?",
        option1: "list-type: square;",
        option2: "list-style-type: square;",
        option3: "bullet: square;",
        answer: "list-style-type: square;",
        score: 5
    },
    {
        question: "How do you write 'Hello World' in an alert box in JavaScript?",
        option1: "alertBox('Hello World');",
        option2: "msg('Hello World');",
        option3: "alert('Hello World');",
        answer: "alert('Hello World');",
        score: 5
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        option1: "var",
        option2: "declare",
        option3: "string",
        answer: "var",
        score: 5
    },
    {
        question: "How do you create a function in JavaScript?",
        option1: "function myFunction()",
        option2: "function = myFunction()",
        option3: "create myFunction()",
        answer: "function myFunction()",
        score: 5
    },
    {
        question: "How do you call a function named 'myFunction' in JavaScript?",
        option1: "call myFunction()",
        option2: "call function myFunction()",
        option3: "myFunction()",
        answer: "myFunction()",
        score: 5
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        option1: "if i = 5 then",
        option2: "if (i == 5)",
        option3: "if i == 5 then",
        answer: "if (i == 5)",
        score: 5
    },
    {
        question: "How does a FOR loop start in JavaScript?",
        option1: "for (var i = 0; i < 5; i++)",
        option2: "for (i = 0; i <= 5)",
        option3: "for i = 1 to 5",
        answer: "for (var i = 0; i < 5; i++)",
        score: 5
    },
    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        option1: "*",
        option2: "=",
        option3: "-",
        answer: "=",
        score: 5
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        option1: "var colors = (1:'red', 2:'green', 3:'blue')",
        option2: "var colors = ['red', 'green', 'blue']",
        option3: "var colors = 'red', 'green', 'blue'",
        answer: "var colors = ['red', 'green', 'blue']",
        score: 5
    }
];

var introBox = document.querySelector("#quiz-intro");
var questionBox = document.querySelector("#quiz-questions");
var endingBox = document.querySelector("#quiz-ending");

var count = 0;
var score = 0;

function startQuiz() {
    introBox.style.display = "none";
    questionBox.style.display = "block";
    questionsDisplay();
}

function questionsDisplay() {
    questionBox.innerHTML = `
        <h3>${questions[count].question}</h3>
                <div><input type="radio" name="question${count}" value="option1" id="option1"> <label for="option1">${questions[count].option1}</label></div>
                <div><input type="radio" name="question${count}" value="option2" id="option2"> <label for="option2">${questions[count].option2}</label></div>
                <div><input type="radio" name="question${count}" value="option3" id="option3"> <label for="option3">${questions[count].option3}</label></div>
                <div>
                    <button id="prevbtn" onclick="previousQuestion()">Previous</button>
                    <button id="nextbtn" onclick="nextQuestion()">Next</button>
                    <button id="submitbtn" onclick="finish()">Finish</button>
                </div>
    `;

    if (count > 0) {
        var prevBtn = document.querySelector("#prevbtn");
        prevBtn.style.display = "inline";
    }

    if (count === questions.length - 1) {
        document.querySelector("#nextbtn").style.display = "none";
        document.querySelector("#submitbtn").style.display = "inline";
    }
}

function previousQuestion() {
    count--;
    questionsDisplay();
}

function nextQuestion() {
    var selectedOption = document.querySelector(`input[name="question${count}"]:checked`);

    if (!selectedOption) {
        alert("Please select an answer first!");
        return;
    }

    if (questions[count][selectedOption.value] == questions[count].answer) {
        score += questions[count].score;
        console.log(score);
    }

    count++;
    questionsDisplay();
}

function finish() {
    var userScore = document.querySelector("#user-score");
    var totalScore = document.querySelector("#total-score");
    var userPercentage = document.querySelector("#score-percentage");

    userScore.innerHTML = score;
    totalScore.innerHTML = questions.length * 5;
    userPercentage.innerHTML = (userScore.innerHTML / totalScore.innerHTML) * 100 + "%";

    questionBox.style.display = "none";
    endingBox.style.display = "block";
}

function restartQuiz() {
    endingBox.style.display = "none";
    introBox.style.display = "block";
    count = 0;
    score = 0;
}
