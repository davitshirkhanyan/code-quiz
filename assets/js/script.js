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
let timeLeft = "";

//add startGame function
let startGame = function() {
    score = 75;
    timeLeftEl.innerHTML = score;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeLeft = setInterval(function() {
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
    let inputText = `<input type="text" id="name" placeholder="Enter Initials (2 to 5 characters)" minlength="2" maxlength="5" size="50" style="display:block; font-size:25px; padding:20px; text-align: center" required><br /><br />`
    let quizContent = `<h3 style="padding: 20px;">Your Score is ` + score + `</h3>` + inputText + `<button onclick="setHighScore()">Submit</button>`;
    if (score <= 20) {
        quizContent =`<h2>Game Over! Try Again! 😔 </h2>` + quizContent; 
    } else if (score > 20 && score <= 50) {
        quizContent = `<h2>You could do better 😉 </h2>` + quizContent;
    } else {
        quizContent = `<h2>Congratulations! 😀 </h2>` + quizContent;
    }

    startGameEl.innerHTML = quizContent;
};

// Use the function to reset the game
let resetGame = function() {
    clearInterval(timeLeft);
    score = 0;
    currentQuestion = -1;

    let quizContent = `<h1>Code Quiz!</h1>
<h3>Answer all the questions before the timer runs out! <br /> If you answer correct, you'll get 5 more points, if you answer incorrect it will subtract 15 points from the score</h3>
<button onclick="startGame()">Start Quiz</button>`;

startGameEl.innerHTML = quizContent;
};

// save highscore in local storage
let setHighScore = function() {
    localStorage.setItem("highScore", score);
    localStorage.setItem("highScoreName", document.getElementById('name').value);
    getHighScore();

};

// get highscore from local storage
let getHighScore = function() {
    let quizContent = 
    `<h3>` + localStorage.getItem("highScoreName") + ` your Score is:</h3>
    <h2>` + localStorage.getItem("highScore") + `</h2>
    <br /> <br />
    <button style="display: block" onclick="clearHighScore()">Clear High Score!</button><button onclick="resetGame()">Go Back!</button>`

    startGameEl.innerHTML = quizContent;
};

// Use clear function to clear highscore
function clearHighScore() {
    localStorage.setItem("highScore", "");
    localStorage.setItem("highScoreName",  "");
};



