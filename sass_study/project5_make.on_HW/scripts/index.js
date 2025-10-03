/* 스와이프 썸네일 왼측 */

const thumbnail = new Swiper('#side_img',{
    direction: "vertical",   // 세로 정렬
    spaceBetween: 8,
    slidesPerView: 7,
        navigation:{
            prevEl : '#side .swiper-button-prev',
            nextEl : '#side .swiper-button-next'
        },
    })