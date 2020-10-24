///////////////////////////
//Author: Omer Cem Sevim
//Date: 10/23/2020
//Subject; Handles the main menu navigation.
///////////////////////////

class mainMenu{
      constructor(color, parent){
            this.parent = parent;
            this.color = color;

            this.title = new textBox("EQUILIBRIUM", CANVAS_WIDTH/2-400, 200, 100, color, this);
            this.start = new textBox("Start Game", CANVAS_WIDTH/2-200, 600, 60, color, this);
            this.howToPlay = new textBox("How To Play", CANVAS_WIDTH/2-200, 700, 60, color, this);
            this.item = new item('Magma Armor', 100, 100, itemTypes.ARMOR, '../resources/tokens/MagmaArmor.png', this);

            this.start.findBounds();
            this.howToPlay.findBounds();
      }
      draw(){
            this.title.draw();
            this.start.draw();
            this.howToPlay.draw();
            this.item.draw();
      }
      mouseClickEvent(){
            if(this.start.isClicked()){
                  this.parent.state = 2;
            }
            else if(this.howToPlay.isClicked()){
                  this.parent.state = 1;
            }
      }
}
