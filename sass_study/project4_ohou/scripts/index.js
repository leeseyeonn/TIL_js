//index.js
// 작업 html에 동적인 요소가 무엇이 있는지? 알고리즘 계획
//1)변수 2)초기값 3)이벤트, 함수 설정

//동적 요소 계획하기
//1. 상품 이미지에 마우스 이벤트 시 큰 상품 이미지 변경 
//2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행 ✔
//3. 리뷰 클릭 시 스크롤 이동
//4. 가격정보 (i) 클릭 시 정보 팝업 출력 / 숨기기
//5. 주문 목록 초기 숨기기
//6. 사이즈 selct 초기 비활성화 (색상 선택 시 활성화)
//7. 색상 -> 사이즈 모두 선택 시 주문 목록 출력 (선택한 값이 출력, 주문 금액 변경)
//8. 주문 목록 'x' 클릭시 주문 목록 삭제, 주문 금액 초기화
//9. 주문목록 + 클릭 시 재고 수량까지 주문 수량+주문 금액 표시
//10. 주문 목록 - 클릭 시 주문 수량+ 주문 금액 감소 (1이라면 경고창 출력)
//11. (상품 미 선택 시) 장바구니, 바로구매 클릭 시 '상품 선택하세요' 경고장 출력
//12. (상품 선택 시) 장바구니, 바로구매 클릭 시  로그인 유무에 따라 다른 페이지로 이동 ✔

//1. 상품 이미지에 마우스 이벤트 시 큰 상품 이미지 변경
// 변수 -> 초기값 -> 이벤트, 함수
const thumbnailTag = document.querySelectorAll('.small_thumbnail a')
const mainImg = document.querySelector('.product_img .main_img');

//초기값(첫번째 썸네일 a가 보이고 있다는 뜻으로 테두리가 있음)
thumbnailTag[0].style.border='2px solid #59AFFF'

//두번째 썸네일에 마우스를 올리면 큰 이미지를 두번째 썸네일 이미지로 변경하기
  // 콘솔 테스트 권장 1) 두번째 썸네일 이미지 경로 출력하기
console.log(thumbnailTag[1].children[0].src)
  // 콘솔 테스트 권장 2) 큰 이미지 경로 출력하기
console.log(mainImg.src)

//자연스러운 이미지 크기 설정을 위한 애니메이션
thumbnailTag[0].children[0].style.transition = 'transform 0.3s'
thumbnailTag[1].children[0].style.transition = 'transform 0.3s'

thumbnailTag[0].addEventListener('mouseover',()=>{
    /* 테두리 활성화 , 비활성화 */
    thumbnailTag[1].style.border='0'
    thumbnailTag[0].style.border='2px solid #59AFFF'
    /* 이미지 확대 */
    thumbnailTag[1].children[0].style.transform ='scale(1)'
    thumbnailTag[0].children[0].style.transform ='scale(1.2)'
    /* 이미지 변경 */
    mainImg.src= thumbnailTag[0].children[0].src
})

thumbnailTag[1].addEventListener('mouseover',()=>{
    thumbnailTag[0].style.border='0'
    thumbnailTag[1].style.border='2px solid #59AFFF'
    thumbnailTag[0].children[0].style.transform ='scale(1)'
    thumbnailTag[1].children[0].style.transform ='scale(1.2)'
    mainImg.src= thumbnailTag[1].children[0].src
})


//로그인 정보 저장
//true == 로그인
//false == 로그아웃
localStorage.setItem('isLogin','true');    /* ('속성', '값') */

//2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행 ✔
const bookMark = document.querySelector('.right_icon .scrap')
console.log(bookMark)

let loginkStatus = '';
console.log(loginkStatus)

//로그인 시 wish.html  이동
//로그아웃 시 login.html 이동
bookMark.addEventListener('click',()=>{
  loginkStatus = localStorage.getItem('isLogin')
  if(loginkStatus == 'true'){
    location.href ='./wish.html'
  } else if (loginkStatus == 'false'){
    location.href='./login.html'
  }
})


/* 버튼 클릭 시 다른 영역으로 이동 */
const reviewBtn =document.querySelectorAll('.score')
const reviewWrap =document.querySelector('.review_scrap')
const productBtn = document.querySelector('.product_link')
const productWrap = document.querySelector('.product_information')


reviewBtn[0].addEventListener('click',(e)=>{e.preventDefault(); reviewBtnFunc(reviewWrap)})
reviewBtn[1].addEventListener('click',(e)=>{e.preventDefault(); reviewBtnFunc(reviewWrap)})
productBtn.addEventListener('click',(e)=>{e.preventDefault(); reviewBtnFunc(productWrap)})

