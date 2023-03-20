// Create class below
class Tamagotchi {
    constructor(name, energy=9, full=8, mood=6, sick=false, rehomed=false){
        this.name = name
        this.energy = energy
        this.full = full
        this.mood = mood
        this.sick = sick
        this.rehomed = rehomed
    }
    // constructor({name, energy=9, full=8, mood=6, sick=false, rehomed=false}){
    //     this.name = name
    //     this.energy = energy
    //     this.full = full
    //     this.mood = mood
    //     this.sick = sick
    //     this.rehomed = rehomed
    // }
    // obj = Object.assign(this, {})
    // check(){console.log(this.obj === this)}
    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    }
    status(){
        const msg = 
        `My mood is: ${this.mood}
        I am this full: ${this.full}
        My energy is: ${this.energy}
        ${this.sick ? `I am sick` : `I am not sick`}`
        
        console.log(msg)
    }
    eat(){
        this.full += 2
        this.energy -= 1
        if(this.full > 10) this.sick = true
    }
}
const testObj = {name: "test", full:3, mood:5, sick:false, rehomed:false}
const test = new Tamagotchi("test", 4,9,5, false, false )
console.log(test.eat(), test.sick)
// const test2 = new Tamagotchi(testObj)
// console.log(test2.status())

// Do not edit below this line
module.exports = Tamagotchi;
