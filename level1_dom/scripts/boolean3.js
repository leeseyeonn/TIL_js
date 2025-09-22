//상 하 좌 우 버튼 클릭 시 캐릭터 10px 이동 
//input 입력창에 영어로 이동 명령어를 작성 했을 때 캐릭터 10px 이동
//이동방향) left, right, top, bottom
const moveBtn = document.querySelectorAll('.btn')
const charater = document.querySelector('#map img')


console.log(moveBtn[0])

let num = 0 //복합대입 연산자를 써야 쌓이게 됨 -> 계속해서 값이 늘어난다는 말


//상
moveBtn[0].addEventListener('click',()=>{
    num += 10;
    charater.style.transform=`rotate(90deg) translateX(-${num}px)`;
})
//하
moveBtn[1].addEventListener('click',()=>{
    num -= 10;
    charater.style.transform=`rotate(-90deg) translateX(${num}px)`;
})
//좌
moveBtn[2].addEventListener('click',()=>{
    num += 10;
    charater.style.transform=`rotate(0deg) translateX(-${num}px)`;
})
//우
moveBtn[3].addEventListener('click',()=>{
    num += 10;
    charater.style.transform=`rotate(0deg) translateX(${num}px)`;
})


//input 입력창에 영어로 이동방향 작성하고 enter를 누르면 캐릭터 10px 이동
//이동방향)left, right, top, bottom

const controlInput = document.querySelector('#control #txt');
console.log(controlInput)

/* if(left){}else if(right){}else if(top){}else if(bottom){}else {오답}  */

controlInput.addEventListener('keyup',(e)=>{ //keyup -> 키보드를 누르고 뗀다
    //console.log(e.key) // 키보드를 누르고 떼면 출력이 되는지 검사
    if(e.key =='Enter'){
        const inputVal = controlInput.value;
        if(inputVal == 'top' ||inputVal == 'left' || inputVal == 'right' ||inputVal == 'bottom'){
            console.log(`${inputVal}이동`)
            controlInput.Value=='';
        }else {
                console.log('오답')
            }
        /* if(controlInput.value==='left'){console.log('왼쪽 이동')}
        else if(controlInput.value==='right'){console.log('오른쪽 이동')}
        else if(controlInput.value==='top'){console.log('위로 이동')}
        else if(controlInput.value==='bottom'){console.log('아래로 이동')}
        else{console.log('오답')} */
    }
})

const controlInput2 = document.querySelector('#txt2')

controlInput2.addEventListener('keyup',(e)=>{
    if(e.key=='Enter'){
        const txtResult=controlInput2.value
        if(txtResult  == 'top' || txtResult == 'bottom'||txtResult  == 'left'||txtResult == 'right'){
            console.log(`${txtResult}이동`)
            controlInput2.Value=='';
        }
    }else{console.log('오답입니다')}
})





//학점에 따라 A~F 등급 나오는 프로그래밍
//100~90 A
//89~80 B
//79~70 C
//69~60 D
//59 이하 F

const score = 90 //prompt('학점을 입력하세요')
//논리 연산 0~100범위값 조건식
//추가 조건식 100~90 A ~...

if(101>score>0){
    //socre >= 0 || socre<=100 하나만 맞아도 참 -> 둘 다 참이어야함
    //socre >= 0 && socre<=100 이게맞다
    console.log('점수 입력 완료')
    if(score>=90){console.log('A')}
    else if(score>=80){console.log('B')}
    else if(score>=70){console.log('C')}
    else if(score>=60){console.log('D')}
    //else if(score<=59){console.log('F')}
    else {console.log('F')} 
}else{alert('값을 다시 입력하세요')}


const hakJeom =  90//prompt('학점을 입력하세요')

if(101>hakJeom>0){
    console.log('점수 입력완료')
    if(hakJeom>=90){console.log('A')}
    else if(hakJeom>=80){console.log('A')}
    else if(hakJeom>=70){console.log('A')}
    else if(hakJeom>=60){console.log('A')}
    else {console.log('F')}
}else {alert('값을 다시 입력하세요')}




//switch ~ case
//쇼핑몰 검색창에 사용자가 입력한 값 조건 확인
//딸기 ->1000원
//사과 ->2000원
//그외 -> 판매 상품이 아닙니다.

const fruit = 90 //prompt('검색어를 입력하세요')
console.log(fruit);

switch(fruit){
    case '딸기':
        console.log('1000원');
        break //딸기 맞으면 여기서 멈춰라
    case '사과' : console.log('2000원'); break;
    default : console.log('판매상품이 아닙니다')
}

//if (fruit==='딸기'){ console.log('1000원')}
//else if(fruit==='사과'){ console.log('2000원')}


const fruit2 = 90 //prompt('검색어를 입력하세요')

switch(fruit2){    
    case '딸기' : console.log('1000원'); break;
    case '바나나': console.log('2000원'); break;
    default : console.log('판매상품을 다시 입력해 주세요.')
}
    






//전화 단축키
const phoneNumber = 90 // prompt('단축키 입력')
//1 누르면 엄마
//2 누르면 아빠
//5
// 다른 숫자는 '해당 단축키가 없습니다'

switch(phoneNumber){
    case '1' : console.log('엄마'); break;
    case '2' : console.log('아빠'); break;
    default : console.log('해당 단축키가 없습니다')
}



const phoneNum = 90 //prompt('단축키를 입력하세요')
switch(phoneNum){
    case '1' : console.log('김영규'); break;
    case '2' : console.log('문현빈'); break;
    default : console.log('번호를 다시 입력하세요.')
}


//쇼핑몰 수량+가격 알고리즘
//-버튼 클릭 시 수량, 가격 감소 (1일때 -누르면 경고)

const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const numberInput = document.querySelector('#num')
const priceP = document.querySelector('section .price')
console.log(priceP)

let numVal = 10; //초기값을 변경
let originalPrice = 900
let stock = 10; //재고

numberInput.value = numVal; //초기값 대입

console.log(numberInput.value)

priceP.textContent = `${numVal*originalPrice}원`

console.log(priceP.textContent)
//numVal 값이 1과 같으면 오류출력, 1이 아니면 감소

numFunc()

minusBtn.addEventListener('click',()=>{ //마이너스 클릭 시 실행 함수
    /* if (numVal==1){
        console.log('최소 구매수량')
    }else{numVal--;} */
    numVal == 1 ? console.log('최소 구매수량') /* 참 */ : numVal--; /* 거짓; */
    /* numberInput.value = numVal;
    priceP.textContent = `${numVal*originalPrice}원` */
    numFunc()
})

plusBtn.addEventListener('click',()=>{ //재고 수량이 10개일때
    numVal < stock ? numVal ++ /* 참 */ : console.log('최대 구매수량') /* 거짓 */
    /* numberInput.value = numVal;
    priceP.textContent = `${numVal*originalPrice}원` */
    numFunc()
})

function numFunc(){
    numberInput.value = numVal; //초기값 대입
    priceP.textContent = `${numVal*originalPrice}원`
}