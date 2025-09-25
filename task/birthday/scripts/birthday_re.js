//birthday2_re
//jqery ver


const $btn = $('.btn')
const $share = $('.share')
const $yy = $('#yy')
const $mm = $('#mm')
const $dd = $('#dd')
const $result = $('.result_flower')
const $img = $('img')
console.log($btn,$share)

//초기 세팅 : 결과 숨기기, 공유 버튼 숨기기
$share.hide()

console.log(birthday_flower[0].flower)

//나의 탄생화 찾기 클릭시 입력한 년/월/일 즁 '월' 인식해서 해당값과 동일한 탄생화 배열 출력하기
$btn.click(function(){
    //조건 ? 참 : 거짓;
    console.log(Boolean($yy.val()))
    /**/ const ymd = $yy.val() && $mm.val() && $dd.val() //내용이 많으니 변수로 설정
    ymd ? flowerFunc() : alert('다시 입력해주세요');
    function flowerFunc(){
        let $userMonth =  Number($mm.val()-1);
        if($userMonth){
            $result.find('em').text(birthday_flower[$userMonth].flower)
            $result.find('span').text(birthday_flower[$userMonth].content)
            $img.attr('src', birthday_flower[$userMonth].src)
            $share.show()
            $btn.hide()
        }
    }
})

