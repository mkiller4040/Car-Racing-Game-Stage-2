var canvas;
var backgroundImg;
var gameState = 0;
var playerCount;
var database;
var game,player,form;
var allPlayers;

function setup()
{
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(1175,500);

  game = new Game();
  game.getState();
  game.start();
}

function draw()
{
  if(playerCount === 4)
  {
    game.update(1);
  }

  if(gameState === 1)
  {
    clear();
    game.play();
  }
}

