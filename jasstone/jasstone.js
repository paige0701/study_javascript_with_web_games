var 상대영웅 = document.getElementById('rival-hero');
var 내영웅 = document.getElementById('my-hero');
var 상대덱 = document.getElementById('rival-deck');
var 내덱 = document.getElementById('my-deck');
var rivalDeckData = [];
var myDeckData = [];
var myHeroData;
var rivalHeroData;

function 카드돔연결(데이터, 영웅, 돔) {
    var card = document.querySelector('.card-hidden .card').cloneNode(true);
    card.querySelector('.card-cost').textContent = 데이터.cost;
    card.querySelector('.card-att').textContent = 데이터.att;
    card.querySelector('.card-hp').textContent = 데이터.hp;

    if (영웅) {
        card.querySelector('.card-cost').style.display = 'none';
        var name = document.createElement('div');
        name.textContent = '영웅';
        card.appendChild(name);
    }
    돔.appendChild(card);
}

function 내영웅생성() {
    myHeroData = 카드공장(true);
    카드돔연결(myHeroData, true, 내영웅);
}

function 상대영웅생성() {
    rivalHeroData = 카드공장(true);
    카드돔연결(rivalHeroData, true, 상대영웅);
}

function 상대덱생성(개수) {
    for (var i = 0 ; i < 개수; i++) {
        rivalDeckData.push(카드공장());
    }
    rivalDeckData.forEach((data) => {
        카드돔연결(data, false, 상대덱);
    })
}

function 내덱생성(개수) {
    for (var i = 0 ; i < 개수; i++) {
        myDeckData.push(카드공장());
    }
    myDeckData.forEach((data) => {
        카드돔연결(data, false, 내덱);
    })
}

// 한번만 선언 되면 되니깐 함수 밖에 선언
function Card(영웅) {
    if (영웅) {
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = 영웅;
    } else {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
    }

}

function 카드공장(영웅) {
    // 입력을 받을 필요 없으면 생성자로 ..?
    return new Card(영웅);
}

function 초기세팅() {
    상대덱생성(5);
    내덱생성(5);
    내영웅생성();
    상대영웅생성()
}

초기세팅();