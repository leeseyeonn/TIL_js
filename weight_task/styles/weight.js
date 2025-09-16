//계산식) 적정체중 = (사용자가 입력한 키-100)*0.9 
//적정체중은 ?(calc)kg이며 ?(height-calc)kg 초과되셨습니다.
const inputTag = document.querySelector('button')
console.log(inputTag)

inputTag.addEventListener('click',function(){
    //1.키 입력하기
    let height = prompt('키를 입력하세요.(숫자만 기입)')
    //2. 몸무게 입력하기
    let weight = prompt('몸무게를 입력하세요.(숫자만 기입)')
    //3. 계산하기
    let calc = (height-100)*0.9;
    let result = alert(`적정체중은 ${calc.toFixed(1)}kg 이며 ${(weight-calc).toFixed(1)}kg 초과되셨습니다.`)
    return result
})

