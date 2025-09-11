function naverlink(){
    window.open('http://naver.com','_blank')
}
//naverlink(); /*  밖에 꺼내면 바로 호출 됨 */

const writeFunc = function(){
    return window.location.href('http://google.com')
}
//writeFunc();

//DOM /* 동적인 요소나 사용자와 상호작용할때의 생긴 경우를 위해서 여기서 수정을 하는 것 */
const btn = document.getElementsByTagName('button') /* button태그를 묶는다 */
const div = document.getElementsByTagName('div')
console.log(btn); /* 묶여있으니까 인덱스 */
console.log(div);
btn[2].style.color = 'red';
btn[0].style.backgroundColor='yellow';
btn[0].style.width='200px';
div[0].style.backgroundColor='lightgreen';
div[1].style.transform='rotate(-5deg)';

//클래스 선택하기
const slide = document.getElementsByClassName('slide')
const slidewrap = document.getElementsByClassName('slide_wrap')
console.log(slide, slidewrap); /* .slide가 아닌이유:바로위에 Class 선언을 했기때문에 안써도됨 */
slide[0].style.backgroundColor='#ff0'
slide[1].style.backgroundColor='pink'
slidewrap[0].style.border = '5px solid purple';
/* 태그와 클래스dom은 반드시 인덱스를 붙여야됨 */


//아이디 DOM
const container = document.getElementById('slide_container')
console.log(container)
container.style.backgroundColor = 'orange';
container.style.margin = '0 auto';
//아이디는 단 하나의 요소로 인덱스를 붙이지 않고 작성한다.
slide_container.style.filter='invert(1)'


// ES6 querySelctor
const tag_es6 = document.querySelectorAll('div')
const cls_es6 = document.querySelectorAll('.slide')
const id_es6 = document.querySelector('#slide_container')
console.log(tag_es6, cls_es6,id_es6) /* 콘솔 누르면 첫번째 div(test)만 나오는데 쿼리셀렉터는 첫번째 요소를 선택한다. */

const navMain = document.querySelector('#main');
const navGnb = document.querySelector('.gnb');
const navLi = document.querySelectorAll('.gnb > li');
const navLi_2 = navGnb.querySelectorAll('li');
const navA = document.querySelectorAll('.gnb > li > a');
const navA_2 = navLi[0].querySelectorAll('a');
console.log(navMain,navGnb,navLi,navLi_2,navA,navA_2);

navGnb.style.display = 'flex' /* 기본값이 row이다 */
navLi[2].style.transition='transform 0.3s linear 2s'
navLi[0].style.fontSize='2rem'
navA[0].style.animation='rotate360 1s alternate infinite'
/* 변수 사용시 all 키워드 유무에 따라 [인덱스] 사용 주의하기 */

//로그인 알고리즘
//버튼 클릭시 사용자가 입력한 아이디, 이름, 비밀번호 확인 알고리즘
const loginBtn= document.querySelector('#loginFrm button');
const loginId=document.querySelector('#id');
const loginName=document.querySelector('#name');
const loginPw=document.querySelector('#pw1');
console.log(loginBtn,loginId,loginName,loginPw);
console.log(loginId.type);

function userInfo(){
    let data = loginId.value;
    data += loginName.value;
    data += loginPw.value;
    return console.log(data);
}


//객체 .속성; //속성 읽기
//객체.속성.속성 = 대입값;
//이미지객체.src = '경로'
//loginId.type = 'password'


//JS - HTML, CSS
//DOM.style.color; <color가 무엇인지 확인하겠다 (읽기)
//DOM.style.color ='값';  (수정)
//객체.속성.속성
//객체.함수()