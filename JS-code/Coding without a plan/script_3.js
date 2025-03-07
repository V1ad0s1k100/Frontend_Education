/* var optimumLocation = function(students, locations){
    let coordX
    let coordY
    let minValueX
    let minValueY
    let idMinValues
    const studentsRec = students.length

    for (const student of students) {
        coordX += student[0]
        coordY += student[1]
    }

    coordX /= studentsRec // Высчитываем среднее значение для X
    coordY /= studentsRec // Высчитываем среднее значение для Y

    for (let i = 0; i<locations.length; i++) {
        if (i !== 0 && Math.abs(locations[i-1].x - coordX) < minValueX && Math.abs(locations[i-1].y - coordY) < minValueY) {
            minValueX = locations[i-1].x
            minValueY = locations[i-1].y
            idMinValues = locations[i-1].id
            console.log("Iteration")
        } else {
            minValueX = locations[i].x
            minValueY = locations[i].y
            idMinValues = locations[i].id 
        }
    }

    return `The best location is number ${locations[idMinValues - 1].id} with the coordinates x = ${minValueX} and y = ${minValueY}`
}

console.log(optimumLocation(
    [[3,7],[2,2],[14,1]], 
    [{id: 1, x: 3, y: 4}, {id: 2, x: 8, y: 2}]
)) */

var optimumLocation = function(students, locations) {
    let coordX
    let coordY
    let minDistance
    let bestLocation
    const studentsRec = students.length;

    for (const student of students) {
        coordX += student[0];
        coordY += student[1];
    }

    coordX /= studentsRec; // Высчитываем среднее значение для X
    coordY /= studentsRec; // Высчитываем среднее значение для Y

    for (const location of locations) {
        let totalDistance = 0;
        for (const student of students) {
            totalDistance += Math.abs(student[0] - location.x) + Math.abs(student[1] - location.y);
        }
        if (totalDistance < minDistance) {
            minDistance = totalDistance;
            bestLocation = location;
        }
    }

    return `The best location is number ${bestLocation.id} with the coordinates x = ${bestLocation.x} and y = ${bestLocation.y}`;
};

// Пример использования
var students = [[3, 7], [2, 2], [14, 1]];
var locations = [{id: 1, x: 3, y: 4}, {id: 2, x: 8, y: 2}];
console.log(optimumLocation(students, locations));