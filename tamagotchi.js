// Create class below
class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }

  greet(name) {
    console.log(`Hello, I'm ${name}`)
  }

  status(mood,full,energy,sick) {
    console.log(`My mood is: ${mood} I am this full: ${full} My energy is: ${energy} I am not sick: ${sick} `)
  }

  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick) {
      this.sick = false;
      this.full = 9;
      this.energy -= 3;
    } else {
      this.energy -= 1;
    }
  }

  play() {
    
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
    } else if(this.mood > 9){
      this.energy -= 2;
      this.full -= 1;
    } else if(this.energy <= 3){
      this.energy -= 1;
      console.log("I am too tired to play")
    }
    else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
   
  }

  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (!this.sick) {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }

  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
