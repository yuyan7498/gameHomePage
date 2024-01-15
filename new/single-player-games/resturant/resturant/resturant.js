//first page
const app = new PIXI.Application({ 
  backgroundColor: 0xD4F2E7,
  width:1260,
  height:585
});
document.body.appendChild(app.view);

/** 
function onResize() {  //隨螢幕大小改變尺寸
  var w = window.innerWidth; 
  var h = window.innerHeight; 
  var scale = Math.min(w/860,h/540); 
  app.view.style.left = (w-scale*860)/2 + "px"; 
  app.view.style.top = (h-scale*540)/2 + "px"; 
  app.view.style.width = scale*860 + "px"; 
  app.view.style.height = scale*540 + "px";  
}


this.onResize(); //使用方法onResize() 
window.onresize = this.onResize;
*/

const title = PIXI.Sprite.from('run/title.png');
title.anchor.set(0.5);
title.x = app.screen.width / 2;
title.y = app.screen.height / 2-80;
title.width=520
title.height=300
app.stage.addChild(title);

const startBtn = PIXI.Sprite.from('run/start.png');
startBtn.x = app.screen.width / 2-150;
startBtn.y = app.screen.height / 2+160;
startBtn.width=130
startBtn.height=80
app.stage.addChild(startBtn);
startBtn.interactive = true; // 設定可以互動
startBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
startBtn.click = function(){
    document.body.removeChild(app.view);
	  document.body.appendChild(appTeach.view);
}

const howtoBtn = PIXI.Sprite.from('run/howto.png');
howtoBtn.x = app.screen.width / 2+50;
howtoBtn.y = app.screen.height / 2+160;
howtoBtn.width=130
howtoBtn.height=75
app.stage.addChild(howtoBtn);
howtoBtn.interactive = true; // 設定可以互動
howtoBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
howtoBtn.click = function(){
  document.body.removeChild(app.view);
  document.body.appendChild(app3.view);
}


//------------------------------------------------------------------------------------------------------------------------------------
//page-howto
let round=0;

const app3 = new PIXI.Application({ 
  backgroundColor: 0xD4F2E7,
  width:1260,
  height:585,

});

const howto = PIXI.Sprite.from('run/howto-1.png');
howto.x = app.screen.width / 2-630;
howto.y = app.screen.height / 2-293;
howto.width=1260
howto.height=600
app3.stage.addChild(howto);

const howto2 = PIXI.Sprite.from('run/howto-2.png');
howto2.x = app.screen.width / 2-630;
howto2.y = app.screen.height / 2-293;
howto2.width=1260
howto2.height=600

const howto3 = PIXI.Sprite.from('run/howto-3.png');
howto3.x = app.screen.width / 2-630;
howto3.y = app.screen.height / 2-293;
howto3.width=1260
howto3.height=600

const howto4 = PIXI.Sprite.from('run/howto-4.png');
howto4.x = app.screen.width / 2-630;
howto4.y = app.screen.height / 2-293;
howto4.width=1260
howto4.height=600

const howto5 = PIXI.Sprite.from('run/howto-5.png');
howto5.x = app.screen.width / 2-630;
howto5.y = app.screen.height / 2-293;
howto5.width=1240
howto5.height=580


const nextpage = PIXI.Sprite.from('run/nextpage.png');
nextpage.x = app.screen.width / 2+370;
nextpage.y = app.screen.height / 2-290;
nextpage.width=170
nextpage.height=100
app3.stage.addChild(nextpage);
nextpage.interactive = true; // 設定可以互動
nextpage.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
nextpage.click = function(){
  round++;
  if(round==1){
  app3.stage.addChild(howto2);
  app3.stage.addChild(nextpage);
  }
  else if(round==2){
    app3.stage.addChild(howto3);
    app3.stage.addChild(nextpage);
  }
  else if(round==3){
    app3.stage.addChild(howto4);
    app3.stage.addChild(nextpage);
  }
  else if(round==4){
    app3.stage.addChild(howto5);
    app3.stage.addChild(nextpage);
  }

}


//------------------------------------------------------------------------------------------------------------------------------------
//method

//+100
const add = PIXI.Sprite.from('run/100.png');
add.width=90
add.height=100


//-50
const sub = PIXI.Sprite.from('run/50.png');
sub.width=90
sub.height=100

function addpoint(obj){
 
  add.x = obj.x;
  add.y = obj.y-200;
}

function subpoint(obj){
 
  sub.x = obj.x;
  sub.y = obj.y-200;
}

function bigger(obj){
  obj.width=130
  obj.height=150
  obj.y = app.screen.height / 2-110;
}

function smaller(obj){
  obj.width=90
  obj.height=100
  obj.y = app.screen.height / 2-70;
}


//------------------------------------------------------------------------------------------------------------------------------------
//page-teach
let addTime=0;
const appTeach = new PIXI.Application({ 
  backgroundColor: 0xF8F8FF,
  width:1260,
  height:585,

});



const bg1 = PIXI.Sprite.from('run/bg.png');
bg1.anchor.set(0.5);
bg1.x = app.screen.width / 2;
bg1.y = app.screen.height / 2+180;
bg1.width=1400
bg1.height=300


//waffle
const waffleBtn1 = PIXI.Sprite.from('run/waffle.png');
waffleBtn1.x = app.screen.width / 2-600;
waffleBtn1.y = app.screen.height / 2+50;
waffleBtn1.width=100
waffleBtn1.height=100


//baked waffle
const waffle21 = PIXI.Sprite.from('run/waffle2.png');
waffle21.x = app.screen.width / 2-280;
waffle21.y = app.screen.height / 2+150;
waffle21.width=100;
waffle21.height=100;

const waffle2Btn1 = PIXI.Sprite.from('run/waffle2.png');
waffle2Btn1.x = app.screen.width / 2-600;
waffle2Btn1.y = app.screen.height / 2+170;
waffle2Btn1.width=100
waffle2Btn1.height=100


//greentea
const greentea1 = PIXI.Sprite.from('run/greentea.png');
greentea1.x = app.screen.width / 2-390;
greentea1.y = app.screen.height / 2+150;
greentea1.width=30;
greentea1.height=100;


const greenBtn1 = PIXI.Sprite.from('run/green.png');
greenBtn1.x = app.screen.width / 2+500;
greenBtn1.y = app.screen.height / 2+50;
greenBtn1.width=100
greenBtn1.height=100

