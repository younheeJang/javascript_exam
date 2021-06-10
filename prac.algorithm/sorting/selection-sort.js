const numbers = [9, 3, 2, 1];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    //set current index as minimum:
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
}
