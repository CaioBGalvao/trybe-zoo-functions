const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let objEmployee = {};
  if (typeof employeeName === 'string') {
    objEmployee = data.employees.find(
      (name) => name.firstName === employeeName || name.lastName === employeeName,
    );
  }
  return objEmployee;
}

module.exports = getEmployeeByName;