//blacktea
const blackBtn1 = PIXI.Sprite.from('run/black.png');
blackBtn1.x = app.screen.width / 2+500;
blackBtn1.y = app.screen.height / 2+170;
blackBtn1.width=100
blackBtn1.height=100


//milktea
const milkBtn1 = PIXI.Sprite.from('run/milk.png');
milkBtn1.x = app.screen.width / 2+380;
milkBtn1.y = app.screen.height / 2+50;
milkBtn1.width=100
milkBtn1.height=100


//chocolatemilk
const chocomilkBtn1 = PIXI.Sprite.from('run/chocomilk.png');
chocomilkBtn1.x = app.screen.width / 2+380;
chocomilkBtn1.y = app.screen.height / 2+170;
chocomilkBtn1.width=100
chocomilkBtn1.height=100


//chocolatejam
const chocojamBtn1 = PIXI.Sprite.from('run/chocojam.png');
chocojamBtn1.x = app.screen.width / 2+60;
chocojamBtn1.y = app.screen.height / 2+50;
chocojamBtn1.width=80
chocojamBtn1.height=100


//strjam
const strjamBtn1 = PIXI.Sprite.from('run/strjam.png');
strjamBtn1.x = app.screen.width / 2-50;
strjamBtn1.y = app.screen.height / 2+50;
strjamBtn1.width=80
strjamBtn1.height=100

//sugar
const sugarpic1 = PIXI.Sprite.from('run/sugarpic.png');
sugarpic1.x = app.screen.width / 2-270;
sugarpic1.y = app.screen.height / 2+160;
sugarpic1.width=80;
sugarpic1.height=80;

const sugarBtn1 = PIXI.Sprite.from('run/sugar.png');
sugarBtn1.x = app.screen.width / 2+290;
sugarBtn1.y = app.screen.height / 2+80;
sugarBtn1.width=60
sugarBtn1.height=200



//cream
const creampic1 = PIXI.Sprite.from('run/creampic.png');
creampic1.x = app.screen.width / 2-255;
creampic1.y = app.screen.height / 2+175;
creampic1.width=50;
creampic1.height=50;

const creamBtn1 = PIXI.Sprite.from('run/cream.png');
creamBtn1.x = app.screen.width / 2+200;
creamBtn1.y = app.screen.height / 2+80;
creamBtn1.width=60
creamBtn1.height=200



//blueberry
const blueberryBtn1 = PIXI.Sprite.from('run/blueberry.png');
blueberryBtn1.x = app.screen.width / 2+60;
blueberryBtn1.y = app.screen.height / 2+170;
blueberryBtn1.width=90
blueberryBtn1.height=100


//str
const strBtn1 = PIXI.Sprite.from('run/str.png');
strBtn1.x = app.screen.width / 2-50;
strBtn1.y = app.screen.height / 2+170;
strBtn1.width=90
strBtn1.height=100



appTeach.stage.addChild(bg1);
//waffle
appTeach.stage.addChild(waffleBtn1);

//blacktea
appTeach.stage.addChild(blackBtn1);

//milktea
appTeach.stage.addChild(milkBtn1);

//chocolatemilk
appTeach.stage.addChild(chocomilkBtn1);

//chocolatejam
appTeach.stage.addChild(chocojamBtn1);

//strjam
appTeach.stage.addChild(strjamBtn1);

//blueberry
appTeach.stage.addChild(blueberryBtn1);

//str
appTeach.stage.addChild(strBtn1);

 


//baked waffle
appTeach.stage.addChild(waffle2Btn1);
waffle2Btn1.interactive = true; // 設定可以互動
waffle2Btn1.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
waffle2Btn1.click = function(){
  appTeach.stage.removeChild(arrow);
  arrow.x=app.screen.width / 2+210;
  arrow.y = app.screen.height / 2-40;
  appTeach.stage.addChild(arrow);
  appTeach.stage.addChild(waffle21);
}
  
//greentea
appTeach.stage.addChild(greenBtn1);
greenBtn1.interactive = true; // 設定可以互動
greenBtn1.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
greenBtn1.click = function(){
  appTeach.stage.removeChild(arrow);
  arrow.x=app.screen.width / 2-570;
  arrow.y = app.screen.height / 2+50;
  appTeach.stage.addChild(arrow);
  appTeach.stage.addChild(greentea1);
  }
  
//sugar
appTeach.stage.addChild(sugarBtn1);
sugarBtn1.interactive = true; // 設定可以互動
sugarBtn1.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
sugarBtn1.click = function(){
  appTeach.stage.removeChild(arrow);
  arrow.x=app.screen.width / 2-180;
  arrow.y = app.screen.height / 2+90;
  appTeach.stage.addChild(arrow);
  appTeach.stage.addChild(sugarpic1);
}
  
//cream
appTeach.stage.addChild(creamBtn1);
creamBtn1.interactive = true; // 設定可以互動
creamBtn1.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
creamBtn1.click = function(){
  appTeach.stage.removeChild(arrow);
  arrow.x=app.screen.width / 2+300;
  arrow.y = app.screen.height / 2-40;
  appTeach.stage.addChild(arrow);
  appTeach.stage.addChild(creampic1);
}

const arrow = PIXI.Sprite.from('run/arrow.png');
arrow.x = app.screen.width / 2-370;
arrow.y = app.screen.height / 2-200;
arrow.width=35
arrow.height=100
appTeach.stage.addChild(arrow);



let food = PIXI.Sprite.from('run/list20.png');
food.x = app.screen.width / 2-370;
food.y = app.screen.height / 2-240;
food.width=220
food.height=150


const table = PIXI.Sprite.from('run/table.png');
table.x = app.screen.width / 2-430;
table.y = app.screen.height / 2+110;
table.width=290
table.height=170


const girlBtn = PIXI.Sprite.from('run/girl.png');
girlBtn.x = app.screen.width / 2-400;
girlBtn.y = app.screen.height / 2-70;
girlBtn.width=90
girlBtn.height=100
appTeach.stage.addChild(girlBtn);
girlBtn.interactive = true; // 設定可以互動
girlBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
girlBtn.click = function(){
  appTeach.stage.removeChild(arrow);
  arrow.x=app.screen.width / 2+530;
  arrow.y = app.screen.height / 2-100;
  appTeach.stage.addChild(arrow);
  appTeach.stage.addChild(food);
  appTeach.stage.addChild(table);
  appTeach.stage.addChild(Btn);
  bigger(girlBtn);
}

