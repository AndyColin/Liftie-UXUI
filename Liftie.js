let currentQuestion = 0;
const questions = [
    "¿Dormiste bien anoche?",
    "¿Has tomado suficiente agua hoy?",
    "¿Has hecho ejercicio hoy?",
    "¿Te has sentido estresado hoy?",
    "¿Has comido saludable hoy?"
];
const answers = [
    ["Sí", "No"],
    ["Sí", "No"],
    ["Sí", "No"],
    ["Sí", "No"],
    ["Sí", "No"]
];

function login() {
    // Simulate login
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('intro-screen').style.display = 'block';
}

function startQuestions() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('questions-screen').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    document.getElementById('question-text').innerText = questions[currentQuestion];
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    answers[currentQuestion].forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => answerQuestion(answer);
        answersDiv.appendChild(button);
    });
}

function answerQuestion(answer) {
    // Change Mela's state based on the answer
    const melaState = document.getElementById('mela-state');
    melaState.src = answer === 'Sí' ? 'mela_happy.png' : 'mela_sad.png';
    // Continue to next question
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById('questions-screen').style.display = 'none';
        document.getElementById('final-question-screen').style.display = 'block';
    }
}

function setGender(gender) {
    if (gender === 'si') {
        document.getElementById('final-question-screen').style.display = 'none';
        document.getElementById('age-range-screen').style.display = 'block';
    } else {
        finish();
    }
}

function setAgeRange(range) {
    document.getElementById('age-range-screen').style.display = 'none';
    document.getElementById('cycle-phase-screen').style.display = 'block';
}

function setCyclePhase(phase) {
    // Personalizar las notificaciones según la fase del ciclo
    finish();
}
// cómo hago para que se almacene la fase de cilco y automatizar un conteo o ligar los datos a una app de salud?
function finish() {
    alert("Esta fase es para calmar al cuerpo, y darle otra oportunidad a la meditación!");
    //
    //Explicar que fase es cada una en una nota de inf dia 1 menstración-4/5 etc 
    //Set up notifications based on user's answers
}
