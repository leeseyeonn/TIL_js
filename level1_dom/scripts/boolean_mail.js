//boolean_main.js
//console.log(islogin)

//DOM 변수
const mailLogin = document.querySelector('#login')
const mailLogout = document.querySelector('#logout')


window.addEventListener('load',()=>{
    let loginStatus = localStorage.getItem('islogin2') //true
    console.log(loginStatus === 'true') //확인용
    console.log(typeof(loginStatus))
    if(loginStatus === 'true'){
        console.log('로그인화면')
        mailLogin.style.display='block' //플렉스로 디자인했을 경우는 display=flex,  이런식으로 맞춰서 디스플레이를 설정해두어야함 무조건 블록 ㄴㄴ
        mailLogout.style.display='none'
    }else{
        console.log('로그아웃화면')
    }
})