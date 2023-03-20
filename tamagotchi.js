// Create class below
class Tamagotchi {
    constructor(name, energy=9, full=8,mood=6, sick=false, rehomed=false) {
    this.name = name
    this.energy = energy
    this.full = full
    this.mood = 6
    this.sick = sick
    this.rehomed = rehomed
    }

    greet(){
        console.log(`Hello, I'm ${name}!`)
    }
    status(){
        console.log(`My mood is:  ${this.mood}`
         `I am this full: ${this.full}`
         `My energy is ${this.energy}` )
         this.sick === false ? `I am not sick`: `I am sick`
    }

    eat(){
        this.full += 2
        this.energy -= 1
        this.full > 10 ? this.sick=true: this.sick=false
    }

    medicate(){
        if (this.sick === true){
            this.full = 9
            this.energy -=3
            this.sick = false
    } else {
        console.log ("refusal to take medicine")
    }
  }
}
// Do not edit below this line
module.exports = Tamagotchi;
