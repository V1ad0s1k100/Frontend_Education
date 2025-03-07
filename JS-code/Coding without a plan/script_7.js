function manipulate(num) {
  const stringNum = String(num).split("");
  console.log(stringNum);
  if (stringNum.length % 2 === 1) {
    const mediumIndex = Math.floor(stringNum.length / 2);
    console.log("mediumIndex:", mediumIndex);
    const newNum = stringNum.map((element, index) => {
      if (index >= mediumIndex) {
        return "0";
      }
      return element;
    });
    return Number(newNum.join(""));
  } else {
    return 0;
  }
}

console.log(manipulate(8173648710293847));