const Btn = PIXI.Sprite.from('run/button.png');
Btn.x = app.screen.width / 2-175;
Btn.y = app.screen.height / 2+210;
Btn.width=30
Btn.height=50
Btn.interactive = true; // 設定可以互動
Btn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
Btn.click = function(){
 
  add.x = app.screen.width / 2-400;
  add.y = app.screen.height / 2-270;
  appTeach.stage.addChild(add);
  addTime=second1;
  appTeach.stage.removeChild(Btn);
  appTeach.stage.removeChild(table);
  appTeach.stage.removeChild(food);
  appTeach.stage.removeChild(girlBtn);
  appTeach.stage.removeChild(waffle21);
  appTeach.stage.removeChild(greentea1);
  appTeach.stage.removeChild(sugarpic1);
  appTeach.stage.removeChild(creampic1);
  appTeach.stage.removeChild(arrow);
}



let second1 = 60; //使用者所輸入的秒數，因為等等要用在倒數計時所以設置全域變數
startCount();

function startCount(){      
  timer1 = window.setInterval("CheckTime()", 1000);
}
function CheckTime() {
  //app2.stage.removeChild(timer);
  second1 -= 1;
  //app2.stage.addChild(timer);
  
if(second1==addTime-2)
  appTeach.stage.removeChild(add);

}

//------------------------------------------------------------------------------------------------------------------------------------
//page-game
let num1=0,num2=0,num3=0,num4=0;
let myList=[0,0,0,0,0,0,0,0];
let num=1;
let food1,food2,food3,food4;
let point=0;
let girl1List=[0,0,0,0,0,0,0,0],girl2List=[0,0,0,0,0,0,0,0],girl3List=[0,0,0,0,0,0,0,0],girl4List=[0,0,0,0,0,0,0,0];
let second=60;
const app2 = new PIXI.Application({ 
  backgroundColor: 0xF8F8FF,
  width:1260,
  height:585,

});


const bg = PIXI.Sprite.from('run/bg.png');
bg.anchor.set(0.5);
bg.x = app.screen.width / 2;
bg.y = app.screen.height / 2+180;
bg.width=1400
bg.height=300


//waffle
const waffle = PIXI.Sprite.from('run/waffle.png');
waffle.x = app.screen.width / 2-280;
waffle.y = app.screen.height / 2+150;
waffle.width=100;
waffle.height=100;

const waffleBtn = PIXI.Sprite.from('run/waffle.png');
waffleBtn.x = app.screen.width / 2-600;
waffleBtn.y = app.screen.height / 2+50;
waffleBtn.width=100
waffleBtn.height=100


//baked waffle
const waffle2 = PIXI.Sprite.from('run/waffle2.png');
waffle2.x = app.screen.width / 2-280;
waffle2.y = app.screen.height / 2+150;
waffle2.width=100;
waffle2.height=100;

const waffle2Btn = PIXI.Sprite.from('run/waffle2.png');
waffle2Btn.x = app.screen.width / 2-600;
waffle2Btn.y = app.screen.height / 2+170;
waffle2Btn.width=100
waffle2Btn.height=100


//greentea
const greentea = PIXI.Sprite.from('run/greentea.png');
greentea.x = app.screen.width / 2-390;
greentea.y = app.screen.height / 2+150;
greentea.width=30;
greentea.height=100;


const greenBtn = PIXI.Sprite.from('run/green.png');
greenBtn.x = app.screen.width / 2+500;
greenBtn.y = app.screen.height / 2+50;
greenBtn.width=100
greenBtn.height=100

//blacktea
const blacktea = PIXI.Sprite.from('run/blacktea.png');
blacktea.x = app.screen.width / 2-390;
blacktea.y = app.screen.height / 2+150;
blacktea.width=30;
blacktea.height=100;

const blackBtn = PIXI.Sprite.from('run/black.png');
blackBtn.x = app.screen.width / 2+500;
blackBtn.y = app.screen.height / 2+170;
blackBtn.width=100
blackBtn.height=100


//milktea
const milktea = PIXI.Sprite.from('run/milktea.png');
milktea.x = app.screen.width / 2-390;
milktea.y = app.screen.height / 2+150;
milktea.width=30;
milktea.height=100;

const milkBtn = PIXI.Sprite.from('run/milk.png');
milkBtn.x = app.screen.width / 2+380;
milkBtn.y = app.screen.height / 2+50;
milkBtn.width=100
milkBtn.height=100


//chocolatemilk
const chocomilktea = PIXI.Sprite.from('run/chocomilktea.png');
chocomilktea.x = app.screen.width / 2-390;
chocomilktea.y = app.screen.height / 2+150;
chocomilktea.width=30;
chocomilktea.height=100;

const chocomilkBtn = PIXI.Sprite.from('run/chocomilk.png');
chocomilkBtn.x = app.screen.width / 2+380;
chocomilkBtn.y = app.screen.height / 2+170;
chocomilkBtn.width=100
chocomilkBtn.height=100


//chocolatejam
const chocojampic = PIXI.Sprite.from('run/chocojampic.png');
chocojampic.x = app.screen.width / 2-270;
chocojampic.y = app.screen.height / 2+160;
chocojampic.width=80;
chocojampic.height=80;

const chocojamBtn = PIXI.Sprite.from('run/chocojam.png');
chocojamBtn.x = app.screen.width / 2+60;
chocojamBtn.y = app.screen.height / 2+50;
chocojamBtn.width=80
chocojamBtn.height=100


//strjam
const strjampic = PIXI.Sprite.from('run/strjampic.png');
strjampic.x = app.screen.width / 2-270;
strjampic.y = app.screen.height / 2+160;
strjampic.width=80;
strjampic.height=80;

const strjamBtn = PIXI.Sprite.from('run/strjam.png');
strjamBtn.x = app.screen.width / 2-50;
strjamBtn.y = app.screen.height / 2+50;
strjamBtn.width=80
strjamBtn.height=100

//sugar
const sugarpic = PIXI.Sprite.from('run/sugarpic.png');
sugarpic.x = app.screen.width / 2-270;
sugarpic.y = app.screen.height / 2+160;
sugarpic.width=80;
sugarpic.height=80;

const sugarBtn = PIXI.Sprite.from('run/sugar.png');
sugarBtn.x = app.screen.width / 2+290;
sugarBtn.y = app.screen.height / 2+80;
sugarBtn.width=60
sugarBtn.height=200



