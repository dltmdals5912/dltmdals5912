const questions = [
    { question: "이 인물은 K-pop의 대표 아이돌 그룹 방탄소년단의 리더입니다. 그는 누구일까요?", answer: "RM" },
    { question: "이 인물은 한국의 유명 유튜버이자 방송인으로, '워크맨'이라는 인기 프로그램을 진행합니다. 그는 누구일까요?", answer: "장성규" },
    { question: "이 인물은 영화 '기생충'으로 아카데미 감독상을 수상한 감독입니다. 그는 누구일까요?", answer: "봉준호" },
    { question: "이 인물은 한국의 인기 축구 선수로, 현재 토트넘 홋스퍼 FC에서 뛰고 있습니다. 그는 누구일까요?", answer: "손흥민" },
    { question: "이 인물은 한국의 유명 가수이자 배우로, '아이유'라는 예명으로 활동하고 있습니다. 그녀는 누구일까요?", answer: "이지은" },
    { question: "이 인물은 넷플릭스 드라마 '오징어 게임'에서 주인공을 맡은 배우입니다. 그는 누구일까요?", answer: "이정재" },
    { question: "이 인물은 한국의 대표적인 여성 래퍼로, '쇼미더머니'에 출연한 적이 있습니다. 그녀는 누구일까요?", answer: "이영지" },
    { question: "이 인물은 현대 자동차 그룹의 회장으로, 세계적인 자동차 브랜드로 성장시키고 있습니다. 그는 누구일까요?", answer: "정의선" },
    { question: "이 인물은 한국의 인기 여성 그룹 블랙핑크의 멤버로, 'SOLO'라는 곡으로 솔로 활동도 성공적으로 했습니다. 그녀는 누구일까요?", answer: "제니" },
    { question: "이 인물은 한국의 유명한 스타트업 창업자로, '배달의 민족'을 창립한 인물입니다. 그는 누구일까요?", answer: "김봉진" },
];

let currentQuestionIndex = 0;

function displayQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div class="question">
            <p>${questions[index].question}</p>
            <input type="text" id="answer" />
            <button onclick="submitAnswer('${questions[index].answer}')">정답 제출</button>
            <p id="result" class="result"></p>
        </div>
    `;
    document.getElementById('next-button').style.display = 'none';
}

function submitAnswer(correctAnswer) {
    const userAnswer = document.getElementById('answer').value.trim();
    const resultElement = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        resultElement.innerText = "정답입니다!";
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = `오답입니다. 정답은 ${correctAnswer}입니다.`;
        resultElement.style.color = "red";
    }

    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        const questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = '<p>퀴즈를 모두 완료했습니다!</p>';
        document.getElementById('next-button').style.display = 'none';
    }
}

// 처음 질문을 표시합니다.
displayQuestion(currentQuestionIndex);
