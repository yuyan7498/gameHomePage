let canvas_element = document.getElementById("canvas");
let ctx=canvas_element.getContext("2d");
ctx.fillStyle="#000000";
//ctx.fillRect(350, 0, 900, 660);


let tetris_width = 10;
let tetris_height = 21;
let tile_width=35;
let tile_height=35;
let tile_center_left=(canvas_element.width/2)-((tile_width*tetris_width)/2);
let tile_center_top=(canvas_element.height/2)-((tile_height*tetris_height)/2);

var board = [];
var recordBd=[];
for(i=0;i<tetris_height;i++)
{
    board[i] = []; //二維陣列
    
    for(j=0;j<tetris_width;j++)
    {
        board[i][j]=0;
        ctx.fillStyle="#333333";
        ctx.fillRect(tile_center_left+tile_width*j+180,tile_center_top+tile_height*i,tile_width,tile_height);
    }
    
}

for(i=0;i<tetris_height;i++)
{
  recordBd[i] = []; //二維

  for(j=0;j<tetris_width;j++)
  {
    recordBd[i][j]=0;
  }
    
}

 
ctx.strokeStyle = '#B0C4DE';//寫tetris
ctx.font="60px Arial";
ctx.strokeText("t e t r i s",510,160);


var image1 = new Image();
image1.src = 'tetris/st.png';
image1.onload = function(){
  ctx.drawImage(image1, 475, 375, 150, 100);
}
image1.addEventListener("click", function(){
  ctx.clearRect(475, 375, 150, 100);
  ctx.clearRect(630, 375, 150, 86);
  ctx.clearRect(510, 160, 150, 86);
  start();

});

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

var image2 = new Image();
image2.src = 'tetris/ht.png';
image2.onload = function(){
  ctx.drawImage(image2, 630, 375, 150, 86);
}

//--------------------------------------------------------------------------------------------------------------------------------------

let now="";
let num=0;
let num1=0;
let tetrisArr=["", "I", "J", "T", "O", "L", "Z", "S"];
//let tetrisArr=["", "I", "J", "O"];
let dir="up";
let dirNum=0;
let dirArr=["up","right","down","left"];
let nowlocaArr=[0,0,0,0,0,0,0,0];
let tab_up=0;
let second=21;
let timer=new PIXI.Text(second);
let save="";
let point=0;

//start();

function start(){
  //alert("new"); 
  
  num=Math.floor(Math.random()*7+1); //1-x //1
  //num=2;
  now=tetrisArr[num]; //I
  //dir="up";
  //dirNum=0;
  if("I"==now)
    nowlocaArr=[1,3,2,3,3,3,4,3];
  else if("J"==now)
    nowlocaArr=[1,3,2,3,2,4,2,5];
  else if("T"==now)
    nowlocaArr=[1,3,2,2,2,3,2,4];
  else if("O"==now)
    nowlocaArr=[1,3,1,4,2,3,2,4];
  else if("L"==now)
    nowlocaArr=[1,5,2,3,2,4,2,5];
  else if("Z"==now)
    nowlocaArr=[1,3,1,4,2,4,2,5];
  else if("S"==now)
    nowlocaArr=[1,4,1,5,2,3,2,4];
  //alert(nowlocaArr);
  //alert(nowlocaArr);
//draw(num,nowlocaArr);
  //alert(board);
  startCounting();
}