//cream
const creampic = PIXI.Sprite.from('run/creampic.png');
creampic.x = app.screen.width / 2-255;
creampic.y = app.screen.height / 2+175;
creampic.width=50;
creampic.height=50;

const creamBtn = PIXI.Sprite.from('run/cream.png');
creamBtn.x = app.screen.width / 2+200;
creamBtn.y = app.screen.height / 2+80;
creamBtn.width=60
creamBtn.height=200



//blueberry
const blueberrypic = PIXI.Sprite.from('run/blueberrypic.png');
blueberrypic.x = app.screen.width / 2-270;
blueberrypic.y = app.screen.height / 2+165;
blueberrypic.width=70;
blueberrypic.height=70;

const blueberryBtn = PIXI.Sprite.from('run/blueberry.png');
blueberryBtn.x = app.screen.width / 2+60;
blueberryBtn.y = app.screen.height / 2+170;
blueberryBtn.width=90
blueberryBtn.height=100


//str
const strpic = PIXI.Sprite.from('run/strpic.png');
strpic.x = app.screen.width / 2-240;
strpic.y = app.screen.height / 2+185;
strpic.width=25;
strpic.height=25;

const strBtn = PIXI.Sprite.from('run/str.png');
strBtn.x = app.screen.width / 2-50;
strBtn.y = app.screen.height / 2+170;
strBtn.width=90
strBtn.height=100


app2.stage.addChild(bg);

//waffle

app2.stage.addChild(waffleBtn);
waffleBtn.interactive = true; // 設定可以互動
waffleBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
waffleBtn.click = function(){
  app2.stage.addChild(waffle);
  myList[0]=1;
}

//baked waffle

app2.stage.addChild(waffle2Btn);
waffle2Btn.interactive = true; // 設定可以互動
waffle2Btn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
waffle2Btn.click = function(){
  app2.stage.addChild(waffle2);
  myList[0]=2;
}

//greentea

app2.stage.addChild(greenBtn);
greenBtn.interactive = true; // 設定可以互動
greenBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
greenBtn.click = function(){
  app2.stage.addChild(greentea);
  myList[7]=1;
}

//blacktea

app2.stage.addChild(blackBtn);
blackBtn.interactive = true; // 設定可以互動
blackBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
blackBtn.click = function(){
  app2.stage.addChild(blacktea);
  myList[7]=3;
}

//milktea

app2.stage.addChild(milkBtn);
milkBtn.interactive = true; // 設定可以互動
milkBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
milkBtn.click = function(){
  app2.stage.addChild(milktea);
  myList[7]=0;
}

//chocolatemilk

app2.stage.addChild(chocomilkBtn);
chocomilkBtn.interactive = true; // 設定可以互動
chocomilkBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
chocomilkBtn.click = function(){
  app2.stage.addChild(chocomilktea);
  myList[7]=2;
}

//chocolatejam
app2.stage.addChild(chocojamBtn);
chocojamBtn.interactive = true; // 設定可以互動
chocojamBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
chocojamBtn.click = function(){
  app2.stage.addChild(chocojampic);
  myList[2]=1;
}

//strjam
app2.stage.addChild(strjamBtn);
strjamBtn.interactive = true; // 設定可以互動
strjamBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
strjamBtn.click = function(){
  app2.stage.addChild(strjampic);
  myList[1]=1;
}

//sugar
app2.stage.addChild(sugarBtn);
sugarBtn.interactive = true; // 設定可以互動
sugarBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
sugarBtn.click = function(){
  app2.stage.addChild(sugarpic);
  myList[6]=1;
}


//cream
app2.stage.addChild(creamBtn);
creamBtn.interactive = true; // 設定可以互動
creamBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
creamBtn.click = function(){
  app2.stage.addChild(creampic);
  myList[5]=1;
}


//blueberry
app2.stage.addChild(blueberryBtn);
blueberryBtn.interactive = true; // 設定可以互動
blueberryBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
blueberryBtn.click = function(){
  app2.stage.addChild(blueberrypic);
  myList[4]=1;
}


//str
app2.stage.addChild(strBtn);
strBtn.interactive = true; // 設定可以互動
strBtn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
strBtn.click = function(){
  app2.stage.addChild(strpic);
  myList[3]=1;
}




//餐點 //0沒1有
//鬆餅1沒考過2考過、草莓醬、巧克力醬、草莓、藍莓、鮮奶油、蜂蜜、飲料(奶0綠1巧2紅3)
let list1=[1,0,1,0,0,0,0,0];
let list2=[2,0,1,0,0,0,0,0];
let list3=[1,0,1,0,0,0,0,1];
let list4=[2,0,1,0,0,0,0,1];
let list5=[1,0,1,0,0,0,0,2];
let list6=[2,0,1,0,0,0,0,2];
let list7=[1,0,1,0,0,0,0,3];
let list8=[2,0,1,0,0,0,0,3];

let list9=[1,1,0,1,1,1,0,0];
let list10=[2,1,0,1,1,1,0,0];
let list11=[1,1,0,1,1,1,0,1];
let list12=[2,1,0,1,1,1,0,1];
let list13=[1,1,0,1,1,1,0,2];
let list14=[2,1,0,1,1,1,0,2];
let list15=[1,1,0,1,1,1,0,3];
let list16=[2,1,0,1,1,1,0,3];

let list17=[1,0,0,0,0,1,1,0];
let list18=[2,0,0,0,0,1,1,0];
let list19=[1,0,0,0,0,1,1,1];
let list20=[2,0,0,0,0,1,1,1];
let list21=[1,0,0,0,0,1,1,2];
let list22=[2,0,0,0,0,1,1,2];
let list23=[1,0,0,0,0,1,1,3];
let list24=[2,0,0,0,0,1,1,3];


const table1 = PIXI.Sprite.from('run/table.png');
table1.x = app.screen.width / 2-430;
table1.y = app.screen.height / 2+110;
table1.width=290
table1.height=170
//app2.stage.addChild(list1pic);
table1.interactive = true; // 設定可以互動
table1.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
table1.click = function(){ //點桌子 提交
}

const table2 = PIXI.Sprite.from('run/table.png');
table2.x = app.screen.width / 2-430;
table2.y = app.screen.height / 2+110;
table2.width=290
table2.height=170
//app2.stage.addChild(list1pic);
table2.interactive = true; // 設定可以互動
table2.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
table2.click = function(){ //點桌子 提交
}

