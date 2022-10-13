const data = require('../data/zoo_data');

const { employees, species } = data;

function defaultReturn() {
  return employees.map(({
    id, firstName, lastName, responsibleFor,
  }) => ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: species.filter((animal) => responsibleFor
      .find((ids) => animal.id === ids)).map(({ name }) => name),
    locations: species.filter((animal) => responsibleFor
      .find((ids) => animal.id === ids)).map(({ location }) => location),
  }));
}

function speciesSerch(objectAnimalsId) {
  const animalsName = [];
  objectAnimalsId.forEach((animalsID) => {
    species.find((animals) => ((animals.id === animalsID) ? animalsName
      .push(animals.name) : false));
  });
  return animalsName;
}

function locationSerch(objectAnimalsId) {
  const animalsLocation = [];
  objectAnimalsId.forEach((animalsID) => {
    species.find((animals) => (animals.id === animalsID ? animalsLocation
      .push(animals.location) : false));
  });
  return animalsLocation;
}

function creatObjBySerchNameSurnameId(NameId) {
  const serchEmployeeObj = employees.find((serchData) => serchData.firstName === NameId.name
    || serchData.lastName === NameId.name
    || serchData.id === NameId.id);
  const serchResult = {
    id: serchEmployeeObj.id,
    fullName: `${serchEmployeeObj.firstName} ${serchEmployeeObj.lastName}`,
    species: speciesSerch(serchEmployeeObj.responsibleFor),
    locations: locationSerch(serchEmployeeObj.responsibleFor),
  };
  return serchResult;
}

function employeesCheck(employeeName) {
  if (!employees.some((indentidade) => employeeName.name === indentidade.firstName
  || employeeName.name === indentidade.lastName
  || employeeName.id === indentidade.id)) {
    throw new Error('Informações inválidas');
  }
}

function getEmployeesCoverage(entrada) {
  if (entrada === undefined) {
    return defaultReturn();
  }
  employeesCheck(entrada);
  return creatObjBySerchNameSurnameId(entrada);
}

module.exports = getEmployeesCoverage;
