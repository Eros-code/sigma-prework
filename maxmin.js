function maxAndMin(input) {
  var smallest = input[0];

  for (var i = 1; i < input.length; i++) {
    if (input[i] < smallest) {
      smallest = input[i];
    }
  }

  var largest = input[0];

  for (var i = 1; i < input.length; i++) {
    if (input[i] > largest) {
      largest = input[i];
    }
  }

  let maxMinArr = [smallest, largest];

  console.log(maxMinArr);

  return maxMinArr;
}

maxAndMin([2, 4, 1, 0, 2, -1]);