const table3 = PIXI.Sprite.from('run/table.png');
table3.x = app.screen.width / 2-430;
table3.y = app.screen.height / 2+110;
table3.width=290
table3.height=170
//app2.stage.addChild(list1pic);
table3.interactive = true; // 設定可以互動
table3.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
table3.click = function(){ //點桌子 提交
}

const table4 = PIXI.Sprite.from('run/table.png');
table4.x = app.screen.width / 2-430;
table4.y = app.screen.height / 2+110;
table4.width=290
table4.height=170
//app2.stage.addChild(list1pic);
table4.interactive = true; // 設定可以互動
table4.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
table4.click = function(){ //點桌子 提交
}


//food1 = PIXI.Sprite.from('run/list1.png');

function getFood1(){
  num=Math.floor(Math.random()*24)+1; //1-x
  //alert(num);
  if(num==1){
    food1 = PIXI.Sprite.from('run/list1.png');
    girl1List=list1;
  }
  else if(num==2){
    food1 = PIXI.Sprite.from('run/list2.png');
    girl1List=list2;
  }
  else if(num==3){
    food1 = PIXI.Sprite.from('run/list3.png');
    girl1List=list3;
  }
  else if(num==4){
    food1 = PIXI.Sprite.from('run/list4.png');
    girl1List=list4;
    }
  else if(num==5){
    food1 = PIXI.Sprite.from('run/list5.png');
    girl1List=list5;
    }
  else if(num==6){
    food1 = PIXI.Sprite.from('run/list6.png');
    girl1List=list6;
    }
  else if(num==7){
    food1 = PIXI.Sprite.from('run/list7.png');
    girl1List=list7;
    }
  else if(num==8){
    food1 = PIXI.Sprite.from('run/list8.png');
    girl1List=list8;
    }
  else if(num==9){
    food1 = PIXI.Sprite.from('run/list9.png');
    girl1List=list9;
    }
  else if(num==10){
    food1 = PIXI.Sprite.from('run/list10.png');
    girl1List=list10;
    }
  else if(num==11){
    food1 = PIXI.Sprite.from('run/list11.png');
    girl1List=list11;
    }
  else if(num==12){
    food1 = PIXI.Sprite.from('run/list12.png');
    girl1List=list12;
    }
  else if(num==13){
    food1 = PIXI.Sprite.from('run/list13.png');
    girl1List=list13;
    }
  else if(num==14){
    food1 = PIXI.Sprite.from('run/list14.png');
    girl1List=list14;
    }
  else if(num==15){
    food1 = PIXI.Sprite.from('run/list15.png');
    girl1List=list15;
    }
  else if(num==16){
    food1 = PIXI.Sprite.from('run/list16.png');
    girl1List=list16;
    }
  else if(num==17){
    food1 = PIXI.Sprite.from('run/list17.png');
    girl1List=list17;
    }
  else if(num==18){
    food1 = PIXI.Sprite.from('run/list18.png');
    girl1List=list18;
    }
  else if(num==19){
    food1 = PIXI.Sprite.from('run/list19.png');
    girl1List=list19;
    }
  else if(num==20){
    food1 = PIXI.Sprite.from('run/list20.png');
    girl1List=list20;
    }
  else if(num==21){
    food1 = PIXI.Sprite.from('run/list21.png');
    girl1List=list21;
    }
  else if(num==22){
    food1 = PIXI.Sprite.from('run/list22.png');
    girl1List=list22;
  }
  else if(num==23){
    food1 = PIXI.Sprite.from('run/list23.png');
    girl1List=list23;
  }
  else if(num==24){
    food1 = PIXI.Sprite.from('run/list24.png');
    girl1List=list24;
  }
}



function getFood2(){
  num=Math.floor(Math.random()*24)+1; //1-x
  //alert(num);
  if(num==1){
    food2 = PIXI.Sprite.from('run/list1.png');
    girl2List=list1;
  }
  else if(num==2){
    food2 = PIXI.Sprite.from('run/list2.png');
    girl2List=list2;
  }
  else if(num==3){
    food2 = PIXI.Sprite.from('run/list3.png');
    girl2List=list3;
  }
  else if(num==4){
    food2 = PIXI.Sprite.from('run/list4.png');
    girl2List=list4;
    }
  else if(num==5){
    food1 = PIXI.Sprite.from('run/list5.png');
    girl1List=list5;
    }
  else if(num==6){
    food2 = PIXI.Sprite.from('run/list6.png');
    girl2List=list6;
    }
  else if(num==7){
    food2 = PIXI.Sprite.from('run/list7.png');
    girl2List=list7;
    }
  else if(num==8){
    food2 = PIXI.Sprite.from('run/list8.png');
    girl2List=list8;
    }
  else if(num==9){
    food2 = PIXI.Sprite.from('run/list9.png');
    girl1List=list9;
    }
  else if(num==10){
    food2 = PIXI.Sprite.from('run/list10.png');
    girl2List=list10;
    }
  else if(num==11){
    food2 = PIXI.Sprite.from('run/list11.png');
    girl2List=list11;
    }
  else if(num==12){
    food2 = PIXI.Sprite.from('run/list12.png');
    girl2List=list12;
    }
  else if(num==13){
    food2 = PIXI.Sprite.from('run/list13.png');
    girl2List=list13;
    }
  else if(num==14){
    food2 = PIXI.Sprite.from('run/list14.png');
    girl2List=list14;
    }
  else if(num==15){
    food2 = PIXI.Sprite.from('run/list15.png');
    girl2List=list15;
    }
  else if(num==16){
    food2 = PIXI.Sprite.from('run/list16.png');
    girl2List=list16;
    }
  else if(num==17){
    food2 = PIXI.Sprite.from('run/list17.png');
    girl2List=list17;
    }
  else if(num==18){
    food2 = PIXI.Sprite.from('run/list18.png');
    girl2List=list18;
    }
  else if(num==19){
    food2 = PIXI.Sprite.from('run/list19.png');
    girl2List=list19;
    }
  else if(num==20){
    food2 = PIXI.Sprite.from('run/list20.png');
    girl2List=list20;
    }
  else if(num==21){
    food2 = PIXI.Sprite.from('run/list21.png');
    girl2List=list21;
    }
  else if(num==22){
    food2 = PIXI.Sprite.from('run/list22.png');
    girl2List=list22;
  }
  else if(num==23){
    food2 = PIXI.Sprite.from('run/list23.png');
    girl2List=list23;
  }
  else if(num==24){
    food2 = PIXI.Sprite.from('run/list24.png');
    girl2List=list24;
  }
}


