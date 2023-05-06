var nave,  nave1, nave2, nave3, nave4,pontos,vidas
function setup() {
  createCanvas(400, 400);
  
  nave1 = createSprite(200, 350,30, 10)
  nave2 = createSprite(100, 50, 20, 20)
  nave3 = createSprite(300, 50, 20, 20)
  nave4 = createSprite(200, 50, 20, 20)
  
  bordas = createEdgeSprites()
  
  pontos = 0
  vidas = 3
  
  nave2.velocityY = 5
  nave3.velocityY = 5
  nave4.velocityY = 5

}
function draw(){
  background('black')
 
  drawSprites()
  nave1.collide(bordas)
  
  if( 
  nave1.isTouching(nave2)||
  nave1.isTouching(nave3)||
  nave1.isTouching(nave4)
  ){
    
    
    
    
    pontos = pontos + 1
    nave2.y = 0
    nave3.y = 0 
    nave4.y = 0
  }
 
  

  
  if(nave2.y > 400){
     nave2.y = 0
    nave2.x=random(10,399)
    vidas = vidas - 1
  }
  if(nave3.y > 400){
    nave3.y  = 0
    nave3.x=random(10,399)
     vidas = vidas - 1
  }
  if(nave4.y > 400){
    nave4.y = 0
    nave4.x=random(10,399)
    vidas = vidas - 1
  }
  
  if (keyDown('right')) {
  nave1.x =nave1.x + 5
    

}
  
   
  if (keyDown('left')) {
  nave1.x =nave1.x - 5
    

}
  
  text('Pontos: ' + pontos, 10, 70)
  text('vidas: ' +vidas, 350, 70 )
  
  
  

  
  
  

}



      