function fetchNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 10);
            if (num > 5) {
                resolve(num);
            } else {
                reject("Number too small");
            }
        }, 1000);
    });
}

fetchNumber()
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Error:", error));