function getFood3(){
  num=Math.floor(Math.random()*24)+1; //1-x
  //alert(num);
  if(num==1){
    food3 = PIXI.Sprite.from('run/list1.png');
    girl3List=list1;
  }
  else if(num==2){
    food3 = PIXI.Sprite.from('run/list2.png');
    girl3List=list2;
  }
  else if(num==3){
    food3 = PIXI.Sprite.from('run/list3.png');
    girl3List=list3;
  }
  else if(num==4){
    food3 = PIXI.Sprite.from('run/list4.png');
    girl3List=list4;
    }
  else if(num==5){
    food3 = PIXI.Sprite.from('run/list5.png');
    girl3List=list5;
    }
  else if(num==6){
    food3 = PIXI.Sprite.from('run/list6.png');
    girl3List=list6;
    }
  else if(num==7){
    food3 = PIXI.Sprite.from('run/list7.png');
    girl3List=list7;
    }
  else if(num==8){
    food3 = PIXI.Sprite.from('run/list8.png');
    girl3List=list8;
    }
  else if(num==9){
    food3 = PIXI.Sprite.from('run/list9.png');
    girl3List=list9;
    }
  else if(num==10){
    food3 = PIXI.Sprite.from('run/list10.png');
    girl3List=list10;
    }
  else if(num==11){
    food3 = PIXI.Sprite.from('run/list11.png');
    girl3List=list11;
    }
  else if(num==12){
    food3 = PIXI.Sprite.from('run/list12.png');
    girl3List=list12;
    }
  else if(num==13){
    food3 = PIXI.Sprite.from('run/list13.png');
    girl3List=list13;
    }
  else if(num==14){
    food3 = PIXI.Sprite.from('run/list14.png');
    girl3List=list14;
    }
  else if(num==15){
    food3 = PIXI.Sprite.from('run/list15.png');
    girl3List=list15;
    }
  else if(num==16){
    food3 = PIXI.Sprite.from('run/list16.png');
    girl3List=list16;
    }
  else if(num==17){
    food3 = PIXI.Sprite.from('run/list17.png');
    girl3List=list17;
    }
  else if(num==18){
    food3 = PIXI.Sprite.from('run/list18.png');
    girl3List=list18;
    }
  else if(num==19){
    food3 = PIXI.Sprite.from('run/list19.png');
    girl3List=list19;
    }
  else if(num==20){
    food3 = PIXI.Sprite.from('run/list20.png');
    girl3List=list20;
    }
  else if(num==21){
    food3 = PIXI.Sprite.from('run/list21.png');
    girl3List=list21;
    }
  else if(num==22){
    food3 = PIXI.Sprite.from('run/list22.png');
    girl3List=list22;
  }
  else if(num==23){
    food3 = PIXI.Sprite.from('run/list23.png');
    girl3List=list23;
  }
  else if(num==24){
    food3 = PIXI.Sprite.from('run/list24.png');
    girl3List=list24;
  }
}


function getFood4(){
  num=Math.floor(Math.random()*24)+1; //1-x
  //alert(num);
  if(num==1){
    food4 = PIXI.Sprite.from('run/list1.png');
    girl4List=list1;
  }
  else if(num==2){
    food4 = PIXI.Sprite.from('run/list2.png');
    girl4List=list2;
  }
  else if(num==3){
    food4 = PIXI.Sprite.from('run/list3.png');
    girl4List=list3;
  }
  else if(num==4){
    food4 = PIXI.Sprite.from('run/list4.png');
    girl4List=list4;
    }
  else if(num==5){
    food4 = PIXI.Sprite.from('run/list5.png');
    girl4List=list5;
    }
  else if(num==6){
    food4 = PIXI.Sprite.from('run/list6.png');
    girl4List=list6;
    }
  else if(num==7){
    food4 = PIXI.Sprite.from('run/list7.png');
    girl4List=list7;
    }
  else if(num==8){
    food4 = PIXI.Sprite.from('run/list8.png');
    girl4List=list8;
    }
  else if(num==9){
    food4 = PIXI.Sprite.from('run/list9.png');
    girl4List=list9;
    }
  else if(num==10){
    food4 = PIXI.Sprite.from('run/list10.png');
    girl4List=list10;
    }
  else if(num==11){
    food4 = PIXI.Sprite.from('run/list11.png');
    girl4List=list11;
    }
  else if(num==12){
    food4 = PIXI.Sprite.from('run/list12.png');
    girl4List=list12;
    }
  else if(num==13){
    food4 = PIXI.Sprite.from('run/list13.png');
    girl1List=list13;
    }
  else if(num==14){
    food4 = PIXI.Sprite.from('run/list14.png');
    girl4List=list14;
    }
  else if(num==15){
    food4 = PIXI.Sprite.from('run/list15.png');
    girl4List=list15;
    }
  else if(num==16){
    food4 = PIXI.Sprite.from('run/list16.png');
    girl4List=list16;
    }
  else if(num==17){
    food4 = PIXI.Sprite.from('run/list17.png');
    girl4List=list17;
    }
  else if(num==18){
    food4 = PIXI.Sprite.from('run/list18.png');
    girl4List=list18;
    }
  else if(num==19){
    food4 = PIXI.Sprite.from('run/list19.png');
    girl1List=list19;
    }
  else if(num==20){
    food4 = PIXI.Sprite.from('run/list20.png');
    girl4List=list20;
    }
  else if(num==21){
    food4 = PIXI.Sprite.from('run/list21.png');
    girl4List=list21;
    }
  else if(num==22){
    food4 = PIXI.Sprite.from('run/list22.png');
    girl4List=list22;
  }
  else if(num==23){
    food4 = PIXI.Sprite.from('run/list23.png');
    girl4List=list23;
  }
  else if(num==24){
    food4 = PIXI.Sprite.from('run/list24.png');
    girl4List=list24;
  }
}







/** 
food1 = PIXI.Sprite.from('run/list1.png');
food1.x = app.screen.width / 2-370;
food1.y = app.screen.height / 2-240;
food1.width=220
food1.height=150
//app2.stage.addChild(list1pic);
*/
  
let girl1Click=0,girl2Click=0,girl3Click=0,girl4Click=0;

