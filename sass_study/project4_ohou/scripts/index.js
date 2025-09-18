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
localStorage.setItem('isLogin','ture');    /* ('속성', '값') */

//2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행 ✔