function getdata() {
    const getdata = new Promise((resolve, reject) => {
        let Roll_Number = [1, 2, 3, 4, 5];
        setTimeout(() => {
            resolve(Roll_Number);
            // reject(`sorry we are temporarily closed`);
        }, 3000)
    })

    getdata.then((getobj) => {
        console.log(getobj);
    }).catch((error) => {
        console.log(error)
    })
}