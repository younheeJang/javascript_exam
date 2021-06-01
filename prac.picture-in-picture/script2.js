const array = [
  ['start', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'x'],
  ['x', 'x', 'o', 'o'],
  ['o', 'o', 'o', 'goal']
];
function printRoad(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === 'x') {
      } else {
        if(array[i])
        console.log(array[i][j], i,j);
      }
    }
  }
}

printRoad(array);

