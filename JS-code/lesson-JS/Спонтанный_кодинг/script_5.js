
// ФУНКЦИЯ ДЛЯ ПОИСКА ТОП-3 СЛОВА В ПРЕДЛОЖЕНИИ (KYU 4 НА CODEWARS НАЗВАНИЕ "Most frequently used words in a text")

function topThreeWords(text) {
    if (text.length === 0) {
        return [];
    }

    // Преобразование текста в нижний регистр и замена ненужных символов на пробелы
    text = text.toLowerCase().replace(/[^a-zA-Z']/g, ' ');

    // Разделение текста на слова
    const words = text.split(/\s+/).filter(word => word.length > 0);

    // Подсчет количества вхождений каждого слова
    const wordCounts = {};
    words.forEach(word => {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    // Сортировка слов по количеству вхождений и возврат топ-3
    const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);
    return sortedWords.slice(0, 3);
}

console.log(topThreeWords("In a # village of # La Mancha, # the name of which I have no desire / to / call to / mind \, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."));
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
console.log(topThreeWords("  //wont won't won't"));

console.log(topThreeWords(" Hello Babe how are your business? Hello again Babe, you know your hair just a gun, I would like you to be Babe with me"));