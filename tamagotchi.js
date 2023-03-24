// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name
        this.energy = energy
        this.full = full
        this.mood = mood
        this.sick = sick
        this.rehomed = rehomed
    }
    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }
    status(){
        console.log('*********************\n')
        console.log(`My mood is: ${this.mood}`)
        console.log(`I am this full: ${this.full}`)
        console.log(`My energy is: ${this.energy}`)
        console.log(this.isSick ? `I am sick` : 'I am not sick')
    }
    eat(){
        this.full = this.full + 2
        this.energy--
        if(this.full > 10){
            this.sick = true
        }
    }
}

// Do not edit below this line
module.exports = Tamagotchi;
