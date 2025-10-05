/* -------------------------------경로 부분 */
//1.home 마우스를 올렸을 때 색 연해짐 ⭕ css
//2.신제품 마우스를 올렸을 때 색 연해짐 ⭕ css

/* -------------------------상품 이미지 부분 */
//1. 썸네일 바 위 화살표 누르면 위로 스크롤⭕
//2. 썸네일 바 아래 화살표 누르면 아래로 스크롤⭕
//3-1. 썸네일 이미지를 마우스에 올리면 불투명 이미지 덮힘 ⭕ css
//3-2. 썸네일 이미지를 마우스에 누르면 1)해당 썸네일 스트로크  2) 메인 이미지가 스크롤 되면서 이미지 이동 ⭕ 
//4. 메인 이미지 옆으로 넘길 시에 아래 원형 페이지 네이션 크기와 색상 변경⭕

/* ------------------------------내용 부분 */
//1. 웰컴 혜택가 누르면 일반회원 글자 나오기 ⭕
//2. 카드영역 넘기기 ⭕
//3. 수량 컨트롤 누르면 1)정가에 맞춰 가격 변동 2)할인가 가격변동 3) 할인가 옆 수량 변경 
//4. 찜 버튼 누르면 검정 바탕 하트로 변경 
//5. 장바구니, 바로구매에 마우스를 올렸을 때 회색으로 색상 변경 ⭕ css
//5. 로그아웃의 경우) 장바구니나 바로구매를 눌렀을 때 로그인 안내 알림
//6. 로그인의 경우) 장바구니나 바로구매를 눌렀을 때 카트로 이동 , 구매 페이지로 이동

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


//1. 썸네일 바 위 화살표 누르면 위로 스크롤
//2. 썸네일 바 아래 화살표 누르면 아래로 스크롤

const thumbnail = new Swiper('#side_img', {
  direction: "vertical",
  slidesPerView: 6.5,
  spaceBetween: 10,
  navigation: {
    prevEl: '#side .swiper-button-prev',
    nextEl: '#side .swiper-button-next',
  },
  breakpoints: {
    // 1024px 이하일 때
    1024: {
      slidesPerView: 6.5,
      spaceBetween: 10,
    },
    // 768px 이하일 때
    768: {
      slidesPerView: 5.5,
      spaceBetween: 10,
    },
    // 480px 이하일 때
    480: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
  },
});

//4. 메인 이미지 옆으로 넘길 시에 아래 원형 페이지 네이션 크기와 색상 변경
/* 스와이프 메인(왼측) */
const mainImg = new Swiper('#main_img',{
    slidesPerView: 'auto',
    pagination: {
        el: "#main_img .swiper-pagination",
        },
    thumbs: {
        swiper:thumbnail,
        },
    })

/* 스와이프 클릭이벤트 시 위로 가는 것 방지 */
const thumbs = document.querySelectorAll('.swiper-slide a')
console.log(thumbs)

thumbs.forEach((obj,ind)=>{
    obj.addEventListener('click',function(e){
        e.preventDefault()
        mainImg.slideTo(ind)
    })
})

//2. 카드영역 넘기기
const card = new Swiper('#card', {
    slidesPerView: 'auto',
    spaceBetween: 14,         
    grabCursor: true,
});


//3-2. 썸네일 이미지를 마우스에 누르면 1)해당 썸네일 스트로크 

const thumbnailB = document.querySelectorAll('#side_img .swiper-slide')
console.log(thumbnailB)

thumbnailB.forEach(function(obj,ind){
    obj.addEventListener('click',()=>{
        thumbnailB.forEach(item => item.classList.remove('active'))
        obj.classList.add('active');
    })
})

//1. 웰컴 혜택가 누르면 일반회원 글자 나오기

const infoBtn =document.querySelector('#discount_info')
const infoText =document.querySelector('.row2 p')

console.log(infoBtn,infoText)

infoBtn.addEventListener('click',()=>{
    infoText.classList.toggle('active')
})

//4. 찜 버튼 누르면 검정 바탕 하트로 변경 

const favoriteBtn = document.querySelector('#favorite')
const heartImg = favoriteBtn.querySelector('img');
console.log(heartImg.src)

favoriteBtn.addEventListener('click',()=>{
    console.log('클릭')
    heartImg.src = '';
})