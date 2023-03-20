// Create class below
class Food {
    constructor (name, daysToSpoil, fresh){
        this.name = name
        this.daysToSpoil = daysToSpoil
        this.fresh = fresh
    }
    isFresh(){
        if(this.daysToSpoil > 0){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} is spoiled.`)
            return this.fresh = false
        }
    }
    aDayPasses(){
        this.daysToSpoil = this.daysToSpoil - 1
    }
}

// Test cases
const cake = new Food('cake', 3,true)
console.log(cake)
cake.isFresh()
cake.aDayPasses()
console.log(cake)
cake.aDayPasses()
cake.aDayPasses()
cake.isFresh()
console.log(cake)

// Do not edit below this line
module.exports = Food;
