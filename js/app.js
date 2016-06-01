var entManager = new EntityManager();

var player = new Player();

entManager.add( player );
entManager.add( new Enemy(0, 1, 35) );
entManager.add( new Enemy(4, 1, 80) );
entManager.add( new Enemy(2, 2, 90) );
entManager.add( new Enemy(0, 3, 120) );

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



