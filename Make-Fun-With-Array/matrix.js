// Matrix example
const matrixA = [
  [1, 3, 7, 2, 1, 9],
  [3, 3, 5, 2, 1, 9],
  [5, 2, 8, 2, 1, 9],
];
const matrixB = [
  [3, 2, 3, 2, 1, 9],
  [6, 2, 4, 2, 1, 9],
  [7, 1, 7, 2, 1, 9],
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
console.log("Sum matrix", matrixC);

const matrixD = [
  [1, 3, 7, 8],
  [3, 3, 5, 5],
  [5, 2, 8, 9],
];

const matrixE = [
  [3, 2, 3, 9],
  [6, 7, 8, 7],
  [7, 9, 7, 9],
];

const matrixMul = (matrixD, matrixE) => {
  const result = [];
  for (let i = 0; i < matrixD.length; i++) {
    const row = [];
    for (let j = 0; j < matrixD[i].length; j++) {
      row.push(matrixD[i][j] * matrixE[i][j]);
    }
    result.push(row);
  }
  return result;
};

const matrixF = matrixMul(matrixD, matrixE);
console.log("Multiply matrix", matrixF);
