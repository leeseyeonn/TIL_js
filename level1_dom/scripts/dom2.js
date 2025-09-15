//dom2.js
//1. 변수 section*2, a*2, btn*2 (동적 대상 체크 후 변수생성)
const sectionTag = document.querySelectorAll('section')
const linkCls =document.querySelectorAll('section .link')
const btnCls = document.querySelectorAll('section .btn')
/* console.log(btnCls,btnTag[1],linkCls,sectionTag,sectionTag[0],sectionTag[1],sectionTag.length) */
//2. 이벤트와 함수, 속성
//초기값(즉시 실행)
sectionTag[0].style.backgroundColor = '#ff0'
sectionTag[1].style.backgroundColor = '#f5f5f5'
//이벤트, 콜백 함수 추가 생성
//a2 클릭시 section[1] 배경색 변경
//a태그에 클릭, 터치 이벤트 적용 시 href 속성때문에 스크롤이 위로 올라가는 문제 발생 -> a의 기본 속성 기능 해제 preventDefault() 활용


/* function bgFunc(color){
    return function(){
        linkCls[1].style.backgroundColor=color;
    }
}  */



/* linkCls[1].addEventListener('click',bgFunc)
function bgFunc(e){
    console.log(e);
    e.preventDefault();
    return sectionTag[1].style.backgroundColor='#87ffed'
} */

/* 익명함수
linkCls[1].addEventListener('click',function(event){
    console.log(event)
    event.preventDefault(); 
    sectionTag[1].style.backgroundColor='#87ffed'
}) */

/* linkCls[1].addEventListener('click',(event)=>{
    console.log(event)
    event.preventDefault(); 
    sectionTag[1].style.backgroundColor='#87ffed'
}) */

/* linkCls[0].addEventListener('clink',bgfunc2)
function bgfunc2(e){
    console.log(e);
    e.preventDefault();
    return sectionTag[0].style.backgroundColor='#668aff'
}
 */

/* linkCls[0].addEventListener('click',(event)=>{
    console.log(event)
    event.preventDefault(); 
    sectionTag[0].style.backgroundColor='#668aff'
}) */

/* //a, button(type=button)
btnCls[0].addEventListener('click', ()=>{// 로그인했을떄 다른 페이지로 이동
    window.location.href = './dom1.html' //상위폴더인데 왜  ../을 안쓰는 이유-> html에 자바스크립트 defer 걸어놔서 인듯? ㅎㅎ
}) //button 이용 js 진행 시 특정 페이지 이동이 필요할 때 location.href를 사용한다 
// 예시: 로그인 성공시 다른 페이지로 이동할 때. 윈도우 로케이션말고 윈도우 오픈은 새창으로 뜨는 것.
 */

/* btnCls[1].addEventListener('click',()=>{
    window.location.href ='../index.html'
})
 */

/* btnCls[1].addEventListener('click',()=>{
    window.location.href ='../sass_study/project2/index.html'
}) */

btnCls[0].addEventListener('click',sassProjectFunc('1')) //project 1번으로 이동
btnCls[1].addEventListener('click',sassProjectFunc('2')) //project 2번으로 이동

function sassProjectFunc(src){
    return function(){
        location.href=`../sass_study/project${src}/index.html`
    }
}

//쇼핑몰 수량 변수

const inputNum = document.querySelector('#num')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const totalPrice = document.querySelector('.price em') 
let count =1; /* 수량은 변동하니까 let */
let price = 12900;
console.log(inputNum,plusBtn,minusBtn,totalPrice)
//수량에 따라 가격변동
//1개당 가격 12900원
//초기값 설정
inputNum.value = count;
totalPrice.textContent = price.toLocaleString('ko-kr');
//이벤트 함수
//+클릭하면 수량 증가


plusBtn.addEventListener('click',plusFunc)

function plusFunc(){
    console.log(typeof(inputNum.value), typeof(count))
    /* return inputNum.value = Number(inputNum.value)+count */
    
    inputNum.value = ++count; //증감연산자 사용 (++), (--)
    /* return totalPrice.textContent = (inputNum.value*12900).toLocaleString('ko-kr'); 혹은 지역변수를 만들어서 */
    let priceFinal = price * count;
    return totalPrice.textContent = priceFinal.toLocaleString('ko-kr');
}

minusBtn.addEventListener('click',minusFunc)

function minusFunc(){
    inputNum.value = --count; //증감연산자 사용 (++), (--)
    return totalPrice.textContent = (inputNum.value*12900).toLocaleString('ko-kr');
}

