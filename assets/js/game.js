
// Creates a variable with the settings for the game. 
var config = {

    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaserGame',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 425 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    dom: {
        createContainer: true
    },
};

// Creates a new game using the properties from the config variable. 
var game = new Phaser.Game(config);
var score = 0;
var scoreText;

// Preloads assets to be used in game
function preload ()
{
    this.load.image('background', 'assets/colored_grass.png');
    this.load.image('ground', 'assets/grassMid.png');
    this.load.image('platform', 'assets/grassHalf.png');
    this.load.image('prism', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 48 });
    cursors = this.input.keyboard.createCursorKeys();
}

// Creates platforms, adds controls, adds colliders, essentially "creates" the game after assets have been preloaded
function create ()
{
    this.add.image(400, 300, 'background');
    
    platforms = this.physics.add.staticGroup();

    //Start Ground Layer
    platforms.create(50, 600, 'ground');
    platforms.create(175, 600, 'ground');
    platforms.create(300, 600, 'ground');
    platforms.create(425, 600, 'ground');
    platforms.create(550, 600, 'ground');
    platforms.create(675, 600, 'ground');
    platforms.create(800, 600, 'ground');
    platforms.create(925, 600, 'ground');
    //End Ground Layer

    //Start Platforms
    platforms.create(615, 400, 'platform');
    platforms.create(50, 250, 'platform');
    platforms.create(700, 150, 'platform');
    platforms.create(425, 300, 'platform');
    platforms.create(320,100, 'platform')
    //End Platforms

    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(player, platforms);

    prisms = this.physics.add.group({
        key: 'prism',
        repeat: 12,
        setXY: { x: 12, y: 0, stepX: 65 }
    });

    prisms.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(prisms, platforms);

    this.physics.add.overlap(player, prisms, collectPrism, null, this);

    bombs = this.physics.add.group();

    this.physics.add.collider(bombs, platforms);

    this.physics.add.collider(player, bombs, hitBomb, null, this);

    scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});

}

// Checks for different states and updates what you see on screen accordingly. Mostly used to determine what your sprite should be doing based on user input. 
// Updates any moving objects based on user input, or preprogrammed action.
function update ()
{
    
    if (cursors.left.isDown)
    {
        player.setVelocityX(-230);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(230);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-425);
    } 
}

// Function to allow user to collect the stars
function collectPrism (player, prism)
{
    prism.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);

    if (prisms.countActive(true) === 4 || prisms.countActive(true) === 8 || prisms.countActive(true) === 0)
    {
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-350, 350), 35);
    }

    if (prisms.countActive(true) === 0)
    {
        prisms.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);


    }
}

// Function to tell the program what to do when the player gets hit. 
function hitBomb (player, bomb)
{
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    gameOver = true;
}
