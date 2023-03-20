// Create class below
class Food {
    constructor (name, daysToSpoil, fresh){
        this.name = name
        this.daysToSpoil = daysToSpoil
        this.fresh = fresh || true
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if(this.daysToSpoil > 0){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled.`)
            return this.fresh = false
        }
    }
    aDayPasses(){
        this.daysToSpoil -= 1
        this.isFresh()
    }
}

// Test cases
const cake = new Food('cake', 3,true)
console.log(cake)
cake.isFresh()
cake.aDayPasses()
cake.aDayPasses()
cake.aDayPasses()
console.log(cake)

// Do not edit below this line
module.exports = Food;
