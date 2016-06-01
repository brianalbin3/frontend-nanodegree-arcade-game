var Player = function() {
    Entity.call(this);

    this._sprite = 'images/char-boy.png';

    // TODO: Get rid of magic numbers
    this._MAX_X_POS = 4 * 101;
    this._MAX_Y_POS = 5 * 83 - 13;
    this._MIN_X_POS = 0;
    this._MIN_Y_POS = -13;
    this._INITIAL_X_POS = 2 * 101;
    this._INITIAL_Y_POS = 5 * 83 - 13;

    this.resetPosition();

    this._keyPressed = "";
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(dt) {
    //TODO: Replace with constants
    switch (this._keyPressed ) {
        case "left":
            this.moveLeft(101);
            break;

        case "up":
            this.moveUp(83);
        break;

        case "right":
           this.moveRight(101);
            break;

        case "down":
           this.moveDown(83);
           break;

        default:
           break;
    }

    if ( this._yPos == this._MIN_Y_POS ) {
        this.resetPosition();
    }

    this._keyPressed = "";
}

Player.prototype.handleInput = function( keyPressed ) {
    this._keyPressed = keyPressed;
}

Player.prototype.collisionDetected = function(entityCollidedWith) {
    this.resetPosition();
}

Player.prototype.resetPosition = function () {
    this._xPos = this._INITIAL_X_POS;
    this._yPos = this._INITIAL_Y_POS;
}

Player.prototype.moveLeft = function(dist) {
    if ( this._xPos > this._MIN_X_POS ) {
        this._xPos -= dist;
    }
}

Player.prototype.moveUp = function(dist) {
    if ( this._yPos > this._MIN_Y_POS ) {
        this._yPos -= dist;
    }
}

Player.prototype.moveRight = function(dist) {
    if ( this._xPos < this._MAX_X_POS ) {
        this._xPos += dist;
    }
}

Player.prototype.moveDown = function(dist) {
    if ( this._yPos < this._MAX_Y_POS ) {
        this._yPos += dist;
    }
}
