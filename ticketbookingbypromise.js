let Ticket = true;

function BookTicket() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Ticket === true) {
                resolve("Ticket booked successfully");
            } else {
                reject("Ticket not available");
            }
        }, 2000);
    });
}

BookTicket()
    .then(value => console.log(value))
    .catch(error => console.log(error));
