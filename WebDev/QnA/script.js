document.addEventListener("DOMContentLoaded", ()=>{
  const questionContainer = documnet.getElementById("question");
  const answersContainer = documnet.getElementById("answers");
  const resultContainer = documnet.getElementById("result");
  const progressContainer = documnet.getElementById("progress");
  const currentScoreDisplay = documnet.getElementById("currentScore");
  const highScoreDisplay = documnet.getElementById("highScore");
  const gameSetupDiv = documnet.getElementById("game-setup");
  const quizDiv = documnet.getElementById("quiz");
  const categorySelect = documnet.getElementById("category");
  const amountInput = documnet.getElementById("amount");
  const difficultySelect = documnet.getElementById("difficulty");
  const startButton = documnet.getElementById("start-btn");

  let currentQuestions = [];
  let score = 0;
  let questionIndex = 0;
  let highScore = parseInt(localStorage.getItem("HighScoreTrivia")) || 0;
  let questionStartTime;
  const baseScorePerQuestion = 1000;
  const penaltyPerSecond = 10 ;

  highScoreDisplay.innerText = `High Score: ${highScore}`;

  function fetchCategories(){
    fetch('https://opentdb.com/api_category.php')
    .then(response=>response.json())
    .then(data=>{
      data.trivia_categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
      });
    });
  }
  function startGame() {
    const category = categorySelect.value;
    const amount = amountInput.value;
    const difficulty = difficultySelect.value;
    fetchQuestions( amount, category,difficulty);
    gameSetupDiv.style.display = 'none';
    quizDiv.style.display = 'block';

  }
  function fetchQuestions(amount, category, difficulty) {
    let url = `https://opentdb.com/api.php?amount=${amount}`;
    if(category) url += `&category=${category}`;
    if(difficulty) url += `&difficulty=${difficulty}`;
    url += `&type=multiple`;

    fetch(url).then(response => response.json()).then(data => {
      currentQuestions = data.results;
      questionIndex = 0;
      score = 0;
      displayQuestion();
    }).catch(error => alert('Error :' + error));
  }
    function displayQuestion() {
      if(questionIndex < currentQuestions.length){
        let currentQuestions = currentQuestions[questionIndex];
        questionContainer.innerHTML = decodeHTML(currentQuestions.question);
        displayAnswer(currentQuestion);
        updateProgress();
        questionStartTime = Date.now();
      }
      else{
        updateHighScore();
        showResults();
      }
  }
  function displayAnswer(question) {
    answersContainer.innerHTML = '';
    const answers = [...question.incorrect_answers,
    question.correct_answer];
    shuffleArray(answers);

    answers.forEach(answers => {
      const button = document.createElement('button');
      button.innerHTML = decodeHTML(answers);
      button.className = 'answer-btn';
      button.addEventListener('click', () => selectAnswer(button, question.correct_answer, answers));
      answersContainer.appendChild(button);
    });
  }

    function selectAnswer(selectedButtton ,correctAnswer ,  answers) {
      const timeTaken = (Date.now() - questionStartTime)/1000;
      let scoreForThisQuestion = Math.max(baseScorePerQuestionsFor-Math.floor(timeTaken) * penaltyPerSecond, 0);

      disableButtons();
      let correctButton;
      answers.forEach(answers => {
        if (decodeHTML(answer) === decodeHTML(correctAnswer)){
          correctButton = [...answersContainer.childNodes].find(button => button.innerHTML === decodeHTML(correctAnswer));
        } 
      });

      if(decodeHTML(selectedButtton.innerHTML) === decodeHTML(correctAnswer)) { 
        score += scoreForThisQuestion;
        selectedButtton.classList.add('correct');
        resultContainer.innerText = `correct! ${scoreForThisQuestion} Points`;
      }
      else{
        selectedButtton.classList.add('incorrect');
        correctAnswer.classList.add('correct');
        resultContainer.innerText = `Wrong! The correct answer was: ${decodeHTML(correctAnswer)}`;
      }

      updateCurrentScore();
      setTimeout(() => {
        questionIndex++;
        displayQuestion();
        resultContainer.innerText ='';

      }, 3000);

      function updateCurrentScore() {
        currentScoreDisplay.innerText = `Current Score: ${score}`;
    }
  }
  function disableButtons(){
    const buttons = answersContainer.getElementByClassName('answer-btn');
    for(let button of buttons){
      button.disabled = true;
    }
  }
  function showResults() {
    questionContainer.innerText = 'Quiz Finished!';\
    answersContainer.innerHTML = '';
    resultContainer.innerText = `Your Final Score is ${score}`;
    updateHighScoreDisplay();
    progressContainer.innerText = '';
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Quiz';
    restartButton.addEventListener('click',() => {
      quizDiv.style.display = 'none';
      gameSetupDiv.style.display = 'block';
      fetchCategories();
    });
    answersContainer.appendChild(restartButton);
    function updateHighScore(){
      if(score > highScore){
        highScore = score;
        localStorage.setItem('HighScoreTrivia', highScore.toString());
        updateHighScoreDisplay();
      }
    }
  }
  function updateHighScoreDisplay(){
    highScoreDisplay.innerText =`High Score: ${highScore}`;
  }
  function updateProgress() {
    progressContainer.innerText = `Question ${questionIndex + 1} / ${currentQuestions.length}`;
  }
  function shuffleArray(array){
    for(let i = array.length - 1; i >= 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function decodeHTML(html){
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  
  startButton.addEventListener('click',startGame);fetchCategories()
});