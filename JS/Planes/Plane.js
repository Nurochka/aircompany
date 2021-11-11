class Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    getModel() {
        return this.model;
    }

    getmaxSpeed() {
        return this.maxSpeed;
    }

    getmaxFlightDistance() {
        return this.maxFlightDistance;
    }

    getmaxLoadCapacity() {
          return this.maxLoadCapacity;
    }
}

module.exports = Plane;
