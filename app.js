let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let userAnswers = [];
let selectedQuestionCount = 20;
let isPaused = false;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const pauseModal = document.getElementById('pause-modal');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');
const pauseBtn = document.getElementById('pause-btn');
const resumeBtn = document.getElementById('resume-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const correctAnswersEl = document.getElementById('correct-answers');
const totalAnswersEl = document.getElementById('total-answers');
const accuracyEl = document.getElementById('accuracy');
const resultEmojiEl = document.getElementById('result-emoji');
const resultMessageEl = document.getElementById('result-message');

const levelBtns = document.querySelectorAll('.level-btn');
levelBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        levelBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        selectedQuestionCount = parseInt(this.dataset.questions);
        totalQuestionsEl.textContent = selectedQuestionCount;
        totalAnswersEl.textContent = selectedQuestionCount;
    });
});

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
    isPaused = false;
    
    selectedQuestions = shuffleArray(questions).slice(0, selectedQuestionCount);
    
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    totalQuestionsEl.textContent = selectedQuestions.length;
    totalAnswersEl.textContent = selectedQuestions.length;
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
    if (isPaused) return;
    
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
        feedbackEl.innerHTML = '🎉 正解！<br>' + currentQuestion.explanation;
        feedbackEl.classList.add('show', 'correct');
    } else {
        feedbackEl.innerHTML = '😢 残念！<br>' + currentQuestion.explanation;
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
    accuracyEl.textContent = accuracy;
    
    if (accuracy >= 90) {
        resultEmojiEl.textContent = '🏆';
        resultMessageEl.textContent = 'すごい！天才だね！';
    } else if (accuracy >= 70) {
        resultEmojiEl.textContent = '🌟';
        resultMessageEl.textContent = 'よくできました！その調子！';
    } else if (accuracy >= 50) {
        resultEmojiEl.textContent = '💪';
        resultMessageEl.textContent = 'がんばったね！もう少し！';
    } else {
        resultEmojiEl.textContent = '🌱';
        resultMessageEl.textContent = 'まだまだこれから！一緒にがんばろう！';
    }
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

function goHome() {
    if (confirm('トップ画面に戻りますか？\n現在の進捗は失われます。')) {
        quizScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        startScreen.classList.add('active');
        pauseModal.classList.remove('show');
        isPaused = false;
    }
}

function pauseQuiz() {
    if (quizScreen.classList.contains('active')) {
        isPaused = true;
        pauseModal.classList.add('show');
    }
}

function resumeQuiz() {
    isPaused = false;
    pauseModal.classList.remove('show');
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
homeBtn.addEventListener('click', goHome);
pauseBtn.addEventListener('click', pauseQuiz);
resumeBtn.addEventListener('click', resumeQuiz);

pauseModal.addEventListener('click', function(e) {
    if (e.target === pauseModal) {
        resumeQuiz();
    }
});