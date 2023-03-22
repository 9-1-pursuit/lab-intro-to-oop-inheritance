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
    // SuperBonus - heal method
    heal() {
        const val = this.daysToSpoil + 5
       this.daysToSpoil = val
    }
    fight(rival){
        // randomly selects an action (weapon, heal or block)
        const actions = ["weapons", "block", "heal"]
        let myHealth = this.daysToSpoil
        let rivalHealth = rival.daysToSpoil
        let scoreCard = `\n${rival.name} ${rivalHealth} ${this.name} ${myHealth}` 

        while(myHealth > 0 || rivalHealth > 0){
            // random select/ retrieve attack type : points/name
            let myAction = actions[Math.floor(Math.random() * actions.length)]
            let rivalAction = actions[Math.floor(Math.random() * actions.length)]
            console.log("rival",rivalAction)
            // string for scores
            if(myAction === "heal"){
                this.heal()
                myHealth = this.daysToSpoil 
                console.log(this.daysToSpoil)
                console.log(`${this.name} used HEAL \n${rival.name} ${rivalHealth} ${this.name} ${myHealth}`)   
            }
             if(rivalAction === "heal"){
                rival.heal()
                rivalHealth = rival.daysToSpoil 
                console.log(rival.daysToSpoil)
                console.log(`${rival.name} used HEAL \n${rival.name} ${rivalHealth} ${this.name} ${myHealth}`)  
            }
            
            // My Turn
            else {
                if(myAction === "weapons" && rivalAction !== "block"){
                    const myIndex = Math.floor(Math.random() * this.weapons.length)
                    let myAttackPoints = this.weapons[myIndex].hitPoints
                    let myAttackName = this.weapons[myIndex].name
                    rivalHealth -= myAttackPoints
                
                    console.log(`${this.name} uses ${myAttackName}!! \n${rival.name} is down ${myAttackPoints} \n${rival.name} ${rivalHealth} ${this.name} ${myHealth}`)
                }
                 else if(myAction === "weapons" && rivalAction === "block"){
                    console.log(`${rival.name} has BLOCKED ${this.name}'s attack! \n${rival.name} ${rivalHealth} ${this.name} ${myHealth}`)
                }
                // Rivals Turn
                if(rivalAction === "weapons" && myAction !== "block"){
                const rivalIndex = Math.floor(Math.random() * rival.weapons.length)
                let rivalAttackPoints = rival.weapons[rivalIndex].hitPoints
                let rivalAttackName = rival.weapons[rivalIndex].name
                myHealth -= rivalAttackPoints

                console.log(`${rival.name} uses ${rivalAttackName}!!! \n${this.name} is down ${rivalAttackPoints} \n${rival.name} ${rivalHealth} ${this.name} ${myHealth}`)
            }
             else if(rivalAction === "weapons" && myAction === "block"){
                console.log(`${this.name} has BLOCKED ${rival.name}'s attack! \n${rival.name} ${rivalHealth} ${this.name} ${myHealth}`)
            }

            }
            if(myHealth < 0) {
                this.fresh = false
                return  `Better luck next time, ${rival.name} was better.`
            }
            if(rivalHealth < 0){
                rival.fresh = false
                return `${this.name} is the winner!` 
            }
           
        }
        // return rivalHealth <= 0 ? 
        // `${this.name} is the winner!` : 
        // `Better luck next time, ${rival.name} was better.`
    }  
}

const testDonut = new BadFood("Donut", 12, true, donut)
const testPizza = new BadFood("Pizza", 14, true, pizza)
// console.log(testDonut.prepare(), testPizza.prepare())
console.log(testDonut.fight(testPizza))
// console.log(testDonut.heal(), console.log(testDonut.daysToSpoil))

/* 
    SUPER BONUS ADDITONALS
        - Add a heal method that allows the food to increase daysToSpoil
        - Add block method that allows the food to take 0 damage, no matter what
        - Add an action selector method that randomly chooses between fight, heal and block
        - Add a victory method that announces the victor
        - Create a simple web app that allows you to play as a single or two player by using buttons and seeing status updates
*/