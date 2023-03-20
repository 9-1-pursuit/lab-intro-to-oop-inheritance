// Create class below
class Tamagotchi {
    constructor (name, energy, full, mood, sick, rehomed) {
        this.name = name
        this.energy = energy || 9
        this.full = full || 8
        this.mood = mood || 6
        this.sick = sick || false
        this.rehomed = rehomed || false
    }
    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }
    status(){
        console.log(`
        My mood is: ${this.mood}\n
        I am this full: ${full}\n
        My energy is: ${energy}\n
        ${this.sick ? 'I am sick' : 'i am not sick'}`)
    }
    eat(){
        this.full += 2
        this.energy -= 1
        if (this.full > 10){
            this.sick = true
        } 
        
    }
    medicate(){
        if (this.sick){
            this.full = 9
            this.energy -= 3
            this.sick = false
        } else {
            this.energy -= 1
            console.log(`${this.name} refuses the medicine`)
        }
    }
    play(){
        if (this.sick){
            this.mood -= 1
            this.energy -= 1  
        } else if (this.mood > 9){
            this.energy -= 2
            this.full -= 1
        } else if (this.energy <= 3){
            this.energy -= 1
            console.log(`I am too tired to play`)
        } else {
            this.mood += 2
            this.full -= 1
            this.energy -= 1
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
