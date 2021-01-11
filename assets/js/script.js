// add DOM Element Objects
let timeLeftEl = document.getElementById("time-left");

//Quiz quizQuestions object
let quizQuestions = [
    {
        question: "What is the correct way to write a JavaScript array?",
        options: ["var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = (1:'red', 2:'green', 3:'blue')"],
        answer: "var colors = ['red', 'green', 'blue']"  
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onclick", "onmouseclick", "onmouseover", "onchange"],
        answer: "onclick"  
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["-", "*", "=", "x"],
        answer: "="
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        options: ["Math.ceil(x, y)", "ceil(x, y)", "Math.max(x, y)", "top(x, y)"],
        answer: "Math.max(x, y)"
    },
     {
        question: "How does a FOR loop start?",
        options: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)"],
        answer: "for (i = 0; i <= 5; i++)"
     }
];

// add variables
let score = 0;
let currentQuestion = -1;
let timer = "";

//add startGame function
let startGame = function() {
    score = 75;
    timeLeftEl.innerHTML = score;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
let timeLeft = setInterval(function() {
    score--;
    timeLeftEl.innerHTML = score;

    if (score <= 0) {
        clearInterval(timeLeft);
    }
  }, 1000);
};

