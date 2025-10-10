# 자바스크립트
1. var 1num=10; x <!-- 오답:숫자가 앞에 있어서 -->
2. var $num=10; o
3. var 100num=10; x <!-- 오답:숫자가 앞에 있어서 -->
4. var num100=10; o
5. var test=10; o
6. var num=10;o
7. var str="hello"; 
8. var my name; o <!-- 오답:공백이 있어서 붙여써도 틀림. 왜냐면 소문자만 있어서. 대문자도 적절히 섞어줘야한다. -->
9. var_name; o
10. var if; x <!--오답:키워드 사용 -->
### 기초 개념 및 속성, 함수 종류 기록
* `var 변수명` : 수정 가능한 전역 변수
* `let 변수명` : 수정 가능한 전역/지역 변수
* `const 변수명=대입값` : 수정 불가능한 상수 (전역/지역 변수)
* **객체.속성** 
* **객체.속성.속성** 
* **객체.객체.속성** (x) <!-- 객체 2번 연속은 기본적으로 불가 -->
* **객체.함수()** 
* **객체.속성.함수()** 
* **객체.함수().속성** 
* 자주 이용하는 기본 속성 : `length`
* 자주 이용하는 기본 함수 : `toLocaleString(`국가코드`)` , `typeof()`
* 공부용 기초 함수 : prompt(), confirm()
### **배열** 관리 함수 : 
* `객체.push()` : 배열의 끝 위치에서 값 추가
* `객체.pop()`: 배열의 끝 위치에서 값 1개 제거
* `객체.unshift()`: 배열의 시작 위치에 값 추가
* `객체.shift()` : 배열의 시작 위치에서 값 1개 제거

## 콜백함수 정리
### 매개변수 없는 콜백함수 호출
* `DOM.addEventListener('이벤트','콜백함수')`
* `function 콜백함수(){ return 반복실행 }`

### 매개변수가 있는 콜백함수 호출
* `DOM.addEventListener('이벤트', ()=>{ 콜백함수(매개변수) })`
* `DOM.addEventListener('이벤트', function(){콜백함수(매개변수)} })`
* `function 콜백함수 (매개변수) {return 반복실행}`

