var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00070c39-31aa-455b-a6a5-b452a34a7d07","bd51e219-e086-4b5d-8b86-2cc5eb00dc27"],"propsByKey":{"00070c39-31aa-455b-a6a5-b452a34a7d07":{"name":"gameplayadventure_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U/category_people/gameplayadventure_06.png","frameSize":{"x":271,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":271,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U/category_people/gameplayadventure_06.png"},"bd51e219-e086-4b5d-8b86-2cc5eb00dc27":{"name":"award_trophy1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png","frameSize":{"x":312,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qYuvwscvicUp26fkvQOaDTrPjKxv1BlU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var Sofia=createSprite(20,25,20,20);
Sofia.shapeColor="orange"

  var wall1= createSprite(10,70,100,20);
  wall1.shapeColor="brown";
  var wall2= createSprite(100,50,20,100);
  wall2.shapeColor="brown";
  var wall3= createSprite(100,130,100,20);
  wall3.shapeColor="brown";
  var wall4= createSprite(150,20,100,20);
  wall4.shapeColor="brown";
  var wall5= createSprite(190,130,20,100);
  wall5.shapeColor="brown";
  var wall6= createSprite(250,70,20,100);
  wall6.shapeColor="brown";
  var wall7= createSprite(270,150,100,20);
  wall7.shapeColor="brown";
  var wall8= createSprite(330,55,100,20);
  wall8.shapeColor="brown";
  var wall9= createSprite(350,130,20,100);
  wall9.shapeColor="brown";
  var wall10= createSprite(140,230,100,20);
  wall10.shapeColor="brown";
  var wall11= createSprite(350,230,150,20);
  wall11.shapeColor="brown";
  var wall12= createSprite(230,270,20,100);
  wall12.shapeColor="brown";
  var wall13= createSprite(10,270,100,20);
  wall13.shapeColor="brown";
  var wall14= createSprite(50,270,20,100);
  wall14.shapeColor="brown";
  var wall15= createSprite(90,300,20,100);
  wall15.shapeColor="brown";
  var wall16= createSprite(20,360,20,100);
  wall16.shapeColor="brown";
  var wall17= createSprite(180,310,100,20);
  wall17.shapeColor="brown";
  var wall18= createSprite(170,350,20,100);
  wall18.shapeColor="brown";
  var wall19= createSprite(240,390,100,20);
  wall19.shapeColor="brown";
  var wall20= createSprite(340,275,125,20);
  wall20.shapeColor="brown";
  var wall21= createSprite(280,300,20,100);
  wall21.shapeColor="brown";
  var wall22= createSprite(340,390,20,100);
  wall22.shapeColor="brown";
  
//create cup
var cup =createSprite(380,360,5,5);
cup.setAnimation("award_trophy1_1");
cup.scale=0.1;
  
function draw() {
//  setting the background color to pink
  background("pink");

createEdgeSprites();
Sofia.bounceOff(edges);
Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);


if (keyDown("UP_ARROW")){
  
   //Sofia.velocityX=0;
   Sofia.y= Sofia.y-4;
 }
 if (keyDown("DOWN_ARROW")){
   
   //Sofia.velocityX=0;
   Sofia.y= Sofia.y+4;
}
if (keyDown("LEFT_ARROW")){
   
   Sofia.x= Sofia.x-4;
   //Sofia.velocityY=4;
}
if (keyDown("RIGHT_ARROW")){
   
   Sofia.x= Sofia.x+4;
   //Sofia.velocityY=4;
}
checkwin()
drawSprites();
}


function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
