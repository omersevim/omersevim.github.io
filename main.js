///////////////////////////////
//Author: Omer Cem Sevim, Judd Babbit, Hogan Pope.
//Date: 10/23/2020
//Subject: Main game loop of Equilibrium.
///////////////////////////////

//calls how to play
function mouseClicked(){
      game.mouseClickEvent();
}

class equilibrium{
      constructor(){
            //game state
            //0 -> Main Menu
            //1 -> How To Play screen.
            //2 -> Game Start.
            this.state = 0;

            //how to play screen instance.
            //SEE: how_to_play.js.
            this.howToPlay = new howToPlay(color(250,0,0), this);

            //main menu instance
            //SEE: main_menu.js
            this.mainMenu = new mainMenu(color(250, 0, 0), this);
      }

      draw(){
            switch (this.state) {
                  case 0:
                        this.mainMenu.draw();
                        break;
                  case 1:
                        this.howToPlay.draw();
                        break;
                  default:

            }
      }

      mouseClickEvent(){
            switch (this.state) {
                  case 0:
                        this.mainMenu.mouseClickEvent();
                        break;
                  case 1:
                        this.howToPlay.mouseClickEvent();
                        break;
                  default:

            }
      }
}

var game;
function setup() {
      createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
      game = new equilibrium();
}

function draw() {
      background(225);
      game.draw();
}
