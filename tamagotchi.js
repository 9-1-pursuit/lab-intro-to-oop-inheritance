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
            this.energy -= 1
        }
   }
    play(){
        if(this.sick) {
        console.log( "I am too sick to play")
        this.mood -=1
        this.energy -=1
        } else if(this.mood > 9){
            this.sick = false
            console.log("will not play")
            this.energy -= 2
            this.full -= 1
        } else if(this.energy <= 3){
            console.log("I am too tired to play")
            this.energy -= 1
        } else {

        this.mood +=2
        this.energy -=1
        this.full -=1
       }
    }

    sleep(){
        this.energy +=4
        this.full -=3   
    }

    timePasses(){
        if(!this.sick){
            this.mood -=2
            this.full -=1
            this.energy -=1
        } else {
            this.mood -=3
            this.full -=2
            this.energy -=2
        }
    }
    badGuardian(){
        console.log("The Tamagotchi has been rehomed")
        this.energy <=0 ? this.rehomed = true : false
        this.full <=0 ? this.rehomed = true : false
    }

    }

// Do not edit below this line
module.exports = Tamagotchi;
