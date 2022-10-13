const data = require('../data/zoo_data');

const arrayWithAnimals = data.species;

function noParamFunction() {
  const defaultReturn = {};
  arrayWithAnimals.forEach((objectToRead) => {
    defaultReturn[objectToRead.name] = objectToRead.residents.length;
  });
  return defaultReturn;
}

function numberOfResidentsForNameAndSex(animalToCount) {
  const animalFound = arrayWithAnimals.find((animalToLookTheName) => animalToLookTheName.name
    .includes(animalToCount.specie));
  const totalResidents = animalFound.residents.length;
  if (animalToCount.sex === 'female') {
    return animalFound.residents.filter((femaleToFind) => femaleToFind.sex === 'female').length;
  }
  if (animalToCount.sex === 'male') {
    return animalFound.residents.filter((maleToFind) => maleToFind.sex === 'male').length;
  }
  return totalResidents;
}

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    return noParamFunction();
  }
  return numberOfResidentsForNameAndSex(animal);
}

module.exports = countAnimals;
