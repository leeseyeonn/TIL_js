console.log('===========================매개변수');
/* 매개변수 활용 - 1 */
function storyFunc1(day=1, tool='조약돌'){
    /* console.log(`매개변수 값 확인 : ${day},${tool}`) */
    const person = ['헨젤','그레텔'];
    //1일차 헨젤과 그레텔이 조약돌을(를) 이용해서 집을 찾아갔습니다.
    //2일차 헨젤과 그레텔이 빵부스러기을(를) 이용해서 집을 찾아갔습니다.
    //3일차 헨젤과 그레텔이 쌀을(를) 이용해서 집을 찾아갔습니다.
    console.log(`${day}일차 ${person[0]}과 ${person[1]}이 ${tool}을(를) 이용해서 집에 갔다`)
}
storyFunc1();
storyFunc1(day=2, tool='빵부스러기');
storyFunc1(day=3, tool='쌀');

/* 매개변수 활용 -2 */
function coffee1(menu,water=0,esp=0){
    //?? 레시피 : ??컵 물을 채운다. ??샷 에스프레소를 넣는다
    console.log(`매개변수 값 확인: ${water},${esp}`);
    console.log(`${menu} 레시피:${water}컵 물을 채운다. ${esp}샷 에스프레소를 넣는다.`)
}
coffee1('카페라떼',water=2,esp=2);

/* 매개변수 활용 -3 (배열활용)*/
function coffee2(hotice, name, num){
    //???한 ??? ?잔 주문완료되었습니다.
    const option = ['따뜻한','차가운']
    const menu = ['카페라떼','아메리카노','녹차라떼']
    console.log(`${option[hotice]}한 ${menu[name]} ${num}잔 주문완료`)
}
coffee2(0,1,1);
coffee2(1,2,4);

/* 매개변수 활용 -4 (객체 활용)*/
function coffee3(type,name,num){
    let cafeKiosk = {
        option:['따뜻한','차가운'],
        menu:['카페라떼','아메리카노','녹차라떼']
    }
    console.log(`${cafeKiosk.option[type]}한 ${cafeKiosk.menu[name]}잔 ${num} 주문완료`)
}
coffee3 (0,1,1);

console.log('===========================리턴');

/* 리턴 - 1 */
function gyesan(n1,n2){
    let calc = `${n1}+${n2}=${n1*n2},`
    calc += `${n1}x${n2}=${n1+n2}` 
    return calc
}
//alert(gyesan(1,6));
console.log(gyesan(1,6));

/* 리턴 - 2 */
function dan99(num){
    let total = '';
    total += `${num} x 1 = ${num*1},`
    total += `${num} x 2 = ${num*2},`
    total += `${num} x 3 = ${num*3},`
    total += `${num} x 4 = ${num*4},`
    total += `${num} x 5 = ${num*5},`
    total += `${num} x 6 = ${num*6},`
    total += `${num} x 7 = ${num*7},`
    total += `${num} x 8 = ${num*8},`
    total += `${num} x 9 = ${num*9}`
    return total
}
console.log(dan99(5));

function discount(name,num){
    //현대카드 10% 할인 적용가 ?원
    //할인율 (100-5) / 100 = 0.95 ->  판매가 * 0.95 = total
    const card = ['현대카드','신한카드'];
    const price = 350000;
    const calc = (100-num)/100;
    const total = price*calc
    const result=(`${card[name]} ${num}% 할인 적용가 ${total.toLocaleString(`ko-kr`)}원`)
    return result
}
alert(discount([0],50));

/* 일반함수와 익명함수 차이 */
/* -----일반함수 */
function ilban(user){
    return alert('hello'+user);
}
console.log(ilban('seyeon'))

/* -----익명함수 */
const ikmyeong = function(user){
    const msg = ('bye'+user)
    return msg;
}
console.log(ikmyeong('seyeon'))

/* ------익명함수+화살표함수 */
//변수 키워드 변수명 대입연산자 (매개변수) 화살표 {실행}
const jip = (user) => {
    return ('please'+user)
}
console.log(jip('jip'))