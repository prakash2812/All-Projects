let post = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' },
]

function getPosts() {
    setTimeout(() => {
        let output = ""
        post.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

getPosts()

function setPosts(data, callback) {
    setTimeout(() => {
        post.push(data)
        callback()
    }, 2000)
}

setPosts({ title: 'Post three', body: 'This is post three' }, getPosts)
console.log(post)
// ------------------------------------------------------------------------------------------------

function show1() {
    console.log('im call back')
}

function show2(show1) {
    console.log('hello')
    show1()//callback
}

show2(show1) // hello im call back
