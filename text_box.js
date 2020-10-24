////////////////////////////
//Autho: Omer Cem Sevim
//Date: 10/23/2020
//Subject: Helper class for text wrapping and text buttons.
////////////////////////////


//A class  to determine the coordinates of text boxes and make them clickable.
class textBox {
      //text makes each capital letters size x size and lowercase (size/2) x (size/2)
      //it makes numbers other than 1 be (size*3/4) x size and 1 be (size/2) x size
      constructor(input, x, y, size, color, parent) {
            this.text = input;
            this.position = new p5.Vector(x, y);
            this.size = size;
            this.right = x;
            this.color = color;
            this.w = 0;
            this.parent = parent;
      }

      findBounds(){
            textSize(this.size);
            this.w = textWidth(this.text);
            this.right = this.position.x+this.w;
      }

      draw(){
            push();
            fill(this.color);
            textSize(this.size);
            text(this.text, this.position.x, this.position.y);
      }

      //returns true if the mouse is clicked on the text.
      isClicked(){
            if(mouseX <= this.right && mouseX >= this.position.x && mouseY <= this.position.y && mouseY >= this.position.y-this.size){
                  return true;
            }
            return false;
      }

}
