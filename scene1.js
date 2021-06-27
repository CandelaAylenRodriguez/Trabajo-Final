class scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload ()
    {
      this.load.image("fondo", ".//assets/Fondo.png")
      this.load.image("fondo2", ".//assets/Fondo2.png")
     this.load.image("arbol1", ".//assets/arbol1.png")
     this.load.image("arbol2",".//assets/arbol2.png")
     this.load.image("arbol3",".//assets/arbol3.png")
     this.load.image("arbolesn",".//assets/Arboles noche.png")
     this.load.image("boton",".//assets/boton.png")
     this.load.image("fanta1",".//assets/fantasma1.png")
     this.load.image("fanta2",".//assets/fantasma2.png")
     this.load.image("fanta3",".//assets/fantasma3.png")
     this.load.image("lana",".//assets/lana.png")
     this.load.image("ojo",".//assets/ojo.png")
     this.load.image("pez",".//assets/pez.png")
     this.load.image("tierra1",".//assets/tierra1.png")
     this.load.image("tierra2",".//assets/tierra2.png")
     this.load.image("tierra3",".//assets/tierra3.png")
     this.load.image("tierra4",".//assets/tierra4.png")
     this.load.image("vela",".//assets/vela.png")
     this.load.image("vida",".//assets/vida.png")
     this.load.tilemapTiledJSON('nivel1m', './/assets/nivel1.json');
     this.load.spritesheet('niña', './/assets/personaje.png', { frameWidth: 50, frameHeight: 100 });      
  
     
}
    create() 
    {
      
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('niña', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'niña', frame: 4 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('niña', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

        
      this.add.image(400, 300, 'fondo').setScale(1)
      var play = this.add.image(400, 300, 'boton').setScale(4)
      playtexto = this.add.text(400, 300,  "JUGAR", { font: '25px Fixedsys', fill: '#FF0000', });
      play.setInteractive()
      play.on('pointerdown', () => this.scene.start('nivel1') );
      playtexto.setInteractive()
      playtexto.on("pointerdown", ()=> this.scene.start("nivel1"));
    }
}

