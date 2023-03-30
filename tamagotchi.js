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
        console.log(`Hello, I'm ${this.name}!`)
    }
    status(){
        console.log(`My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${this.energy}\n${this.sick ? 'I am sick' : 'I am not sick'}`)
    }
    eat(){
        this.full += 2
        this.energy -= 1
        if (this.full > 10){
            this.sick = true
            console.log(`${this.name} ate too much`)
        } 
        
    }
    medicate(){
        if (this.sick){
            this.full = 9
            this.energy -= 3
            this.sick = false
            console.log(`${this.name} feels better`)
        } else {
            this.energy -= 1
            console.log(`${this.name} refuses the medicine`)
        }
    }
    play(){
        if (this.sick){
            this.mood -= 1
            this.energy -= 1
            console.log(`I am too sick to play`)  
        } else if (this.mood > 9){
            this.energy -= 2
            this.full -= 1
            console.log(`I don't want to play`)
        } else if (this.energy <= 3){
            this.energy -= 1
            console.log(`I am too tired to play`)
        } else {
            this.mood += 2
            this.full -= 1
            this.energy -= 1
            console.log(`Let's play`)
        }
    }
    sleep(){
        this.energy += 4
        this.full -= 3
        console.log(`${this.name} is sleeping`)
    }
    timePasses(){
        console.log(`Some time has passed`)
        return this.sick 
            ? ( this.mood -= 3, 
                this.full -= 2,
                this.energy -= 2
                ) : (
                    this.mood -= 2,
                    this.full -= 1,
                    this.energy -= 1
                ) 

    }
    badGuardian(){
        if(this.energy <= 0 || this.full <= 0 || this.mood <= 0){
            this.rehomed = true
            console.log(`Your tamagotchi has been rehomed`)
        }
    }
}

// Test cases
const lily = new Tamagotchi ('Lily')
console.log(lily) 
lily.greet()
lily.status()
lily.eat()
lily.eat()
lily.eat()
console.log(lily)
lily.play()
lily.medicate()
lily.sleep()
lily.timePasses()
lily.badGuardian()

// Do not edit below this line
module.exports = Tamagotchi;
