const  Food  = require("./food.js");
const { donut, pizza } = require("./bonusData.js")

class BadFood extends Food {
    constructor(name, daysToSpoil, fresh=true, weapons){
        super(name, daysToSpoil, fresh)
        // no weapons param
        // this.weapons = [donut, pizza]
        // with weapons param
        this.weapons = weapons
    }
    prepare(){
        const msg1 = `I am ${this.name} and my calories are too high to count!`
        const msg2 = `I am ${this.name} and you are just a passing trend!`
        const arr = [msg1, msg2]
        const index = Math.floor(Math.random() *2)
        console.log(arr[index])  
    }
    fight(classVal){

    }
    
}

const testInherit = new BadFood("testFood", 2, false, donut)
console.log(testInherit.weapons)