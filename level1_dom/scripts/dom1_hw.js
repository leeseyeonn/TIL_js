const inputTag = document.querySelectorAll('input')
const butTag = document.querySelectorAll('button')
const mainTag = document.querySelector('main')

mainTag.style.margin='80px'
inputTag[0].placeholder = '응아니야입력해';
inputTag[0].value = '검색어를 입력하지마세요 ㅋㅋ';
/* 검색창 */
inputTag[0].style.width='500px'
inputTag[0].style.height='50px'
inputTag[0].style.backgroundColor='#ffb3b3'
/* 검색버튼 */
butTag[0].style.width='200px'
butTag[0].style.height='50px'
butTag[0].style.backgroundColor='#e65a5a'
butTag[0].style.borderRadius='50px'
/* 수량 */
inputTag[1].style.width='50px'
inputTag[1].style.height='50px'
inputTag[1].style.backgroundColor='#d4ffc4'
/* 장바구니 */
butTag[1].style.width='650px'
butTag[1].style.height='50px'
butTag[1].style.backgroundColor='#65bf45'
butTag[1].style.borderRadius='50px'



const shopBtn = document.querySelectorAll('.box button')
shopBtn[2].style.width='100x'
shopBtn[2].style.height='50px'
shopBtn[2].style.backgroundColor='#4598bf'

shopBtn[3].style.width='100x'
shopBtn[3].style.height='50px'
shopBtn[3].style.backgroundColor='#ad45bf'


console.log(shopBtn[0])

/* 익명함수 */
shopBtn[0].addEventListener('click',function(){
    alert('주문을 선택하세요')
})
/* 콜백함수 */
function orderFunc (){
    return alert('장바구니를 선택하세요')
}
shopBtn[1].addEventListener('click',orderFunc)

/* 클릭하면 알림이 나오는 함수 통합버전 */
function orderFun2 (text){
    return alert(`${text} 선택하세요.`)
}
/* 익명함수버전 */
shopBtn[2].addEventListener('click', function(){
    orderFun2('주문을')
})
/* 화살표함수 버전 */
shopBtn[3].addEventListener('click',()=>{
    orderFun2('장바구니를')
})

shopBtn[4].addEventListener('click',function(){
    alert('아이디가 중복되었습니다')
})

//한 세트
function overlapFunc (){
    return prompt('비밀번호가 중복되었습니다')
}
shopBtn[5].addEventListener('click',overlapFunc)
//

shopBtn[6].style.backgroundColor='#dbb1e3'
shopBtn[7].style.backgroundColor='#b1d0e3'

//한세트
function overlapFunc2 (text){
    return alert(`${text}가 중복되었습니다.`)
}
shopBtn[6].addEventListener('click',function(){
    overlapFunc2('아이디')
})

shopBtn[7].addEventListener('click',()=>{
    overlapFunc2('비밀번호')
})

const reviewBtn = document.querySelector('textarea')
console.log(reviewBtn)

//Q1. textarea 값을 입력했을때 콘솔창에 '50자 이상 입력하세요' 출력
reviewBtn.addEventListener('keyup',()=>{
    alert('50자 이상 입력하세요.')
})


//Q2. textarea를 활성화 했을때 테두리 빨강색

reviewBtn.addEventListener('focus',()=>{
    reviewBtn.style.border='2px solid red'
})


/* 버튼을 클릭하면 배경이 바뀌는 함수 */
const articeTag = document.querySelector('article')
const bgBtn = document.querySelectorAll('.bg_btn')
const bgP = document.querySelector('p')
console.log(bgBtn)

function bgFunc (color){
    return function(){
        articeTag.style.backgroundColor=color
        bgP.textContent=`현재배경색상 : ${color}`}
}

bgBtn[0].addEventListener('click',bgFunc('#ff9ce8'))
bgBtn[1].addEventListener('click',bgFunc('#8aff93'))
bgBtn[2].addEventListener('click',bgFunc('#817ac2'))