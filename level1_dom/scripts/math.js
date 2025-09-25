console.log(Math);
console.log(Math.PI);
//Math.floor, round, random
let num1 = Math.floor(3.7)
console.log(num1) //3
num1 = Math.floor(4.2)
console.log(num1) //4
console.log('----------------------')

let num2 = Math.round(3.7)
console.log(num2) //4
num2 = Math.round(5.75456)
console.log(num2) //6
num2 = Math.round(5.4569)
console.log(num2) //5
console.log('----------------------')

let num3 = Math.random()
console.log(num3)
num3 = Math.random() * 5;
console.log(num3)

num3 = Math.floor(Math.random() *10 ) + 1; // +1 하게 된다면 1과 10 사이도 출력 가능
console.log(num3)
console.log('----------------------')
// 10%, 20%, 30%, 40%, 50%

const couponDB = ['10%','20%','30%','40%','50%']
const couponBtn = document.querySelector('#coupon')

//버튼 클릭 시 쿠폰 5개 중 1개가 랜덤하게 alert() 출력 메세지 실행
couponBtn.addEventListener('click',()=>{
    let randomNum = Math.floor(Math.random() * 5)
    console.log(randomNum)
    alert(couponDB[randomNum])
})

//화면에 접속했을 때 광고 2개가 랜덤 표시
const adDB = [{
    name:'은어 축제',
    src:'https://i.pinimg.com/736x/ba/a7/51/baa751d52fdb624e90acbfb07fe06195.jpg',
    link:'https://bhftf.or.kr/festival/bonghwa_sweetfish/',
    color:'blue'
},{
    name:'포도 축제',
    src:'https://i.pinimg.com/736x/0e/b8/c7/0eb8c70e6da30f302015642e820b6b07.jpg',
    link:'https://www.xn--vk1boo94vp4keugg9j.com/',
    color:'purple'
},{
    name:'복숭아 축제',
    src:'https://i.pinimg.com/736x/22/61/46/226146a44f7b63e0bf428eb9999a49c9.jpg',
    link:'http://www.jcwpeach.kr/',
    color:'salmon'
}]

const adLink = document.querySelector('.ad a')
const adimg = document.querySelector('.ad img')
const adBtn = document.querySelector('#adBtn span')

adDB[0].name

console.log(adDB[0].name)

window.addEventListener('load',()=>{
    let adNum = Math.floor(Math.random() * 3)
    console.log(adNum)
    adLink.href = adDB[adNum].link
    adimg.src = adDB[adNum].src
    adimg.alt = adDB[adNum].name
    adBtn.textContent = adDB[adNum].name
})

//더치페이 계산기
//계산하기 클릭 시 총 금액과 인원수에 따라 계산결과 출력하기
//금액이 소수점일 경우 소수점 값에 따라 반올림하기

const price = document.querySelector('#price')
const person = document.querySelector('#person')
const calcBtn = document.querySelector('#total_btn')
const result = document.querySelector('.result em')

/* price.value=''
person.value =''

let cost = price.value
let people = person.value */

calcBtn.addEventListener('click',()=>{
    
/* 
    let cost = price.value
    let people = person.value
    totalCost = cost / people */
    totalCost=price.value/person.value
    console.log(totalCost)
    result.textContent=Math.round(totalCost).toLocaleString('ko-kr')
})

//DB
const shopDB = [{
    shop:'쿠팡',
    id:'하루견과',
    price:1000,
},{
    shop:'네이버 스마트 스토어',
    id:'하루견과',
    price:2000,
},{
    shop:'마켓컬리',
    id:'하루견과',
    price:3000,
}]

//변수
const minBtn = document.querySelector('#min_price_btn')
const minPrice = document.querySelector('.min_price')

const maxBtn = document.querySelector('#max_price_btn')
const shopListMax = document.querySelector('#shop_list_max')

const pp = [1000,2000,3000,4000] //test

//클릭 이벤트
minBtn.addEventListener('click',()=>{
    //1. 쇼핑몰, 상품명, 가격을 가지고 있는 배열에서 가격만 추출하기
    // for문, map문
    const priceMap= shopDB.map(i => i.price)
    console.log(priceMap) //테스트
    console.log('----------')
    console.log(Math.min(...priceMap))
    //2. 추출한 가격에서 최저가 찾기
    console.log(`최저가:${Math.min(...priceMap)}`, Math.min(...priceMap))
    minPrice.textContent=`최저가:${Math.min(...priceMap)}`
    //스프레드 연산자 (...배열명) 여러 배열값을 한번에 처리하는 배열 처리법
    console.log('----------')
    console.log(Math.min(...pp)) //최저가
    console.log(Math.max(...pp)) //최고가
})

maxBtn.addEventListener('click',()=>{
    const priceMap3= shopDB.map(i => i.price)
    console.log(priceMap3)
    const sort = [...shopDB].sort((a,b ) => b.price - a.price )
    console.log(sort)
    for(let i of sort){
        console.log(i.price)
        const dt = document.createElement('dt')
        dt.textContent = i.shop;
        shopListMax.appendChild(dt)
        const dd = document.createElement('dd')
        dd.textContent = i.price;
        shopListMax.appendChild(dd)
        const dd2 = document.createElement('dd')
        dd2.textContent = i.id;
        shopListMax.appendChild(dd2)
    }
})




console.log('----------')
const shopDB2 = [{
    shop:'쿠팡',
    name:'고구마',
    price:5000,
    delivery:2500,
},{
    shop:'이마트몰',
    name:'고구마',
    price:2900,
    delivery:0,
},{
    shop:'네이버',
    name:'고구마',
    price:4000,
    delivery:1000,
}]

const priceBtn = document.querySelector('#price_btn')
const deliveryBtn = document.querySelector('#delivery_btn')
const reset1 = document.querySelector('.reset1')
const reset2 = document.querySelector('.reset2')
const shopListUl = document.querySelector('#shop_list')

//최저가 찾기
priceBtn.addEventListener('click',()=>{
    const priceMap2 = shopDB2.map(i => i.price)
    console.log(priceMap2) //테스트
    reset1.textContent=`최저가는 ${Math.min(...priceMap2)}원 입니다.`

    //최저가 -> 최고가 오름차순 정렬하기 JS
    //매개변수 순서를 이용한 오름차순 (계산속성 기준) a.price - b.price
    //매개변수 순서를 이용한 오름차순 (계산속성 기준) b.price - a.pirce
    const sort = [...shopDB2].sort((a, b)=> a.price - b.price)
    console.log(sort)
    
    //반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입하기
    for(let i of sort){
        const li = document.createElement('li') //<li></li>
        li.innerHTML = `<a href ="#">${i.shop}</a>`
        li.innerHTML += `<span>${i.price}원</span>`
        li.innerHTML += `<em>${i.delivery}원</em>`
        shopListUl.appendChild(li)
        //1 
    }//2 2번자리에 넣으면 마지막 만 출력 됨
})

//배송비 무료 버큰 클릭 시 배송비 가격 표시
deliveryBtn.addEventListener('click',()=>{
    const priceMap2 = shopDB2.map(i => i.delivery)
    console.log(priceMap2) //테스트
    reset2.textContent=`배송비는 ${Math.min(...priceMap2)}원 입니다.`
})

