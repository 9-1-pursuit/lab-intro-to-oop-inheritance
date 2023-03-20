// Create class below
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false;
  }
  // Methods
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }
  status() {
    console.log(
      `Energy: ${this.energy}, Fullness: ${this.full}, Mood: ${this.mood}, Sick: ${this.sick}`
    );
  }
  eat() {
    this.eat += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
    }
  }
  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log(`Refusal to take medicine`);
      this.energy -= 1;
    }
  }
  play() {
    if (this.sick) {
      this.mood += 2;
      this.full += 1;
    } else if (this.mood > 9) {
      console.log("I am too happy to play");
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      console.log("I am too tired to play");
      this.energy -= 1;
    } else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

}
// Do not edit below this line
module.exports = Tamagotchi;
