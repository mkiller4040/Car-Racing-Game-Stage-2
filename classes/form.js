class Form
{
  constructor()
  {
    this.input = createInput("Enter Name Here");

    this.button = createButton('Play');

    this.greeting = createElement('h3');
  }
  
  hide()
  {
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }

  display()
  {
    var title = createElement('h2');
    title.html("MultiPlayer Car Racing Game");
    title.position(130,0);

    this.input.position(130,160);

    this.button.position(250,200);
    this.button.mousePressed(()=>
    {
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      playerCount = playerCount + 1;

      player.index = playerCount;

      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Welcome to the Grand Prix " + player.name);
      this.greeting.position(130,160);
    })
  }
}