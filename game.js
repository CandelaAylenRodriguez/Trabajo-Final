var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
   scene: [scene1, scene2, scene3, scene4]
   
};

var game = new Phaser.Game(config);

var score;
var gameOver;
var player;
var velas;
var fantasmas;
var lanas;
var cursors;
var scoreText;
var timedEvent;
var tiempo;
var tiempotext;
var level = 0;
var play;
var vela;
var playtexto;
var lana;
var fantasma;
var platforms;
var background;
var player;
var cursors;
var fantasma2;
var gameOver;
var vida;
var vidas;
var pez;
var peces;
var scorep;
var scorev;
var scorel;