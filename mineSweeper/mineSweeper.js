var tbody = document.querySelector('#table tbody');
var dataset = [];

document.querySelector('#exec').addEventListener('click', (e) => {

    tbody.innerHTML = '';  // 실행하면 초기화 한다.
    dataset = []; // 데이터 초기화
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);

    var candidates = Array(hor*ver).
        fill()
        .map((item, index) => {
            return index
    });
    console.info(candidates);

    var shuffle = [];
    while (candidates.length > 80) {
        var ran = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
        shuffle.push(ran)
    }
    console.info(shuffle)


    for (var i = 0 ; i < ver; i+=1) {
        var arr = []
        dataset.push(arr);
        var tr = document.createElement('tr');
        for (var j = 0 ; j < hor; j+=1) {
            arr.push(1)
            var td = document.createElement('td');
            td.addEventListener(('contextmenu'), (e) => {
                e.preventDefault()
                var parentTr = e.currentTarget.parentNode;
                var parentTbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(parentTbody.children, parentTr);

                if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
                    e.currentTarget.textContent = '!';
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                } else if (e.currentTarget.textContent === '?') {

                    if (dataset[줄][칸] === 'X') {
                        e.currentTarget.textContent = 'X';
                    } else {
                        e.currentTarget.textContent = '';
                    }
                }
            })
            td.addEventListener(('click'), function(e) {

                //클릭했을 때 주변 지뢰 개수
                var parentTr = e.currentTarget.parentNode;
                var parentTbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(parentTbody.children, parentTr);

                e.currentTarget.classList.add('opened');
                if (dataset[줄][칸] === 'X') {
                    e.currentTarget.textContent = '펑';
                } else {
                    var 주변 = [
                        dataset[줄][칸-1]                    ,dataset[줄][칸+1]
                    ];
                    if (dataset[줄-1]) {
                        주변 = 주변.concat([dataset[줄 - 1][칸 - 1], dataset[줄 - 1][칸], dataset[줄 - 1][칸 + 1]])
                    }
                    if (dataset[줄+1]) {
                        주변 = 주변.concat([dataset[줄+1][칸-1],dataset[줄+1][칸] ,dataset[줄+1][칸+1]])
                    }
                    e.currentTarget.textContent =
                        주변.filter(function(v) {
                            return v === 'X';
                    }).length
                }
            })
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }

    // 지뢰심기
    for (var k = 0; k < shuffle.length; k +=1) {
        var v = Math.floor(shuffle[k] / 10);
        var h = shuffle[k] % 10;

        tbody.children[v].children[h].textContent = 'X'
        dataset[v][h] = 'X';
    }
})