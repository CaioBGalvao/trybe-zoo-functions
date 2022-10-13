const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((funcionários) => funcionários.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const arrayDeEmployeesFiltrados = employees.filter(
      (funcionarioParaFiltro) => funcionarioParaFiltro.managers.includes(managerId),
    );

    return arrayDeEmployeesFiltrados.map((nomes) => `${nomes.firstName} ${nomes.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