const girl1Btn = PIXI.Sprite.from('run/girl.png');
girl1Btn.x = app.screen.width / 2-400;
girl1Btn.y = app.screen.height / 2-70;
girl1Btn.width=90
girl1Btn.height=100
//app2.stage.addChild(girl1Btn);
girl1Btn.interactive = true; // 設定可以互動
girl1Btn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
girl1Btn.click = function(){
  if(girl1Click==0){ //第一次點這位客人-點餐
    getFood1();
    food1.x = app.screen.width / 2-370;
    food1.y = app.screen.height / 2-240;
    food1.width=220
    food1.height=150
    app2.stage.addChild(food1);
  }
  girl1Click=1;
  app2.stage.removeChild(table2);
  app2.stage.removeChild(table3);
  app2.stage.removeChild(table4);
  app2.stage.removeChild(Btn2);
  app2.stage.removeChild(Btn3);
  app2.stage.removeChild(Btn4);
  app2.stage.addChild(table1);
  app2.stage.addChild(Btn1);
  //alert("1");
  bigger(girl1Btn);
  smaller(girl2Btn);
  smaller(girl3Btn);
  smaller(girl4Btn);
  myList=[0,0,0,0,0,0,0,0];    

}

const Btn1 = PIXI.Sprite.from('run/button.png');
Btn1.x = app.screen.width / 2-175;
Btn1.y = app.screen.height / 2+210;
Btn1.width=30
Btn1.height=50
Btn1.interactive = true; // 設定可以互動
Btn1.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
Btn1.click = function(){
  girl1Click=0;
  for(let i=0;i<=7;i++){
    if(myList[i]!=girl1List[i]){
      point-=150;
      break;
      }
    }
  point+=100;
  app2.stage.removeChild(Btn1);
  app2.stage.removeChild(table1);
  app2.stage.removeChild(food1);
  app2.stage.removeChild(girl1Btn);
  app2.stage.removeChild(waffle);
  app2.stage.removeChild(waffle2);
  app2.stage.removeChild(greentea);
  app2.stage.removeChild(blacktea);
  app2.stage.removeChild(milktea);
  app2.stage.removeChild(chocomilktea);
  app2.stage.removeChild(chocojampic);
  app2.stage.removeChild(strjampic);
  app2.stage.removeChild(sugarpic);
  app2.stage.removeChild(creampic);
  app2.stage.removeChild(blueberrypic);
  app2.stage.removeChild(strpic);
  //alert(point);
}



const girl2Btn = PIXI.Sprite.from('run/girl.png');
girl2Btn.x = app.screen.width / 2-150;
girl2Btn.y = app.screen.height / 2-70;
girl2Btn.width=90
girl2Btn.height=100
//app2.stage.addChild(girl2Btn);
girl2Btn.interactive = true; // 設定可以互動
girl2Btn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
girl2Btn.click = function(){
  if(girl2Click==0){
    getFood2();
    food2.x = app.screen.width / 2-130;
    food2.y = app.screen.height / 2-240;
    food2.width=220
    food2.height=150  
    app2.stage.addChild(food2);
  }
  girl2Click=1;
  app2.stage.removeChild(table1);
  app2.stage.removeChild(table3);
  app2.stage.removeChild(table4);
  app2.stage.removeChild(Btn1);
  app2.stage.removeChild(Btn3);
  app2.stage.removeChild(Btn4);
  app2.stage.addChild(table2);
  app2.stage.addChild(Btn2);
  //alert(2);
  bigger(girl2Btn);
  smaller(girl1Btn);
  smaller(girl3Btn);
  smaller(girl4Btn);
  myList=[0,0,0,0,0,0,0,0];
  

}

const Btn2 = PIXI.Sprite.from('run/button.png');
Btn2.x = app.screen.width / 2-175;
Btn2.y = app.screen.height / 2+210;
Btn2.width=30
Btn2.height=50
Btn2.interactive = true; // 設定可以互動
Btn2.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
Btn2.click = function(){
  girl2Click=0;
  for(let i=0;i<=7;i++){
    if(myList[i]!=girl2List[i]){
      point-=150;
      break;
      }
    }
  point+=100;
  app2.stage.removeChild(Btn2);
  app2.stage.removeChild(table2);
  app2.stage.removeChild(food2);
  app2.stage.removeChild(girl2Btn);
  app2.stage.removeChild(waffle);
  app2.stage.removeChild(waffle2);
  app2.stage.removeChild(greentea);
  app2.stage.removeChild(blacktea);
  app2.stage.removeChild(milktea);
  app2.stage.removeChild(chocomilktea);
  app2.stage.removeChild(chocojampic);
  app2.stage.removeChild(strjampic);
  app2.stage.removeChild(sugarpic);
  app2.stage.removeChild(creampic);
  app2.stage.removeChild(blueberrypic);
  app2.stage.removeChild(strpic);
  //alert(point);
}

const girl3Btn = PIXI.Sprite.from('run/girl.png');
girl3Btn.x = app.screen.width / 2+100;
girl3Btn.y = app.screen.height / 2-70;
girl3Btn.width=90
girl3Btn.height=100
//app2.stage.addChild(girl3Btn);
girl3Btn.interactive = true; // 設定可以互動
girl3Btn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
girl3Btn.click = function(){
  if(girl3Click==0){
    getFood3();
    food3.x = app.screen.width / 2+130;
    food3.y = app.screen.height / 2-240;
    food3.width=220
    food3.height=150
    app2.stage.addChild(food3);
  }
  girl3Click=1;
  app2.stage.removeChild(table1);
  app2.stage.removeChild(table2);
  app2.stage.removeChild(table4);
  app2.stage.removeChild(Btn1);
  app2.stage.removeChild(Btn2);
  app2.stage.removeChild(Btn4);
  app2.stage.addChild(table3);
  app2.stage.addChild(Btn3);
  bigger(girl3Btn);
  smaller(girl2Btn);
  smaller(girl1Btn);
  smaller(girl4Btn);
  myList=[0,0,0,0,0,0,0,0];
 
}

