const quizData = [
    {
        question: "정답은?",
        correct: "전투기",
        image: "https://img.khan.co.kr/news/2019/09/16/l_2019091701001670100138131.jpg"
    },
    {
        question: "정답은?",
        correct: "정각",
        image: "https://previews.123rf.com/images/savanno/savanno1704/savanno170400902/76768164-%EB%A1%9C%EB%A7%88-%EC%88%AB%EC%9E%90%EC%99%80-%EC%8B%9C%EA%B3%84-9%EC%8B%9C-%EC%A0%95%EA%B0%81.jpg"
    },
    {
        question: "정답은?",
        correct: "오타니 쇼헤이",
        image: "https://image.edaily.co.kr/images/photo/files/NP/S/2023/03/PS23032500093.jpg"
    },
    {
        question: "정답은?",
        correct: "축구선수",
        image: "https://ilyo.co.kr/contents/article/images/2020/0901/1598949067637300.jpg"
    },
    {
        question: "정답은?",
        correct: "자동차",
        image: "https://i.namu.wiki/i/0U7QgewQQBmaa5c6EsbZQdbl045T-NTVylXcWoPVWNqPVNARqPOa3IwwsF0HXbqtFBRRXBBPzjBTThmiI12WLg.webp"
    },
    {
        question: "정답은?",
        correct: "군인",
        image: "https://www.korea.kr/newsWeb/resources/attaches/2016.04/18/PYH2015112305980001300450.jpg"
    },
    {
        question: "마지막 친구 명칭은??",
        correct: "왜소행성134340",
        image: "https://i.pinimg.com/564x/15/17/cf/1517cf2580b202631dc062a1ae54a4d8.jpg"
    },
];

let currentQuiz = 0;
let score = 0;
let timer;
let timeLeft = 25;

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const quizImage = document.getElementById('quiz-image');
const answerInput = document.getElementById('answer');
const feedbackEl = document.getElementById('feedback');
const timerEl = document.createElement('div');

timerEl.id = 'timer';
timerEl.style.fontSize = '18px';
timerEl.style.marginTop = '10px';
quiz.appendChild(timerEl);

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    question
    questionEl.innerText = currentQuizData.question;
    quizImage.src = currentQuizData.image;
    quizImage.style.display = "block";
    answerInput.value = "";
    feedbackEl.innerText = "";
    feedbackEl.style.opacity = 0;

    timeLeft = 25;
    timerEl.innerText = `남은 시간: ${timeLeft}초`;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    timerEl.innerText = `남은 시간: ${timeLeft}초`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        submitAnswer();
    }
}

function submitAnswer() {
    const answer = answerInput.value.trim();
    const currentQuizData = quizData[currentQuiz];

    if (answer.toLowerCase() === currentQuizData.correct.toLowerCase()) {
        score++;
        feedbackEl.innerText = "정답입니다! 👏";
        feedbackEl.classList.add('correct');
    } else {
        feedbackEl.innerText = `"${currentQuizData.correct}" .`;
        feedbackEl.classList.remove('correct');
    }

    feedbackEl.style.opacity = 1;

    currentQuiz++;

    setTimeout(() => {
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // 퀴즈가 완료되었을 때 페이지 이동 버튼을 표시
            const page2Btn = document.querySelector('.page2-btn');
            page2Btn.style.display = 'block';
            
            // 퀴즈 완료 메시지 표시
            quiz.innerHTML = `
                <h2>퀴즈 완료! 당신의 점수는 ${score}/${quizData.length} 입니다.</h2>
                <button onclick="location.reload()">다시 시작</button>
            `;
        }
    }, 3000); // 3초 후 다음 문제로 이동
}