function reviewBtnFunc(target){
  return window.scrollTo(0,target.offsetTop)
}





/* reviewBtn[0].addEventListener('click',(e)=>{
  //스크롤 이동 window 함수 scrollTo(x,y)
  e.preventDefault(e)
  console.log(reviewWrap.offsetTop)
  window.scrollTo(0,reviewWrap.offsetTop)
})

reviewBtn[1].addEventListener('click',(e)=>{
  //스크롤 이동 window 함수 scrollTo(x,y)
  e.preventDefault(e)
  console.log(reviewWrap.offsetTop)
  window.scrollTo(0,reviewWrap.offsetTop)
})
 */



//4. 가격정보 (i) 클릭 시 정보 팝업 출력 / 숨기기
const infoIcon = document.querySelector('.discount .info_icon')
const infoMsg = document.querySelector('.discount .info')

console.log(infoIcon,infoMsg)

/* 가격 정보 클릭 시 정보 팝업 출력 */
// 초기 : 숨김 (false)
// 클릭 : 보이기 (true)
let infoDisplay = false /* 초기상태 */


infoIcon.addEventListener('click',()=>{
  //infoDisplay의 상태를 클릭할때마다 값(infoDisplay) 반전
  infoDisplay = !infoDisplay
  console.log(!infoDisplay)
  //infoMsg.style.display='block'
  /* if(infoDisplay) 조건이 참일때 자동 실행, 굳이 true 안 써도 됨 [첫번째가 참일 경우에만] */
  if(infoDisplay==true){infoMsg.style.display='block'}
  else if(infoDisplay==false){infoMsg.style.display='none'}
})

//5. 주문 목록 초기 숨기기
//6. 사이즈 selct 초기 비활성화 (색상 선택 시 활성화)

const orderList = document.querySelector('.order_list')
const colorSelect = document.querySelector('#color_select')
const sizeSelect = document.querySelector('#size_select')
const opts = document.querySelectorAll('option')
const orderText = document.querySelectorAll('.order_info em')

console.log(orderText[0])

orderList.style.display='none'
sizeSelect.disabled = true;

/* * form 요소 비활성화 :`DOM.disabled = true(비활성화) or false(활성화)`
* 위 비활성화 대상 : `input, textarea, select` 등  form 관련 요소 */

//컬러 미선택시 true 
//컬러 선택시 false
// 6. - 2 (색상 선택 시 활성화)
//7. 색상 -> 사이즈 모두 선택 시  (선택한 인덱스가 0이 아닌 것)
// 주문 목록 출력 (선택한 색상과 사이즈 모두 출력) - 콘솔 '선택완료'

colorSelect.addEventListener('change',()=>{
  /* conlose.log(sizeSelect.selectedIndex) */
  /* conlose.log(sizeSelect.option[0]) */
  //sizeSelect.disabled = false;
  //색상 select에서 첫번째 value=none에 해당하는 색상을 제외한 나머지 옵션이 선택되었을 때 사이즈 selcet 활성화하기
  if(colorSelect.selectedIndex !=0){ //사용자가 선택한 옵션이 0이 아닐때
    sizeSelect.disabled = false; //활성화
    //7.사이즈 이벤트 작성 위치
    sizeSelect.addEventListener('change',()=>{
      //사이즈 옵션 인덱스 0이 아닌 것 선택시 콘솔 선택완료
    if(sizeSelect.selectedIndex !=0){
      console.log('선택완료')
      orderList.style.display='flex'
      let orderColor = colorSelect.options[colorSelect.selectedIndex].text;
      //정규 표현식 : 시작과 끝 표시 /검사내용/
      //괄호 찾기 \찾는문자\ \(.*\)  [.*] 은 괄호안에 묶인 내용 모두 
      let orderColorReplace = orderColor.replace(/\(.*\)/,'') /* 찾는값, 변경값 */
      orderText[0].textContent = orderColorReplace
      let orderSize = sizeSelect.options[sizeSelect.selectedIndex].text;
      let orderSizeReplace = orderSize.replace(/\(.*\)/,'')
      orderText[1].textContent = orderSizeReplace 
      orderText.textContent = (productOptDB[0].price).toLocaleString('ko-kr')
    }
    })
  }else{ //사용자가 선택한 옵션이 0일때
    sizeSelect.disabled = true; //비활성화
  }
})


const cancelBtn = document.querySelector('.order_info svg')
const orderInfo = document.querySelector('.order_list')
const totalPrice = document.querySelectorAll('.order_total_price em')
console.log(totalPrice[1])

cancelBtn.addEventListener('click',()=>{
  orderInfo.style.display='none'
  totalPrice[1].textContent='0';
  colorSelect.selectedIndex = colorSelect.options[0]
  sizeSelect.selectedIndex = sizeSelect.options[0]
})


