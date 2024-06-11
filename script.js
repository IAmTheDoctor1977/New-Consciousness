const questions = {
    1: {
        text: "You just finished your homework and suddenly feel very drowsy. What state of consciousness are you experiencing?",
        options: [
            {text: "Sleep", isCorrect: true},
            {text: "Hypnosis", isCorrect: false},
            {text: "Meditation", isCorrect: false},
            {text: "Awake", isCorrect: false}
        ]
    },
    2: {
        text: "During a session with a therapist, you find yourself in a highly relaxed and focused state. What state of consciousness is this?",
        options: [
            {text: "Daydreaming", isCorrect: false},
            {text: "Sleep", isCorrect: false},
            {text: "Hypnosis", isCorrect: true},
            {text: "Awake", isCorrect: false}
        ]
    },
    // Add more questions as needed
};

let currentQuestion = null;

document.querySelectorAll('.question').forEach(cell => {
    cell.addEventListener('click', () => {
        const questionNumber = cell.getAttribute('data-question');
        currentQuestion = questionNumber;
        showQuestion(questionNumber);
    });
});

document.querySelectorAll('.answer').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.getAttribute('data-answer');
        checkAnswer(answer);
    });
});

function showQuestion(questionNumber) {
    const question = questions[questionNumber];
    document.getElementById('question-text').textContent = question.text;
    document.querySelectorAll('.answer').forEach((button, index) => {
        button.textContent = question.options[index].text;
        button.setAttribute('data-answer', question.options[index].isCorrect);
    });
    document.getElementById('question-modal').style.display = 'flex';
}

function checkAnswer(isCorrect) {
    document.getElementById('question-modal').style.display = 'none';
    if (isCorrect === 'true') {
        alert('Correct! Move forward.');
    } else {
        alert('Incorrect. Try another path.');
    }
}
