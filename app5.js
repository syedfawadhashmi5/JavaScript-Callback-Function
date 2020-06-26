// const data =  fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>{
//     console.log(data)

// })


async function getapi() {

    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await api.json()
    console.log(json)
    console.log(api);

}

getapi()