// boolean.js
// 거짓으로 평가되는 값
// false, null, undefind, NaN, 0, ""
// 위 제외 모든 값 참으로 평가됨 []. {} 포함
let a =''
console.log(Boolean(a))
a = []
console.log(Boolean([a]))
//비교연산자
// ==일치연산, ===데이터타입까지 일치
let b = 10;
let c = "10";
let result = b == c;
console.log(result) //값만 비교 =>true
result = b === c;
console.log(result) //값+데이터 비교 =>false
b += 5;
result = b !=c;
console.log(result) //값만 비교 =>false (같으면 거짓)

result = b !==c;
console.log(result)  //값+데이터타입 비교 =>true
c = 2; //b 15, c 2               //102면 b+=2 10이면 Number(c)+=b
result = b < c;
console.log(result) //f
result = b > c;
console.log(result) //t
result = b >= c;
console.log(result) //t
result = b <= c;
console.log(result) //f
console.log('====================================')
//논리 연산자 &&, ||, !
console.log("A" && null)
console.log( 0 && "B")
console.log( "B" &&0 )
console.log( 0 || "B")
console.log( "A" || "B")
console.log( "" || {})
console.log(!"a")
let d ;
result = !d;
console.log(result); // T
let e = [] // T
result =!e;  //F
e +=['사과'] // 아래와 상관없음
console.log(result) // 따라서 F
console.log('조건문====================================')
//if 조건식 {조건식이 참일때 실행문}
let x = [] //참
let y = 0 //거짓
if(x){ console.log('안녕하세요'); } //참이니까 출력이되는것
if(y){ console.log('x는 참이다'); } //거짓

if(x !== true){console.log('x는 참이다')} // == 는 데이터 타입은 안 봄 -> false
if (x && y){console.log('x,y는 참이다')} // x는 참이라서 다음것도 봄 -> 다음(y)은 거짓임 ->거짓 출력
if (x || y){console.log('x만 참이다')} //||은 하나라도 참이면 그걸 읽어서 실행이 됨 (x를 읽었다는 것임)
x = 7;
y = 2;
if(x>y && x==y){alert('결과 출력')}
if(x>y || x==y){console.log('결과 출력 완료')} 
if(!x){console.log('결과 출력 완료22')}
if(y || !x){console.log('결과 출력 완료33')} 
if(!y && x){console.log('결과 출력 완료44')} 
x = ++y;
console.log(x)
z = 4;
if(x>z){console.log('결과 출력 완료55')}

//애버랜드 놀이기구 탑승조건 확인js
//나이 입력 후 버튼 클릭 시 (이벤트함수) 10살 이하면 '탑승 불가' 메세지 출력 (조건문)

const ageInput = document.querySelector('input');
const checkBtn = document.querySelector('button');
const resultText = document.querySelector('.result');

/* ageBtn.value=13;
console.log(ageBtn.value); 이벤트 함수 밖에 작성하는 건 초기값 확인용 */

//나이 입력 후 버튼 클릭 시 콘솔에 입력한 나이 출력
// * 버튼 클릭 시 특정 동작(입력한 나이값 가져오기)이 일어나야한다.

checkBtn.addEventListener('click',()=>{
    //10살 이하면 '탑승불가 메세지 출력'
    console.log(ageInput.value)
    //ageBtn.value값이< 숫자 10 이하면 (조건문)
    //resultText변수에 '탑승 불가' 문자 데이터 출력 (조건문 참일때)
    //조건식 {조건식 결과가 참일떄 실행결과}
    //if(value값이 숫자 10이하){탑승물가 문자데이터}
    if(ageInput.value <= 10){
        resultText.textContent = '탑승불가';
        ageInputReset()
        /* ageInput.value ='' 다음 나이를 입력했을 때, 대입값을 초기화하는 값 */
    }
    if(ageInput.value > 10){
        resultText.textContent = '탑승가능';
        ageInputReset()
        /* ageInput.value ='' 다음 나이를 입력했을 때, 대입값을 초기화하는 값 */
    }
    //값 입력 안하고 클릭 시 '값을 입력하세요' 메세지 출력
    if(ageInput.value==''){resultText.textContent = '입력하세요'}
})

