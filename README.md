# Linear-Algebra-tools
Tools for doing some linear Algebra
Use:

    const A = new Matrix([
      [1, 5, 6],
      [0, 1, -2],
      [10, 3, 2]
    ]);

    const B = new Matrix([
      [0, 1, 0],
      [1, 2, 3],
      [2, 10, 4]
    ]);

    const C = new Matrix([
      [5, 0, 5, 1],
      [2, -2, 1, -1],
      [0, 3, 1, 2]
    ])
    
#Usage
  #Adition:
      A.add(B);
    
  #Subtraction:
      B.sub(A);
    
  #Scaler multiplication:
      A.scaler(2);
      A.scaler(-1).add(B.scaler(3));
    
  #Multiplication:
      A.add(C);    
