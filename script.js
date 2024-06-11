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
    3: {
        text: "You're dreaming that you're flying over a city, but you are aware that you're dreaming. Which sleep stage are you most likely in?",
        options: [
            {text: "NREM Stage 1", isCorrect: false},
            {text: "NREM Stage 2", isCorrect: false},
            {text: "NREM Stage 3", isCorrect: false},
            {text: "REM Sleep", isCorrect: true}
        ]
    },
    4: {
        text: "During which stage of sleep does the body undergo the most significant physical restoration and growth?",
        options: [
            {text: "NREM Stage 1", isCorrect: false},
            {text: "NREM Stage 2", isCorrect: false},
            {text: "NREM Stage 3 (Slow-Wave Sleep)", isCorrect: true},
            {text: "REM Sleep", isCorrect: false}
        ]
    },
    5: {
        text: "You find yourself waking up frequently during the night and have trouble staying asleep. Which sleep disorder might you have?",
        options: [
            {text: "Narcolepsy", isCorrect: false},
            {text: "Insomnia", isCorrect: true},
            {text: "Sleep Apnea", isCorrect: false},
            {text: "Night Terrors", isCorrect: false}
        ]
    },
    6: {
        text: "You know someone who experiences sudden sleep attacks and falls asleep without warning. What sleep disorder is this?",
        options: [
            {text: "Sleepwalking", isCorrect: false},
            {text: "Insomnia", isCorrect: false},
            {text: "Narcolepsy", isCorrect: true},
            {text: "Restless Legs Syndrome", isCorrect: false}
        ]
    },
    7: {
        text: "Your friend drank several cups of coffee to stay awake and study for exams. Which category of psychoactive drugs does caffeine fall under?",
        options: [
            {text: "Depressants", isCorrect: false},
            {text: "Stimulants", isCorrect: true},
            {text: "Hallucinogens", isCorrect: false},
            {text: "Opiates", isCorrect: false}
        ]
    },
    8: {
        text: "Which psychoactive drug is commonly used to treat severe pain but has a high potential for addiction and can lead to euphoria?",
        options: [
            {text: "Cocaine", isCorrect: false},
            {text: "LSD", isCorrect: false},
            {text: "Heroin", isCorrect: true},
            {text: "Nicotine", isCorrect: false}
        ]
    }
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
    button.addEventListener('click', (event) => {
        const isCorrect = event.target.getAttribute('data-answer') === 'true';
        checkAnswer(isCorrect);
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
    if (isCorrect) {
        alert('Correct! Move forward.');
        currentQuestion = parseInt(currentQuestion) + 1;
        if (currentQuestion <= Object.keys(questions).length) {
            showQuestion(currentQuestion);
        } else {
            alert('Congratulations! You have completed the maze.');
        }
    } else {
        alert('Incorrect. Try another path.');
    }
}

