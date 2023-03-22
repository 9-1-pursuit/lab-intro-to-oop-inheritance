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
        return arr[index]
    }
    // SuperBonus methods
    action(){
        const actions = ["weapons", "block", "heal"]
        return actions[Math.floor(Math.random() * actions.length)]
    }
    block(rivalName){
        console.log(`${this.name} has BLOCKED ${rivalName}'s attack!`)
    }
    heal() {
        this.daysToSpoil += 1
        console.log(`${this.name} used HEAL`)
    }
    victory(){
        return `${this.name} is the winner and the superior food!!!`
    }
    fight(rival){
        while(this.fresh && rival.fresh){
            let myAction = this.action()
            let rivalAction = rival.action()
            let scoreCard = `${rival.name} ${rival.daysToSpoil} ${this.name} ${this.daysToSpoil}`
            // Display scores after each round 
            console.log(scoreCard)
            
            // My Turn
            if(myAction === "weapons"){
                const myIndex = Math.floor(Math.random() * this.weapons.length)
                let myAttackPoints = this.weapons[myIndex].hitPoints
                let myAttackName = this.weapons[myIndex].name
                console.log(`${this.name} uses ${myAttackName}!!!`)
                
                if(rivalAction !== "block"){
                    rival.daysToSpoil -= myAttackPoints
                    console.log(`${rival.name} is down ${myAttackPoints}`)
                }
                else if(rivalAction === "block"){
                    rival.block(this.name)
                }
            }
            else {
                if(myAction === "heal"){
                    this.heal()
                }
            }
            // Rival's Turn 
            if(rivalAction === "weapons"){
                const rivalIndex = Math.floor(Math.random() * rival.weapons.length)
                let rivalAttackPoints = rival.weapons[rivalIndex].hitPoints
                let rivalAttackName = rival.weapons[rivalIndex].name
                console.log(`${rival.name} uses ${rivalAttackName}!!!`)
                
                if(myAction !== "block"){
                    this.daysToSpoil -= rivalAttackPoints
                    console.log(`${this.name} is down ${rivalAttackPoints}`)
                }
                else if(myAction === "block"){
                    this.block(rival.name)
                }
            }
            else{
                if(rivalAction === "heal"){
                    rival.heal()
                }
            }
            if(this.daysToSpoil < 0) {
                this.fresh = false
                return rival.victory()
            }
            if(rival.daysToSpoil < 0){
                rival.fresh = false
                return this.victory()
            }  
        }
    }  
}

const testDonut = new BadFood("Donut", 12, true, donut)
const testPizza = new BadFood("Pizza", 14, true, pizza)
console.log(testDonut.prepare())
console.log(testPizza.prepare())
console.log(testDonut.fight(testPizza))
/* 
    SUPER BONUS ADDITONALS
        - Add a heal method that allows the food to increase daysToSpoil
        - Add block method that allows the food to take 0 damage, no matter what
        - Add an action selector method that randomly chooses between fight, heal and block
        - Add a victory method that announces the victor
        - Create a simple web app that allows you to play as a single or two player by using buttons and seeing status updates
*/