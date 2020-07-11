var body = document.body;
var table = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var turn = 'X';
var result = document.createElement('div');
function 결과체크 (몇줄, 몇칸) {
    // 세칸 다 채워졌나?
    var 다참 = false;
    // 가로줄 검사
    if (
        칸들[몇줄][0].textContent === turn &&
        칸들[몇줄][1].textContent === turn &&
        칸들[몇줄][2].textContent === turn
    ) {
        다참 = true;
    }
    // 세로줄 검사
    if (
        칸들[0][몇칸].textContent === turn &&
        칸들[1][몇칸].textContent === turn &&
        칸들[2][몇칸].textContent === turn
    ) {
        다참 = true;
    }
    // 대각선 검사
    if (
        칸들[0][0].textContent === turn &&
        칸들[1][1].textContent === turn &&
        칸들[2][2].textContent === turn
    ) {
        다참 = true;
    }
    if (
        칸들[0][2].textContent === turn &&
        칸들[1][1].textContent === turn &&
        칸들[2][0].textContent === turn
    ) {
        다참 = true;
    }

    return 다참;
}

function refresh() {
    result.textContent = turn + '님의 승리';

    //refresh
    turn = 'X';
    칸들.forEach((줄) => {
        줄.forEach((칸) => {
            칸.textContent = '';
        })
    })
}

var callBack = function(event) {
    if (turn === 'O') {
        return;
    }
    var 몇줄 = 줄들.indexOf(event.target.parentNode);
    var 몇칸 = 칸들[몇줄].indexOf(event.target);

    if (칸들[몇줄][몇칸].textContent !== '') {
        console.info('not empty');
    } else {
        칸들[몇줄][몇칸].textContent = turn;

        var 다참 = 결과체크(몇줄, 몇칸);

        if (다참) {
            refresh();
        } else {
            if (turn === 'X') {
                turn = 'O'
            }
            setTimeout(() => {
                console.log('컴퓨터의 턴입니다');
                turn = 'O';
                var candidates = [];
                칸들.forEach((줄) => {
                    줄.forEach((칸) => {
                        candidates.push(칸);
                    })
                });
                candidates = candidates.filter((칸) => {
                    return !칸.textContent
                });
                var selected = candidates[Math.floor(Math.random() * candidates.length)];
                selected.textContent = turn;
                var 몇줄 = 줄들.indexOf(selected.parentNode);
                var 몇칸 = 칸들[몇줄].indexOf(selected);
                var 다참 = 결과체크(몇줄, 몇칸);
                if (다참) {
                    refresh();
                }
                turn = 'X';
            }, 1000)
        }

    }

};

for (var i = 1; i <=3; i++) {
    var 줄 = document.createElement('tr');
    줄들.push(줄)
    칸들.push([]);
    for (var j = 1; j <=3; j++) {
        var 칸 = document.createElement('td');
        칸.addEventListener('click', callBack);
        칸들[i-1].push(칸);
        줄.appendChild(칸);
    }
    table.appendChild(줄);
}
body.append(table);
body.append(result);