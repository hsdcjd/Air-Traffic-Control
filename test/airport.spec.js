const { assertEquals } = require('../test-frameworks');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let expected;
let actual;
let result;
let airport;
let plane;

// **Test 1** - `landedPlanes` length increases by 1 when `landPlane` is called with _instance of `Plane`_

// **Test 2** - `landPlane` should only add `Plane` instances to the `landedPlanes`

// **Test 3** - edge Case - falsy values should not be added to the Airport - not sure this is needed as only a 'Plane' is allowed in anyway? Are Test 2 and 3 the same


// Test 1 - landedPlanes length increases by 1 when landPlane is called on an (empty) airport with an Item
console.log(`============================`);
console.log(`Test 1 - landPlane puts a Plane into the airport`);

// Arrange - this is setting up the variables required for the test
airport = new Airport(3); //have had to add a defaultAirportCapacity value here to allow for introducing it in later test (or planes cannot land)
plane = new Plane();
expected = 1;

// Act - this is running the methods to be tested and collecting the actual results
airport.landPlane(plane);
actual = airport.landedPlanes.length;

// Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 1 - Plane is landed at the airpot: ${result}`);

// Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// **Test 2** - `landPlane` should only add `Plane` instances to the `landedPlanes`
// same as??
// **Test 3** - edge Case - falsy values should not be added to the Airport - not sure this test is needed as only a 'Plane' is allowed in anyway?


// Test 2/3 - landPlane should only add 'Plane' to 'landedPlanes' and not accept anything else

console.log(`============================`);
console.log(`Test 2/3 - landPlane should only accept 'Plane'`);

// Arrange - this is setting up the variables required for the test
airport = new Airport();
plane = new Plane();
expected = 0;

// Act - this is running the methods to be tested and collecting the actual results
airport.landPlane('potato'); //tried to land a 'potato' and '4'(in this case)
actual = airport.landedPlanes.length; 

// Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 2/3 - only a Plane is landed at the airport: ${result}`);

// Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 4 -  have changed this from original plan, need another step - set defaultLandedCapcity, create an airport with defaultLandedCapacity and check it has been created successfully

console.log(`============================`);
console.log(`Test 4 - 'landedCapacity' will equal default capacity set`);

// Arrange - this is setting up the variables required for the test

defaultLandedCapacity = 200;
airport = new Airport(defaultLandedCapacity);

// Act - this is running the methods to be tested and collecting the actual results
actual = airport.getLandedCapacity();
expected = defaultLandedCapacity;

// Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 4 - 'landedCapacity' equals default': ${result}`);

// Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 1 starts failing after set up of Test 4, as defaultLandedCapacity now exists for Airport class and is not defined in earlier tests, so likely assumes 0

// Test 5 -  set newLandedCapacity

console.log(`============================`);
console.log(`Test 5 - 'newlandedCapacity' will change the landedCapacity from the default`);

// Arrange - this is setting up the variables required for the test
defaultLandedCapacity = 200;
airport = new Airport(defaultLandedCapacity);

// Act - this is running the methods to be tested and collecting the actual results
airport.newLandedCapacity(defaultLandedCapacity + 100);
expected = defaultLandedCapacity + 100;
actual = airport.getLandedCapacity()

// Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 5 - 'newlandedCapacity' has changed the landedCapacity': ${result}`);

// Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 6 -  when landedPlanes length equals landedCapacity, do not allow landPlane

console.log(`============================`);
console.log(`Test 6 - landedPlanes length equals landedCapacity`);

// Arrange - this is setting up the variables required for the test
airport = new Airport(2); //create a new airport that has only the capacity to land two planes
//create three planes that we will attempt to land
plane1 = new Plane('Delta');
plane2 = new Plane('BA');
plane3 = new Plane('Ryanair');

// Act - this is running the methods to be tested and collecting the actual results
airport.landPlane(plane1); //land plane one
airport.landPlane(plane2); //land plane two
airport.landPlane(plane3); //try to land plane three but it shouldn't be succesful as airport only has capacity for 2
expected = 2; // we only expect two planes to land
actual = airport.getLandedPlaneCount(); //let's see how many actually landed

// Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 6 - 'landPlane cannot happen': ${result}`);
//console.log(actual);

// Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 7 - landPlane of Plane(id) and check if isPlanePresent (T/F)
//7 landPlane Plane(id) and check if isPlanePresent (T/F)
//8 in the same way - takeOffPlane Plane(id) and check if isPlanePresent(T / F)
    
console.log(`============================`);
console.log(`Test 7 - landPlane into airport`);

// Arrange - this is setting up the variables required for the test
airport = new Airport(1); //I'm putting a value in here for defaultAirportCapacity, otherwise 0 is default and no plane can land
plane1 = new Plane('Delta');
expected = true;

// Act - this is running the methods to be tested and collecting the actual results
airport.landPlane(plane1);
actual = airport.isPlanePresent(plane1);

//Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 7 - 'Plane is present': ${result}`);
console.log(`============================`);

// Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//Test 8 - takeOffPlane Plane(id) and check if isPlanePresent(T / F)

console.log(`============================`);
console.log(`Test 8 - takeOffPlane Plane(id) from airport`);

// Arrange - this is setting up the variables required for the test
airport = new Airport(1);
plane1 = new Plane('Delta');
expected = false;

// Act - this is running the methods to be tested and collecting the actual results
airport.landPlane(plane1);
airport.takeOffPlane(plane1);
actual = airport.isPlanePresent(plane1);

//Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 8 - 'Plane is not present': ${result}`);

// // Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 9 - try to take off a plane(id) which is not in the airport (landedPlanes)

console.log(`============================`);
console.log(`Test 9 - try to takeOffPlane Plane(id) that is not in landedPlanes`);

// Arrange - this is setting up the variables required for the test
airport = new Airport(2);
plane1 = new Plane('Delta');
expected = false;

// Act - this is running the methods to be tested and collecting the actual results
actual = airport.takeOffPlane(plane1);

//Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 9 - 'Plane is not present for take-off': ${result}`);

// // Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 10 - try to land a second instance of the same plane

console.log(`============================`);
console.log(`Test 10 - try to landPlane Plane(id) that is already in landedPlanes`);

// Arrange - this is setting up the variables required for the test
airport = new Airport(3); //set capacity higher than planes going in, so the capacity is not what blocks a re-landing plane
plane1 = new Plane('Delta');
expected = 1;

// Act - this is running the methods to be tested and collecting the actual results
airport.landPlane(plane1);
airport.landPlane(plane1);
actual = airport.getLandedPlaneCount(); //Boolean added to this function in the class, yes but in the end used getLandedPlaneCount!

//Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 10 - 'Plan cannot land if already landed': ${result}`);

// // Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);


//Test 11 - test to check that a plane that has taken off, cannot take off again

console.log(`============================`);
console.log(`Test 11 - try to takeOffPlane Plane(id) that has already taken off`);

// Arrange - this is setting up the variables required for the test
airport = new Airport(1);
plane1 = new Plane('Delta');
expected = false;

// Act - this is running the methods to be tested and collecting the actual results
airport.landPlane(plane1); //land a plane at the airport first!
//console.log(airport.isPlanePresent(plane1));
airport.takeOffPlane(plane1);
//console.log(airport.isPlanePresent(plane1));
airport.takeOffPlane(plane1); 
actual = airport.takeOffPlane(plane1); 

//Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 11 - 'Plan cannot take off a second time': ${result}`);

// // Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

//Test 12 - test to check that only a positive integer is accepted for capacity values

console.log(`============================`);
console.log(`Test 12 - 'try to set defaultAirportCapacity as a float or negative'`);

// Arrange - this is setting up the variables required for the test
defaultLandedCapacity = -4; //6.5 also tried
airport = new Airport(defaultLandedCapacity);
expected = 0; //would ideally throw an error but not sure how to do that

// Act - this is running the methods to be tested and collecting the actual results
actual = airport.getLandedCapacity();

//Assert - testing the actual results against expected results
result = assertEquals(expected, actual);
console.log(`Test 12 - 'float and negative cannot be accepted as defaultAirportCapacity': ${result}`);

// // Clean up - here we are clearing the variables ready for next test, to avoid contamination
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`============================`);
