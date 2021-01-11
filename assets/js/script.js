// add DOM Element Objects
let timeLeftEl = document.getElementById("time-left");
let startGameEl = document.getElementById("start-game");

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
let currentQuestion = 0;
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

  nextQuestion();
};

// Use nextQuestion() function
let nextQuestion = function() {
    currentQuestion;

    if (currentQuestion > quizQuestions.length - 1) {

    }

    let content = "<h3>" + quizQuestions[currentQuestion].question + "</h3>";

    for (let i = 0; i < quizQuestions[currentQuestion].options.length; i++) {
        let buttonContent = "<button onclick=\"[Answer]\">[Options]</button>";
        let quizOptions = buttonContent.replace("[Options]", quizQuestions[currentQuestion].options[i]);
        let quizAnswer = quizQuestions[currentQuestion].answer;
        buttonContent = quizOptions;

        if (quizOptions === quizAnswer) {
            buttonContent = buttonContent.repeat("[Answer]", "correct()");
        } else {
            buttonContent = buttonContent.replace("[Answer]", "incorrect()");
        }
        content += buttonContent;
    }
    startGameEl.innerHTML = content;
};

