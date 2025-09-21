//자바스크립트 복습
//동적 요소 계획하기
//1. 상품 이미지에 마우스 이벤트 시 큰 상품 이미지로 변경
//2. 저장하기 버큰 클릭 시 로그인 유무에 따라 다른 결과 실행 🔒
//3. 리뷰 클릭 시 스크롤 이동
//4. 가격 정보 (i) 클릭시 정보 파바업 출력 / 숨기기
//5. 주문 목록 초기 숨기기
//6. 사이즈  selct 초기 비활성화 (색상 선택 시 활성화)
//7. 색상 -> 사이즈 모두 선택 시 주문 목록 출력 (선택한 값이 출력, 주문 금액 변경)
//8. 주문 록록 'x' 클릭 시 주문 목록 삭제, 주문 금액 초기화
//9. 주문 목록 + 클릭 시 재고 수량까지 주문 수량+주문 금액 표시
//10. 주문 목록 - 클릭시 주문 수량 +주문 금액 감소 (1이라면 경고창 출력)
//11. (상품 미 선택 시 ) 장바구니, 바로구매 클릭 시 '상품 선택하세요' 경고장 출력
//12. (상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동 🔒


  // 요소 캐싱
  const thumbsWrap = document.querySelector('.small_thumbnail');        // 썸네일 묶음
  const mainImg    = document.querySelector('.product_img .main_img');  // 큰 이미지

// ⏺️1. 상품 이미지에 마우스 이벤트 시 큰 상품 이미지로 변경
const thumbnailTag = document.querySelectorAll('.small_thumbnail a')
const mainTag = document.querySelector('.product_img .main_img')

/* 초기값 설정 : 현재 보여지고 있는(첫번째) 썸네일에 하늘색 테두리 */
thumbnailTag[0].style.border='2px solid #59AFFF'

//두번째 썸네일에 마우스를 올리면 큰 이미지가 두번째 썸네일 이미지로 바뀌는 것
/* 콘솔 테스트 권장 1) 두번째 썸네일 이미지 경로 출력하기 */
console.log(thumbnailTag[1].children[0].src)
/* 콘솔 테스트 권장 2) 큰 이미지 이미지 경로 출력하기 */
console.log(mainTag.src)

thumbnailTag[0].children[0].style.transition='transform 0.3s'
thumbnailTag[1].children[0].style.transition='transform 0.3s'

thumbnailTag[0].addEventListener ('mouseover',()=>{
    /* 테두리 활성화, 비활성화 */
    thumbnailTag[0].style.border='2px solid #59AFFF'
    thumbnailTag[1].style.border='0'
    /* 이미지 확대 */
    thumbnailTag[0].children[0].style.transform='scale(1.2)'
    thumbnailTag[1].children[0].style.transform='scale(1)'
    /* 이미지 변경 */
    mainTag.src=thumbnailTag[0].children[0].src
})

thumbnailTag[1].addEventListener ('mouseover',()=>{
    /* 테두리 활성화, 비활성화 */
    thumbnailTag[1].style.border='2px solid #59AFFF'
    thumbnailTag[0].style.border='0'
    /* 이미지 확대 */
    thumbnailTag[1].children[0].style.transform='scale(1.2)'
    thumbnailTag[0].children[0].style.transform='scale(1)'
    /* 이미지 변경 */
    mainTag.src=thumbnailTag[1].children[0].src
})

//자연스러운 스케일 에니메이션

// ⏺️2. 저장하기 버큰 클릭 시 로그인 유무에 따라 다른 결과 실행 🔒
localStorage.setItem('isLogin','true');

const bookMark = document.querySelector('.scrap')
console.log(bookMark)
console.log(bookMark.children[0])

let loginkStatus='';
console.log(loginkStatus)

bookMark.addEventListener('click',()=>{
    loginkStatus=localStorage.getItem('isLogin')
    if(loginkStatus=='true'){
    bookMark.classList.toggle('active');
    }else if(loginkStatus=='false') {
        window.location.href='./login.html'
    }
})

//3. 리뷰 클릭 시 스크롤 이동
const reviewStar = document.querySelectorAll('.score')
const reviewWrap = document.querySelector('.review_scrap')
const productBtn = document.querySelector('.product_link')
const productWrap = document.querySelector('.product_information')

reviewStar[0].addEventListener('click',(e)=>{e.preventDefault(); scrollFunc(reviewWrap)})
reviewStar[1].addEventListener('click',(e)=>{e.preventDefault(); scrollFunc(reviewWrap)})
productBtn.addEventListener('click',(e)=>{e.preventDefault(); scrollFunc(productWrap)})


function scrollFunc(Btn){
    return window.scrollTo(0,Btn.offsetTop)
}

//4. 가격 정보 (i) 클릭시 정보 팝업 출력 / 숨기기
const infoIcon= document.querySelector('.info_icon')
const infoText= document.querySelector('.info')

infoIcon.addEventListener('click',()=>{
    infoText.classList.toggle('active');
})

//5. 주문 목록 초기 숨기기 ✅
const orderList = document.querySelector('.order_list')
const totalPrice = document.querySelectorAll('.order_total_price')

orderList.style.display='none'

totalPrice[0].textContent = 0;
totalPrice[1].textContent = 0;





//6. 사이즈 selct 초기 비활성화 (색상 선택 시 활성화)
const colorSelect = document.querySelector('#color_select')
const sizeSelect = document.querySelector('#size_select')
const opts = document.querySelectorAll('option')
const orderText = document.querySelectorAll('.order_info em')


