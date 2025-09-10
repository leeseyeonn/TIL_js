// 1일차 박솝 (가계부앱 변수 생성과 출력)
// 커피 1500원
// 도시락 6000원
// 대중교통 3000원
// 결과) 오늘 총 지출액은 0000원입니다.
let coffee = 1500;
let meal = 6000;
let train = 3000;
let total = coffee+meal+train; //최종 출력을 단순하게 처리 ㄱㄴ
console.log(`오늘 총 지출액은 ${total.toLocaleString('ko-kr')}원 입니다.`)
console.log(`오늘 총 지출액은 ${(coffee+meal+train).toLocaleString('ko-kr')}원 입니다.`)
// 숫자에 3자리 간격 콤마(,) 표시하기 <- 이건 최종결과에서 처리
// 위 기능 함수 : 객체.함수(); 변환객체.toLocaleString('ko-kr'); 
// /* 함수는 문자가 아니라 정해진 명령어(키워드), 대쉬 쓰면 안 됨. 쓸거면 따옴표를 쓰자 */

//문자데이터 연습
//리뷰 작성 기준 50자 이상
// 콘솔 출력) 현재 작성 글자 수는 000 자 입니다.
//let review = prompt('리뷰를 작성하세요'); /* 프롬프트 함수로 실행한 결과를 리뷰에 대입 한다는 뜻 */
//console.log(review); /* 백그라운드 배경으로 확인하는것 처럼 검토하는 것 */
//객체.함수();
//객체.속성;
//글자 수 체크 속성 length
//let review_lengh = review.length;
//console.log(review_lengh);
//console.log(`현재 작성 글자수는 ${review_lengh}자 입니다.`)
//변수 생성 키워드 변수명 : {키(속성):값, 키(속성):값, 키(속성):값...};
let rectagle = {
    width:300, height:200, x:0, y:-100,
}
console.log(rectagle);
console.log(rectagle.width); /* 300으로 나옴 */
console.log(rectagle.x); /* 0으로 나옴 */
console.log(`${rectagle.height}px`);
console.log(rectagle.height+'px'); /* 여기서 플러스는 연결 -> 피 연산자가 하나라도 문자이기 때문 */
console.log(rectagle.height,'px'); 
console.log(`${rectagle.width}px, ${rectagle.height}px`);
console.log(rectagle.width+'px,', rectagle.height+'px');
/* 회원 정보 */
let user_info = {
    name:'가을', 
    age:3, 
    gender:'female', 
    area:'서울'
};
/* 상품 정보 */
let product = {
    name:'마스크', 
    price:1000, 
    quantity:999,
    color:'white'
};
/* 영화관 좌석 */
let movie_theater = {
    name:'VIP',
    position:'F1',
    price :14500
};

//상품명 : 마스크(white)
//상품가 : 1,000원
// 수량 : 999개
console.log(`상품명 : ${product.name}(${product.color})`);
console.log(`상품가 : ${product.price.toLocaleString('ko-kr')}원`);
console.log(`수량 : ${product.quantity}개`);

//오브젝트 데이터 타입 2. 배열
//변수 생성키워드 변수명 = [배열값, 값2, 값3]
//변수 생성키워드 변수명 = new Array(값, 값, 값)
//변수 생성키워드 변수명 = new Array(자리값)
const yoil = ['월','화','수','목','금','토','일'];
console.log(yoil);
console.log(`오늘은 ${yoil[2]}요일`) //오늘은 수요일 -> 인덱스는 0부터 카운트하기 때문에 수=2

const en = new Array('a','b','c','d','e','f');
console.log(en, en[0], en.length);

const year = new Array(4);
year [0] = 2025;
year [1] = 2024;
year [2] = 2023;
year [3] = 2022;
console.log(year);

//좋아하는 색상 6개를 배열로 저장하고 그 중 가장 좋아하는 색상 2개를 콘솔에 출력하기
const color = ['빨강','주황','노랑','초록','파랑','보라'];
console.log(color, color.length);
console.log(`가장 좋아하는 색은 ${color[1]}, ${color[3]}입니다.`)

//좋아하는 과일을 5개 배열로 저장하고 역순으로 모두 출력하기
const fruit = new Array('파인애플','사과','키위','망고','수박',)
console.log(fruit);
console.log(`가장 좋아하는 과일 5가지는 ${fruit[4]},${fruit[3]},${fruit[2]},${fruit[1]},${fruit[0]}입니다.`)

//Q. 요일 - 날씨 정보 출력
//월 - 맑음 
//화 - 비
//수 - 흐림
//목 - 맑음
//금 - 맑음
//토 - 비
//일 - 흐림
const week = ['월','화','수','목','금','토','일'];
const weather = ['맑음','비','흐림',];
console.log (week);
console.log (weather);
console.log(`${week[0]} - ${weather[0]}`);
console.log(`${week[1]} - ${weather[1]}`);
console.log(`${week[2]} - ${weather[2]}`);
console.log(`${week[3]} - ${weather[0]}`);
console.log(`${week[4]} - ${weather[0]}`);
console.log(`${week[5]} - ${weather[1]}`);
console.log(`${week[6]} - ${weather[2]}`);

