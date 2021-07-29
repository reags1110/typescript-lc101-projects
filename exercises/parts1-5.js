// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
let SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) letiables With Type
let spacecraftName = "Determination";
let speedMph = 17500;
let kilometersToMars = 225000000;
let kilometersToTheMoon = 384400;
let milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
let milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars = milesToMars / speedMph;
let daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hoursToLocation: number = milesAway / speedMph;
//     let days: number = hoursToLocation / 24;
//     return days
// }
// console.log()
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);
// Part 4: Create a Spacecraft Class
let Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        let milesAway = kilometersAway * milesPerKilometer;
        let hoursToLocation = milesAway / this.speedMph;
        let days = hoursToLocation / 24;
        return days;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here: