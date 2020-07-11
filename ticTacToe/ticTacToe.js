var body = document.body;
var table = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var turn = 'X';
var result = document.createElement('div');

var callBack = function(event) {
    var 몇줄 = 줄들.indexOf(event.target.parentNode);
    var 몇칸 = 칸들[몇줄].indexOf(event.target);

    if (칸들[몇줄][몇칸].textContent !== '') {
        console.info('not empty');
    } else {
        칸들[몇줄][몇칸].textContent = turn;

        var 다참 = false;

        if (칸들[몇줄][0].textContent === turn &&
            칸들[몇줄][1].textContent === turn &&
            칸들[몇줄][2].textContent === turn) {
            다참 = true
        }

        if (칸들[0][몇칸].textContent === turn &&
            칸들[1][몇칸].textContent === turn &&
            칸들[2][몇칸].textContent === turn) {
            다참 = true
        }

        if (몇줄 - 몇칸 === 0) {
            if (칸들[0][0].textContent === turn &&
                칸들[1][1].textContent === turn &&
                칸들[2][2].textContent === turn) {
                다참 = true
            }
        }

        if (Math.abs(몇줄 - 몇칸) === 2) {
            if (칸들[0][2].textContent === turn &&
                칸들[1][1].textContent === turn &&
                칸들[2][0].textContent === turn) {
                다참 = true
            }
        }


        if (다참) {
            result.textContent = turn + '님의 승리';

            //refresh
            turn = 'X';
            칸들.forEach((줄) => {
                줄.forEach((칸) => {
                    칸.textContent = '';
                })
            })
        } else {
            turn = turn === 'X' ? 'O' : 'X'
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