const Btn3 = PIXI.Sprite.from('run/button.png');
Btn3.x = app.screen.width / 2-175;
Btn3.y = app.screen.height / 2+210;
Btn3.width=30
Btn3.height=50
Btn3.interactive = true; // 設定可以互動
Btn3.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
Btn3.click = function(){
  girl3Click=0;
  for(let i=0;i<=7;i++){
    if(myList[i]!=girl3List[i]){
      point-=150;
      break;
      }
    }
  point+=100;
  app2.stage.removeChild(Btn3);
  app2.stage.removeChild(table3);
  app2.stage.removeChild(food3);
  app2.stage.removeChild(girl3Btn);
  app2.stage.removeChild(waffle);
  app2.stage.removeChild(waffle2);
  app2.stage.removeChild(greentea);
  app2.stage.removeChild(blacktea);
  app2.stage.removeChild(milktea);
  app2.stage.removeChild(chocomilktea);
  app2.stage.removeChild(chocojampic);
  app2.stage.removeChild(strjampic);
  app2.stage.removeChild(sugarpic);
  app2.stage.removeChild(creampic);
  app2.stage.removeChild(blueberrypic);
  app2.stage.removeChild(strpic);
  //alert(point);
}


const girl4Btn = PIXI.Sprite.from('run/girl.png');
girl4Btn.x = app.screen.width / 2+350;
girl4Btn.y = app.screen.height / 2-70;
girl4Btn.width=90
girl4Btn.height=100
//app2.stage.addChild(girl4Btn);
girl4Btn.interactive = true; // 設定可以互動
girl4Btn.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
girl4Btn.click = function(){
  if(girl4Click==0){
    getFood4();
    food4.x = app.screen.width / 2+380;
    food4.y = app.screen.height / 2-240;
    food4.width=220
    food4.height=150  
    app2.stage.addChild(food4);
  }
  girl4Click=1;
  app2.stage.removeChild(table1);
  app2.stage.removeChild(table2);
  app2.stage.removeChild(table3);
  app2.stage.removeChild(Btn1);
  app2.stage.removeChild(Btn2);
  app2.stage.removeChild(Btn3);
  app2.stage.addChild(table4);
  app2.stage.addChild(Btn4);
  bigger(girl4Btn);
  smaller(girl1Btn);
  smaller(girl2Btn);
  smaller(girl3Btn);
  myList=[0,0,0,0,0,0,0,0];
 
}

const Btn4 = PIXI.Sprite.from('run/button.png');
Btn4.x = app.screen.width / 2-175;
Btn4.y = app.screen.height / 2+210;
Btn4.width=30
Btn4.height=50
Btn4.interactive = true; // 設定可以互動
Btn4.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
Btn4.click = function(){
  girl4Click=0;
  for(let i=0;i<=7;i++){
    if(myList[i]!=girl4List[i]){
      point-=150;
      break;
      }
    }
  point+=100;
  app2.stage.removeChild(Btn4);
  app2.stage.removeChild(table4);
  app2.stage.removeChild(food4);
  app2.stage.removeChild(girl4Btn);
  app2.stage.removeChild(waffle);
  app2.stage.removeChild(waffle2);
  app2.stage.removeChild(greentea);
  app2.stage.removeChild(blacktea);
  app2.stage.removeChild(milktea);
  app2.stage.removeChild(chocomilktea);
  app2.stage.removeChild(chocojampic);
  app2.stage.removeChild(strjampic);
  app2.stage.removeChild(sugarpic);
  app2.stage.removeChild(creampic);
  app2.stage.removeChild(blueberrypic);
  app2.stage.removeChild(strpic);
  //alert(point);
}


//let second = 60; //使用者所輸入的秒數，因為等等要用在倒數計時所以設置全域變數
let timer=new PIXI.Text(second);
timer.x=app2.screen.width / 2-420;
timer.y=app2.screen.height / 2-270;
//app2.stage.addChild(timer);
startCounting();

function startCounting(){      
  timer = window.setInterval("Check_Time()", 1000);
      }
function Check_Time() {
  //app2.stage.removeChild(timer);
  second -= 1;
  //app2.stage.addChild(timer);
  
if(second==58){
  app2.stage.addChild(girl1Btn);
}
else if(second==53){
  app2.stage.addChild(girl2Btn);
}
else if(second==47){
  app2.stage.addChild(girl3Btn);
  app2.stage.addChild(girl4Btn);
}
else if(second==46){
  app2.stage.removeChild(girl2Btn);
  app2.stage.addChild(girl2Btn);
}
else if(second==40){
  app2.stage.removeChild(girl1Btn);
  app2.stage.addChild(girl1Btn);
}
else if(second==35){
  app2.stage.removeChild(girl3Btn);
  app2.stage.addChild(girl3Btn);
}
else if(second==30){
  app2.stage.removeChild(girl4Btn);
  app2.stage.addChild(girl4Btn);
}
else if(second==29){
  app2.stage.removeChild(girl2Btn);
  app2.stage.addChild(girl2Btn);
}
else if(second==25){
  app2.stage.removeChild(girl1Btn);
  app2.stage.addChild(girl1Btn);
}
else if(second==20){
  app2.stage.removeChild(girl2Btn);
  app2.stage.addChild(girl2Btn);
}
else if(second==13){
  app2.stage.removeChild(girl3Btn);
  app2.stage.addChild(girl3Btn);
  app2.stage.removeChild(girl4Btn);
  app2.stage.addChild(girl4Btn);
  
}
else if(second==10){
  app2.stage.removeChild(girl1Btn);
  app2.stage.addChild(girl1Btn);
}
else if(second==4){
  app2.stage.removeChild(girl2Btn);
  app2.stage.addChild(girl2Btn);
}
else if(second == 0){//時間到了
  app2.stage.addChild(gray);
  app2.stage.addChild(board);
  let pointtext = new PIXI.Text('  '+point,style);
  pointtext.width=100;
  pointtext.height=60;
  pointtext.x = 520;
  pointtext.y = 310;
  app2.stage.addChild(pointtext);
}


}

//if(!app2.stage.contains(girl1Btn))
  //app2.stage.addChild(girl1Btn);
  
let gray = PIXI.Sprite.from('./gray.png');
gray.width=1540;
gray.height=850;
gray.x = 0;
gray.y = 0;

let board = PIXI.Sprite.from('run/board.png');
board.width=300;
board.height=400;
board.x = 450;
board.y = 100;

let style=new PIXI.TextStyle({
  fill:'#A9D18E',
  fontSize:30,
});




let sg = PIXI.Sprite.from('run/sg.png');
sg.width=180;
sg.height=90;
sg.x = app.screen.width / 2+320;
sg.y = app.screen.height / 2-250;
sg.y = 0;
appTeach.stage.addChild(sg);
sg.interactive = true; // 設定可以互動
sg.buttonMode = true; // 當滑鼠滑過時顯示為手指圖示
sg.click = function(){
  document.body.removeChild(appTeach.view);
	document.body.appendChild(app2.view);
}



