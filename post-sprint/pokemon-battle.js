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
    constructor(name, type, hitPoints, attackDamage){
    super(name, type, hitPoints, attackDamage,"ember");
    
} 
}


class Squirtle extends Water{
    constructor(name, type, hitPoints, attackDamage){
    super(name, type, hitPoints, attackDamage,"water gun");
    
} 
}

class Bulbasaur extends Grass{
    constructor(name, type, hitPoints, attackDamage){
    super(name, type, hitPoints, attackDamage,"vine whip");
    
} 
}

class Rattata extends Pokemon{
    constructor(name, type, hitPoints, attackDamage, move){
    super(name, type, hitPoints, attackDamage, move);    
} 
}

class Pokeballs{
    constructor(){
        this.storage =0;

    }
throw(pokemon){
    if(this.isEmpty() === true){
        console.log(`you caught the pokemon ${this.name}` )
    }else{
        console.log(`the pokeball is maxed out it has ${this.storage.name} inside it`)
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
        this.belt = [new Pokeballs, new Pokeballs, new Pokeballs, new Pokeballs, new Pokeballs, new Pokeballs]
    }



catch(pokemon){
    for(const pokeball of this.belt){
        if(pokeball.isEmpty()){
            return pokeball.throw()
        }
    }
    console.log('all pokeballs are currently maxed out')

}}
// getPokemon(pokename){
// for(const pokeball of this.belt){

// }

// }

module.exports = {Pokemon, Pokeballs , Trainer}