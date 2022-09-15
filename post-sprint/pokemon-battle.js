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
        this.storage ={};

    }
throw(pokemon){
    if(this.isEmpty() === pokemon){
        console.log(`you caught the pokemon ${this.name}` )
    }else{
        console.log(`the pokeball is maxed out it has ${this.storage.name} inside it`)
    }
if(pokemon === undefined && !this.isEmpty()){
    console.log(`go ${this.storage.name}`)
}
}

isEmpty(){
    return this.storage === 0
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
            return pokeball.throw()
        }
    }
    console.log('all pokeballs are currently maxed out')

}
getPokemon(pokename){
for(let pokeball of this.belt){
if(pokeball.storage[0] === pokename){
    return pokeball.throw()
}
 }

}}

module.exports = {Pokemon, Pokeballs , Trainer, Fire, Water, Charmander, Grass, Squirtle, Bulbasaur, Rattata}