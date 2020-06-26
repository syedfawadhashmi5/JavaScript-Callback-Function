

// its a pending sate

// const data =  fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>{
//     console.log(data)

// })


async function getapi() {

    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await api.json()
    console.log(json)
    console.log(api);

}

async function postapi() {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
          title: 'bootcamp-2020',
          body: 'postapi',
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    const json = await post.json()
    console.log(json)
    console.log(post);
}