const megabox = new Array (8) //빈 좌석 준비
megabox[0] = 'A1';
megabox[1] = 'A2';
console.log(`현재 예매 좌석: ${megabox[0]}, ${megabox[1]}`);
megabox[0] = '';
megabox[1] = '';
console.log(`현재 예매 좌석: ${megabox[0]}, ${megabox[1]}`);

//CGV 좌석 예매와 취소
const cgv = []; //빈 배열 준비
console.log(cgv.length);
//좌석 A1 선택
cgv.push('A1');
console.log(cgv);
cgv.push('A2');
console.log(cgv);
cgv.pop(); /* pop자체가 끝에 하나를 제거한다는 의미이기 때문에 굳이 쓸 필요 없다 */
console.log(cgv);
cgv.unshift('A3');
cgv.unshift('A4');
console.log(cgv);
cgv.push('B1','B2');
console.log(cgv);
cgv.push('B3','B4');
console.log(cgv);
//선택 좌석이 8개일때 좌석 추가 금지라는 조건
console.log(cgv.length>=8);
//출력 결과 예시
//선택 좌석 수 : 00
//총 결제 금액 : 00000원
const price = 11000;
const cgv_total = cgv.length*price;
console.log(`선택 좌석 수 :${cgv.length}`);
console.log(`총 결제 금액 : ${cgv_total.toLocaleString('ko-kr')}원`);
console.log('------------------------')

//연산자 연습
//1. 산술연산자
let num1 =5;
let num2 =2;
let result = num1 +num2;
console.log(result);
result = num1 -num2;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

//Q. 이항 연산자를 활용하여 두 수를 사용자에게 입력 받고 더하기만 하면 되는 계산기 만들기
//const firstNum = prompt('첫번 째 수'); ///문자열을 숫자로 감싸야 됨
//const lastNum = prompt('두번 째 수');
const firstNum = 2;
const lastNum = 8;
console.log(typeof(firstNum),typeof(lastNum)); //데이터 타입 검토
/* console.log(Number(firstNum)+Number(lastNum));  *///문자열을 숫자로 감싸야 됨
console.log(`${firstNum}*${lastNum}=${firstNum * lastNum}`); //최종 11+68 = 79

let x = 5;
let y = 0;
console.log(x,y); // 5 0
y = x++; // x를 먼저 y로 보냈다가 x를 증가시킨다, 따라서 y 0->5 x는 5->6
console.log(x,y); // 6 5
x = ++y; 
console.log(x,y); // 6 6
x++; 
--y;
console.log(x,y); // 7 5

let a = 10;
let b = 20;
let c = 30;
let d = 40;
//a=10, b=20, c=30, d=40
a++
b--
c++
d--
//a=11, b=19, c=31, d=39
console.log(a,b,c,d);
a=++b
b=a++
//a=21, b=20, c=31, d=39
console.log(a,b,c,d);
c=a+b
d=++c
//a=21, b=20, c=42, d=42
console.log(a,b,c,d);
a=++c + 10 
b=--d + 1
//a=53, b=42, c=43, d=41
console.log(a,b,c,d);

// 증감 연산자 연습
let aa=13;
let bb=14;
let cc=15;
let dd=16;

--aa
bb++
cc--
dd--
//a=12 b=15 c=14 d=15
console.log(aa,bb,cc,dd);

aa=++bb
console.log(aa,bb);
/* --------- */
// aa:16 bb:16
cc=aa+bb
console.log(aa);

c=--aa 

let btn = 10;
let ytn = 20;
ytn=btn--
console.log(btn,ytn);

//연산자 3. 복합대입연산자
let number =10;
//number = number +5; /* 211과 같은 의미 */
number += 5;
console.log(number); // 15
number -= 5; // -> number=a-b
console.log(number); 
number +=3; //-> a=a+b -> number=number+3
console.log(number); 

//복합대입연산자 연습
let a1 = 10;
let b2 = 20;
let c3 = 30;
let d4 = 40;



//var number = 1;
//number +=1;
//number ++; /* 둘 다 값이 같음 */ 왜?



//number += 2;
//number++;
//number++;

var f=10;
var g=f;
f=30;
console.log(f);

console.log('----------------')
//함수
//1. 내장함수
/* prompt('함수는?'); */
/* alert('안녕하세요'); */
/* print(); */

//2. 사용자 정의 함수
//    function 함수명(인자){반복구문} --> 인자 생략가능
//Q1. html, css, js 반복출력


/* 함수 밖(전역 스코프) */
let lang1 ='';
let lang2 ='';
let lang3 ='';
function study_lang(){ /* 함수대기상태 */
    lang1 = 'html';
    lang2 = 'CSS';
    lang3 ='javascript';
    console.log(`배운언어 : ${lang1+lang2+lang3}`);
}
study_lang(); /* 함수 호출상태 */

//함수는 생성(대기)과 호출을 별개로 취급한다//
console.log(lang1, lang2, lang3);
lang2 = lang2+'3'; //lang+=3
console.log(lang2);



console.log('지역변수와 전역변수');
let xx =1;
let yy =0; /* 얜 숫자니까 따옴표 말고 0으로 */
function func1(){
    yy = 5;
    console.log(xx+yy);
}
function func2(){
    let zz = 10;
    console.log(xx+yy+zz);
}
func1()
func2()