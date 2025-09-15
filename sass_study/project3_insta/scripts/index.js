const contentBtn = document.querySelectorAll('.share_left a');
console.log(contentBtn);

/* contentBtn[0].addEventListener('click', onBtnFunc);

function onBtnFunc(){
    return function(){
        contentBtn[0].children[0].img.src='./images/like_on.png';
    }
}
 */

/* contentBtn[0].addEventListener('click',onBtnFunc(0, 'like'))
contentBtn[1].addEventListener('click',onBtnFunc(1, 'comment'))
contentBtn[2].addEventListener('click',onBtnFunc(2, 'paper'))

function onBtnFunc(index,name){
    return function(e){
        e.preventDefault()
        contentBtn[index].children[0].src=`./images/${name}_on.png`;
    }
} */


contentBtn[0].addEventListener('click',function(e){
    e.preventDefault()
    onBtnFunc(this,'like')})

contentBtn[1].addEventListener('click',function(){onBtnFunc(this, 'comment')})
contentBtn[2].addEventListener('click',function(){onBtnFunc(this, 'paper')})

function onBtnFunc(target,name){
    
    return target.children[0].src=`./images/${name}_on.png`
}



/* contentBtn[0].addEventListener('click',function(e){
    console.log(this)
    console.log(contentBtn[0]) //둘이 똑같음
    e.preventDefault()
    contentBtn[0].children[0].src='./images/like_on.png'
})

contentBtn[0].addEventListener('click',(e)=>{
    e.preventDefault()
    contentBtn[0].children[0].src='./images/like_on.png'
}) */

//사진 클릭시 스피커 모양 보이기 (+애니메이션)
const instaPhoto = document.querySelector('.post');
const volumIcon = document.querySelector('#popup');

console.log(instaPhoto,volumIcon)

volumIcon.style.transition = 'opacity 1s'
/* instaPhoto.addEventListener('click',speakerFunc) */

/* function speakerFunc(){
    return function (){
        volumIcon.style.opacity=1;
    }
}
 */



instaPhoto.addEventListener('dblclick',()=>{ //더블클릭
    volumIcon.style.opacity=1;
})

instaPhoto.addEventListener('mouseout',()=>{
    volumIcon.style.opacity=0;
})

/* instaPhoto.addEventListener('click',()=>{
    volumIcon.style.opacity=1;
}) */