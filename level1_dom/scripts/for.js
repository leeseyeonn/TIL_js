//반복문 for.js
// for(초기변수선언; 조건식; 증감식){ 조건이 참일때 반복실행문}
// for문의 초기 변수로 자주 사용하는 변수명 : i, j, k, m, n / 'i' 자주 사용. 나머지는 중첩 될 때 사용

//1~5 반복문
for(let i=1; i<6; i++){console.log('반복')}
console.log('---------------')
//5~10 반복문   5678910
for(let i=5; i<11; i++){console.log(i)}
console.log('---------------')
//5~0 반복문    543210
for(let i=5; i>=0; i--){console.log(i)}
console.log('---------------')
//출력 형태) JS 1일차 JS 2일차 JS 3일차 
//초기값 0 시작

for(let i=0; i<3; i++){console.log(`JS ${i+1}일차`)} //일회성 계산법을 쓰자 / 밑에 2개는 자주 안 씀
console.log('---------------')
for(let i=0; i<3; i++){console.log(`JS ${i++}일차`)} //1) i=0; | 2) i<3; | 3) i++ | 4) i++ | 따라서 0, 2 가 출력되는것.
console.log('---------------')
for(let i=0; i<3; i++){console.log(`JS ${i+=1}일차`)} 
console.log('---------------')
//2단 구구단 2*1 ~ 2*9
//2*1 = 2
//2*2 = 4
//2*3 = 6
//2*4 = 8
//2*5 = 10
//2*6 = 12
//2*7 = 14
//2*8 = 16
//2*9 = 18

const dan2 = document.querySelector('.dan2')
/* dan2.innerHTML ='<li>2*1=2<li>' */

for(let i=1; i<10; i++){
    dan2.innerHTML +=`<li>2*${i}=${2*i}</li>` //복합 대입 연산자로 쌓아야한다.
}

//querySelectorAll 함수로 선택한 DOM 변수 for문
//배열 인덱스 for문
const array = ['photoshop', 'illustrator', 'figma','css','html','js']
//위 배열 이용 반복문으로 콘솔에 array값 모두 출력하기
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log('---------------')

for(let i=0; i<array.length; i++){ //배열 길이만큼 출력하고 싶다면 length
    console.log(array[i])
}

//배열을 역순으로 출력
console.log('---------배열을 역순으로 나열 ----------')
console.log(array.length) //6
console.log(array[5])
console.log(array[4])
console.log(array[3])
console.log(array[2])
console.log(array[1])
console.log(array[0])
console.log('---------배열을 역순으로 출력 ----------')

for(let i=array.length-1; i>=0; i--){
    console.log(array[i])
}

const flower = [{
    name:'장미',
    month:1,
},{
    name:'개나리',
    month:2,
},{
    name:'수선화',
    month:3,
}]

//1월 탄생화 장미, 2월 탄생화 개나리, 3월 탄생화 수선화
console.log('---------------')
console.log(`${flower[0].month}월 탄생화 ${flower[0].name}`)
console.log(`${flower[1].month}월 탄생화 ${flower[1].name}`)
console.log(`${flower[2].month}월 탄생화 ${flower[2].name}`)
console.log(flower.length)
console.log('---------------')

for(let i = 0; i<flower.length; i++){
    console.log(`${flower[i].month}월 탄생화 ${flower[i].name}`)
}

console.log('-------1.반복문과 조건문--------')
// 1~10 홀수만 반복 출력
// 변수%2 == 1
for (let i=1; i <11; i++){
    if(i%2==1){console.log(i)}
}

console.log('-------2.반복문과 조건문--------')
//5~20까지 짝수만 출력
for(i=5;i<21;i++){
    if(i%2==0){console.log(i)}
}

console.log('-------3.반복문과 조건문--------')
//0~10까지 역순으로 홀수만 출력
for(i=10; i>=0; i--){
    if(i%2){console.log(i)}
}

console.log('-------4.반복문과 조건문--------')
const dan2Li = dan2.querySelectorAll('li')
console.log(dan2Li)
//홀수 li 노랑 배경, 짝수 li 파랑 배경

/* dan2Li[0].style.backgroundColor='yellow'
dan2Li[1].style.backgroundColor='skyblue' */

