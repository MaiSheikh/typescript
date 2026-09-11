//Task 1: Coin Flip
const flipCoin = () => {
    return new Promise((resolve, reject) => {
        const outcome = Math.random() > 0.5;
        outcome ? resolve("You win!") : reject("You lose!");
    });
};
const coinFlipPlay = async () => {
    try {
        const result = await flipCoin(); 
        console.log(result);
    } catch (error) {
        console.error(error);
    }   
};
coinFlipPlay();


//Task 2: Resolve or Reject
const myPromise = new Promise((resolve, reject) => {
    const success = false

    if (success) {
        resolve("Resolved operation successfully!");
    } else {
        reject("Resolved operation rejected!");
    }
});

const checkPromise = async () => {
    try {
        const result = await myPromise; 
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};
checkPromise();

//Task 3: Delayed Message
const delayedMessage = (message: string, delay: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
};

const checkDelayedMessage = async () => {
    try {
        const result = await delayedMessage("This message is delayed!", 1500); 
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};
checkDelayedMessage();

//Task 4: Fetching Advice

const fetchAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        console.log(data.slip.advice);
    } catch (error) {
        console.log("Error fetching advice:", error);
    }
};

fetchAdvice();

//Task 5: Checking the response
const fetchAdviceById = async (id: number) => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
        if (!response.ok) {
            throw new Error("Fetching didn't work");
        }
        const data = await response.json();
        console.log(data.slip.advice);
    } catch (error) {
        console.log("Error Fetching Advice:", error);
    }
};
fetchAdviceById(56);
//Task 6: Two Fetches in a Row
const fetchTwoAdvices = async () => {
    try {
        const response1 = await fetch("https://api.adviceslip.com/advice");
        const data1 = await response1.json();
        console.log(data1.slip.advice);

        const response2 = await fetch("https://api.adviceslip.com/advice");
        const data2 = await response2.json();
        console.log(data2.slip.advice);
    } catch (error) {
        console.log("Error fetching advices:", error);
    }
};
fetchTwoAdvices();