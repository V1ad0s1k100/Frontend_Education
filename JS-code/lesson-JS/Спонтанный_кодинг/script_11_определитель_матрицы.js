function determinant(m) {
  const size = m.length;

  if (size === 1) {
    return m[0][0];
  } else {
    let det = 0;
    for (let col = 0; col < size; col++) {
      const minor = m.slice(1).map((row) => row.filter((_, i) => i !== col));

      const cofactor = m[0][col] * determinant(minor);

      det += (col % 2 === 0 ? 1 : -1) * cofactor;
    }
    return det;
  }
}

// a * det(a_minor) - b * det(b_minor) + c * det(c_minor)

// console.log(determinant([[1]]));

// console.log(
//   determinant([
//     [1, 2],
//     [3, 4],
//   ])
// );
console.log(
  determinant([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
