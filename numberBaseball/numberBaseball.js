var body = document.body;
var candidate ;
var numbers;

function make_new_number() {
    candidate = [1,2,3,4,5,6,7,8,9];
    numbers = [];
    for (var i = 0; i < 4; i++) {
        var ran = candidate.splice(Math.floor(Math.random()* 9-i), 1)[0];
        numbers.push(ran);
    }
}

var mistake = 0;
var result = document.createElement('h1');
body.append(result);


var form = document.createElement('form');
body.append(form);

var input = document.createElement('input');
var button = document.createElement('button');
button.textContent = '입력';

form.append(input);
form.append(button);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    var res = input.value;
    console.info(res);
    if (res === numbers.join('')) {
        result.textContent = 'Home run';

        make_new_number();
    } else {
        var resArray = res.split('')
        var strike = 0;
        var ball = 0;
        mistake += 1;
        if (mistake > 3) {
            result.textContent = `10틀렸어요. 정답은 ${numbers.join()}`;
            input.value = '';
            input.focus()
            make_new_number();
            mistake = 0;
        } else {
            for (var i = 0 ; i< 3; i++) {
                if (Number(resArray[i]) === numbers[i]) {
                    strike += 1
                } else if (numbers.indexOf(Number(resArray[i])) > -1) {
                    ball += 1
                }
            }
            result.textContent = `${strike}strike(s) ${ball}ball(s)`
        }

    }

});