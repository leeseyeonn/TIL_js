// 중첩 for
// ul*2>li*5
//<ul></ul><li></li> X
//<ul><li></li></ul> O
let ul ='';
let li ='';

for (let i=0; i<2; i++){
    //ul = '<ul>'
    li = ''; //다시 돌 때 초기화
    for(let j=0; j<5; j++){
        li += `<li>menu${j+1}</il>` 
        /* 0에서 시작하는 게 아닌 1에서 시작 */
    }
    ul += `<ul>${li}</ul>` /* 복합 대입을 쓰지 않으면 <ul>을 덮어버림 */
}

/* i=0, j=01234 | i=1, j=01234 */

console.log(ul)

//고객 리뷰 초기 상태
//상품 문의 클릭 시 문의 내용 보이기
//고객 리뷰 클릭 시 리뷰 내용 보이기

const tabTitle = document.querySelectorAll('.title a')
const tabContent = document.querySelectorAll('.contents .con')

console.log(tabTitle,tabContent)


tabContent[1].style.display='none'

/* tabTitle[0].addEventListener('click',()=>{
    contentDisplayHide() // 블록으로 보여주기 전에 숨기기
    tabContent[0].style.display='block'
})

tabTitle[1].addEventListener('click',()=>{
    contentDisplayHide() // 블록으로 보여주기 전에 숨기기
    tabContent[1].style.display='block'
}) */
/* --------------------------------------------------------------- */
/* for(let i of tabTitle){ //객체 정보만 갖고 있어서 인덱스 연결이 불가능
    i.addEventListener('click',()=>{
        contentDisplayHide()
        console.log(i)
        tabContent[].style.display='block'
    })
}
 */

/* --------------------------------------------------------------- */
//객체 정보와 서로다른 객체를 연결한 인덱스 정보
tabTitle.forEach(function(obj,ind,arr){ //이름은 달라도 됨, 순서를 지켜야 한다.
    console.log(obj,ind,arr.length)
    obj.addEventListener('click',()=>{
        contentDisplayHide()
        console.log(ind) // 클릭한 인덱스 정보만 출력
        tabContent[ind].style.display='block'
    })
}) //제목이 4개면 내용도 4개, 서로 일치해야한다.


function contentDisplayHide(){
    /* tabContent[0].style.display='none'
    tabContent[1].style.display='none' */
    for(let i of tabContent) i.style.display='none'
}

/* ------------------------------------- */

const miniBox = document.querySelectorAll('.mini')

console.log(miniBox)
console.log(miniBox[0])
console.log(miniBox[1])

miniBox.forEach(function(obj,ind,arr){
    console.log(obj,ind,arr)
    obj.addEventListener('click',()=>{
        miniBox[ind]
        redFunc()
    })
})

function redFunc(){
    for(let i of miniBox)
        console.log(i)
        i.style.color='red'
}