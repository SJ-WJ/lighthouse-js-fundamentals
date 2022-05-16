const raining = true;
const cold = false;
const temperature = -41;
// Determining how one should dress before going outside based off the parameters above

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeve won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// Determining whether one can vote
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

// Determining whether one should even go outside based on the weather
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea ...");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}