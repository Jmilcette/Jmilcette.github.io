var stillplaying = true;
   var drawMe = function(bitmojiX,bitmojiY,bitmojiH) {
    var drawBody = function(bitmojiX,bitmojiY,bitmojiH) {
        fill(0, 0, 0);
        noStroke();
        rect(bitmojiX+(24*bitmojiH/100),bitmojiY+(238*bitmojiH/100),bitmojiH/100*148,bitmojiH/100*57,bitmojiH/100*19);
   };
    var drawNeck = function(bitmojiX,bitmojiY,bitmojiH) {  
        fill(171, 141, 96);
        rect(bitmojiX+76*bitmojiH/100,bitmojiY + 198*bitmojiH/100,bitmojiH/100*45,bitmojiH/100*40);
  };
    var drawHead = function(bitmojiX,bitmojiY,bitmojiH) {
        fill(171, 141, 96);
        ellipse(bitmojiX+100*bitmojiH/100,bitmojiY + 158*bitmojiH/100,bitmojiH/100*96,bitmojiH/100*133);
    };   
    var drawEyes = function(bitmojiX,bitmojiY,bitmojiH) {
        fill(255, 255, 255);
        ellipse(bitmojiX +77*bitmojiH/100,bitmojiY + 158*bitmojiH/100,bitmojiH/100*13,bitmojiH/100*13);
        ellipse(bitmojiX + 118*bitmojiH/100,bitmojiY + 158*bitmojiH/100,bitmojiH/100*13,bitmojiH/100*13);
        fill(0, 0, 0);
        ellipse(bitmojiX +77*bitmojiH/100,bitmojiY + 158*bitmojiH/100,bitmojiH/100*7,bitmojiH/100*9);
        ellipse(bitmojiX + 118*bitmojiH/100,bitmojiY + 158*bitmojiH/100,bitmojiH/100*7,bitmojiH/100*9);
    };
    var drawHair = function(bitmojiX,bitmojiY,bitmojiH) {
        fill(0, 0, 0);
        arc(bitmojiX + 100*bitmojiH/100,bitmojiY + 123*bitmojiH/100,bitmojiH/100*98,bitmojiH/100*-73,-1,181);
        rect(bitmojiX + 64*bitmojiH/100,bitmojiY + 106*bitmojiH/100,bitmojiH/100*72,bitmojiH/100*26,bitmojiH/100*1);
        rect(bitmojiX + 51*bitmojiH/100,bitmojiY + 120*bitmojiH/100,bitmojiH/100*14,bitmojiH/100*39,bitmojiH/100*0);
        rect(bitmojiX + 135*bitmojiH/100,bitmojiY + 118*bitmojiH/100,bitmojiH/100*14,bitmojiH/100*39,bitmojiH/100*0);
    };
    var drawNose = function(bitmojiX,bitmojiY,bitmojiH) {
        noFill();
        stroke(0, 0, 0);
        arc(bitmojiX + 97*bitmojiH/100,bitmojiY + 170*bitmojiH/100, bitmojiH/100*19, bitmojiH/100*19, 12,159);
    };
    var drawMouth = function(bitmojiX,bitmojiY,bitmojiH) {
        fill(168, 109, 109);
        noStroke();
        arc(bitmojiX +97*bitmojiH/100,bitmojiY + 195*bitmojiH/100,bitmojiH/100*31,bitmojiH/100*10,2,180);
    };
    var drawBeard = function(bitmojiX,bitmojiY,bitmojiH) {
        stroke(0, 0, 0);
        noFill();
        strokeWeight(3);
        arc(bitmojiX +99*bitmojiH/100,bitmojiY + 177*bitmojiH/100,bitmojiH/100*86,bitmojiH/100*90,33,145);
    };
    var theText = function(bitmojiX,bitmojiY,bitmojiH) {
        fill(250, 250, 250);
        text("JM", bitmojiX + 41*bitmojiH/100, bitmojiY + 249*bitmojiH/100,bitmojiH/100*70,bitmojiH/100*80);
    };
//I'm calling all of my body part functions below (Functionception)
var callMeFunctions = function() {
drawBody(bitmojiX,bitmojiY,bitmojiH);
drawNeck(bitmojiX,bitmojiY, bitmojiH);
drawHead(bitmojiX,bitmojiY, bitmojiH);
drawEyes(bitmojiX,bitmojiY, bitmojiH);
drawHair(bitmojiX,bitmojiY, bitmojiH);
drawNose(bitmojiX,bitmojiY, bitmojiH);
drawMouth(bitmojiX,bitmojiY, bitmojiH);
drawBeard(bitmojiX,bitmojiY, bitmojiH);
theText(bitmojiX,bitmojiY, bitmojiH);
};
callMeFunctions();
};
   var draw = function() {
       if (stillplaying)
       {
           drawMe(mouseX+-72,mouseY+-140,50);
           if ( mouseY < 95 ) {
               stillplaying = false;
               fill(255, 0, 0);
               textSize(50);
               text("Out of Bounds",13,206);
           }
       }
   };