/* function ageInputReset(){
    return ageInput.value =''
} 다음 나이를 입력했을 때, 대입값을 초기화하는 값에 대한 함수 */

/* resultText.textContent=`탑승불가` */

//인쇄알고리즘
//인쇄하기 버튼 클릭 시 '인쇄하시겠습니까?' 물어보고 확인 누르면 인쇄창 실행

const printBtn = document.querySelector('#print_btn')

//printBtn.addEventListener('click',function(){
    /* confirm('인쇄하시겠습니까?') */
    //if(confirm('인쇄하시겠습니까?')){print()}
//})


printBtn.addEventListener('click',printFunc)
function printFunc(){
    let confirmResult = confirm('인쇄하시겠습니까?')
    console.log(confirmResult)
    if(confirmResult){print()}
    return
}

//참과 거짓에 따른 결과 출력 조건문
// if(조건식){참일떄 실행}else{거짓일때 실행}
// 관리자 로그인
// 관리자(admin) 로그인 사용자 아이디 admin 일 경우 '관리자님 어서오세요' 아니면 '관리자 페이지 접근 불가'
/* const userId = prompt('아이디')
if(userId == 'admin'){
    alert('관리자페이지 접근불가')
}else{
    alert('어서오세요')
} */

/* const userId = prompt('아이디')
if(userId != 'admin'){
    alert('관리자페이지 접근불가')
}else{
    alert('어서오세요')
} */

//로그인 조건문
//아이디(미입력) 비밀번호(입력) 로그인 클릭 시 - 아이디 입력 경고 메세지 출력
//아이디(입력) 비밀번호(미입력) 로그인 클릭 시 - 비밀번호 입력 경고 메세지 출력
//아이디(입력) 비밀번호(입력) 로그인 클릭 시 - (참)->index.html 이동
//아이디(미입력) 비밀번호(입력) 로그인 클릭 시 - (거짓) 정보 오류 메세지 출력

const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const loginBtn = document.querySelector('#login_btn')
const errorMsg = document.querySelector('#loginFrm .error')
console.log(userId,userPw,loginBtn,errorMsg)

//회원 정보 저장 DB
//관리자 이름 : 봄, 나이:30
//일반회원 이름 : 여름, 나이 :20
const userDB = [{
    name:'봄',
    age:30,
    pst:'관리자',
    id:'admin',
    pw:'admin1234'
},
{
    name:'여름',
    age:20,
    pst:'일반회원',
    id:'summer',
    pw:'summer1234'
}]


//로그인 클릭 이벤트


loginBtn.addEventListener('click',()=>{
    //1.아이디 미 입력기준 에러메세지 출력
    if(userId.value ==''){errorMsg.textContent='아이디를 입력하세요'}
    //2.비밀번호 미입력 기준 에러메세지 출력
    else if(userPw.value==''){errorMsg.textContent='비밀번호를 입력하세요'}
    //if의 조건이 거짓이고, else if 조건이 참일때 실행,
    //3. 입력한 아이디 패스워드가 관리자의 저장된 아이디 패스워드와 동일이 인덱스 이동
    else if(userId.value==userDB[0].id)if(userPw.value==userDB[0].pw){
        /* location.href='../index.html' */
        /* islogin = true;
        console.log('로그인 성공',ture) */
        //★로컬 환경에서 확인 가능한 브라우저 데이터 저장법★//
        localStorage.setItem('islogin2','true')
        //localStorage.setItem('속성','값')
        //localStorage.getItem('가져오는 속성')
    }
    //4.모든 조건이 거짓일 때 (입력 id, pw 저장된 정보가 모두 거짓일 때)
    else{errorMsg.innerHTML='아이디 또는 비밀번호가 잘못되었습니다. <br> 다시 입력해주세요.'} 
    /* 텍스트 콘텐츠로 할 시 br 안 먹음 */ 
}) 


/*  3번 조건 둘다 동일한 방식. else if를 (1)한번에 처리하거나 (2)그 안에 참을 넣는 방식
else if(userId.value==userDB[0].id)if(userPw.value==userDB[0].pw){location.href='../index.html'}
else if(userId.value==userDB[0].id && userPw.value==userDB[0].pw){location.href='../index.html'}  
*/

//boolean_common.js 변수확인
console.log(islogin)