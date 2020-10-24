///////////////////////////////////////////////
//Author: Omer Cem Sevim
//Date: 10/23/2020
//Subject; How to play screen of Equilibrium.
///////////////////////////////////////////////

class howToPlay{
      constructor(color, parent){
            this.items = new textBox("Items", CANVAS_WIDTH/2-80, 600, 60, color, this);
            this.classes = new textBox("Classes", CANVAS_WIDTH/2-80, 670, 60, color, this);
            this.howToPlayText = new textBox("How To Play", CANVAS_WIDTH/2-300, 200, 120, color, this);
            this.back = new textBox("Back", CANVAS_WIDTH/2-80, 740, 60, color, this);

            //find the bounds of all the text inputs.
            this.items.findBounds();
            this.classes.findBounds();
            this.howToPlayText.findBounds();
            this.back.findBounds();

            //0 -> main how to play screen with options.
            //1 -> items menu.
            //2 -> classes menu.
            this.state = 0;

            //parent class of this.
            this.parent = parent;
      }

      //draws the items on the how to play screen.
      draw(){
            this.back.draw();
            switch (this.state) {
                  case 0:
                        this.howToPlayText.draw();
                        this.items.draw();
                        this.classes.draw();
                        break;
                  case 1:
                        this.items.draw();
                        break;
                  case 2:
                        this.classes.draw();
                        break;
            }
      }

      mouseClickEvent(){
            switch (this.state) {
                  case 0:
                        if(this.items.isClicked()){
                              this.state = 1;
                        }
                        else if(this.classes.isClicked()){
                              this.state = 2;
                        }
                        else if(this.back.isClicked()){
                              this.parent.state = 0;
                        }
                        break;
                  case 1:
                        if(this.back.isClicked()){
                              this.state = 0;
                        }

                        break;
                  case 2:
                        if(this.back.isClicked()){
                              this.state = 0;
                        }
            }
      }
}
