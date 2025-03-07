class PrintEditionItem {
  #state = 100;
  #type = null;

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.#fix();
  }

  #fix() {
    this.state *= 1.5;
  }

  set state(num) {
    if (num < 0) {
      this.#state = 0;
    } else if (num > 100) {
      this.#state = 100;
    } else {
      this.#state = num;
    }
  }

  get state() {
    return this.#state;
  }
}

const testObj = new PrintEditionItem("Владислав", "12.12.2025", 20);

testObj.state = 200;

console.log(testObj.state);

console.log(testObj);

class Magazine extends PrintEditionItem {
  #type = "magazine";
}

const testObj_1 = new Magazine("Владислав", "12.12.2025", 20);

console.log(testObj_1);
