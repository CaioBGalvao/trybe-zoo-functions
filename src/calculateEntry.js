const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child = entrants.filter((ageToFind) => ageToFind.age < 18);
  const adult = entrants.filter((ageToFind) => ageToFind.age >= 18 && ageToFind.age < 50);
  const seniors = entrants.filter((ageToFind) => ageToFind.age >= 50);
  const objReturn = { child: child.length, adult: adult.length, senior: seniors.length };
  return objReturn;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.values(entrants).length === 0) {
    return 0;
  }
  const objReturn = countEntrants(entrants);
  const childPrice = objReturn.child * prices.child;
  const adultPrice = objReturn.adult * prices.adult;
  const seniorPrice = objReturn.senior * prices.senior;
  return childPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
