let ran = 345; //랜덤 선택으로 변경필요

let strike = 0;
let ball = 0;

let answer= 345; //input으로 값 받을 예정

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
    
}
game()

console.log('스트라이크' + strike + ', 볼' + ball);
