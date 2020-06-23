var body = document.body;

var word = document.createElement('div');
word.textContent = '제로초';
document.body.append(word);

var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
form.append(input);

var button = document.createElement('button');
button.textContent = '등록';
form.append(button);

var result = document.createElement('div');
document.body.append(result);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (word.textContent[word.textContent.length-1] === input.value[0]) {
        result.textContent = '딩동댕';
        word.textContent = input.value;
        input.value = '';
        input.focus();
    } else {
        result.textContent = '떙';
        input.focus();
    }
});
// while (true) {
//     var answer = prompt(word);
//     if (answer[0] === word[word.length-1]) {
//         alert('딩동댕!');
//         word = answer;
//     } else {
//         alert('떙!')
//     }
// }