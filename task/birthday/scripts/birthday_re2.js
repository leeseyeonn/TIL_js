//birthday2_re
//javascript ver


const btn = document.querySelector('.btn')
const share = document.querySelector('.share')
const yy = document.querySelector('#yy')
const mm = document.querySelector('#mm')
const dd = document.querySelector('#dd')
const result = document.querySelector('.result_flower')
const img = document.querySelector('img')
const flower = document.querySelector('.result_flower h2 em') // result.children[0].children[0]
const flowerText = document.querySelector('.result_flower p span') //result.children[1].children[0]

//초기 세팅 : 결과 숨기기, 공유 버튼 숨기기
share.style.display='none'

btn.addEventListener('click',()=>{
    const ymd = yy.value && mm.value && dd.value
    ymd ? flowerFunc() : alert('생년월일을 모두 입력해주세요')
    function flowerFunc(){
        if(mm.value > 0 && mm.value < 13){ //대입한 숫자가 1~12인지에 대한 확인 조건
            let userMonth =  Number(mm.value-1);
            result.children[0].children[0].textContent = birthday_flower[`${userMonth}`].flower 
            flowerText.textContent = birthday_flower[`${userMonth}`].content
            img.src = birthday_flower[`${userMonth}`].src
            share.style.display='inline-block'
        }else{
            alert('1~12월 중 입력하세요.')
        }
    }
})
