function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = '정답을 입력하세요'; // 여기에 정답을 입력해주세요

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('feedback').textContent = "정답입니다!";
        document.getElementById('quiz-image').style.display = 'none'; // 이미지 숨기기
        document.getElementById('next-btn').style.display = 'block'; // 다음 버튼 보이기
    } else {
        document.getElementById('feedback').textContent = "틀렸습니다. 다시 시도하세요.";
    }
}
