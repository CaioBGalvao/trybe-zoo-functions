const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const objAnimal = data.species.find((nome) => nome.name === animal);
  return objAnimal.residents.every((especie) => especie.age >= age);
}

module.exports = getAnimalsOlderThan;
