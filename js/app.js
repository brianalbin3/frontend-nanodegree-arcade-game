// Enemies our player must avoid

var Enemy = function(initialRow, initialColumn, initialSpeed) {

    Entity.call(this);
    this._sprite = "images/enemy-bug.png";

    this._xPos = initialRow *  101;
    this._yPos = initialColumn * 83 - 13;
    this._speed = initialSpeed;
};

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

//TODO: IMPLEMENT THIS
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.moveRight(dt * this._speed);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this._sprite), this._xPos, this._yPos);
};

Enemy.prototype.moveRight = function(dist) {
    this._xPos += dist;

    //TODO: BAD BAD BAD MAGIC NUMBERS
    if ( this._xPos >= 101 + 505 ) {
        this._xPos = -101; // Start them in the imaginary column before the first
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    Entity.call(this);

    this._sprite = 'images/char-boy.png';

    // Coordinates start at 0,0 which points to the top left square of the board
    // TODO: RENAME TO COLUMNS SINCE THIS IS MORE ACCURATE?
    this._MAX_X_POS = 4;
    this._MAX_Y_POS = 5;
    this._MIN_X_POS = 0;
    this._MIN_Y_POS = 0;
    this._INITIAL_X_POS = 2;
    this._INITIAL_Y_POS = 5;

    this.resetPosition();

    this._keyPressed = "";
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Enemy;

Player.prototype.update = function() {
    switch (this._keyPressed ) {
        case "left":
            this.moveLeft();
            break;

        case "up":
            this.moveUp();
        break;

        case "right":
           this.moveRight();
            break;

        case "down":
           this.moveDown();
           break;

        default:
           break;
    }

    if ( this._yPos == this._MIN_Y_POS ) {
        this.resetPosition();
    }

    this._keyPressed = "";
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this._sprite), this._xPos * 101, this._yPos * 83 - 13 );
}

Player.prototype.handleInput = function( keyPressed ) {
    this._keyPressed = keyPressed;
}

Player.prototype.collisionDetected = function() {
    this.resetPosition();
}

Player.prototype.resetPosition = function () {
    this._xPos = this._INITIAL_X_POS;
    this._yPos = this._INITIAL_Y_POS;
}

Player.prototype.moveLeft = function() {
    if ( this._xPos > this._MIN_X_POS ) {
        this._xPos--;
    }
}

Player.prototype.moveUp = function() {
    if ( this._yPos > this._MIN_Y_POS ) {
        this._yPos--;
    }
}

Player.prototype.moveRight = function() {
    if ( this._xPos < this._MAX_X_POS ) {
        this._xPos++;
    }
}

Player.prototype.moveDown = function() {
    if ( this._yPos < this._MAX_Y_POS ) {
        this._yPos++;
    }
}

// TODO: BELOW
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
allEnemies.push( new Enemy(0, 1, 35) );
allEnemies.push( new Enemy(4, 1, 80) );
allEnemies.push( new Enemy(2, 2, 90) );
allEnemies.push( new Enemy(0, 3, 120) );

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



