// script.js
const animals = [
    { name: "아기아르마딜로", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2qttq2k6O0d2Fr4KQpG4tC_0Jb8432pbGQ&s" },
    { name: "원숭이", image: "https://content.quizzclub.com/trivia/2019-10/aye-aye_1.jpg" },
    { name: "늑대", image: "https://cdn.newspenguin.com/news/photo/201910/756_1220_2343.jpg" },
    { name: "게레눅", image: "https://mblogthumb-phinf.pstatic.net/data29/2007/9/24/113/npecdb_3byuno.jpg?type=w420" },
    { name: "듀공", image: "https://www.hmap.co.kr/upload/editor/1536730278_0tM_untitled.png" },
    { name: "블롭피쉬", image: "https://i.namu.wiki/i/bQ1zH_rdLID5DVmyVxAOzlo4piZLH4IVlXj-a8lwuAOp9_ru1NW01ucPRZ6265Y3TVMLyrQZELZflPWGaM3n9Q.webp" },
    { name: "푸른갯민숭달팽이", image: "https://i.namu.wiki/i/h_xWcT7XBUf8hYO-B63dva2Z0UMeT5iYrvQBTTsJMqXndCFwZhZAUJql8XiNr_ARsXv3kUzfnQlI4UPLyRrUzw.jpg" },
    { name: "나뭇잎해룡", image: "https://mblogthumb-phinf.pstatic.net/MjAyMzAzMTZfMjYg/MDAxNjc4OTU3MDc5MTAw.s8S6-hw138FFbdNF_J1BqYIDcvqGj4zS_yarsARWyUcg.N6hdNovRjMMP2JED2qUHJSSLWnhLQmkIzeXDbbfoneQg.JPEG.skyuiop77/IMB_djL7Bl.jpg?type=w800" },
    { name: "상괭이", image: "https://img.kbs.co.kr/kbs/620/news.kbs.co.kr/data/fckeditor/new/image/2021/05/13/295691620892644017.jpg" },
    { name: "꼴뚜기", image: "https://i.namu.wiki/i/oMo0OgvnTovFCimf1k-uQpsts4FSG_H2nvJo4f0udzNqDBL0j_xUUUMLQRyfYBFlvt-xTwj497i5CcrNXIQuDA.webp" },
    { name: "쿼카", image: "https://res.heraldm.com/content/image/2022/10/12/20221012000744_0.jpg" },
    { name: "", image: "images/animal2.jpg" },
    { name: "", image: "images/animal2.jpg" },

];
let currentAnimalIndex = 0;

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const result = document.getElementById('result');

    if (userAnswer === animals[currentAnimalIndex].name) {
        result.textContent = "정답입니다!";
    } else {
        result.textContent = `${animals[currentAnimalIndex].name}.`;
    }
    currentAnimalIndex = (currentAnimalIndex + 1) % animals.length;
    setTimeout(loadNextAnimal, 2000); // 2초 후 다음 문제로 넘어감
}

function loadNextAnimal() {
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('animal-image').src = animals[currentAnimalIndex].image;
}

document.addEventListener('DOMContentLoaded', () => {
    loadNextAnimal();
});