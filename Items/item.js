/////////////////////////////////
//Author:Omer Cem Sevim
//Date: 10/24/2020
//Subject: Generic item class that all items will inherit from.
//////////////////////////////////
const itemTypes = {
      ARMOR: 'armor',
      MELEE: 'melee',
      RANGED: 'ranged',
      MISC: 'misc',
      NONE: 'none'
};

class item{
      constructor(name='empty', x, y, type=itemTypes.NONE, img='../resources/generic.png', parent=null){
            this.name = name;
            this.position = new p5.Vector(x, y);
            this.type = type;
            this.img = loadImage(img);
            this.inUse = false;
            this.parent = parent;
            this.scale = 1;
            this.scaleSpeed = -0.15;
      }

      draw(){
            push();
            translate(this.position.x, this.position.y);
            image(this.img, 0, 0, 40, 40);
            pop();
      }

      move(){
            //set the items position to its parents position.
            if(this.inUse === true){
                  this.position.set(parent.position);
            }
            else{
                  if(this.scale > 1){
                        this.scaleSpeed = -0.15;
                  }
                  else if(this.scale < -1){
                        this.scaleSpeed = 0.15
                  }

                  this.scale += this.scaleSpeed;
            }
      }

}
