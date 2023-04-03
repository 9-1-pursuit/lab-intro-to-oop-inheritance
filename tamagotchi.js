// Create class below
class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
    this.name = "Fizz"
    this.energy = 9
    this.full = 8
    this.mood = 6
    this.sick = false
    this.rehomed = false
  }

  greet() {
    console.log(`Hello, I'm ${this.nane}!`)
  }

  status() {
    console.log(
      `Energy: ${this.energy}, Fullness: ${this.full}, Mood:${this.mood}, Sick: ${this.sick}`
    )
  }

  eat() {
    this.full += 2
    this.energy -= 1
    if (this.full > 10) {
      this.sick = true
    }
  }

  play() {
    if (this.sick) {
      this.energy -= 1
      this.mood -= 1
    } else if (this.mood >= 9) {
      this.energy -= 2
      this.full -= 1
    } else if (this.energy <= 3) {
      console.log("I am too tired to play")
      this.energy -= 1
    } else {
      this.mood += 2
      this.energy -= 1
      this.full -= 1
    }
  }

  sleep() {
    this.energy += 4
    this.full -= 3
  }

  medicate() {
    if (this.sick === true) {
      this.full = 9
      this.energy -= 3
      this.sick = false
    } else {
      console.log("refusal to take medicine")
      this.energy -= 1
    }
  }

  timePasses() {
    if (this.sick) {
      this.mood -= 3
      this.full -= 2
      this.energy -= 2
    } else {
      this.mood -= 2
      this.full -= 1
      this.energy -= 1
    }
  }

  badGuardian() {
    if (this.energy <= 0) {
      this.rehomed = true
    }
    if (this.mood <= 0) {
      this.rehomed = true
    }
    if (this.full <= 0) {
      this.rehomed = true
    }
  }
}
// Do not edit below this line
module.exports = Tamagotchi
