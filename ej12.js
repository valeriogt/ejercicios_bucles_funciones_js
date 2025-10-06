const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const found = [];
  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power) {
      found.push(mutants[i].name);
    }
  }
  if (found.length > 0) {
    return `Mutante(s) con el poder "${power}" encontrado(s): ${found.join(', ')}`;
  } else {
    return `No se encontró ningún mutante con el poder "${power}".`;
  }
}

// Pruebas:
console.log(findMutantByPower(mutants, 'telepathy')); // Professor X
console.log(findMutantByPower(mutants, 'magnetism')); // Magneto
console.log(findMutantByPower(mutants, 'flight'));    // No se encontró...
