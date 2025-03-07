function sumTwoSmallestNumbers(numbers) {  
    const minNumberOne = Math.min(...numbers)
    const minListOne = numbers.filter(minNumberOne)
    return minNumberOne + Math.min(...minListOne)
}