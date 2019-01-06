module.exports = function dogs(callback) {
    let beagle = {
        name: 'Barney',
        breed: 'Beagle',
        speak: () => `\nNo! ${beagle.name} says... woof! 🐾`
    }
    
    console.log(`🐶 ${beagle.name}'s Greetings`);

    /**
     * Callback retorna
     * 1. Frase com a raça do cão
     * 2. Resultado do método speak 
     */
    callback(`This dog's breed is ${beagle.breed} and it's saying...`, beagle.speak());
}