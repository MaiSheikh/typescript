//  Order Confirmation

type OrderCallback = () => void;

const placeOrder =(item: string, callback:OrderCallback )=> {
    console.log(`Order placed for ${item}`);
    callback();
};
placeOrder("Pizza", () => {
    console.log("Thanks for your order!");
});

//Sum with a Named Type
type SumCallback = (result: number) => void;
const sumNumbers = (a: number, b: number, callback: SumCallback) => {
    const result = a + b;
        callback(result);
};

sumNumbers(5, 3, (result) => {
    console.log(result);
});


//Countdown Timer
const countdown = (seconds: number, callback:() => void) => {;  
     setTimeout(() => {
        console.log("Time's up!");
        callback();
    }, seconds * 1000);
};
console.log("Before countdown");

countdown(3, () => console.log("Countdown finished."));

console.log("After countdown");
// output:
// Before countdown
// After countdown
// Time's up!
// Countdown finished.
//because the countdown is asynchronous, so the code after countdown runs before the callback after 3 seconds.


//Delayed Greeting
const delayedGreeting = (name: string, delay: number, callback: () => void) => {
    setTimeout(() => {
        console.log(`Hi ${name}, thanks for waiting!`);
        callback();
    }, delay);
};

delayedGreeting("Mai", 1500, () => {
    console.log("Callback executed!");
});

//Temprature Converter
type convertCallback = (celsius: number) => number
const convertTemperature = (celsius: number, callback: convertCallback) => {
return callback(celsius);
};
const fahrenheit = convertTemperature(20, (celsius) => {
   return (celsius * 9/5) + 32;
  
});

const kelvin = convertTemperature(20 ,(celsius) => {
    return celsius + 273.15;   

});     
console.log(`20°C is equal to ${fahrenheit}°F`);
console.log(`20°C is equal to ${kelvin}K`);

//Array  processer with return value
type ReduceCallback = (accumulator: number, current: number) => number;
const processNumbers = (arr: number[], callback: ReduceCallback): number => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = callback(total, arr[i]);
    }
    return total;
};
const total = processNumbers(
    [5, 8, 3, 7, 2],
    (accumulator, current) => accumulator + current
);

console.log(total);
// My own promise
    const inStock = false;
const checkStock = new Promise((resolve, reject    ) => {
    console.log("Checking stock...");
    if (inStock) {
        resolve("Item is in stock");
    } else {
        reject("Item not in stock");
    }
});
console.log("Promise created");

checkStock
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

//A different advice slip

const fetchAdviceAndLog = (id: number) => {
    const data = fetch(`https://api.adviceslip.com/advice/${id}`);

    data.then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(`ID ${data.slip.id}: ${data.slip.advice}`);
    })
    .catch((error) => {
        console.error("Error fetching advice:", error);
    });
};
fetchAdviceAndLog(2);
fetchAdviceAndLog(5);
fetchAdviceAndLog(10);