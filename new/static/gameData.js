var singlePlayerGameData = [
    {
        "url": "./single-player-games/dinosaur game/index.html",
        "imageSrc": "./single-player-games/single-player game images/dinosaur.jpeg",
        "title": "Dinosaur Game - 趙詩越 -"
    },
    {
        "url": "./single-player-games/snowball game/index.html",
        "imageSrc": "./single-player-games/single-player game images/Snowman.png",
        "title": "Snowball Game - 趙詩越 -"
    },
    {
        "url": "./single-player-games/space invader/index.html",
        "imageSrc": "./single-player-games/single-player game images/Space.jpeg",
        "title": "Space Invader - 趙詩越 -"
    },
    {
        "url": "./single-player-games/ping pong game/index.html",
        "imageSrc": "./single-player-games/single-player game images/game.jpeg",
        "title": "Ping Pong Game - 趙詩越 -"
    },
    {
        "url": "./single-player-games/da vinci code/templates/index.html",
        "imageSrc": "./single-player-games/single-player game images/davinci.jpeg",
        "title": "Da Vinci Code - 蔡煜堃 -"
    },
    {
        "url": "./single-player-games/ClickGame/game.html",
        "imageSrc": "./single-player-games/single-player game images/picture6.png",
        "title": "just Click - 林宛靜 -"
    },
    {
        "url": "./single-player-games/ClickGame/game.html",
        "imageSrc": "./single-player-games/single-player game images/digging.jpg",
        "title": "打地鼠 - 吳威廷 -"
    },
    {
        "url": "./single-player-games/b612/b612星球表面.html",
        "imageSrc": "./single-player-games/single-player game images/littleprince.jpeg",
        "title": "b612 - 佳渝 -"
    },
    {
        "url": "./single-player-games/tetris/tetris.html",
        "imageSrc": "./single-player-games/single-player game images/tetris.jpeg",
        "title": "tetris - 陳玟怡 -"
    },
    {
        "url": "./single-player-games/resturant/resturant.html",
        "imageSrc": "./single-player-games/single-player game images/resturant.jpeg",
        "title": "resturant - 陳玟怡 -"
    },
];

var multiPlayerGameData = [
    {
        "url": "./multi-player-games/cookGame/index.html",
        "imageSrc": "./multi-player-games/multi-player game images/justcook.jpeg",
        "title": "Just Cook - 劉姿吟 -"
    },
    {
        "url": "./multi-player-games/treasureGame/game.html",
        "imageSrc": "./multi-player-games/multi-player game images/treasure.jpeg",
        "title": "Treasure Game - 劉姿吟 -"
    },
    {
        "url": "./multi-player-games/twoplayerpingpong/index.html",
        "imageSrc": "./multi-player-games/multi-player game images/pingpong.jpeg",
        "title": "Ping Pong Game 2 - 趙詩越 -"
    },
    {
        "url": "./multi-player-games/drawNguess/index.html",
        "imageSrc": "./multi-player-games/multi-player game images/draw.jpeg",
        "title": "Draw & Guess - 陳品蓉 -"
    },
];

//判斷是單人或多人遊戲
var currentUrl = window.location.href;
var fileName = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
if(fileName == 'index.html'){
    gameData = singlePlayerGameData;
}else if(fileName == 'index2.html'){
    gameData = multiPlayerGameData;
}

// 獲取父元素
var parentElement = document.getElementById('swiperEntry');

// 循環處理每個遊戲數據
gameData.forEach(function (game) {
    // 解構遊戲數據
    const { url, imageSrc, title } = game;

    // 創建 <div> 元素
    var divElement = document.createElement('div');
    divElement.className = 'swiper-slide';

    // 創建 <button> 元素
    var buttonElement = document.createElement('button');
    buttonElement.setAttribute('onclick', "location.href='" + url + "'");

    // 創建 <img> 元素
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', imageSrc);

    // 創建 <h4> 元素
    var h4Element = document.createElement('h4');
    h4Element.style.color = 'black';
    h4Element.textContent = title;

    // 將 <img> 和 <h4> 元素添加到 <button> 元素中
    buttonElement.appendChild(imgElement);
    buttonElement.appendChild(h4Element);

    // 將 <button> 元素添加到 <div> 元素中
    divElement.appendChild(buttonElement);

    // 將 <div> 元素添加到父元素中
    parentElement.appendChild(divElement);
});
