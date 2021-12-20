import React, { useState, useEffect } from 'react'
import Post from '../../../Components/Post/Post'
import axios from 'axios'
import './Posts.css'
import Spinner from '../../../Components/Spinner/Spinner'
import { Link, Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

function Posts(props) {
    const [post, setPost] = useState(() => [])
    const [error, setError] = useState(() => false)
    const [id, setId] = useState(() => '')
    useEffect(() => {
        console.log(props)
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const fewPost = res.data.slice(res.data.length - 4, res.data.length)
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
        props.history.push({ pathname: '/' + id }, post)
        // setId(id)
    }

    let posts = post.map((item) => {
        return (
            // <Link to={{ pathname: '/' + item.id, state: post }} key={item.id} >
            <Post key={item.id} title={item.title} author={item.author} selectedPost={() => selectedPostHandler(item.id)} />
            // </Link>
        )
    })

    if (!error) {
        // posts = <Spinner />
    } else {
        posts = <h3 style={{ textAlign: 'center' }}>Something went wrong !!!</h3>
    }
    return (
        <React.Fragment>
            <section className="Posts">
                {posts}
            </section>
            <Route path='/:id' exact component={FullPost} />
        </React.Fragment>
    )
}

export default Posts
