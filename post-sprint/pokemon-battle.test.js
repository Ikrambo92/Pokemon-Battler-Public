const { Pokemon, Pokeballs, Trainer } = require("./pokemon-battle");

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
    test('returns', () => {
        
    });
});