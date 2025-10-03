// 1~5 반복문
for(let i =1; i<6; i++){console.log(i)}
console.log('---------------')

//5~10 반복문
for(let i = 5; i<11; i++){console.log(i)}
console.log('---------------')

//5~0 반복문
for (let i = 5; i >=0; i--){console.log(i)}
console.log('---------------')

//출력 형태 : js 1일차 js 2일차 js 3일차 
for (let i =1; i<4; i++){console.log(`js ${i}일차`)}
console.log('---------------')

//2단 구구단 [2*1 ~ 2*9]
//2*1 = 2
//2*2 = 4
//2*3 = 6
//2*4 = 8
//2*5 = 10
//2*6 = 12
//2*7 = 14
//2*8 = 16
//2*9 = 18

for(let i =1; i<10; i++){
    console.log(`2*${i}=${i*2}`)
    const dan2 = document.querySelector('.dan2')
    dan2.innerHTML += `<li>2*${i}=${i*2}</li>`
}
console.log('---------------')

//querySelectorAll 함수로 선택한 DOM 변수 for문
//배열 인덱스 for문

const array = ['photoshop', 'illustrator', 'figma','css','html','js']
//위 배열 이용 반복문으로 콘솔에 array값 모두 출력하기

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array.length)
console.log('---------------')

for(let i = 1; i<array.length; i++){
    console.log(array[i])
}

console.log('------역순----')
console.log(array[5])
console.log(array[4])
console.log(array[3])
console.log(array[2])
console.log(array[1])
console.log(array[0])
console.log('---------------')
for (let i =array.length-1; i>=0; i--){
    console.log(array[i])
}

console.log('---------------')

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

console.log(`${flower[0].month}월 탄생화:${flower[0].name}`)
console.log(`${flower[1].month}월 탄생화:${flower[1].name}`)
console.log(`${flower[2].month}월 탄생화:${flower[2].name}`)

console.log('---------------')

for(let i = 0; i<flower.length; i++){
    console.log(`${flower[i].month}월 탄생화:${flower[i].name}`)
}

console.log('-------1.반복문과 조건문--------')
// 1~10 홀수만 반복 출력

for(let i =1; i<11; i++){
    if(i%2==1){console.log(i)}
}
console.log('-------2.반복문과 조건문--------')

//5~20까지 짝수만 출력
for(let i =5; i<21; i++){
    if(i%2==0){console.log(i)}
}

//0~10까지 역순으로 홀수만 출력
console.log('-------3.반복문과 조건문--------')
for(let i =10; i>=0; i--){
    if(i%2==1){console.log(i)}
}

console.log('-------4.반복문과 조건문--------')
//홀수 li 노랑 배경, 짝수 li 파랑 배경
const dan2Li = document.querySelectorAll('.dan2 li')
console.log(dan2Li)

dan2Li[1].style.background='yellow'
dan2Li[3].style.background='yellow'
/* ----------------------------- */
dan2Li[2].style.background='skyblue'
dan2Li[4].style.background='skyblue'

for(let i = 0; i<dan2Li.length; i++){
    if(i%2==1){dan2Li[i].style.background='yellow'
    }else{dan2Li[i].style.background='skyblue'}
}
console.log('---------------')

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')

btn1.addEventListener('click',()=>{
    let htmlQ = prompt('문제 : a태그는 가로, 세로 크기를 가질 수 없다. 정답: O,X')
    while(htmlQ != 'X'){
        htmlQ = prompt('문제 : a태그는 가로, 세로 크기를 가질 수 없다. 정답: O,X')
    }alert('정답입니다')
})

btn2.addEventListener('click',()=>{
    let q1 = prompt('3*5의 값은?')
    while(q1 != '15' ){
        q1 = prompt('다시 생각해보세요')
    }alert('정답입니다')
})

btn3.addEventListener('click',()=>{
    while(true){
        let qa = prompt('자바 스크립트는 동적 언어이다. 답(O/X)')
        if(qa !='O' && qa !='X' ){alert('잘못된 답입니다');continue;} 
        if(qa == 'O'){alert('정답입니다'); break;}
        else if(qa =='X'){alert('오답입니다.'); break;}
    }alert('퀴즈 종료')
})

btn4.addEventListener('click',()=>{
    while(true){
        let qa2 = prompt('3+5는 15입니다');
        if(qa2=='O' || qa2=='네'){alert('정답입니다.'); break;}
        else if(qa2=='X' || qa2 ==='아니오'){alert('오답입니다.');break;}
        else {
            alert('정답을 다시 입력해주세요'); continue;
        }
    }alert('퀴즈 종료')
})

//2단~9단까지 구구단 만들기

const dan99 = document.querySelector('.dan99')
for(let i =2; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(`${i}*${j}=${i*j}`)
        dan99.innerHTML += `<li>${i}*${j}=${i*j}</li>`
    }
}

console.log('---------------')
const cat = {
    color:['흰색','검은색','노란색'],
    age:2,
    name:'삼색이',
}

for(let i in cat){console.log(i)}

console.log('---------------')
const menuA = document.querySelectorAll('.menu a')
for(let i of menuA) {
    console.log(i)
    i.addEventListener('click',()=>{
        i.style.color='red'
        i.addEventListener('click',()=>{
            i.style.color='black'
        })
    })
}

// 중첩 for
// ul*2>li*5
//<ul></ul><li></li> X
//<ul> <li></li> </ul> O
const ulTest = document.querySelector('.ul_test')

let result = '';

for (let i=1; i<3; i++){
    let ul = '<ul>'
    for(let j=1; j<6; j++){
        ul += `<li>메뉴${j}</li>`
    }
    ul += '</ul>'
    result += ul + ' ';
}ulTest.textContent = (result)

console.log('---------------')

const tabTitle = document.querySelectorAll('.title a')
const tabContent = document.querySelectorAll('.contents .con')

console.log(tabTitle,tabContent)

tabContent[0].style.display='none'
tabContent[1].style.display='none'

/* tabTitle[0].addEventListener('click',()=>{
    hideFunc()
    tabContent[0].style.display='block'
})

tabTitle[1].addEventListener('click',()=>{
    hideFunc()
    tabContent[1].style.display='block'
}) */



console.log('-------😀😀----')

tabTitle.forEach(function(obj,ind,array){
    console.log(obj)
    obj.addEventListener('click',()=>{
        hideFunc()
        tabContent[ind].style.display='block'
    })
})

function hideFunc(){
    for(let i of tabContent)
        i.style.display='none'
}


console.log('-------😀😀----')

const box = document.querySelector('.box')
const mini = document.querySelectorAll('.mini')


mini.forEach(function(obj){
    obj.addEventListener('click',()=>{
        obj.classList.toggle('active')
        
    })
})




