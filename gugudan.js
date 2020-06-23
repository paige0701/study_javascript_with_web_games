var num1 = Math.ceil(Math.random()*9);
var num2 = Math.ceil(Math.random()*9);
var result = num1 * num2

var body = document.body;
var questionDiv = document.createElement('div');
questionDiv.textContent = `${num1} 곱하기 ${num2}는?`;
body.append(questionDiv);

var form = document.createElement('form');
body.append(form);

var input = document.createElement('input');
input.type ='number';

var button = document.createElement('button');
button.textContent = '입력';

form.append(input);
form.append(button);

var resultDiv = document.createElement('div');
body.append(resultDiv);

form.addEventListener(('submit'), (e) => {
    e.preventDefault();

    if (result === Number(input.value)) {
        resultDiv.textContent = '딩동댕';

        num1 = Math.ceil(Math.random()*9);
        num2 = Math.ceil(Math.random()*9);
        result = num1 * num2;
        questionDiv.textContent = `${num1} 곱하기 ${num2}는?`;
        input.value = '';
        input.focus();
    } else {
        resultDiv.textContent = '땡';
        input.value = '';
        input.focus();
    }
});