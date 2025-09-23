//to-do-list.js
//1. input 할일 입력 후 '추가하기' 버튼 클릭하면 ul의 마지막 자식 위치 li할일 추가하기 , 입력칸에 아무 것도 없으면 추가 X

const listInput = document.querySelector('#list')
const listBtn = document.querySelector('#list_add')
const listWrapUl =document.querySelector('#list_wrap')

console.log(listInput) 

listBtn.addEventListener('click',()=>{
    //입력안하면 '할일을 입력하세요' 메세지 출력(삼항조건)
    listInput.value == '' ? alert('할일을 입력하세요') : toDoFunc();
})

listInput.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){listInput.value == '' ? alert('할일을 입력하세요') : toDoFunc();}
})

function toDoFunc(){
    console.log(listInput.value) //값 확인
    console.log(listWrapUl) //대입 대상 확인
    listWrapUl.innerHTML += `<li><span>${listInput.value}</span><button type="button" class="close">X</button></li>`
    listInput.value=''; //입력창 초기화
    const closeBtn=document.querySelectorAll('li .close') //할일은 2개 이상 나올 거니까 All
    console.log(closeBtn)
    for (let i of closeBtn){
        i.addEventListener('click',()=>{
            console.log(i.parentNode)
            i.parentNode.remove(); //부모잡는 속성 parentNode, //삭제 내장 함수 remove()
        })
    }
    return console.log('할일 출력 테스트')
}



