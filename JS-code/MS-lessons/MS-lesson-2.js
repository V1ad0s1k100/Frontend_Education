function numberFunction (number) {
    if(number === 1) {
        function displayGreeting1(num) {
            console.log(`${num}) Hello, world!`);
        }
        displayGreeting1(number)
        // Output: Hello, world!
    }  
    if(number === 2) {
        // function with a parameter called name
        function displayGreeting2(name, num) { 
            // creating a new local variable that inserts the name into a string   
            const message = `Hello, ${name}!`; 
            // printing the variable to the console
            console.log('2) ' + message);
        }
        displayGreeting2('Christopher', number);
        // displays "Hello, Christopher!" when run
    }
    if(number === 3) {
        function displayGreeting3(name, salutation='Hello', num) {
            console.log(`${num}) ${salutation} ${name}`);
        }
        displayGreeting3('Christopher', 'Hi', number);
    }
    if(number == 4) {
        function createGreetingMessage(name, num) {
            return `${num}) ${name}`;
        }
        let greetingMessage = createGreetingMessage('Christopher', number);
            console.log(greetingMessage);
    }
}
for(let i = 1; i<4; i++) {
    numberFunction(i);
}
function displayDone() {
    console.log('Done!');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);

setTimeout(
    function() { // anonymous function
        console.log('Done!');
    }, 3000
)
setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)
// Используем тернарный оператор для проверки условия 1000 > 100
let testMessage = 1000 > 100 ? "Yes" : "No";