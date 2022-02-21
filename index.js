let input = document.body.querySelector('input') //입력값
let resetBtn = document.body.querySelector(".reset");
let result = document.body.querySelector(".result"); //결과도출

let ran = 345; //랜덤 선택으로 변경필요
let strike = 0;
let ball = 0;
let answer= 346; //input으로 값 받을 예정

function game (){
    ran = ran.toString().split('')
    answer = answer.toString().split('');
    
    for(var i = 0; i < 3; i++){
        if(ran[i] === answer[i])
            strike ++;
        else if(ran.indexOf(answer[i]) > -1 ){
            ball ++;
        }
    }
    
    if(strike === 3){
        result.innerText = '정답입니다! 게임을 새로 시작하려면 1, 종료하려면 2를 입력해주세요.';
    }
    else{
        result.innerText = '스트라이크' + strike + ', 볼' + ball;
        input.value = '';
        input.focus();
    }
}
game()


