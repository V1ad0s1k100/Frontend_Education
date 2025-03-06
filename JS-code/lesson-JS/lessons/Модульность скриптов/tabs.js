export const tabsSelectors = { furfurfur: 987 }

const tabsData = { data: 'data' }

const tabsSelectors2 = { blomblomblom: 12345 }

export default function () {
  console.log(`initTabs!`)
}

// Вызов функции делается в файле main.js

// initTabs()

// Можно экспортировать переменные и функции все сразу. Для этого их нужно перечислить через запятую в фигурных скобках после ключевого слова export.

export { tabsData, tabsSelectors2 }

// Экспорт selectors из модуля не вызовет ошибку в случае если его переименовать во время импорта. Иначе ошибку вызовет попытка импорировать переменную с именем, которое уже имеется в модуле.

// const selecrors = { selecrors: 123 }

// Переменную можно переименовать во время экспорта или импорта, добавив после нее as и новое имя.

// export { selecrors as tabsSelectors3 }

// export { selecrors }
