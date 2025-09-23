const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]



const yy = document.querySelector('#YY')
const mm = document.querySelector('#MM')
const dd = document.querySelector('#DD')
const inputBtn = document.querySelector('.btn')
const text=document.querySelector('p')
const reset = document.querySelector('.reset')

console.log(yy,mm,dd,inputBtn,text)
console.log(birthday_flower.length)
//초기값 설정
text.textContent='생일을 입력하고 탄생화를 알아보세요 • • •';
text.style.color='gray'

yy.value=2000
mm.value=1
dd.value=1

/* inputBtn.addEventListener('click',()=>{
    let mmNum = Number(mm.value);
    if(mmNum>=13){alert('생일을 다시 입력하세요'); return;}
    for(let i = 0; i<birthday_flower.length; i++){
        if(i === mmNum){text.textContent=
        `${birthday_flower[i-1].month}월의 탄생화는 ${birthday_flower[i-1].flower}이고 꽃말은 ${birthday_flower[i-1].content}입니다.`
    }
    }
}) */

inputBtn.addEventListener('click',()=>{
    let mmNum = mm.value
    let yyNum = yy.value
    let ddNum = dd.value
    if((mmNum>0 && mmNum<13)&&(yyNum>1940 && yyNum<2026)&&(ddNum>0 && ddNum<32)){
    text.textContent=
        `${birthday_flower[mmNum-1].month}월의 탄생화는 ${birthday_flower[mmNum-1].flower}이고 꽃말은 ${birthday_flower[mmNum-1].content}입니다.`
    text.style.color='black'
    }else{alert('생일을 다시 입력하세요.')}
})

reset.addEventListener('click',()=>{
    yy.value=2000
    mm.value=1
    dd.value=1
    text.textContent='생일을 입력하고 탄생화를 알아보세요 • • •';
    text.style.color='gray'
})



/* 12월의 탄생화는 포인세티아이고 꽃말은 축하, 감사입니다. */

/* inputBtn.addEventListener('click',()=>{
    let mmNum = mm.value
    if(mmNum==1){
        text.textContent=
        `${birthday_flower[mmNum-1].month}월의 탄생화는 ${birthday_flower[mmNum-1].flower}이고 꽃말은 ${birthday_flower[mmNum-1].content}입니다. `
    }
})

inputBtn.addEventListener('click',()=>{
    let mmNum = mm.value
    if(mmNum==2){
        text.textContent=
        `${birthday_flower[mmNum-1].month}월의 탄생화는 ${birthday_flower[mmNum-1].flower}이고 꽃말은 ${birthday_flower[mmNum-1].content}입니다. `
    }
})
inputBtn.addEventListener('click',()=>{
    let mmNum = mm.value
    if(mmNum==3){
        text.textContent=
        `${birthday_flower[mmNum-1].month}월의 탄생화는 ${birthday_flower[mmNum-1].flower}이고 꽃말은 ${birthday_flower[mmNum-1].content}입니다. `
    }
})
inputBtn.addEventListener('click',()=>{
    let mmNum = mm.value
    if(mmNum==4){
        text.textContent=
        `${birthday_flower[mmNum-1].month}월의 탄생화는 ${birthday_flower[mmNum-1].flower}이고 꽃말은 ${birthday_flower[mmNum-1].content}입니다. `
    }
})
 */


