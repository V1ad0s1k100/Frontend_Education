/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    salariesFn() {
        let sumSalaries = 0
        for (let key in this) {
            if (key !== 'salariesFn') {
                sumSalaries += this[key]
            }
        }
        return sumSalaries
    }
}

console.log(salaries.salariesFn())


console.log('-'.repeat(50))

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2 
        }
    }
    return obj 
}

console.log(multiplyNumeric(menu))


console.log('-'.repeat(50))

countSandwiches = (obj) => {
    if (obj.bread % 2 === 1) {
        obj.bread--
    }

    obj.bread /=2

    if (obj.bread <= obj.cheese) {
        return obj.bread
    } 

    if (obj.bread > obj.cheese && obj.cheese != 0) {
        return obj.cheese
    } else {
        return 0
    }
}

console.log(countSandwiches({bread: 2, cheese: 6}))

console.log('-'.repeat(50))

convertTemp = (temperature, translationScale) => {
    return translationScale === 'toC' ? (5/9) * (temperature - 32) : (9/5) * temperature + 32
}

console.log(convertTemp(100, 'toC'))
console.log(convertTemp(100, 'toF'))




console.log('-'.repeat(50))

const city1 = {
    name : 'ГородN',
    population: 10_000_000,
    getName() {
        return this.name 
    },
    exportStr() {
        return `${this.name}\npopulation=${this.population}\n`
    },
}

const city2 = {
    name: "ГородM", 
    population: 1_000_000,
    getName() {
        return this.name 
    },
    exportStr() {
        return `${this.name}\npopulation=${this.population}\n`
    },
}

const obj = {
    method1() {
        console.log('метод1')
        return this
    },
    method2() {
        console.log('метод2')
        return this
    },
    method3() {
        console.log('метод3')
        return this
    },
}

d1 = [45,78,10,3]
d1[7] = 100
console.log(d1, d1[6], d1[7])

d2 = [45,78,10,3]

d3 = [45,78,10,3]
d3[7] = 100

sumElementsArray = (arr) => {
    let sumElements = 0
    for (let key in arr) {
        sumElements += arr[key]
    }
    return sumElements
}

createTwoDimensionalArray = (size, sizeLine, element) => {
    const mainArray = []
    for (let i = 0; i < sizeLine; i++) {
        mainArray[i] = []
        for (let a = 0; a < size; a++) {
            mainArray[i][a] = element
        }
    }
    return mainArray
}

obj.method1().method2().method3()

console.log(sumElementsArray(d2), sumElementsArray(d3))
console.log(createTwoDimensionalArray(5, 5, 5))

*/






/*

function solve(n) {
    const mainArray = [];
    let countNum = 0;

    for (let i = 0; i < n; i++) {
        mainArray[i] = [];

        for (let a = 0; a <= countNum; a++) {
            if (a === 0) {
                mainArray[i].push(1n);
            } 
            
            else if (a < countNum && countNum != 0) {
                mainArray[i].push(mainArray[i - 1][a] + mainArray[i][a - 1]);
            } else {
                mainArray[i].push(mainArray[i][a - 1]);
            }
        }
        countNum++;
    }

    let sumLastElements = 0n;

    for (let element of mainArray[mainArray.length - 1]) {
        sumLastElements += element;
    }

    return sumLastElements
}

console.log(solve(5)); // 42


*/



function passwordGen() {
    const symbolsNumber = '1234567890';
    const symbolLowers = 'abcdefghijklmnopqrstuvwxyz';
    const symbolUppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const allSymbols = [symbolsNumber, symbolLowers, symbolUppers];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let password = '';
    let passwordLength = getRandomInt(6, 20);

    for (let i = 0; i < passwordLength; i++) {

        // Сперва выбираем массив из массива allSymbols 
        const symbolSet = allSymbols[getRandomInt(0, allSymbols.length - 1)];

        // Выбираем элемент из выбранного массива
        password += symbolSet[getRandomInt(0, symbolSet.length - 1)];
    }

    return password;
}

for (let i = 0; i < 10; i++) {
    console.log(passwordGen())
}