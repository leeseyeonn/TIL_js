//timer1.js
//setInterval(콜백함수, 시간)
/* let num1 = 1;
const timer1 = setInterval(function(){
    //num1 ++ //2 부터 시작
    if(num1>5) num1=1 //num1이 5을 넘기면, num1을 1로 대입
    console.log('timer test1'+ num1)
    num1 ++ //1부터 시작
}, 100000) //1초 간격으로 이 함수를 반복실행한다.

console.log('======================')

//0~6 반복 타이머
//123456 0123456 0123456

let num = 1;
const timer2 = setInterval(function(){
    if(num>6) num=0
    console.log('timer test2_' + num)  
    num ++ 
},100000)

console.log('======================')
//정답
let num3 = 0;
const timer3 = setInterval(function(){
    num3++
    if(num3 > 6) num3 =0
    console.log(num3)
},50000000)

console.log('======================')
//3~0 반복 타이머
//3210 3210 3210
let num4 = 3;
let timer4 = setInterval(function(){
    console.log(num4)
    num4 --
    if(num4<0) num4 =3
},50000000) */











//이미지 슬라이드 타이머 활용
const gentleSlide1 = document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')
const gentileSlideCurrentNum = document.querySelector('.page_number .current')
const gentileSlideTotalNum = document.querySelector('.page_number .total')
console.log(gentleSlide1)


//012345 현재 존재하는 슬라이드 인덱스
//12345 012345 012345

let gentleNum1 = 0; //초기값

//opacity + visibilty 서서히 나타나는 슬라이드 애니메이션
//gentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용 transtition

for(let i of gentleSlide1)
    i.style.transition = 'opacity 0.5s' // 이 슬라이드에 변화가 있을 때 애니메이션을 주겠다라는 의미


let gemtleTimer1 = setInterval(function(){
    gentleNum1++
    if(gentleNum1 >= gentleSlide1.length) gentleNum1=0
    console.log('gentleSlide1_'+ gentleNum1)
    for(let i of gentleSlide1){
        i.style.visibility= 'hidden';
        i.style.opacity='0';
    } //모두 숨기기
    gentleSlide1[gentleNum1].style.visibility='visible'
    gentleSlide1[gentleNum1].style.opacity='1';
    gentileSlideCurrentNum.textContent = gentleNum1 +1 
     // 시간에 따라 1개씩만 보이게 하기
},3000)

console.log(gentleNum1)

gentileSlideTotalNum.textContent = gentleSlide1.length;



//43210 543210 543210 (역순)
let gentleNum2 = 5; /* gentleSlide2.length-1  */
let gemtleTimer2 = setInterval(function(){
    gentleNum2--
    if(gentleNum2 < 0 ) gentleNum2 = gentleSlide2.length-1 /* 5 */
    console.log('gentleSlide2_'+ gentleNum2)
    for(let i of gentleSlide2){
        i.style.visibility= 'hidden';
        i.style.opacity='0';
    }
    gentleSlide2[gentleNum2].style.visibility='visible'
    gentleSlide2[gentleNum2].style.opacity='1';
},3000)

