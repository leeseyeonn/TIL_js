const inputTag = document.querySelectorAll('input')
const btnTag = document.querySelectorAll('button');
const mainTag = document.querySelector('main')

console.log(inputTag);
console.log(inputTag[0]); /* 인덱스 */
console.log(inputTag[1]); /* 인덱스 */
console.log(inputTag.length)/* length */

console.log(btnTag);
console.log(btnTag[0]);
console.log(btnTag[1]);
console.log(btnTag.length);

const searchInput = document.querySelector('input[type=search]' /* '#search' */)
const searchBtn = document.querySelector('#search_btn')
const shopNumInput = document.querySelector('#num')
const shopCartInput = document.querySelector('#cart_btn')
console.log(searchInput,searchBtn,shopNumInput,shopCartInput);



/* const searchInput = document.querySelector('section:fist-child input')
const searchInput = document.querySelector('#s')
const searchInput = document.querySelector('input[name*=s]') //querySelectorAll이 아니라므로 [인덱스] 사용금지 */




/* const cartInput = document.querySelector('input[type=text]')
const cartInput = document.querySelector('section:last-child input')
const cartInput = document.querySelector('#c')
const cartInput = document.querySelector('input[name*=c]') */

/* 태그속성, 함수 테스트 */
console.log(searchInput.type, searchInput.placeholder); //속성읽기
console.log() /* 속성을 변경하려면 콘솔 안? 밖 -> 정답은 밖 */
/* searchInput.placeholder() //함수일때 */

searchInput.placeholder = ''; //속성일때 /* html에 "검색어를 입력하세요< 적어도 여기서 이렇게 지우면 나타나지 않음" */
searchInput.value = '인기검색어'; 
let checkValue = searchInput.value;  /* 속성 읽기->input의 값을 읽는다 */
console.log(checkValue);

/* 위와 동일한 값이 나옴
searchInput.placeholder = '';  빈값 초기화
let checkValue = '';  
checkValue = searchInput.value ='인기 검색어';  속성 읽기->input의 값을 읽는다 
console.log(checkValue); 
 */


/* shopNumInput.value = '';
shopNumInput.value = '수량선택';
let checkShopNumInput = shopNumInput.value
console.log(checkShopNumInput);
console.log(typeof(checkShopNumInput)); */

console.log(shopNumInput.type);
console.log(shopNumInput.name);
console.log(Number(shopNumInput.value)+1); //문자 + 숫자 =문자 숫자로만 쓰고싶다면 앞에 Number로 하자
console.log(typeof(Number(shopNumInput.value)+1));

checkValue = Number(shopNumInput.value) + 1;
console.log(`주문수량:${checkValue}`)



/* 스타일 적용하기 */
/* -------------------------검색하기버튼 */
btnTag[0].style.width='200px'
btnTag[0].style.height='50px'
btnTag[0].style.border='2px solid purple'
btnTag[0].style.borderRadius='50px'

/* -------------------------장바구니버튼 */
btnTag[1].style.width='200px'
btnTag[1].style.height='50px'
btnTag[1].style.backgroundColor='pink'
btnTag[1].style.borderRadius='50px'

/* -------------------------검색어 입력하는 부분 */
searchInput.style.backgroundColor='yellow'
searchInput.style.width='500px'
searchInput.style.height='50px'

/* -------------------------수량버튼부분 */
shopNumInput.style.width='50px'
shopNumInput.style.height='50px'
shopNumInput.style.backgroundColor='lightblue'
shopNumInput.style.fontWeight='700'
shopNumInput.style.fontSize='1.5rem'



// 이벤트 활용 콜백 함수 호출
//이벤트 문법
//객체.addEventListener('이벤트종류','콜백함수')

/* 1.변수부터 만들기 */
const orderBtn = document.querySelector('#order')
console.log(orderBtn);

const cartBtn = document.querySelector('#cart')
console.log(cartBtn);


/* 2. '주문버튼 클릭시 상품을 선택하세요' 경고창 출력*/
//이벤트 뒤 함수 작성 방식 : 콜백함수호출(추천:다른곳에서도 활용이가능하기때문이다), 익명함수
//익명함수 ->
/* orderBtn.addEventListener('click',function(){
    alert('상품을 선택하세요')
})
 */
//콜백함수
/* function orderFunc(){
    return alert('상품을 선택하세요')
}
orderBtn.addEventListener('click',orderFunc)  orderBtn을 클릭했을때 orderFunc 함수 실행  */


