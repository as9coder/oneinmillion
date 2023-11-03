var comp;
var player;
var start;
var gs= null;
var win= null;

function setup() {
  createCanvas(windowWidth-8, windowHeight-8);

  start= createButton("START");
  start.position(width/2-50, height/2);
  start.mouseClicked(randomiser);
}

function draw() 
{
  background(30);

  textSize(30);
  fill("blue");

  if(gs===true){
    start.style('display', 'none');
    text("COMPUTER NO: "+comp, width/2-150, height/2 );
    text("PLAYER ALLOTED NO: "+player, width/2-150, height/2+50);

    if(comp===player || player===comp){
      win= true;
    }

    if(comp!==player || player!==comp ){
      win= false;
    }

    if(win===true){
      fill("green");
      textSize(30);
      text("WIN", width/2-150, height/4);
    }

    if(win===false){
      fill("red");
      text("LOSE", width/2-150, height/4);
      
    }
  }


  drawSprites();

}

function randomiser(){
  gs= true;
 comp= Math.round(random(1, 1000000));
 player= Math.round(random(1, 1000000));


}