console.log(orderText)

sizeSelect.disabled = true;
orderText[0].textContent =''
orderText[1].textContent =''



colorSelect.addEventListener('change',()=>{
    if(colorSelect.selectedIndex !=0){
        sizeSelect.disabled = false;
        //7. 색상 -> 사이즈 모두 선택 시 주문 목록 출력 (선택한 값이 출력, 주문 금액 변경)
        let orderColor = colorSelect.options[colorSelect.selectedIndex].text;
        let orderColorReplace = orderColor;
        orderText[0].textContent=orderColorReplace;
        sizeSelect.addEventListener('click',()=>{
        //7. 색상 -> 사이즈 모두 선택 시 주문 목록 출력 (선택한 값이 출력, 주문 금액 변경)
            if(sizeSelect.selectedIndex !=0){
            orderList.style.display='flex'
            let orderSize = sizeSelect.options[sizeSelect.selectedIndex].text;
            let orderSizeReplace = orderSize;
            orderText[1].textContent=orderSizeReplace;
            totalPrice[0].textContent=productOptDB[0].price.toLocaleString('ko-kr')
            totalPrice[1].textContent=productOptDB[0].price.toLocaleString('ko-kr')
        }
    })
}else{
    sizeSelect.disabled = true;}
})


//-----------------------DB->HTML 적용
//-----------------------1. js에서 HTML 함수로 생성 creatElement()
const colorOpt1 = document.createElement('option')
const colorOpt2 = document.createElement('option')
const colorOpt3 = document.createElement('option')

//-----------------------2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
colorOpt1.textContent = `${productOptDB[0].color[0]} (${productOptDB[0].price}원)`
colorOpt2.textContent = `${productOptDB[0].color[1]} (${productOptDB[0].price}원)`
colorOpt3.textContent = `${productOptDB[0].color[2]} (${productOptDB[0].price}원) / 품절`

//-----------------------3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
colorSelect.appendChild(colorOpt1)
colorSelect.appendChild(colorOpt2)
colorSelect.appendChild(colorOpt3)


//8. 주문 록록 'x' 클릭 시 주문 목록 삭제, 주문 금액 초기화
const countInput = document.querySelector('.control input')
const cancelBtn = document.querySelector('.order_info svg')
console.log(cancelBtn)

cancelBtn.addEventListener('click',()=>{
    orderText[0].textContent =''
    orderText[1].textContent =''
    totalPrice[0].textContent=0
    totalPrice[1].textContent=0
    countInput.value=1
})



//9. 주문목록 + 클릭 시 재고 수량까지 주문 수량+주문 금액 표시
const minusBtn = document.querySelector('#minus_btn')
const plusBtn = document.querySelector('#plus_btn')

countInput.value=1;

let count = 1 /* 초기값 설정 */
let priceFinal = productOptDB[0].price

countInput.value = count;
console.log(priceFinal)


plusBtn.addEventListener('click',()=>{
    if((colorSelect.selectedIndex ==0) || (sizeSelect.selectedIndex==0)){
        alert('상품을 선택해주세요.');
        return
    }
    if(count < productOptDB[0].stock){
    countInput.value = ++count;
    priceFinal = countInput.value*productOptDB[0].price
    totalPrice[0].textContent = priceFinal.toLocaleString('ko-kr')
    totalPrice[1].textContent = priceFinal.toLocaleString('ko-kr')
    }
    else{alert('최대 구매 수량입니다')}
})



//10. 주문 목록 - 클릭 시 주문 수량+ 주문 금액 감소 (1이라면 경고창 출력)
minusBtn.addEventListener('click',()=>{
    if(count>1){
    countInput.value = --count;
    priceFinal = countInput.value*productOptDB[0].price
    totalPrice[0].textContent = priceFinal
    totalPrice[1].textContent = priceFinal
    }else{alert('최소 구매수량은 1개입니다.')}
})

//11. (상품 미 선택 시) 장바구니, 바로구매 클릭 시 '상품 선택하세요' 경고장 출력
const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')


cartBtn.addEventListener('click',()=>{
    if((colorSelect.selectedIndex ==0) || (sizeSelect.selectedIndex==0)){
        alert('상품을 선택하세요')
    }
})

buyBtn.addEventListener('click',()=>{
    if((colorSelect.selectedIndex ==0) || (sizeSelect.selectedIndex==0)){
        alert('상품을 선택하세요')
    }
})

//12. (상품 선택 시) 장바구니, 바로구매 클릭 시  로그인 유무에 따라 다른 페이지로 이동 🔒
cartBtn.addEventListener('click',()=>{
    if((colorSelect.selectedIndex !=0)&&(sizeSelect.selectedIndex !=0)){
        loginkStatus=localStorage.getItem('isLogin');

        if(loginkStatus=='true'){
            window.location.href='./cart.html';
        }else{
            window.location.href='./login.html';
        }
    }else {alert('상품을 선택하세요.')}
})

buyBtn.addEventListener('click',()=>{
    if((colorSelect.selectedIndex !=0)&&(sizeSelect.selectedIndex !=0)){
        loginkStatus=localStorage.getItem('isLogin');

        if(loginkStatus=='true'){
            window.location.href='./buy_now.html';
        }else{
            window.location.href='./login.html';
        }
    }else {alert('상품을 선택하세요.')}
})