/* cancelBtn.addEventListener('click',function(){
  this.parentNode.style.display = 'none'
})
 */

//DB불러오기 테스트
console.log(productOptDB[0].name) //몽쉘 패딩 하네스 올인원
console.log(productOptDB[0].color[0], productOptDB[0].color[1]) //'블랙','라즈베리'

//DB->HTML 적용
//1. js에서 HTML 함수로 생성 creatElement()
const colorOpt1 = document.createElement('option')
const colorOpt2 = document.createElement('option')
const colorOpt3 = document.createElement('option')

console.log(colorOpt1)
//2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
colorOpt1.textContent = `${productOptDB[0].color[0]} (${productOptDB[0].price}원)` // 블랙 39,900원
colorOpt2.textContent = `${productOptDB[0].color[1]} (${productOptDB[0].price}원)` 
colorOpt3.textContent = `${productOptDB[0].color[2]} (${productOptDB[0].price}원) / 품절` 
/* colorOpt2.textContent = '라즈베리(39,900원)'
colorOpt3.textContent = '아몬드(39,900원) / 품절' */
//3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
colorSelect.appendChild(colorOpt1)
colorSelect.appendChild(colorOpt2)
colorSelect.appendChild(colorOpt3)

//* 생성한 태그가 li면 ul or ol의 마지막 자식 위치로 삽입
//* 생성한 태그가 option면 select의 마지막 자식 위치로 삽입 

//7. 색상 -> 사이즈 모두 선택 시  (선택한 인덱스가 0이 아닌 것)
//주문 목록 출력 (선택한 색상과 사이즈 모두 출력)


//9. 주문목록 + 클릭 시 재고 수량까지 주문 수량+주문 금액 표시
/* 필요목록 : +-버튼재고수량 주문수량 주문수량+주문금액, 증가 숫자 데이터 */
const minusBtn = document.querySelector('#minus_btn')
const countInput = document.querySelector('.control input')
const plusBtn = document.querySelector('#plus_btn')
const totalPriceNum = document.querySelectorAll('.order_total_price')
console.log(countInput.value)
console.log(minusBtn,countInput,plusBtn,totalPrice,productOptDB[0].price)

let count = 1; //초기값 설정
let priceFinal = productOptDB[0].price 

console.log(priceFinal)

countInput.value = count;

console.log(countInput.value)

plusBtn.addEventListener('click',()=>{
  if(count < productOptDB[0].stock){
  countInput.value = ++count;
  console.log(countInput.value)
  let priceFinal = countInput.value * productOptDB[0].price 
  console.log(priceFinal)
  totalPriceNum[0].textContent=priceFinal.toLocaleString('ko-kr');
  totalPriceNum[1].textContent=priceFinal.toLocaleString('ko-kr');
}else {
  alert('최대 구매 수량입니다.')
}
})

//10. 주문 목록 - 클릭 시 주문 수량+ 주문 금액 감소 (1이라면 경고창 출력)
minusBtn.addEventListener('click',()=>{
  if(count > 1){
  countInput.value = --count;
  let priceFinal = countInput.value * productOptDB[0].price 
  totalPriceNum[0].textContent=priceFinal.toLocaleString('ko-kr');
  totalPriceNum[1].textContent=priceFinal.toLocaleString('ko-kr');
  }else {alert('최소 구매 수량은 1개부터 가능합니다.')}
})

//11. (상품 미 선택 시) 장바구니, 바로구매 클릭 시 '상품 선택하세요' 경고장 출력

const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')

/* 클릭을하거나 마우스를 올리거나.. 하는건 이벤트 ㄱㄱ */
cartBtn.addEventListener('click',()=>{
  if((colorSelect.selectedIndex == 0)||(sizeSelect.selectedIndex == 0)){ //상품 선택 안한걸 확인하는 조건문
    alert('상품을 선택하세요')
  }else{
    loginkStatus = localStorage.getItem('isLogin')
    if(loginkStatus =='true'){
      window.location.href='./cart.html'
    }else{loginkStatus =='false'}}

  
})

buyBtn.addEventListener('click',()=>{
  if((colorSelect.selectedIndex == 0)||(sizeSelect.selectedIndex == 0)){ //상품 선택 안한걸 확인하는 조건문
    alert('상품을 선택하세요')
  }else{
    loginkStatus = localStorage.getItem('isLogin')
    if(loginkStatus =='true'){
      window.location.href='./buy_now.html'
    }else{loginkStatus =='false'}}
})
//12. (상품 선택 시) 장바구니, 바로구매 클릭 시  로그인 유무에 따라 다른 페이지로 이동 ✔
