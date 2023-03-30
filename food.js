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

class BadFood extends Food {
    constructor (name, daysToSpoil, fresh, attack1, attack2, attack3){
        super(name, daysToSpoil,fresh)
        this.weapons = [
            {
                name: attack1,
                hitPoints: 3
            },
            {
                name: attack2,
                hitPoints: 4
            },
            {
                name: attack3,
                hitPoints: 5
            }
        ]
    }
    prepare(){
        console.log(`I am ${this.name}! All your days are numbered. `)
    }
    fight(opponent){
        let attack = Math.floor(Math.random() * this.weapons.length)
        opponent.daysToSpoil -= this.weapons[attack].hitPoints
        console.log(`${this.name} used ${this.weapons[attack].name} and reduced ${opponent.name} lifespan by ${this.weapons[attack].hitPoints} days.`)
        opponent.isFresh()
        if (opponent.fresh){
            let opponentAttack = Math.floor(Math.random() * opponent.weapons.length)
            this.daysToSpoil -= opponent.weapons[opponentAttack].hitPoints
            console.log(`${opponent.name} used ${opponent.weapons[opponentAttack].name} and reduced ${this.name} lifespan by ${opponent.weapons[attack].hitPoints} days.`)
            this.isFresh()
            if(!this.fresh){
                console.log(`${this.name} was defeated.`)
            }
        } else {
            console.log(`${opponent.name} was defeated.`)
        }
    }
    // stats(){
    //     console.log(``)
    // }
}

// Test cases
// const cake = new Food('cake', 3,true)
// console.log(cake)
// cake.isFresh()
// cake.aDayPasses()
// cake.aDayPasses()
// cake.aDayPasses()
// console.log(cake)

// Food Fight test cases
const egg = new BadFood('Egg', 10, true, 'Scramble', 'Beater', 'Rotten egg')
const cheese = new BadFood('Cheese', 12, true, 'Slice', 'Dice', 'Smelly cheese')
console.log(egg)
egg.fight(cheese)
cheese.fight(egg)
egg.fight(cheese)

// Do not edit below this line
module.exports = Food;