console.log(dan2Li.length)
console.log('----------------------')
/* for(let i=0; i<dan2Li.length; i++){
    console.log(i)
    if(i%2){dan2Li[i].style.backgroundColor='yellow';}
    else{dan2Li[i].style.backgroundColor='skyblue';}
} */

//홀수 li w50 h20 bg노랑 color빨강
//짝수 li w50 h20 bg파랑 color노랑
//객체.classList.add(클래스명)
//객체.classList.remove(클래스명)

for (let i=0; i<dan2Li.length; i++){
    dan2Li[i].classList.add('size')
    if(i%2==0){
        dan2Li[i].classList.add('color_even')}
    else{dan2Li[i].classList.add('color_odd')}
}
console.log('----------------------')
//while문(반복 횟수가 정해지지 않고 특정 조건이 참인 동안 반복 실행)
//활용 예) 사용자로부터 올바른 입력값을 받을때까지 반복
//활용 예) 웹서비스 및 게임 등에서 계속 실행되어야 하는 프로그램
// while(조건){ 조건이 참일때 반복 실행 }
console.log('----------------------')
/* let htmlQ = prompt('문제 : a태그는 가로, 세로 크기를 가질 수 없다. 정답: O,X' ) //정답 : X
//정답을 맞출때 까지 무한 반복 질문
while(htmlQ != 'X'){ //htmlQ 정답이 X가 아니라면
    htmlQ = prompt('문제 : a태그는 가로, 세로 크기를 가질 수 없다. 정답: O,X' )
}alert('정답입니다.')
 */
console.log('----------------------')
/* let cssQ = prompt('묶어야 할 form이 두 개 이상일 때 쓰는 요소는?')
while (cssQ != 'fieldset'){
    cssQ = prompt('묶어야 할 form이 두 개 이상일 때 쓰는 요소는?')
}alert('정답입니다.') */
console.log('----------------------')
/* while(true){
    const qa = prompt('자바스크립트는 동적 언어이다 (O/X)')
    if(qa !== 'O' && qa !== 'X'){ //잘못된 답안 조건문
        alert('잘못된 입력입니다. O X 만 입력해주세요.')
        //break; //while 강제 종료
        continue; // O X 가 아닌 다른 문자를 입력 했을 때 >잘못된 입력입니다< 를 반복
    }
    //정답, 오답 세트
    if(qa==='O'){
        alert('정답입니다');
        break;
    }else{alert('오답입니다'); break;
    }
}//while문 종료 위치 (break 만날 시 나오는 위치)
alert('퀴즈 종료') */
console.log('----------------------')
for(let i=1; i<=10; i++){
    console.log(i)
    continue;
}


console.log('----------------------')
//2단~9단까지 구구단 만들기

let li99 = ''

const dan99 = document.querySelector('.dan99')
for(let i=1; i<10; i++){ //1단 for 시작
    for(let j=1; j<10; j++){ //2단 for 시작
        li99 += `<li>${i}x${j}=${i*j}</li>`
        dan99.classList.add('flex')
    }//2단 for 종료 (2단 for가 모두 반복 후 1단 다시 시작)
    dan99.innerHTML = li99; //이걸 마지막에 두면 한꺼번에 쌓아두고 결과를 내보내는 순서 (좀 더 효율적)
}//1단 종료

console.log('--------for ~ in (ES6)------')
//for ~ in (ES6)
const cat = {
    color:['흰색','검은색','노란색'],
    age:2,
    name:'삼색이',
}
console.log(cat.color)
console.log(cat.age)
console.log(cat.name)
console.log('----------------------')
for(let i in cat /* i에 cat 정보를 넣는다*/){
    console.log(i, cat[i]) //color, age, name | color:['흰색','검은색','노란색'], age:2, name:삼색이 출력
}

console.log('----------------------')
const menuA = document.querySelectorAll('.menu a')
for(let i of menuA) { //in 대신 of를 사용하면 태그까지 출력되어서 이벤트 걸기가 수월해짐 ⬇
    console.log(i)
    
    i.addEventListener('click',()=>{ //태그가 여러개이고 동적 요소가 똑같으면 사용할 때 편리함
        console.log(i)
        i.style.color='red' //클릭하는 것이 빨간색이 됨
        i.addEventListener('click',()=>{
            i.style.color='black'  // 빨간색이 눌린 것을 클릭하면 블랙으로 됨
        })
    })
}