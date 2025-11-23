function firstPromise() {
    return new Promise((resolve, reject) => {
        let pass = true;

        setTimeout(() => {
            if (pass) {
                resolve("First promise resolved");
            } else {
                reject("First promise rejected");
            }
        }, 2000);
    });
}

function secondPromise() {
    return new Promise((resolve, reject) => {
        let ok = false;

        setTimeout(() => {
            if (ok) {
                resolve("Second promise resolved");
            } else {
                reject("Second promise rejected");
            }
        }, 2000);
    });
}

firstPromise()
    .then(first => {
        console.log(first);
        return secondPromise();  // only runs if first resolved
    })
    .then(second => {
        console.log(second);
    })
    .catch(err => console.log("Error:", err));
