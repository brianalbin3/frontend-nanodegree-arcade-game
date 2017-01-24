// EntityManager manages all entities.
var EntityManager = function() {
    this._entities = [];
};

EntityManager.prototype.add = function(newEntity) {
    this._entities.push(newEntity);
}

EntityManager.prototype.remove = function(entity) {
    // TODO
};

EntityManager.prototype.update = function(dt) {
    let numEnts = this._entities.length;

    for (let i = 0; i < numEnts; i++) {
        this._entities[i].update(dt);
    }
};

EntityManager.prototype.render = function() {
    let numEnts = this._entities.length;

    for (let i = 0; i < numEnts; i++) {
        this._entities[i].render();
    }
};

EntityManager.prototype.checkCollisions = function() {
    let numEnts = this._entities.length;

    // TODO: Can this be done without an n^2 algorithm?
    for (let i = 0; i < numEnts; i++) {
        let currEnt = this._entities[i];

        for (let j = 0; j < numEnts; j++) {
            let currOtherEnt = this._entities[j];

            if ( currEnt === currOtherEnt ) {
                continue;
            }

            if ( currEnt.getYPos() == currOtherEnt.getYPos() ) {

                // TODO: Get rid of magic numbers
                // TODO: I feel like collision detection algorithms really belong in the engine... but can leave here for now
                if ( ( currEnt.getXPos() >= currOtherEnt.getXPos() && currEnt.getXPos() <= currOtherEnt.getXPos() + 101 ) ||
                     ( currEnt.getXPos() + 101 >= currOtherEnt.getXPos() && currEnt.getXPos() + 101 <= currEnt.getXPos() + 101 ) ) {
                    currEnt.collisionDetected();
                    currOtherEnt.collisionDetected();
                }
            }
        }
    }
};
