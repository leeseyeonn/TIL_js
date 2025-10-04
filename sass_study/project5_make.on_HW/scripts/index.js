/* 스와이프 썸네일 왼측 */

const thumbnail = new Swiper('#side_img',{
    direction: "vertical",   // 세로 정렬
    spaceBetween: 8,
    slidesPerView: 6.5,
        navigation:{
            prevEl : '#side .swiper-button-prev',
            nextEl : '#side .swiper-button-next',
        },
    })

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

/* const rowcard = new Swiper('#card', {
  slidesPerView: 1.5,  // 1.5개씩 보여주기
  spaceBetween: 20,    // 카드 간격
  grabCursor: true,
}); */
