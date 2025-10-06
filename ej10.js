const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  } else {
    return 'No tenemos información sobre la capital de ' + country;
  }
}

// Pruebas:
console.log(getCapital('France')); // Paris
console.log(getCapital('Brazil')); // No tenemos información sobre la capital de Brazil
v
