//함수
//1. 함수 대기 (생성한 상태)
function func1(){
    console.log('반복 실행 내용')
}
// 2. 함수 호출 (생성 밖)
func1();

//함수의 매개변수 활용
function storyFunc1(day=1, data='조약돌'){ /* 첫째 날 성공사례 */
    console.log(`매개변수 값 확인 : ${day}, ${data}`);
    //헨젤과 그레텔 준비
    const person = ['헨젤','그레텔'];
    //조약돌 준비
    //const src = '조약돌';
    //집 돌아간다는 목표
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다
    //1일차 헨젤과 그레텔이 조약돌을(를) 이용해서 집을 찾아갔습니다.
    //2일차 헨젤과 그레텔이 빵부스러기을(를) 이용해서 집을 찾아갔습니다.
    //3일차 헨젤과 그레텔이 쌀을(를) 이용해서 집을 찾아갔습니다.
    console.log(`${day}일차 ${person[0]}과 ${person[1]}이 ${data}을(를)이용해서 집을 찾아갔습니다.`);
}

storyFunc1();/* 기본값 사용시 매개변수 값 전달안함->조약돌로 출력 */
storyFunc1(day=2, data='빵부스러기');
storyFunc1(day=3, data='쌀');

/* 이야기의 둘째날 실패사례 
function storyFun2(){ 
    const person = ['헨젤','그레텔'];
    const src = '빵 부스러기';
    alert(`${person[0]}과 ${person[1]}이 ${src}이용해서 집을 찾아갔습니다.`);
}
storyFun2(); */


function coffee1(menu,water=0,esp=0){
    //??레시피
    //??컵 물을 패운다
    //??샷 에스프레소를 넣는다
    console.log(`매개변수 값 확인 : ${water}, ${esp}`);
    /* const menu = ['에스프레소', '아메리카노(HOT)']; */
    console.log (`${menu}레시피 : ${water}컵 물을 채운다. ${esp}샷 에스프레소를 넣는다`)
}
coffee1('에스프레소',water=0,esp=1);
coffee1('아메리카노(HOT)',water=2,esp=1);

/* function kiosk1(option1,menu,cup){
    ///???한 ??? ?잔 주문완료되었습니다.
    const option1 = ['따뜻한', '차가운'];
    console.log(`${option1} ${menu} ${cup}잔 주문완료되었습니다.`);
}
kiosk1(option1[0],'카페라떼',2); */

//키오스크 배열 활용법
function kiosk_arraw(hotice,name,num){
    const type =['따뜻한', '차가운'];
    const menu =['카페라떼','아메리카노','녹차라떼']
    console.log(`${type[hotice]} ${menu[name]} ${num}잔 주문완료되었습니다.`);
}
kiosk_arraw(0,0,2);
kiosk_arraw(1,1,1);
kiosk_arraw(0,2,2);
kiosk_arraw(1,1,1);

//키오스크 객체
function kiosk_obj(hotice,name,num){
    let coffeeMenu ={ 
        type:['따뜻한','차가운'],
        menu:['카페라떼','아메리카노','녹차라떼']
    };
    //console.log(`coffeeMenu.속성[값]`);
    console.log(`${coffeeMenu.type[hotice]} ${coffeeMenu.menu[name]} ${num}잔 주문완료되었습니다.`);
}
kiosk_obj(0,0,2);
kiosk_obj(1,1,1);

console.log('===========================리턴');

function plusFunc1(n1,n2){
    let calc = `${n1}*${n2}=${n1*n2},`
    calc += `${n1}+${n2}=${n1+n2}` 
    return calc
    /* 함수를 실행하는 과정에서 이 결과만 반환할 것이다 : return */
     /* 리턴 밑에 있는 식은 읽지 않는다->결과 안 나옴 */
    /* 문제1) 곱하기가 아닌 더하기만 나오는 문제 */
    // 대입연산자(=) 이전 변수 값을 제거하고 새로운 값 대입
    //이전 변수값을 유지하고 새로운 값 추가 대입 연산자는?
    //[대입연산자 안 쓰고 싶다면] calc = calc + `계산식`
}

/* function plusFunc2(n1,n2){
    alert(`${n1}+${n2}=${n1+n2}`)
} */

/* plusFunc1(1,5) */
console.log(plusFunc1(1,5))
//alert(plusFunc1(1,5))  또 다른 예시

//구구단 함수 (2~9단까지)
// 출력예시) 변수 X 변수 = 결과 
function dan99Func(num){
    //구구단 식
    //return //반환 변수명
    let total = '';
    total += `${num} X 1 = ${num*1},`
    total += `${num} X 1 = ${num*2},`
    total += `${num} X 1 = ${num*3},`
    total += `${num} X 1 = ${num*4},`
    total += `${num} X 1 = ${num*5},`
    total += `${num} X 1 = ${num*6},`
    total += `${num} X 1 = ${num*7},`
    total += `${num} X 1 = ${num*8},`
    total += `${num} X 1 = ${num*9}`
    return total 
}

//console.log(dan99Func(8));
//alert(dan99Func(5))
//prompt(dan99Func(7))

//할인율 계산기
//KB국민카드 5% 할인
//현대카드 10%
//삼성카드 20%
//할인율 (100-5) / 100 = 0.95 , 판매가 * 0.95

function cardFunc(name,num){
    /* const price = 1051000;
    const card = ['KB국민카드', '현대카드', '삼성카드'];
    const calc = 100-num; //할인율 계산
    const totalcal = calc/100; //할인가
    const result = 1051000*totalcal //출력결과
    const salePrice = `${card[name]} ${num}% 할인 적용가 ${price.toLocaleString(`ko-kr`)}원`
    return salePrice//반환 결과 */

    const card = ['KB국민카드', '현대카드', '삼성카드'];
    const price = 1051000;
    const calc = (100-num)/100;  //할인율 계산
    const totalprice = price*calc; //할인가
    const result = `${card[name]} ${num}% 할인 적용가 ${totalprice.toLocaleString(`ko-kr`)}}원`;
    return result //반환 결과
}
//출력값 : 현대카드 10% 할인 적용가 ?원
console.log(cardFunc(0,5))
console.log(cardFunc(1,10))
console.log(cardFunc(2,20))

//익명함수 
//변수 내 function 키워드를 지정해 생성하는 함수

//일반함수와 익명함수의 차이/*  */
function hello1(user){ /* 일반함수 */
    return alert('hello'+user);
}
//hello1('seyeon');

const hello2 = function(user){ /* 익명함수 */
    return alert('hello'+user);
};
//hello2('seyeonlee');

//익명함수 + 화살표함수
//변수 키워드 변수명 대입연산자 (매개변수) 화살표 {실행}
const hello3 = (user) => {
    return console.log('hello'+user);
}
hello3('lee');