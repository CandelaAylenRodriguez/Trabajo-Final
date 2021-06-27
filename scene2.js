class scene2 extends Phaser.Scene {
    constructor() {
    super('nivel1');
    }

    create ()
    {
        
        this.add.image(400, 300, 'fondo');
        this.add.image(400,300, "arbolesn")
        


        platforms = this.physics.add.staticGroup();
        platforms.create(400, 590, "tierra2")
        platforms.create(50, 450, "tierra3").setScale(1);
        platforms.create(280, 510, "tierra1").setScale(1);
        platforms.create(350, 400, "tierra3").setScale(1);
        platforms.create(700, 500, "tierra3").setScale(1);
        platforms.create(650, 409, "tierra1").setScale(1);
        platforms.create(520, 300, "tierra3").setScale(1);
        platforms.create(-60, 350, "tierra3").setScale(1);
        platforms.create(200, 270, "tierra3").setScale(1);
        platforms.create(100, 170, "tierra3").setScale(1);
        platforms.create(400, 120, "tierra1").setScale(1);
        platforms.create(790, 250, "tierra1").setScale(1);
        platforms.create(740, 150, "tierra3").setScale(1);
        platforms.create(500, 200, "tierra1").setScale(1);



        player = this.physics.add.sprite(100, 500, 'niña');
        player.setBounce(0);
        player.setCollideWorldBounds(true);
        player.setScale(0.5);

        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }
        score = 0;
        
        velas = this.physics.add.group({
            key: 'vela',
            repeat: 15,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        velas.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            
        });

        peces = this.physics.add.group({
            key: 'pez',
            repeat: 10,
            setXY: { x: 15, y: 250, stepX: 70 }
        });

        peces.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        
        });
       
        lanas = this.physics.add.group({
            key: 'lana',
            repeat: 5,
            setXY: { x: 15, y: 400, stepX: 100 }
        });

        lanas.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        
        });
       
        fantasmas = this.physics.add.group();
        level=1;
        scoreText = this.add.text(300, 16,  "Puntos: 0 ", { font: '25px Arial Black', fill: '#FF0000', });

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(velas, platforms);
        this.physics.add.collider(peces, platforms);
        this.physics.add.collider(lanas, platforms);
    
        this.physics.add.overlap(player, velas, this.collectStar, null, this);
        this.physics.add.overlap(player, peces, this.collectStar, null, this);
        this.physics.add.collider(player, fantasmas, this.hitBomb, null, this);
        this.physics.add.overlap(player, lanas, this.collectStar, null, this);
        
        gameOver = false;

        tiempo = 30
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        tiempotext = this.add.text(600, 16, 'Tiempo: ', { font: '25px Arial Black', fill: '#FF0000', });

        this.jumps = 0;
        
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
            var fantasma = fantasmas.create(200, 16, 'fanta1');
            fantasma.setBounce(1);
            fantasma.setCollideWorldBounds(true);
            fantasma.setVelocity(Phaser.Math.Between(-50, 254), 2);
        
            var fantasma = fantasmas.create(600, 100, 'fanta2');
            fantasma.setBounce(1);
            fantasma.setCollideWorldBounds(true);
            fantasma.setVelocity(Phaser.Math.Between(-50, 352), 3);

            var fantasma = fantasmas.create(451, 78, 'fanta1');
            fantasma.setBounce(1);
            fantasma.setCollideWorldBounds(true);
            fantasma.setVelocity(Phaser.Math.Between(-50, 321), 2);
        
            var fantasma = fantasmas.create(544, 0, 'fanta2');
            fantasma.setBounce(1);
            fantasma.setCollideWorldBounds(true);
            fantasma.setVelocity(Phaser.Math.Between(-50, 352), 3);

            vidas = this.add.group({
                key: 'vida',
                repeat: 2,
                setXY: { x: 15, y: 15, stepX: 40 }
            });
    
            
    }

    update ()
    {
        
        if (gameOver)
        {       
            return
        }
        
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
            
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
            
        }
        else 
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down){
            player.setVelocityY(-330);
        }
    }

    collecttiempo(player,vela)
    {
        vela.disableBody(true, true);
        tiempo+=10;
    }
    
    collectStar (player, vela)
    {
        vela.disableBody(true, true);
        score += 100;
        scoreText.setText('Score: ' + score)   
        }

    collectpez (player, lana)
    {
        lana.disableBody(true, true);
        score += 300;
        scoreText.setText('Score: ' + score);

        if (lanas.countActive(true) === 0)
        {
            lanas.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);
        })}
    };

    collectpez (player, pez)
            {
                pez.disableBody(true, true);
        
                score += 200;
                scoreText.setText('Score: ' + score);
        
                if (peces.countActive(true) === 0)
                {
                    peces.children.iterate(function (child) {
        
                        child.enableBody(true, child.x, 0, true, true);
                })}
            };

            
        
    hitBomb (player, fantasma)
    {
        if (vidas.countActive(true)===2)
        {
        vida.disableBody(true,true)
        }
        else
        {
        this.gameOver()
        }

    }

    gameOver() {        
        gameOver = true;
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');        

        var gameOverButton = this.add.text(700, 500, 'Game Over', { font: '50px Arial Black', fill: '#FF0000', })
        .setInteractive()
        .on('pointerdown', () => this.scene.start('creditos'));
        Phaser.Display.Align.In.Center(gameOverButton, this.add.zone(400, 300, 800, 600));    
    }
    
    onSecond() {
        if (! gameOver)
        {       
            tiempo = tiempo - 1; 
            tiempotext.setText('Tiempo: ' + tiempo);
            if (tiempo == 0) {
                timedEvent.paused = true;
                this.gameOver()
            }            
        }

    }



}