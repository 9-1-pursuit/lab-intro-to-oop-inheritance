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
    (this.name = name),
      (this.energy = energy),
      (this.full = full),
      (this.mood = mood),
      (this.sick = sick),
      (this.rehomed = rehomed);
  }
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }
  status() {
    let health = this.sick === true ? "I am sick" : "I am not sick";
    console.log(`  
    My mood is: ${this.mood} 
    I am this full: ${this.full}
    My energy is: ${this.energy}
    ${health}`);
  }
}
const fluffy = new Tamagotchi("Fluffy");

// fluffy.eat();
// console.log(fluffy.medicate());
console.log(fluffy.status());
// Do not edit below this line
module.exports = Tamagotchi;
