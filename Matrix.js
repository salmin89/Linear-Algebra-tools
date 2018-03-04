class Matrix {
  constructor(data) {
    this.rows = data.length;
    this.cols = data[0].length;
    this.data = data;

    // Set values
    data.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        this['a' + (rowIndex + 1) + (colIndex + 1)] = col;
      });
    });
  }
}

/**
 * Adition
 * @param {class Matrix} matrix 
 */
Matrix.prototype.add = function (matrix) {
  let newMatrix = [];

  for (let r = 1; r <= this.rows; r++) {
    let newRow = [];
    for (let c = 1; c <= this.cols; c++) {
      let newValue = this['a' + r + c] + matrix['a' + r + c];
      newRow.push(newValue);
    }
    newMatrix.push(newRow);
  }

  return new Matrix(newMatrix);
};

/**
 * Subtraction
 * @param {class Matrix} matrix 
 */
Matrix.prototype.sub = function (matrix) {
  let newMatrix = [];

  for (let r = 1; r <= this.rows; r++) {
    let newRow = [];
    for (let c = 1; c <= this.cols; c++) {
      let newValue = this['a' + r + c] - matrix['a' + r + c];
      newRow.push(newValue);
    }
    newMatrix.push(newRow);
  }

  return new Matrix(newMatrix);
}

/**
 * Scalar Multiplication
 * @param {Coefficient} k 
 */
Matrix.prototype.scaler = function (k) {
  let newMatrix = [];

  for (let r = 1; r <= this.rows; r++) {
    let newRow = [];
    for (let c = 1; c <= this.cols; c++) {
      let newValue = k * this['a' + r + c];
      newRow.push(newValue);
    }
    newMatrix.push(newRow);
  }
  return new Matrix(newMatrix);
}

/**
 * Multiplication
 * @param {class Matrix} matrix 
 */
Matrix.prototype.multiply = function (matrix) {
  if (this.cols !== matrix.rows) return alert("different sizes!");

  // Multiply A-rows with B-cols
  const multiplyRowsAndCols = (row, col) => {
    let rowSum = 0;
    for (let i = 1; i <= this.rows; i++) {
      rowSum += this['a' + row + i] * matrix['a' + i + col];
    }
    return rowSum;
  }

  let newMatrix = [];

  for (let c = 1; c <= this.cols; c++) {
    let newRow = [];
    for (let r = 1; r <= matrix.cols; r++) {
      newRow.push(multiplyRowsAndCols(c, r));
    }
    newMatrix.push(newRow);
  }

  return new Matrix(newMatrix);
}