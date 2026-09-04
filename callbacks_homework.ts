//Hello Callback
type helloFunction = (message: string) => void;

const sayHello = (callback: helloFunction) => {
    const message = "Hello from callback!";
    callback(message);
}

sayHello((msg) => console.log(msg));

//Delayed greeting
const sayHelloLater = (callback: helloFunction, delay: number) => {
    setTimeout(() => {
        const message = "Hi, I'm late!";
        callback(message);
    }, delay);
}

sayHelloLater((msg) => console.log(msg), 2000);

//Math callback
type mathFunction = (result: number) => void;
const addNumbers = (a: number, b: number, callback: mathFunction) => {
    const result = a + b;
    callback(result);
    
};
addNumbers(5, 10, (res) => console.log("The sum is: " + res));
//  Uppercase Callback
type uppercaseFunction = (result: string) => void;
const convertToUppercase = (str: string, callback: uppercaseFunction) => {
    const result = str.toUpperCase();
    callback(result);
};
convertToUppercase("this message should be uppercase", (res) => console.log(res));
//Pizza Order
type orderStatusFunction = (status: string) => void;
const orderPizzaWithDelay = (callback: orderStatusFunction) => {
    console.log(`Ordering a  pizza...`);    
    setTimeout(() => {
        const status = `Your pizza is ready!`;
        callback(status);
    }, 3000);
};
orderPizzaWithDelay((status) => console.log(status));