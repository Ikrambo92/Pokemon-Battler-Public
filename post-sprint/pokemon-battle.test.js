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
            console.log(testPokemon)
            //console.log(testPokemon2)
    
            expect(testPokemon.isWeakTo(testPokemon2)).toBe(true)
    });
    test('returns the passed pokemone if pokeball is empty ', () => {
        
        const testPokeball = new Pokeballs()

        const testPokemon = new Pokemon("pika","fire", 100, 30, "whip")
        testPokeball.throw(testPokemon)
        testPokeball.storage
        expect(testPokeball.storage).toEqual(testPokemon)
    });
    test('isEmpty() returns true if storage is empty ', () => {
        
        const testPokeball = new Pokeballs()

        console.log(testPokeball.storage)
        expect(testPokeball.isEmpty()).toBe(true)
    });
    // test.only('returns the passed pokemone if pokeball is empty ', () => {
        
    //     const testPokeball = new Pokeballs()

    //     // expect(testPokeball.isEmpty()).toBe(true)
    //     // console.log(expect(testPokeball.isEmpty()).toBe(true))
    //     const testPokemon ={}
    //     console.log(testPokemon)
    //     expect(testPokeball.throw(testPokemon)).toBe(`you caught the pokemon `)
    // });
});