// Matrix example
const matrixA = [
  [1, 3, 7],
  [3, 3, 5],
  [5, 2, 8],
];
const matrixB = [
  [3, 2, 3],
  [6, 2, 4],
  [7, 1, 7],
];

const matrixSum = (matrixA, matrixB) => {
  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
};

const matrixC = matrixSum(matrixA, matrixB);
console.log(matrixC);
