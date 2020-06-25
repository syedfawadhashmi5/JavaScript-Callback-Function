const fun2 = () => {

    console.log("fun2 This is SYCHRONOUS");
}


const fun1 = () => {
    console.log("fun1 is start");
    fun2()
    console.log("fun1 is end");
}

