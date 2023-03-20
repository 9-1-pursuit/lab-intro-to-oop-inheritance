const  Food  = require("./food.js");
// console.log(Food)
class BadFood extends Food {
    constructor(name, daysToSpoil, fresh=true){
        super(name, daysToSpoil, fresh)
        this.weapon = [{hitPoints : 3}, {hitPoints : 4}, {hitPoints : 5}]
    }
    prepare(){
        console.log(`I am ${this.name} and my calories are too high to count!`)
    }
    fight(){
        
    }
    
}

const testInherit = new BadFood("testFood", 2, false)
console.log(testInherit.prepare())