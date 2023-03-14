// 메인 페이지 이미지 슬라이드
const left = document.getElementById('left_btn'),
    pro_box1 = document.getElementById('new1'),
    right = document.getElementById('right_btn'),
    pro_box2 = document.getElementById('new2');



left.addEventListener('click', function () {
    pro_box1.style.left = '0';
    pro_box2.style.left = '100%';
    this.style.visibility = 'hidden';
    right.style.visibility = 'visible';
});

right.addEventListener('click', function () {
    pro_box1.style.left = '-100%';
    pro_box2.style.left = '0';
    this.style.visibility = 'hidden';
    left.style.visibility = 'visible';
});