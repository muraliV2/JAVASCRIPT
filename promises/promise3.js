const subject = () => new Promise((resolve) => {
    setTimeout(()=>
    {
    resolve("prathish masters SQL")
    })
});

let studied = true;

let study = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (studied) {
            resolve("prathish studied");
        } else {
            reject("prathish not studied");
        }
    }, 2000);
});

study()
    .then((value) => {
        console.log(value);
        return subject(); 
    })
    .then((sub) => {
        console.log(sub);
    })
    .catch(err => console.log(err));
