class Form {

  constructor() {
    this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-160,displayHeight/2-400);
    this.title.style('color',"blue")
    this.title.style('font-size',"50px")
    this.input.position(displayWidth/2-100,displayHeight/2-100);
    this.button.position(displayWidth/2-60,displayHeight/2-60);
    this.button.style('background-color',"red")
    this.button.size(100)
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-300,displayHeight/2-200);
      this.greeting.style('font-size',"100px")
      this.greeting.style('color',"red")
    });

  }
}
