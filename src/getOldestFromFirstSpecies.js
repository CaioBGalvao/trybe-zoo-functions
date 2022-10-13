const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const dependentsId = employees.find((employeeId) => employeeId.id === id).responsibleFor;
  const fistId = dependentsId[0];
  const objFistAnimal = species.filter((animals) => animals.id === fistId);
  const animalsResidents = objFistAnimal.find((key) => key.residents);
  const sortedAnimalsResidents = animalsResidents.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(sortedAnimalsResidents);
}
module.exports = getOldestFromFirstSpecies;
