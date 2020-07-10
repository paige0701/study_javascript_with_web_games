var screen = document.querySelector('#screen');
var result = document.querySelector('#result');
var 기록 = [];
var 시작시간;
var 끝시간;
var timeout;
screen.addEventListener('click', (e) => {
    // 시간 계산
    // endTime-startTime/1000;

    if (screen.classList.contains('waiting')) {
        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent = '초록색이 되면 클릭하세요';
        result.textContent = '';
        timeout = setTimeout(()=> {
            시작시간 = new Date();
            screen.click();
        }, Math.random() * 1000)
    } else if (screen.classList.contains('ready')) {
        if (!시작시간) {
            clearTimeout(timeout);
            screen.classList.remove('ready');
            screen.classList.add('waiting');
            screen.textContent = '너무 성급하시네요'
        } else {
            screen.classList.remove('ready');
            screen.classList.add('now');
            screen.textContent = '클릭하세요';

        }

    } else if (screen.classList.contains('now')) {
        끝시간 = new Date();
        기록.push(끝시간 - 시작시간);
        console.info(기록)
        시작시간 = null;
        끝시간 = null;
        screen.classList.remove('now');
        screen.classList.add('waiting');
        screen.textContent = '클릭해서 시작하세요';
    }
});