var tbody = document.querySelector('#table tbody');
var dataset = [];

document.querySelector('#exec').addEventListener('click', (e) => {
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
            var td = document.createElement('td');
            td.addEventListener(('contextmenu'), (e) => {
                e.preventDefault()
                var parentTr = e.currentTarget.parentNode;
                var parentTbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(parentTbody.children, parentTr)
                e.currentTarget.textContent = '!';
            })
            td.textContent = 1;
            tr.appendChild(td)
            arr.push(1)
        }
        tbody.appendChild(tr)
    }
    console.info(dataset)

    // 지뢰심기
    for (var k = 0; k < shuffle.length; k +=1) {
        var v = Math.floor(shuffle[k] / 10);
        var h = shuffle[k] % 10;

        tbody.children[v].children[h].textContent = 'X'
        dataset[v][h] = 'X';
    }
})
