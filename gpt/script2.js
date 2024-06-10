document.addEventListener('DOMContentLoaded', function() {
    const videoLinks = document.querySelectorAll('.video-link');

    videoLinks.forEach(link => {
        const videoDiv = link.querySelector('.category-video');
        const color = link.getAttribute('data-color');
        const gifSrc = link.getAttribute('data-gif');

        // 초기 배경색 설정
        videoDiv.style.backgroundColor = color;

        link.addEventListener('mouseover', function() {
            videoDiv.style.backgroundImage = `url(${gifSrc})`;
            videoDiv.style.backgroundColor = ''; // 배경색 제거
        });

        link.addEventListener('mouseout', function() {
            videoDiv.style.backgroundImage = '';
            videoDiv.style.backgroundColor = color; // 배경색 복원
        });
    });
});
