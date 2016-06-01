/* Entity.js
 * Entity class to derive all in game entity classes from such as the player, enemies, etc
 */
var Entity = function() {

    this._sprite;
    this._xPos;
    this._yPos;
}

Entity.prototype.getSprite = function() {
    return this._sprite;
}

Entity.prototype.setSprite = function(sprite) {
    this._sprite = sprite;
}

Entity.prototype.getXPos = function() {
    return this._xPos;
}

Entity.prototype.setXPos = function(xPos) {
    this._xPos = xPos;
}

Entity.prototype.getYPos = function() {
    return this._yPos;
}

Entity.prototype.setYPos = function(yPos) {
    this._yPos = yPos;
}

Entity.prototype.update = function() {

}

Entity.prototype.render = function() {

}

Entity.prototype.collisionDetected = function(entityCollidedWith) {

}