function start1(now,num){ 
  //alert(num);
  //alert(num1);
  if("I"==now){
    nowlocaArr[2]=nowlocaArr[0]-1;
    nowlocaArr[3]=nowlocaArr[1];
    nowlocaArr[4]=nowlocaArr[0]+1;
    nowlocaArr[5]=nowlocaArr[1];
    nowlocaArr[6]=nowlocaArr[0]+2;
    nowlocaArr[7]=nowlocaArr[1];
  }
  else if("O"==now){
    nowlocaArr[2]=nowlocaArr[0];
    nowlocaArr[3]=nowlocaArr[1]+1;
    nowlocaArr[4]=nowlocaArr[0]+1;
    nowlocaArr[5]=nowlocaArr[1];
    nowlocaArr[6]=nowlocaArr[0]+1;
    nowlocaArr[7]=nowlocaArr[1]+1;
  }
  else if("J"==now){
    nowlocaArr[2]=nowlocaArr[0]+1;
    nowlocaArr[3]=nowlocaArr[1];
    nowlocaArr[4]=nowlocaArr[0]+1;
    nowlocaArr[5]=nowlocaArr[1]+1;
    nowlocaArr[6]=nowlocaArr[0]+1;
    nowlocaArr[7]=nowlocaArr[1]+2;
  }
  else if("T"==now){
    nowlocaArr[2]=nowlocaArr[0]+1;
    nowlocaArr[3]=nowlocaArr[1]-1;
    nowlocaArr[4]=nowlocaArr[0]+1;
    nowlocaArr[5]=nowlocaArr[1];
    nowlocaArr[6]=nowlocaArr[0]+1;
    nowlocaArr[7]=nowlocaArr[1]+1;
  }
  else if("L"==now){
    nowlocaArr[2]=nowlocaArr[0]+1;
    nowlocaArr[3]=nowlocaArr[1]-2;
    nowlocaArr[4]=nowlocaArr[0]+1;
    nowlocaArr[5]=nowlocaArr[1]-1;
    nowlocaArr[6]=nowlocaArr[0]+1;
    nowlocaArr[7]=nowlocaArr[1];
  }
  else if("Z"==now){
    nowlocaArr[2]=nowlocaArr[0];
    nowlocaArr[3]=nowlocaArr[1]+1;
    nowlocaArr[4]=nowlocaArr[0]+1;
    nowlocaArr[5]=nowlocaArr[1]+1;
    nowlocaArr[6]=nowlocaArr[0]+1;
    nowlocaArr[7]=nowlocaArr[1]+2;
  }
  else if("S"==now){
    nowlocaArr[2]=nowlocaArr[0];
    nowlocaArr[3]=nowlocaArr[1]+1;
    nowlocaArr[4]=nowlocaArr[0]+1;
    nowlocaArr[5]=nowlocaArr[1]-1;
    nowlocaArr[6]=nowlocaArr[0]+1;
    nowlocaArr[7]=nowlocaArr[1];
  }
  

  if(nowlocaArr[1]<0 || nowlocaArr[3]<0 || nowlocaArr[5]<0 || nowlocaArr[7]<0){
    nowlocaArr[1]+=1;
    nowlocaArr[3]+=1;
    nowlocaArr[5]+=1;
    nowlocaArr[7]+=1;
  }
  if(nowlocaArr[1]>20 || nowlocaArr[3]>20 || nowlocaArr[5]>20 || nowlocaArr[7]>20){
    nowlocaArr[1]-=1;
    nowlocaArr[3]-=1;
    nowlocaArr[5]-=1;
    nowlocaArr[7]-=1;
  } //之後寫一個偵測是否跑出去的方法

  draw(num,nowlocaArr);
  //alert("draw1");
  startCounting();
}

