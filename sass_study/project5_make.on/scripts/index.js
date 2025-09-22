/* -------------------------------경로 부분 */
//1.home 마우스를 올렸을 때 색 연해짐 ⭕ 
//2.신제품 마우스를 올렸을 때 색 연해짐 ⭕

/* -------------------------상품 이미지 부분 */
//1. 썸네일 바 위 화살표 누르면 위로 스크롤⭕
//2. 썸네일 바 아래 화살표 누르면 아래로 스크롤⭕
//3-1. 썸네일 이미지를 마우스에 올리면 불투명 이미지 덮힘⭕
//3-2. 썸네일 이미지를 마우스에 누르면 1)해당 썸네일 스트로크  2) 메인 이미지가 스크롤 되면서 이미지 이동
//4. 메인 이미지 옆으로 넘길 시에 아래 원형 페이지 네이션 크기와 색상 변경

/* ------------------------------내용 부분 */
//1. 웰컴 혜택가 누르면 일반회원 글자 나오기
//2. 카드영역 넘기기
//3. 수량 컨트롤 누르면 1)정가에 맞춰 가격 변동 2)할인가 가격변동 3) 할인가 옆 수량 변경
//4. 찜 버튼 누르면 검정 바탕 하트로 변경
//5. 장바구니, 바로구매에 마우스를 올렸을 때 회색으로 색상 변경
//5. 로그아웃의 경우) 장바구니나 바로구매를 눌렀을 때 로그인 안내 알림
//6. 로그인의 경우) 장바구니나 바로구매를 눌렀을 때 카트로 이동 , 구매 페이지로 이동

/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */

/* -------------------------상품 이미지 부분 */
//1. 썸네일 바 위 화살표 누르면 위로 스크롤
//2. 썸네일 바 아래 화살표 누르면 아래로 스크롤
const thumbnailControlBtn=document.querySelectorAll('.image_control')
const thumbnailBar=document.querySelector('.thumbnail_images')
const thumbnailWrap=document.querySelector('.thumbnail_wrap')
    
console.log(thumbnailControlBtn[0])
console.log(thumbnailControlBtn[1])
console.log(thumbnailWrap)

let scrollNum = 0;
thumbnailWrap.style.transition='transform 0.3s'

thumbnailControlBtn[0].addEventListener('click',()=>{
    scrollNum += 50;
    thumbnailWrap.style.transform=`translateY(${scrollNum}px)`
})


thumbnailControlBtn[1].addEventListener('click',()=>{
    scrollNum += 50;
    thumbnailWrap.style.transform=`translateY(-${scrollNum}px)`
})

//3-1. 썸네일 이미지를 마우스에 올리면 불투명 이미지 덮힘


//3-2. 썸네일 이미지를 마우스에 누르면 1)해당 썸네일 스트로크  2) 메인 이미지가 스크롤 되면서 이미지 이동
const thumbnailA=document.querySelectorAll('.thumbnail_images a')
const mobileControl =document.querySelectorAll('.mobile_control svg')
//1)해당 썸네일 스트로크
thumbnailA[0].classList.add('active'); /* 초기값 설정 */
mobileControl[0].classList.add('active');/* 초기값 설정 */


thumbnailA[1].addEventListener('click',()=>{
    thumbnailA[0].classList.remove('active');
    thumbnailA[1].classList.add('active');
    mobileControl[0].classList.remove('active');
    mobileControl[1].classList.add('active');

}) /* 화면 스크롤 부터 */

//2) 메인 이미지가 스크롤 되면서 이미지 이동









