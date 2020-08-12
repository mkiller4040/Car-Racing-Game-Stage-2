class Game
{
  constructor()
  {
  
  }
  
  getState()
  {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data)
    {
      gameState = data.val();
    }
    )  
  }

  update(state)
  {
    database.ref('/').update(
    {
      gameState:state
    })
  }

  start()
  {
    if(gameState === 0)
    {
      form = new Form();
      form.display();
      
      player = new Player();
      player.getCount();
    }
  }

  play()
  {
    form.hide();

    textSize(43);
    fill("blue");
    text("Game Start",120,100);

    Player.getPlayerInfo();

    if(allPlayers !== undefined)
    {
      var displayPos = 140;
      for(var plr in allPlayers)
      {
        if(plr === "player" + player.index)
        {
          fill("yellow");
        }
        else
        {
          fill("blue");
        }
        displayPos = displayPos + 20;
        textSize(15);
        text(allPlayers[plr].name + " :" + allPlayers[plr].distance, 120, displayPos)
      }
    }
     
    if(keyIsDown(UP_ARROW) && player.index !== null)
    {
      player.distance = player.distance + 50;
      player.update();
    }

  }
}