function draw(num,nowlocaArr){
  //alert("draw");
  //alert(nowlocaArr);
  
  let colorArr=["#000000", "#FFB6C1", "#9370DB", "#E6E6FA", "#B0E0E6", "#FFA500", "#D2B48C", "#4682B4"];
  //alert(num);
  
    board[nowlocaArr[0]][nowlocaArr[1]]=num;
    board[nowlocaArr[2]][nowlocaArr[3]]=num;
    board[nowlocaArr[4]][nowlocaArr[5]]=num;
    board[nowlocaArr[6]][nowlocaArr[7]]=num;
    //alert(board);
    for(i=0;i<tetris_height;i++) //0~21
    {
        for(j=0;j<tetris_width;j++) //0~9
        {
            if(num== board[i][j])
            {
                ctx.fillStyle=colorArr[num];//"#00FFFF"
                ctx.fillRect(tile_center_left+tile_width*j+180,tile_center_top+tile_height*i,tile_width,tile_height);
            }
  
            if(0== board[i][j])
            {
                ctx.fillStyle=colorArr[0];//"#00FFFF"
                ctx.fillRect(tile_center_left+tile_width*j+180,tile_center_top+tile_height*i,tile_width,tile_height);
            }
            
            
            
        }
    }
  }


  
  function startCounting(){      
    timer = window.setInterval("Check_Time()", 1000);
   
      
        }
  function Check_Time() {
    second -= 1;
    down(now,dir,nowlocaArr);
 
  }

  function down(now,dir,nowlocaArr){
    //alert("down");
    //alert(board);
    //alert(nowlocaArr);
    board[nowlocaArr[0]][nowlocaArr[1]]=0;
    board[nowlocaArr[2]][nowlocaArr[3]]=0;
    board[nowlocaArr[4]][nowlocaArr[5]]=0;
    board[nowlocaArr[6]][nowlocaArr[7]]=0;
   
    var a=nowlocaArr[0]+1;
    var b=nowlocaArr[2]+1;
    var c=nowlocaArr[4]+1;
    var d=nowlocaArr[6]+1;
    /**if(board[a][nowlocaArr[1]]==-1  || board[b][nowlocaArr[3]]==-1 || board[c][nowlocaArr[5]]==-1 || board[d][nowlocaArr[7]]==-1){
        clearInterval(timer); 
        board[nowlocaArr[0]][nowlocaArr[1]]=-1;
        board[nowlocaArr[2]][nowlocaArr[3]]=-1;
        board[nowlocaArr[4]][nowlocaArr[5]]=-1;
        board[nowlocaArr[6]][nowlocaArr[7]]=-1;
        nowlocaArr=[-1,-1,-1,-1,-1,-1,-1,-1];
        check(board,point);
        alert("跌");
        start();
      }*/
/**if((board[nowlocaArr[0]+1][nowlocaArr[1]])==-1  || (board[nowlocaArr[2]+1][nowlocaArr[3]])==-1 || (board[nowlocaArr[4]+1][nowlocaArr[5]])==-1 || (board[nowlocaArr[6]+1][nowlocaArr[7]])==-1){
        clearInterval(timer); 
        board[nowlocaArr[0]][nowlocaArr[1]]=-1;
        board[nowlocaArr[2]][nowlocaArr[3]]=-1;
        board[nowlocaArr[4]][nowlocaArr[5]]=-1;
        board[nowlocaArr[6]][nowlocaArr[7]]=-1;
        nowlocaArr=[-1,-1,-1,-1,-1,-1,-1,-1];
        check(board,point);
        alert("跌");
        start();
      } */
    if(nowlocaArr[0]>=20 || nowlocaArr[2]>=20 || nowlocaArr[4]>=20 ||nowlocaArr[6]>=20){
      clearInterval(timer); 
      board[nowlocaArr[0]][nowlocaArr[1]]=-1;
      board[nowlocaArr[2]][nowlocaArr[3]]=-1;
      board[nowlocaArr[4]][nowlocaArr[5]]=-1;
      board[nowlocaArr[6]][nowlocaArr[7]]=-1;
      nowlocaArr=[-1,-1,-1,-1,-1,-1,-1,-1];
      check(board,point);
      //alert("if");
      start();
      
    }

    if(tab_up==0){
      nowlocaArr[0]+=1;
      nowlocaArr[2]+=1;
      nowlocaArr[4]+=1;
      nowlocaArr[6]+=1;
    }
    else{
      if("I"==now){
        if(dir=="up" || dir=="down"){
          //nowlocaArr[0]+=1;
          //nowlocaArr[1]+=1;
          nowlocaArr[2]+=1;
          nowlocaArr[3]-=1;
          nowlocaArr[4]+=2;
          nowlocaArr[5]-=2;
          nowlocaArr[6]+=3;
          nowlocaArr[7]-=3;
          //alert(nowlocaArr);
        }
        else if(dir=="left" || dir=="right"){
          nowlocaArr[0]+=1;
          //nowlocaArr[1]-=1;
          //nowlocaArr[2]+=1;
          nowlocaArr[3]+=1;
          nowlocaArr[4]-=1;
          nowlocaArr[5]+=2;
          nowlocaArr[6]-=2;
          nowlocaArr[7]+=3;
          //alert(nowlocaArr);
        }
        
      }
      else if("J"==now){
        //alert(nowlocaArr);
        if(dir=="up"){
          nowlocaArr[0]+=2;
          nowlocaArr[1]-=1;
          nowlocaArr[2]+=2;
          nowlocaArr[3]-=1;
          nowlocaArr[4]+=1;
          //nowlocaArr[5]+=2;
          nowlocaArr[6]+=1;
          nowlocaArr[7]+=2;
          
        }
        else if(dir=="right"){
          nowlocaArr[0]+=1;
          //nowlocaArr[1]+=2;
          nowlocaArr[2]+=1;
          //nowlocaArr[3]+=1;
          nowlocaArr[4]+=2;
          nowlocaArr[5]-=1;
          //nowlocaArr[6]+=3;
          nowlocaArr[7]-=1;
        }
        else if(dir=="down"){
          nowlocaArr[0]+=2;
          //nowlocaArr[1]+=1;
          nowlocaArr[2]+=1;
          nowlocaArr[3]+=1;
          //nowlocaArr[4]+=1;
          nowlocaArr[5]+=2;
          nowlocaArr[6]+=3;
          nowlocaArr[7]+=1;
        }else if(dir=="left"){
          //nowlocaArr[0]+=1;
          nowlocaArr[1]+=1;
          nowlocaArr[2]+=1;
          //nowlocaArr[3]+=2;
          nowlocaArr[4]+=2;
          nowlocaArr[5]-=1;
          nowlocaArr[6]+=1;
          nowlocaArr[7]-=2;
        }
        
      }
      else if("T"==now){
        if(dir=="up"){
          nowlocaArr[0]+=2;
          nowlocaArr[1]-=1;
          nowlocaArr[2]+=2;
          nowlocaArr[3]-=2;
          nowlocaArr[4]+=2;
          //nowlocaArr[5]+=1;
          nowlocaArr[6]+=1;
          //nowlocaArr[7]+=2;
        }
        else if(dir=="right"){
          nowlocaArr[0]+=1;
          //nowlocaArr[1]+=1;
          nowlocaArr[2]+=1;
          nowlocaArr[3]+=2;
          nowlocaArr[4]+=1;
          //nowlocaArr[5]+=1;
          nowlocaArr[6]+=2;
          nowlocaArr[7]-=1;
        }
        else if(dir=="down"){
          nowlocaArr[0]+=2;
          nowlocaArr[1]-=1;
          nowlocaArr[2]+=1;
          //nowlocaArr[3]+=2;
          nowlocaArr[4]+=1;
          //nowlocaArr[5]+=1;
          nowlocaArr[6]+=1;
          //nowlocaArr[7]+=2;
        }else if(dir=="left"){
          nowlocaArr[0]+=1;
          nowlocaArr[1]+=2;
          nowlocaArr[2]+=2;
          //nowlocaArr[3]+=2;
          nowlocaArr[4]+=2;
          //nowlocaArr[5]+=1;
          nowlocaArr[6]+=2;
          nowlocaArr[7]+=1;
        }
      }
      else if("O"==now){
        nowlocaArr[0]+=1;
        nowlocaArr[2]+=1;
        nowlocaArr[4]+=1;
        nowlocaArr[6]+=1;
      }
      else if("L"==now){
        if(dir=="up"){
          nowlocaArr[0]+=1;
          nowlocaArr[1]+=1;
          nowlocaArr[2]+=2;
          nowlocaArr[3]-=2;
          //nowlocaArr[4]+=1;
          nowlocaArr[5]-=1;
          nowlocaArr[6]+=1;
          //nowlocaArr[7]+=2;
        }
        else if(dir=="right"){
          nowlocaArr[0]+=1;
          nowlocaArr[1]-=1;
          nowlocaArr[2]+=2;
          nowlocaArr[3]+=1;
          nowlocaArr[4]+=2;
          nowlocaArr[5]+=1;
          nowlocaArr[6]+=1;
          nowlocaArr[7]-=1;
        }
        else if(dir=="down"){
          nowlocaArr[0]+=3;
          nowlocaArr[1]-=1;
          nowlocaArr[2]+=1;
          //nowlocaArr[3]+=2;
          nowlocaArr[4]+=1;
          //nowlocaArr[5]+=1;
          nowlocaArr[6]+=3;
          nowlocaArr[7]-=1;
        }else if(dir=="left"){
          nowlocaArr[0]+=1;
          nowlocaArr[1]+=1;
          nowlocaArr[2]+=1;
          nowlocaArr[3]+=1;
          nowlocaArr[4]+=3;
          //nowlocaArr[5]+=1;
          nowlocaArr[6]+=1;
          nowlocaArr[7]+=2;
        }
      }
      else if("Z"==now){
        if(dir=="up" || dir=="down"){
          nowlocaArr[0]+=2;
          nowlocaArr[1]-=2;
          nowlocaArr[2]+=1;
          //nowlocaArr[3]+=2;
          nowlocaArr[4]+=1;
          //nowlocaArr[5]+=1;
          nowlocaArr[6]+=2;
         // nowlocaArr[7]+=2;
        }
        else if(dir=="left" || dir=="right"){
          nowlocaArr[0]+=2;
          nowlocaArr[1]+=2;
          nowlocaArr[2]+=3;
          //nowlocaArr[3]+=2;
          nowlocaArr[4]+=3;
          //nowlocaArr[5]+=1;
          nowlocaArr[6]+=2;
          //nowlocaArr[7]+=2;
        }
      }
      else if("S"==now){
        if(dir=="up" || dir=="down"){
          nowlocaArr[0]+=2;
          nowlocaArr[1]+=1;
          //nowlocaArr[2]+=2;
          nowlocaArr[3]+=1;
          nowlocaArr[4]+=2;
          //nowlocaArr[5]+=1;
          nowlocaArr[6]+=2;
          //nowlocaArr[7]+=2;
        }
        else if(dir=="left" || dir=="right"){
          nowlocaArr[0]+=1;
          nowlocaArr[1]-=1;
          nowlocaArr[2]+=3;
          nowlocaArr[3]-=1;
          nowlocaArr[4]+=1;
          //nowlocaArr[5]+=1;
          nowlocaArr[6]+=1;
          //nowlocaArr[7]+=2;
        }
      }
    }
    draw(num,nowlocaArr);
    //alert("draw2");
    tab_up=0;
  }

  function fast_down(nowlocaArr){
    if(nowlocaArr[0]<17 && nowlocaArr[2]<17 && nowlocaArr[4]<17 && nowlocaArr[6]<17){
    board[nowlocaArr[0]][nowlocaArr[1]]=0;
    board[nowlocaArr[2]][nowlocaArr[3]]=0;
    board[nowlocaArr[4]][nowlocaArr[5]]=0;
    board[nowlocaArr[6]][nowlocaArr[7]]=0;


    nowlocaArr[0]+=3;
    nowlocaArr[2]+=3;
    nowlocaArr[4]+=3;
    nowlocaArr[6]+=3;
   
    draw(num,nowlocaArr);
    }
  }

  function move_left(num,nowlocaArr){ //ok
    if(!nowlocaArr[1]==0 && !nowlocaArr[3]==0 && !nowlocaArr[5]==0 && !nowlocaArr[7]==0){
    
        board[nowlocaArr[0]][nowlocaArr[1]]=0;
        board[nowlocaArr[2]][nowlocaArr[3]]=0;
        board[nowlocaArr[4]][nowlocaArr[5]]=0;
        board[nowlocaArr[6]][nowlocaArr[7]]=0;

        nowlocaArr[1]-=1;
        nowlocaArr[3]-=1;
        nowlocaArr[5]-=1;
        nowlocaArr[7]-=1;

        draw(num,nowlocaArr);
    }
  }
  function move_right(num,nowlocaArr){//可以一直往右移出畫面
    //alert(nowlocaArr);
    //if(!nowlocaArr[1]>=15 && !nowlocaArr[3]>=15 && !nowlocaArr[5]>=15 && !nowlocaArr[7]>=15){
        board[nowlocaArr[0]][nowlocaArr[1]]=0;
        board[nowlocaArr[2]][nowlocaArr[3]]=0;
        board[nowlocaArr[4]][nowlocaArr[5]]=0;
        board[nowlocaArr[6]][nowlocaArr[7]]=0;

        nowlocaArr[1]+=1;
        nowlocaArr[3]+=1;
        nowlocaArr[5]+=1;
        nowlocaArr[7]+=1;
        
        draw(num,nowlocaArr);
    //}
  }

  function change(save,now,board,nowlocaArr,num1){
    if(save==""){
      save=now;
      num1=num;
      num=Math.floor(Math.random()*7+1); //1-x //1
      now=tetrisArr[num]; //I
    }
    else{
      now=save;
      save="";
        }
    board[nowlocaArr[0]][nowlocaArr[1]]=0;
    board[nowlocaArr[2]][nowlocaArr[3]]=0;
    board[nowlocaArr[4]][nowlocaArr[5]]=0;
    board[nowlocaArr[6]][nowlocaArr[7]]=0;
    start1(now,num);

  }

  function check(board,point){
    var full=0;//full=0表示該行填滿
    var rowSt=0;
    var rowEnd=0;
 

    for(i=tetris_height-1;i>=0;i--) //0~21
    {
      for(j=0;j<tetris_width;j++) //0~9
        {
            if(0 == board[i][j]){
              full+=1;
              break ;
            }
        }
        if(full==0 && rowSt==0){
          rowSt=i;
          rowEnd=i;
        }
        if(full==0 && rowEnd>i)
          rowEnd=i;

    } //從St~End都滿了
    //alert(rowSt);
    //alert(rowEnd);
    if(rowSt!=0){
      //alert(rowSt);
      //alert(rowEnd);
      point+=rowEnd-rowSt+1;
      //alert("1");
      for(i=rowSt;i>=0;i--)
      {
        if(i-(rowEnd-rowSt+1)<0)
          board[i]=[0,0,0,0,0,0,0,0,0,0,0];
        else
          board[i]=board[i-(rowEnd-rowSt+1)];
      }
    }
//alert("point"+point);
  }

  $(document).keydown(function(event){  
    var key = event.which;     
      switch(key) { 
      case 37:{
        move_left(num,nowlocaArr);
        //alert(board);
        //左
        break;
      }
      case 39:{
        //alert("right");
        move_right(num,nowlocaArr);
       //alert(nowlocaArr);
        //右
        break;
      }
      case 38:{
        tab_up=1;
        dirNum+=1;
        if(dirNum>=4)
          dirNum=0;
        dir=dirArr[dirNum];
        //alert(dir);
        //換方向
        //上 旋轉
        
        break;
      }
      
      case 40:{
        fast_down(nowlocaArr);
        //下 快速下降
        break;
      }
      case 32:{ 
         
        change(save,now,board,nowlocaArr,num1);
       
        //空白建 換
        break;
      }
     
    }
  });