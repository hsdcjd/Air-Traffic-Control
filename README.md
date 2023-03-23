
_[npm test in the terminal]_


## Catherine's Airport Challenge Solution
(A DFA Challnege, January 2023)

## Part 1 User Story

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

--think of airport as basket, and plane as (bagel)item from Bob's Bagels exercise--

## Part 1 Domain Model

| Objects | Properties                  | Messages          | Outputs |
| ------- | --------------------------- | ----------------- | ------- |
| Airport | landedPlanes @Array[@Plane] | landPlane(@Plane) | @Void   |
|         |                             |                   |         |
| Plane   | id @String                  | getId()           | @String |

## Tests 1-3

a Need an Airport
b Need to be able to give the Airport a Plane
c LandedPlanes list length should increase by 1 when a Plane is added to the empty LandedPlanes list

**Test 1** - `landedPlanes` length increases by 1 when `landPlane` is called with _instance of `Plane`_

**Test 2** - `landPlane` should only add `Plane` instances to the `landedPlanes`

**Test 3** - edge Case - falsy values should not be added to the Airport

//I am not clear if if Test 2 and 3 are the same explicitly?

## Part 2 User Story

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

## Part 2 Domain Model (added to from above)

| Objects | Properties                  | Messages                    | Outputs  |
| ------- | --------------------------- | --------------------------- | -------- |
| Airport | landedPlanes @Array[@Plane] | land Plane(@Plane)          | @Void    |
|         | landedCapacity @Integer     | isAirportFull()             | @Boolean |
|         |                             | getLandedCapacity()         | @Integer |
|         |                             | newLandedCapacity(@Integer) | @Void    |
|         |                             |                             |          |
| Plane   | id @String                  | getId()                     | @String  |

## Tests 4 & 5

a Need to have an Airport but does not necessarily need to have a Plane in it (getLandedCapacity may be zero)
//this is not the test. need to make default and make sure it is set up when airport is created
b use default capacity, run newcapacity and check this changes the default capacity

## Part 3 User Story

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

## Part 3 Domain Model (not added to) - already fine from above

| Objects | Properties                  | Messages                    | Outputs  |
| ------- | --------------------------- | --------------------------- | -------- |
| Airport | landedPlanes @Array[@Plane] | landPlane(@Plane)           | @Void    |
|         | landedCapacity @Integer     | isAirportFull()             | @Boolean |
|         |                             | getLandedCapacity()         | @Integer |
|         |                             | newLandedCapacity(@Integer) | @Void    |
|         |                             | getLandedPlaneCount()       | @Integer |
| Plane   | id @String                  | getId()                     | @String  |

## Tests

a Need to check if is AirportFull True prevents Plane going into 'landedPlanes'
b Need to check if is AirportFull False allows Plane to go into 'landedPlanes'
//this approach requires the caller to ask if airport is full first (then do something), whereas would be better to have prevention of landPlane if full

**Test 5**: set new Landed Capacity
**Test 6**: when landedPlanes length equals landedCapacity, do not allow landPlane

## Part 4 User Story

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

# Part 4 Domain Model

| Objects | Properties                  | Messages                    | Outputs  |
| ------- | --------------------------- | --------------------------- | -------- |
| Airport | landedPlanes @Array[@Plane] | landPlane(@Plane)           | @Void    |
|         | landedCapacity @Integer     | isAirportFull()             | @Boolean |
|         |                             | getLandedCapacity()         | @Integer |
|         |                             | newLandedCapacity(@Integer) | @Void    |
|         |                             | getLandedPlaneCount()       | @Integer |
|         |                             | takeOffPlane(@Plane)        | @Void    |
|         |                             | isPlanePresent(@Plane)      | @Boolean |
| Plane   | id @String                  | getId()                     | @String  |

## Tests - 7&8

7 landPlane Plane(id) and check if isPlanePresent (T/F)
8 in the same way - takeOffPlane Plane(id) and check if isPlanePresent (T/F)

## Part 5 User Story

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

## Part 5 Domain Model (not added to) - already fine from above

| Objects | Properties                  | Messages                    | Outputs  |
| ------- | --------------------------- | --------------------------- | -------- |
| Airport | landedPlanes @Array[@Plane] | landPlane(@Plane)           | @Void    |
|         | landedCapacity @Integer     | isAirportFull()             | @Boolean |
|         |                             | getLandedCapacity()         | @Integer |
|         |                             | newLandedCapacity(@Integer) | @Void    |
|         |                             | getLandedPlaneCount()       | @Integer |
|         |                             | takeOffPlane(@Plane)        | @Void    |
|         |                             | isPlanePresent(@Plane)      | @Boolean |
| Plane   | id @String                  | getId()                     | @String  |


## Tests 9&10

9 try to take off a plane(id) which is not in the airport (landedPlanes)
10 try land a second instance of a plane(id) that is already in landedPlanes
    (need to add a Boolean return to landPlane function?, yes but did not end up using)

## Testing Edge Cases

Have already shown it is not possible to land something that is not a plane - a string and a value, in test 3.
Have also shown that a plane that is already landed can not land a second time, in test 10.

## Test 11 - Test to check that a plane that has taken off cannot take off again.

Same approach test as previous (test 10), did use a Boolean return.

## Test 12 - Test to check that where there are integers - a -ve value or a float cannot be accepted.

defaultAirportCapacity cannot be a decimal (float) or negative value, only a positive integer.

#### Extended Acceptance Criteria

```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy //not attempted

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy //not attempted

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport //this is covered within the Airport Class, landedPlanes array.
```
