// Enemies our player must avoid
var Enemy = function(initialRow, initialColumn, speed) {

    Entity.call(this);
    this._sprite = "images/enemy-bug.png";

    this._xPos = initialRow *  101;
    this._yPos = initialColumn * 83 - 13;
    this._speed = speed;
};

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.moveRight(dt * this._speed);
};

Enemy.prototype.moveRight = function(dist) {
    this._xPos += dist;

    //TODO: BAD BAD BAD MAGIC NUMBERS
    if ( this._xPos >= 101 + 505 ) {
        this._xPos = -101; // Start them in the imaginary column before the first
    }
}