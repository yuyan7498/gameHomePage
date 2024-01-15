//first page
const app = new PIXI.Application({ 
  backgroundColor: 0xD4F2E7,
  width:1260,
  height:585
});
document.body.appendChild(app.view);

const startBtn = PIXI.Sprite.from('tetris/st.png');
startBtn.x = app.screen.width / 2-150;
startBtn.y = app.screen.height / 2+160;
startBtn.width=130
startBtn.height=80
app.stage.addChild(startBtn);
startBtn.interactive = true; // 設定可以互動
startBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
startBtn.click = function(){
    document.body.removeChild(app.view);
	  document.body.appendChild(app1.view);
}

const howtoBtn = PIXI.Sprite.from('tetris/ht.png');
howtoBtn.x = app.screen.width / 2+50;
howtoBtn.y = app.screen.height / 2+160;
howtoBtn.width=130
howtoBtn.height=75
app.stage.addChild(howtoBtn);
howtoBtn.interactive = true; // 設定可以互動
howtoBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
howtoBtn.click = function(){
  
}

//------------------------------------------------------------------------------------------------------------------------------------



const app1 = new PIXI.Application({ 
  backgroundColor: 0xD4F2E7,
  width:1260,
  height:585,

});