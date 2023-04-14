// Create class below
class Food {
    constructor() {
     this.name = "Banana"
     this.daysToSpoil = 3
     this.fresh = true    
    }
    prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
        if (this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }
        else {
            console.log(`eeewww what an old ${this.name} has spoiled.`)
        }    
}
    aDayPasses() {
        this.daysToSpoil--
        this.isFresh()
    }
}

// create a new Food 

const iceCream = new Food ("iceCream", 6)
iceCream.prepare()
iceCream.isFresh()
iceCream.aDayPasses()

const test = new Food ()
console.log(test)

module.exports = Food;
