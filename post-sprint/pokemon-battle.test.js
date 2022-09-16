const { expect } = require("expect");
const {Pokemon, Pokeballs , Trainer, Fire, Water, Charmander, Grass, Squirtle, Bulbasaur, Rattata} = require("./pokemon-battle");

describe('Pokemon', () => {
    test('returns the pokeman name property', () => {
        //act
        // const name = "pika"
        //arrange
        const testPokemon = new Pokemon('pika')
        //assert
        expect(testPokemon.name).toBe("pika")
    });
    test('returns normal if the pokemon type property is not changed', () => {
        const testPokemon = new Pokemon()

        console.log(testPokemon)
        expect(testPokemon.type).toBe("normal")
    });
    test('returns the pokemon type property', () => {
        const testPokemon = new Pokemon("", "fire")

        console.log(testPokemon)
        expect(testPokemon.type).toBe("fire")
    });
    test('returns false when passed pokemon with type equal to normal', () => {
        const testPokemon = new Charmander (100, 20)
        const testPokemon2 = new Squirtle (100, 20)
        console.log(testPokemon)
        //console.log(testPokemon2)

        expect(testPokemon.isEffectiveAgainst(testPokemon2)).toBe(false)

    });
    test('return true to see if pokemon is weakto second pokemon', () => {
            const testPokemon = new Charmander (100, 20)
            const testPokemon2 = new Squirtle (100, 20)
            testPokemon
            //console.log(testPokemon2)
    
            expect(testPokemon.isWeakTo(testPokemon2)).toBe(true)
    });

    test('isEmpty() returns true if storage is empty ', () => {
        
        const testPokeball = new Pokeballs()
        
        console.log(testPokeball.storage)
        expect(testPokeball.isEmpty()).toBe(true)
    });

    test('returns value of storage once pokemon has been added to pokeball', () => {
        
        const testPokeball = new Pokeballs()

        const testPokemon = new Pokemon("pika","fire", 100, 30, "whip")
        console.log(testPokemon)
        console.log(testPokeball)
        console.log(testPokeball.throw(testPokemon))
        testPokeball.throw(testPokemon)

        expect(testPokeball.storage).toBe(testPokemon);
    });

    test('returns pokemon is caught if pokeball is empty', () => {
        
        const testPokeball = new Pokeballs()

        const testPokemon = new Pokemon("pika","fire", 100, 30, "whip")
        console.log(testPokemon)
        console.log(testPokeball)

        expect(testPokeball.throw(testPokemon)).toBe('You have caught pika')
    });

    test('returns pokemon is caught if pokeball is empty', () => {
        
        const testPokeball = new Pokeballs()

        const testPokemon = new Pokemon("pika","fire", 100, 30, "whip")
        console.log(testPokemon)
        console.log(testPokeball)
        testPokeball.throw(testPokemon)
        
        expect(testPokeball.throw(testPokemon)).toBe(
            "the pokeball is maxed out it has pika inside it");
        });
        
        test('should return name if contains() is not empty', () => {
            const testPokeball = new Pokeballs;
            const testPokemon = new Pokemon("pika","fire", 100, 30, "whip")
            testPokeball.throw(testPokemon)
            expect(testPokeball.contains()).toBe("pika")    
        });
        
        test('should return empty if contains() is empty', () => {
            const testPokeball = new Pokeballs();
            expect(testPokeball.contains()).toBe("empty")
        });
        
        test('should catch pokemon if pokeball in belt is empty', () => {
            const trainer = new Trainer();
            const testPokemon = new Pokemon("pika","fire", 100, 30, "whip")
            trainer.catch(testPokemon)
            expect(trainer.belt[0].storage).toBe(testPokemon)
        });
        
        test('should max out when pokeball in belt is filled', () => {
        const trainer = new Trainer();
        const testPokemon = new Pokemon("pika","fire", 100, 30, "whip")
        const testPokemon1 = new Pokemon("pika","fire", 100, 30, "whip")
        const testPokemon2 = new Pokemon("pika","fire", 100, 30, "whip")
        const testPokemon3 = new Pokemon("pika","fire", 100, 30, "whip")
        const testPokemon4 = new Pokemon("pika","fire", 100, 30, "whip")
        const testPokemon5 = new Pokemon("pika","fire", 100, 30, "whip")
        const testPokemon6 = new Pokemon("pika","fire", 100, 30, "whip")
        trainer.catch(testPokemon, testPokemon1, testPokemon2, testPokemon3, testPokemon4, testPokemon5)
        const result = trainer.catch(testPokemon6);
        expect(result).toBe("all pokeballs are currently maxed out");
        
    });


});