//주문하기 클릭 시 -> '장바구니에 담으세요' 
//장바구니 클릭 시 -> '상품을 담으세요'
//함수 1개만 활용 각각 DOM 이벤트 클릭시 다른 메세지 출력하기

/* 클릭하면 알림이 나오는 함수 */
function clickFunc(text){
    return alert(`${text} 담으세요`)
}

orderBtn.addEventListener('click',function(){
    clickFunc('장바구니에') 
})

/* 혹은 
orderBtn.addEventListener('click',()=>{
    clickFunc('장바구니에')
}) */

cartBtn.addEventListener('click',function(){
    clickFunc('상품에')
})

/* 혹은
cartBtn.addEventListener('click',()=>{
    clickFunc('장바구니에')
})
 */

/* 클로저 함수 함수안에서 함수를 처리
function clickFunc_v2(text){
    return function(){ -> 괄호에 안 쓰는 이유 : 내부함수는 외부함수의 매개변수를 기억한다
        alert(`${text} 담으세요`) 
    }
}
 */

//아이디, 비밀번호 중복확인 클릭 시
//아이디가 중복되었습니다.
//비밀번호가 중복되었습니다.

/* 1. 제어 Dom 대상 변수 등록 */
const idOverLapBtn = document.querySelector('#id')
const pwOverLapBtn = document.querySelector('#pw')
console.log(idOverLapBtn, pwOverLapBtn)
/* 2. '클릭 시' 이벤트 콜백함수 제작 */
idOverLapBtn.addEventListener('click',()=>{overLapBtnFunc('아이디가')}) /* 방법1 */
pwOverLapBtn.addEventListener('click',overLapBtnFunc_v2('비밀번호')) /* 방법2->클로저함수 */
/* 3.  실행 메세지가 통일된 특징에 맞춰서 콜백함수 1개 제작 */
function overLapBtnFunc(msg){ /* 방법1 */
    return alert(msg+'중복되었습니다')
}

function overLapBtnFunc_v2(msg){ /* 방법2->클로저함수 */
    return function(){
        alert(msg+'중복되었습니다')}
}

/* 3-1. 콜백함수 내에 함수호출 시 다른 내용이 있으면 매개변수 1개 제작 */
/* 4. 3번 콜백함수를 2번 이벤트에서 호출   */

//이벤트 콜백함수 연습
//Q1. textarea 값을 입력했을때 콘솔창에 '50자 이상 입력하세요' 출력
/* const textArea = document.querySelector('#review')
console.log(textArea)
textArea.addEventListener('keyup',textFunc())
function textFunc(){
    return function(){
        alert('50자 이상 입력하세요');
    }
} */
//Q2. textarea를 활성화 했을때 테두리 빨강색

const textArea = document.querySelector('#review')
console.log(textArea)
/* textArea.style.border='2px solid grey'; */
textArea.addEventListener('focus',borderFunc('#f00'))

function borderFunc(color){
    return function(){
        textArea.style.border=`2px solid ${color}`;
    }
}
borderFunc('#aaa')


//Q3. textarea를 비활성화 했을때 테두리 빨강색
textArea.style.outline = 'none'

// 배경 버튼 클릭시 부모 artice 배경색 변경하기
const articeTag = document.querySelector('article')
const bgBtn = document.querySelectorAll('.bg_btn')
const bgP = articeTag.querySelector('p')

console.log(bgP) /* 속성확인용 */

// 마우스 올렸을때 색상 변경과 동시와 텍스트에 써진 컬러코드가 바뀌는 것

/* bgP.innerHTML = '' */
articeTag.style.width = '430px'
articeTag.style.height = '90vh'
articeTag.style.backgroundColor = '#eee'
bgP.style.backgroundColor='#fff';
bgP.style.fontWeight='700';
bgP.style.fontSize='2rem';

bgBtn[0].addEventListener('click',bgFunc('#ff9ce8'))
bgBtn[1].addEventListener('click',bgFunc('#8aff93'))
bgBtn[2].addEventListener('click',bgFunc('#817ac2'))

/* function bgFunc(num,color){
    return function(){
        bgBtn[`${num}`].style.backgroundColor=`${color}`;
    }
}
bgFunc(0,'#ff9ce8') */

function bgFunc(color){
    return function(){
        articeTag.style.backgroundColor=color;
        bgP.style.color=color;
        bgP.textContent =`현재 배경색상:${color}`;
    }
}