### 매가변수가 있는 콜백함수 호출 (클로저 활용)
* `DOM.addEventListener('이벤트','콜백함수(매개변수)')`
* `function 콜백함수(매개변수) {return function() {반복실행}}`
--------------------------
## 로컬스토리지 활용 자바스크립트
* 활용 예 : 로그인 유/무에 따라 다르게 나오는 장바구니/구매페이지/카페/메일 등
* 로컬 스토리지 : 브라우저에 데이터를 영구적으로 저장하는 방법
* 로컬 스토리지 종류 : `localStorage`, `ssesionStorage`
### localStorage
* 페이지를 새로고침하거나 브라우저를 닫아도 데이터 유지
* `localStorage.setItem('속성','값')` //값 true, false 대입
* `localStorage.getItem('속성')`
### sesstionStorage
* 브라우저가 닫히면 데이터 자동 삭제
* `localStorage.setItem('속성','값')`
* `localStorage.getItem('속성')`
## 자주 쓰는 JS 속성과 함수 & TIP
### 1개의 DOM요소에 이벤트 분기가 2개 이상 있을 경우
* 조건 분기를 위해 `true, false` 값을 가지는 변수 만들기
* 이벤트 함수 내에 위 **변수값 반전** 형태 제작하기 `변수 =! 변수`
* 변수에 따라 분기에 놔눠 실행되는 조건문 `if` 제작하기
### DOM 요소 숨기기 & form요소 비활성화 하기
* DOM 요소 숨기기 : `DOM.style.display = 'none'`
* form 요소 비활성화 :`DOM.disabled = true(비활성화) or false(활성화)`
* 위 비활성화 대상 : `input, textarea, select` 등  form 관련 요소
### form 관련 자주 쓰는 속성과 함수, 이벤트
* `change` : select태그 변경 시 인식하는 이벤트 종류
* `selectedIndex` : select의 선택 option index 확인 속성
* `options[index]` :select의 특정 option 확인 시 속성
1. console.log("1"+1) = 11
2. console.log(1+"1") = 11
3. console.log("1"-1) = 0
----
1. console.log(Boolean("0")) true  
2. console.log(Boolean(0)) false 
3. console.log(typeof[]) object 빈 배열의 타입은 object이다.
----
1. let a; let b = null; console.log(typeof a) console.log(typeof b)
*   undefined, object
----
### 핵심 개념 이해하기 (1)
* 자바스크립트의 데이터 타입 : Number, Boolean, String, Null, undefined
* Null : 값이 없음, 반환할 값이 없을 때 반환하는 데이터 타입
* Undefined :변수에 초기값을 지정하지 않았을 때, 객체에 속성이 없을 떄, return 문에 값이 없을 떄, 함수 인자에 값이 없을 때
### 핵심 개념 이해하기 (2)
* const animal = {
    kind:"cat",
    age:7,
}
animal.kind
animal.kind = "Dog"
animal.name = "Happy"
delet animal.name 
animal.name // undefined
### 핵심 개념 이해하기 (3)
Boolean 타입 변환
undefined :false
Null : false
Number : 0.-0,NaN == false, 나머지 숫자는 True
String : 빈 문자열 ("") false, 나머지 문자는 True
Object : Ture
console.log(!undefined) // True
console.log(!7) // flase
if(""){console.log('빈 문자열은 false로 변환되어 출력되지 않아요')} // 출력 안 됨
### 핵심 개념 이해하기 (4)
* 자바스크립트에서 1+"1" 연산 시 `문자`타입이 아닌 피 연산자는 암시적으로 변환되므로 `11`결과 값을 갖습니다. 반면 1-"1" 연산 시 `숫자` 타입이 아닌 피 연산자는 암시적으로 변환되므로 `0`결과값을 갖습니다.
### 핵심 개념 이해하기 (5)
* 다음 중 Falsy 값이 아닌 것 (3,4)
1. undefined
2. null
3. "0" //문자
4. {} // 빈 객체
5. NaN
### 핵심 개념 이해하기 (6)
* 자바스크립트의 값의 타임은 개발자의 의도에 따라 다른 타입으로 변환 할 수 있습니다. 개발자가 의도적으로 값이 타입을 변환하는 것을 `명시적 타입 변환(String, Number)`이라고 합니다. 반대로 개발자의 의도와 상관없이 자바스크립트가 자동으로 타입을 변환하는 것을 `암시적 타입 변환(input, value, prompt, "1"-1 // 마음대로 숫자로 바꾸니까)`라고 합니다.
### 핵심 개념 이해하기 (7)
* 자바스크립트의 원시 타입이 아닌 경우 `typeof`연산자를 통해 타입을 알 수 있습니다. null은 예외적으로 null 아닌 `"object"`데이터 타입을 반환합니다.
### 핵심 개념 이해하기 (8)
* console.log(123==="123") false
* console.log(123=="123") true
* console.log(true===1) false
* console.log(true==1) true
* console.log(0==!null) false
* console.log(-0===+0) true
* console.log(NaN === NaN) false
### 핵심 개념 이해하기 (9)
let result = 5+"7"
console.log(`${reseult}, ${typeof result}`) 57, number
result = "hello" + false;
console.log(`${reseult}, ${typeof result}`) hellofalse, string
result = 1 + true;
console.log(`${reseult}, ${typeof result}`) 2 number
result = 6 + undefined;
console.log(`${reseult}, ${typeof result}`) NaN number
### 핵심 개념 이해하기 (10)
* 함수 선언문은 function 키워드를 사용하여 이름있는 함수를 작성하는 것을 기본 시작으로 합니다.
h1()
function hi(){ //함수 소괄호를 사용하는 때 : 달라지는 값이 있을때(매개변수 사용)
    return console.log("hello, world")
} //함수 hi를 쓸 때마다 헬로월드 출력
h1()
### 핵심 개념 이해하기 (11)
* 화살표 함수는 => 간결하게 정의할 수 있습니다.
const person = {
    name:"Lee",
    say(){
        setTimeout(()=>{ //setTimeinterVal 은 반복
            console.log("hi My Name is `${this.name}`");
        },1000)
    },
}
person.say() //1초 후에 hi My Name is Lee
### 핵심 개념 이해하기 (12)
const add = (a,b) => a + b;
console.log(add(2,3)) //5

const numbers = [1,2,3,4]
const doubled = numbers.map(num=>num*2) //num 대신 아무 단어로 지어도 상관 없음
console.log(doubled) // 2,4,6,8