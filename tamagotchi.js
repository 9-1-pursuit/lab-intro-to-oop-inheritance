// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name,
        this.energy = energy,
        this.full = full,
        this.mood = mood,
        this.sick = sick,
        this.rehomed = rehomed
    }
    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }
    status(){
        console.log(`
        My energy is: ${this.energy} 
        I am this full: ${this.full} 
        My mood is :${this.mood} 
        ${this.sick === true ? 'I am sick' : 'I am not sick'}`)
    }
    eat(){
        this.full = this.full + 2
        this.energy--
        this.full > 10 ? this.sick = true : this.sick = false
    }
    medicate(){
        this.sick === true ? (this.full = 9, this.energy = this.energy - 3, this.sick = false) : (console.log(`${this.name} refuse to take medicine`), this.energy--)
    }
    play(){
        if(this.sick === true){
            this.mood--
            this.energy--
        }else if(this.mood > 9){
            this.energy = this.energy - 2
            this.full--
        }else if(this.energy <= 3){
            console.log('I am too tired to play')
            this.energy--
        }else{
            this.mood = this.mood + 2
            this.energy--
            this.full--
        }
    }
    sleep(){
        this.energy = this.energy + 4
        this.full = this.full - 3
    }
    timePasses(){
        if(this.sick === false){
            this.mood = this.mood - 2
            this.full--
            this.energy--
        }else{
            this.mood = this.mood - 3
            this.full = this.full - 2
            this.energy = this.energy - 2
        }
    }
    badGuardian(){
        console.log()
        if(this.energy <= 0 || this.mood <= 0 || this.full <= 'true'){
            this.rehomed = true
        }
    }
}

const biscuit = new Tamagotchi('Biscuit')
biscuit.play()
console.log(biscuit.status())
// Do not edit below this line
module.exports = Tamagotchi;
