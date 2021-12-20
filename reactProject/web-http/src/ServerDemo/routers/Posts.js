import React, { useState, useEffect } from 'react'
import Post from '../../../Components/Post/Post'
import axios from 'axios'
import './Posts.css'
import Spinner from '../../../Components/Spinner/Spinner'
import { Link } from 'react-router-dom'

function Posts(props) {
    const [post, setPost] = useState(() => [])
    const [error, setError] = useState(() => false)
    const [id, setId] = useState(() => '')
    useEffect(() => {
        console.log(props)
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const fewPost = res.data.slice(0, 4)
                const modifiedPost = fewPost.map((item) => {
                    return {
                        ...item,
                        author: 'arjun'
                    }
                })
                setPost(modifiedPost)
            })
            .catch(error => {
                setError(true)
            })
    }, [])

    const selectedPostHandler = (id) => {
        console.log("clicked")
        // setId(id)
    }

    let posts = post.map((item) => {
        return (

            <Post key={item.id} title={item.title} author={item.author} selectedPost={() => selectedPostHandler(item.id)} />
        )
    })

    if (!error) {
        // posts = <Spinner />
    } else {
        posts = <h3 style={{ textAlign: 'center' }}>Something went wrong!!!</h3>
    }
    return (
        <section className="Posts">
            {posts}
        </section>

    )
}

export default Posts
