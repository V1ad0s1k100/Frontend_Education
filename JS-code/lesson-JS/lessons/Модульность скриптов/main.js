// Стоит осторожней пользоваться дефолтными экспортами, так как они могут быть переопределены в других файлах
// В данном случае, если в другом файле будет дефолтный экспорт, то мы сможем менять названия этой главной функции

import initTabs, { tabsData } from './tabs.js'
import initModals from './modals.js'
import initSliders from './sliders.js'

// Если подключить файл с type="module", то к нему можно будет обратиться только один раз

initTabs()
initModals()
initSliders()

// import logCat, { a, b, c } from './constants.js'
// import * as constants from './constants'
//
// console.log('\nВыполнение кода из constants.js')
//
// console.log('Constants:', constants)
//
// console.log(constants.a)
// console.log(constants.b)
// console.log(constants.c)
//
// constants.logCat()
//
// console.log('\n')

// Для лучшей работы с моделями лучше не изменять переменные внутри модуля, а только их использовать
// Делать это стоит поскольку файлы могут быть подключены в разных местах и изменение переменных может привести к ошибкам
