class Pokemon{
    constructor(name, type = "normal", hitPoints, attackDamage, move){
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move
}

isEffectiveAgainst(pokemon){
   return false
    
}
isWeakTo(pokemon){
    return false
}
takeDamage(damageNum){
this.hitPoints -= damageNum
}

useMove(){
    console.log(`${this.name} used ${this.move}`)
    return this.attackDamage
}
hasFainted(){
    if (this.hitPoints === 0){
        return true
    }
}
}

class Fire extends Pokemon{
    constructor(name, type, hitPoints, attackDamage, move){
    super(name, type, hitPoints, attackDamage, move);
    
    }
    isEffectiveAgainst(pokemon){          
        if (pokemon.type === "grass"){
            return true
        }
        return false
    }
    isWeakTo(pokemon){
        if(pokemon.type === "water"){
            return true
        }
        return false
    }
}

class Grass extends Pokemon{
    constructor(name, type, hitPoints, attackDamage, move){
    super(name, type, hitPoints, attackDamage, move);
    
    }
    isEffectiveAgainst(pokemon){          
        if (pokemon.type === "water"){
            return true
        }
        return false
    }
    isWeakTo(pokemon){
        if(pokemon.type === "fire"){
            return true
        }
        return false
    }
}
class Water extends Pokemon{
    constructor(name, type, hitPoints, attackDamage, move){
    super(name, type, hitPoints, attackDamage, move);
    
    }
    isEffectiveAgainst(pokemon){          
        if (pokemon.type === "fire"){
            return true
        }
        return false
    }
    isWeakTo(pokemon){
        if(pokemon.type === "grass"){
            return true
        }
        return false
    }
}
class Charmander extends Fire{
    constructor( hitPoints, attackDamage){
    super("charmander", "fire", hitPoints, attackDamage,"ember");
    
} 

}
//test
// const charmander = new Charmander(hitPoints,attackDamage)



class Squirtle extends Water{
    constructor( hitPoints, attackDamage){
    super("squirtle", "water", hitPoints, attackDamage,"water gun");
    
} 
}

class Bulbasaur extends Grass{
    constructor( hitPoints, attackDamage){
    super("bulbasaur", "grass", hitPoints, attackDamage,"vine whip");
    
} 
}

class Rattata extends Pokemon{
    constructor(name, type, hitPoints, attackDamage, move){
    super(name, type, hitPoints, attackDamage, move);    
} 
}

class Pokeballs{
    constructor(){
        this.storage = {};

    }
throw(pokemon) {
    if (this.isEmpty()) {
        this.storage = pokemon;
        console.log(pokemon);
        console.log(this.storage, ">>>> tester")
        console.log(pokemon.name, ">>>> pokemon tester");
        return `You have caught ${pokemon.name}`;
    }
    else {
        return `the pokeball is maxed out it has ${this.storage.name} inside it`;
    }
}

isEmpty(){
    if (Object.keys(this.storage).length ===0){
        return true
    } 
    return false
    }

contains(){
if(!this.isEmpty()){
return this.storage.name
}else{
return "empty"
}}

}
class Trainer {
    constructor(){
        this.belt = [new Pokeballs(), new Pokeballs(), new Pokeballs(), new Pokeballs(), new Pokeballs(), new Pokeballs()]
    }



catch(pokemon){
    for(let pokeball of this.belt){
        if(pokeball.isEmpty()){
            return pokeball.throw(pokemon)
        }
        return 'all pokeballs are currently maxed out'
    }

}
getPokemon(pokename){
for(let pokeball of this.belt){
if(pokeball.storage.name === pokename){
    return pokeball.throw()
}
}

}}

class Battle{
    constructor(trainer1, trainer2, pokemon1,pokemon2){
        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.pokemon1 = pokemon1
        this.pokemon2 = pokemon2
}
    fight() {
        while (this.pokemon1.hitPoints > 0 && this.pokemon2.hitPoints > 0) {
            if (this.pokemon1.isEffectiveAgainst(this.pokemon2)) {
                this.pokemon2.takeDamage(this.pokemon1.useMove() * 1.25);
                console.log(`${this.pokemon1.name} used ${this.pokemon1.move} and the damage went in harddddd`);
            }
            else if (this.pokemon1.isWeakTo(this.pokemon2)) {
                this.pokemon2.takeDamage(this.pokemon1.useMove() * 0.75);
                console.log(`${this.pokemon1.name} went in soft :( )`);
            } else {
                this.pokemon2.takeDamage(this.pokemon1.useMove())
            }
            if (this.pokemon2.hasFainted()) {
                console.log(`${this.pokemon2.name} got absolutely KOed!`);
            }

            if (this.pokemon2.isEffectiveAgainst(this.pokemon1)) {
                this.pokemon1.takeDamage(this.pokemon2.useMove() * 1.25);
                console.log(`${this.pokemon2.name} used ${this.pokemon2.move} and the damage went in harddddd`);
            }
            else if (this.pokemon2.isWeakTo(this.pokemon1)) {
                this.pokemon1.takeDamage(this.pokemon2.useMove() * 0.75);
                console.log(`${this.pokemon2.name} went in soft :( )`);
            } else {
                this.pokemon1.takeDamage(this.pokemon2.useMove())
            }
            if (this.pokemon1.hasFainted()) {
                console.log(`${this.pokemon1.name} got absolutely KOed!`);
            }
        }
    }
}

module.exports = {Pokemon, Pokeballs , Trainer, Fire, Water, Charmander, Grass, Squirtle, Bulbasaur, Rattata, Battle}