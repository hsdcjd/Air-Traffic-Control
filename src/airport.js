const Plane = require('./Plane');

class Airport {
  landedPlanes = [];
  landedCapacity;

  constructor(defaultLandedCapacity) {
    if (Number.isInteger(defaultLandedCapacity) && defaultLandedCapacity > 0) {
      this.landedCapacity = defaultLandedCapacity;
    } else {
      this.landedCapacity = 0;
    }
  }
  landPlane = plane => {
    if (plane instanceof Plane && this.getLandedPlaneCount() < this.getLandedCapacity() && !this.isPlanePresent(plane)) {
      this.landedPlanes.push(plane);
    }
  }
  getLandedCapacity() {
    return this.landedCapacity;
  }
  newLandedCapacity(newCapacity) {
    this.landedCapacity = newCapacity;
  }
  getLandedPlaneCount() {
    return this.landedPlanes.length;
  }
  isPlanePresent(plane) {
    const indexOfPlaneInLandedPlanes = this.landedPlanes.findIndex(landedPlane => landedPlane.id === plane.id);
    return indexOfPlaneInLandedPlanes > -1;
  }
  takeOffPlane = plane => {
    const indexOfPlaneInLandedPlanes = this.landedPlanes.findIndex(landedPlane => landedPlane.id === plane.id);
    if (indexOfPlaneInLandedPlanes > -1) {
      this.landedPlanes.splice(indexOfPlaneInLandedPlanes, 1);
       } return (indexOfPlaneInLandedPlanes > -1) ? true : false;
    }
  }

module.exports = Airport;

