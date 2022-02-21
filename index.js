let form = document.querySelector('form')
let input = document.querySelector('input') //입력값
let result = document.querySelector(".result"); //결과도출

let strike = 0;
let ball = 0;
let number = [];

//숫자랜덤생성
function newNumber() {
    let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < 3; i++) {
        let getNumber = numberArray.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        let strNumber = getNumber.toString();
        number.push(strNumber);
    }
}
newNumber()
console.log(number);

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let answer = input.value.split('')
    // console.log(answer);

    for (var i = 0; i < 3; i++) {
        if (number[i] === answer[i])
            strike++;
        else if (number.indexOf(answer[i]) > -1) {
            ball++;
        }
    }

    if (strike === 3) {
        result.innerText = `정답입니다! 답 : ${input.value}
        게임을 새로 시작하려면 1, 종료하려면 2를 입력해주세요.`;
        input.value = '';
        input.focus();
        newNumber();
    }
    else {
        result.innerText = '스트라이크' + strike + ', 볼' + ball;
        input.value = '';
        input.focus();
        strike = 0;
        ball = 0;
    }
});

