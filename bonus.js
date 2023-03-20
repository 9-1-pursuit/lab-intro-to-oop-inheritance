const  Food  = require("./food.js");
const { donut, pizza } = require("./bonusData.js")

class BadFood extends Food {
    constructor(name, daysToSpoil, fresh=true, weapons){
        super(name, daysToSpoil, fresh)
        this.weapons = weapons
    }
    prepare(){
        const msg1 = `I am ${this.name} and my calories are too high to count!`
        const msg2 = `I am ${this.name} and you are just a passing trend!`
        const arr = [msg1, msg2]
        const index = Math.floor(Math.random() * arr.length)
        console.log(arr[index])  
    }
    fight(rival){
        // while loop or recursion -> fight to the death lol
        let myHealth = this.daysToSpoil
        let rivalHealth = rival.daysToSpoil

        while(myHealth > 0 || rivalHealth > 0){
            // random select/ retrieve attack points/name
            const myIndex = Math.floor(Math.random() * this.weapons.length)
            let myAttackPoints = this.weapons[myIndex].hitPoints
            let myAttackName = this.weapons[myIndex].name
            
            const rivalIndex = Math.floor(Math.random() * rival.weapons.length)
            let rivalAttackPoints = rival.weapons[rivalIndex].hitPoints
            let rivalAttackName = rival.weapons[rivalIndex].name
            
            rivalHealth -= myAttackPoints
            
            console.log(`${this.name} uses ${myAttackName}!! \n${rival.name} is down ${myAttackPoints} \n${rival.name} ${rivalHealth} ${this.name} ${myHealth}`)
            
            if(rivalHealth < 0){
                rival.fresh = false
                break;}

            myHealth -= rivalAttackPoints
            
            console.log(`${rival.name} uses ${rivalAttackName}!!! \n${this.name} is down ${rivalAttackPoints} \n${this.name} ${myHealth} ${rival.name} ${rivalHealth}`)
           
            if(myHealth < 0) {
                this.fresh = false
                break;
            }
        }
        // console.log(this.fresh, rival.fresh)
        return rivalHealth <= 0 ? 
        `${this.name} is the winner!` : 
        `Better luck next time, ${rival.name} was better.`
    }  
}

const testDonut = new BadFood("Donut", 22, true, donut)
const testPizza = new BadFood("Pizza", 18, true, pizza)
console.log(testDonut.prepare(), testPizza.prepare())
console.log(testDonut.fight(testPizza))