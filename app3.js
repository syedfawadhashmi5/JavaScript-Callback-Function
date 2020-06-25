const fun4 = () => {

    setTimeout(() => {

        console.log("fun4 This is ASYCHRONOUS");

    }, 3000)


}


const fun5 = () => {
    console.log("fun5 is start");
    fun4()
    console.log("fun5 is end");
}

