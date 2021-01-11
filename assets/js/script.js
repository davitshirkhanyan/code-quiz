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
        endGame();
    }
  }, 1000);

  nextQuestion();
};

// Use nextQuestion() function
let nextQuestion = function() {
    currentQuestion++;

    if (currentQuestion > quizQuestions.length - 1) {
        endGame();
        return;
    }

    let content = "<h3>" + quizQuestions[currentQuestion].question + "</h3>";

    for (let i = 0; i < quizQuestions[currentQuestion].options.length; i++) {
        let buttonContent = "<button style='display:block; margin:5px;' onclick=\"[Answer]\">[Options]</button>";
        let quizAnswer = quizQuestions[currentQuestion].answer;
        let quizOptions = quizQuestions[currentQuestion].options[i];
        buttonContent = buttonContent.replace("[Options]", quizQuestions[currentQuestion].options[i]);

        if (quizOptions === quizAnswer) {
            buttonContent = buttonContent.replace("[Answer]", "correctAnswer()");
        } else {
            buttonContent = buttonContent.replace("[Answer]", "incorrectAnswer()");
        }
        content += buttonContent;
    }
    startGameEl.innerHTML = content;
};

// Use the function if answer is correct
let correctAnswer = function() {
    alert("Your Answer is Correct. You'll get 5 more Points");
    score += 5;
    nextQuestion();
};

// Use the function if answer is incorrect
let incorrectAnswer = function() {
    alert("Your Answer is Incorrect. It will subtract 15 points from your Score");
    score -= 15;
    nextQuestion();
};

// Use endGame() function 
let endGame = function() {
    clearInterval(timeLeft);

    let quizContent = `<h2>Game Over!</h2>
    <h3 style="padding: 20px; ">That means you got ` + score + ` Score</h3>
    <input type="text" name="name id="name" placeholder="Enter Initials (maximum 5 letters)" minlength="2" maxlength="10" size="50" style="display:block; font-size:25px; padding:20px; text-align: center"><br /><br />
    <button onclick="setScore()">Set score!</button>`;
    startGameEl.innerHTML = quizContent;
};

