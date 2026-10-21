
const questions = [
    {
      question: "Which language is used to structure web pages?",
      answers: ["Python", "HTML", "C++", "Java"],
      correct: "HTML"
    },
    {
      question: "Which language styles a web page?",
      answers: ["CSS", "SQL", "Python", "C"],
      correct: "CSS"
    },
    {
      question: "Which language adds interactivity to web pages?",
      answers: ["HTML", "CSS", "JavaScript", "C++"],
      correct: "JavaScript"
    },
    {
      question: "Which data type stores true or false?",
      answers: ["String", "Boolean", "Array", "Number"],
      correct: "Boolean"
    },
    {
      question: "Which symbol is used for strict equality in JavaScript?",
      answers: ["=", "==", "===", "!="],
      correct: "==="
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const feedbackElement = document.getElementById("feedback");
  const nextButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");
  
  function showQuestion() {
    const question = questions[currentQuestion];
  
    questionElement.textContent =
      `Question ${currentQuestion + 1}: ${question.question}`;
  
    answersElement.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.hidden = true;
  
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.className = "answer-btn";
  
      button.addEventListener("click", () => {
        checkAnswer(answer, button);
      });
  
      answersElement.appendChild(button);
    });
  
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
  }
  
  function checkAnswer(answer, selectedButton) {
    const question = questions[currentQuestion];
    const buttons = answersElement.querySelectorAll("button");
  
    buttons.forEach((button) => {
      button.disabled = true;
    });
  
    if (answer === question.correct) {
      score++;
      feedbackElement.textContent = "Correct answer!";
    } else {
      feedbackElement.textContent =
        `Incorrect. Correct answer: ${question.correct}`;
    }
  
    selectedButton.setAttribute("aria-pressed", "true");
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
    nextButton.hidden = false;
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionElement.textContent = "Quiz Completed!";
      answersElement.innerHTML = "";
      feedbackElement.textContent =
        `Your final score is ${score} out of ${questions.length}.`;
      nextButton.hidden = true;
      scoreElement.textContent = "Well done!";
    }
  });
  
  showQuestion();