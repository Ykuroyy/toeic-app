let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let userAnswers = [];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const correctAnswersEl = document.getElementById('correct-answers');
const totalAnswersEl = document.getElementById('total-answers');
const accuracyEl = document.getElementById('accuracy');

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    selectedQuestions = shuffleArray(questions).slice(0, 10);
    
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    totalQuestionsEl.textContent = selectedQuestions.length;
    scoreEl.textContent = score;
    
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    questionEl.textContent = currentQuestion.question;
    
    optionsEl.innerHTML = '';
    feedbackEl.style.display = 'none';
    feedbackEl.classList.remove('show', 'correct', 'incorrect');
    nextBtn.style.display = 'none';
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.addEventListener('click', () => selectAnswer(index));
        optionsEl.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;
    
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selectedAnswer: selectedIndex,
        isCorrect: isCorrect
    });
    
    const optionBtns = optionsEl.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, index) => {
        btn.classList.add('disabled');
        btn.disabled = true;
        
        if (index === currentQuestion.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    if (isCorrect) {
        score++;
        scoreEl.textContent = score;
        feedbackEl.textContent = '正解！ ' + currentQuestion.explanation;
        feedbackEl.classList.add('show', 'correct');
    } else {
        feedbackEl.textContent = '不正解。 ' + currentQuestion.explanation;
        feedbackEl.classList.add('show', 'incorrect');
    }
    
    feedbackEl.style.display = 'block';
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    const accuracy = Math.round((score / selectedQuestions.length) * 100);
    
    correctAnswersEl.textContent = score;
    totalAnswersEl.textContent = selectedQuestions.length;
    accuracyEl.textContent = accuracy;
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);