const  Food  = require("./food.js");
// console.log(Food)
class BadFood extends Food {
    constructor(name, daysToSpoil, fresh=true){
        super(name, daysToSpoil, fresh)
        this.weapon = [{hitPoints : 3}, {hitPoints : 4}, {hitPoints : 5}]
    }
    prepare(){
        const msg1 = `I am ${this.name} and my calories are too high to count!`
        const msg2 = `I am ${this.name} and you are just a passing trend!`
        const arr = [msg1, msg2]
        const index = Math.floor(Math.random() *2)
        console.log(arr[index])  
    }
    fight(){

    }
    
}

const testInherit = new BadFood("testFood", 2, false)
console.log(testInherit.prepare())