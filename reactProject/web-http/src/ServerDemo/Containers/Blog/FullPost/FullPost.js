import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './FullPost.css'
function FullPost(props) {
    // const { selectedPostId, data } = props
    const { id: selectedPostId } = props.match.params
    const { state: data } = props.location
    const [fullPost, setFullPost] = useState(() => [])
    const [deleted, setDeleted] = useState(() => false)

    let post = <p style={{ textAlign: 'center' }}>Please select a post</p>
    if (!deleted && selectedPostId) {
        post = <p style={{ textAlign: 'center' }}>Loading...</p>
    }
    useEffect(() => {
        console.log(props)
        if (selectedPostId) {
            setTimeout(() => {
                setFullPost(data.filter((item) => item.id == selectedPostId))
            }, 1000)

            // ------------- after each click will use an api call to get that data
            /*  axios.get(`http://jsonplaceholder.typicode.com/posts/${selectedPostId}`)
                 .then(res => {
                     setFullPost(res.data)
                 })
                 .catch(error => {
                     console.log('SOmething went wrong')
                 }) */
        }

    }, [selectedPostId])

    const deletePostItem = () => {
        setFullPost([])
        setDeleted(true)
        /* axios.delete(`http://jsonplaceholder.typicode.com/posts/${selectedPostId}`)
            .then(res => {
                console.log(res)
            }) */
    }
    console.log("out fullPost is", fullPost)
    if ((fullPost.length !== 0) && selectedPostId) {
        console.log('fulPost inside', fullPost)
        // --------- with out another api call --------------------
        post = fullPost.map((item) => (
            <div key={item.id} className='FullPost'>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                <div className='Edit'>
                    <button className='delete' onClick={deletePostItem}>Delete</button>
                </div>
            </div>
        ))
        // --- using another api call for clicking on each item
        /*  post = (<div className='FullPost'>
             <h1>{fullPost.title}</h1>
             <p>{fullPost.body}</p>
             <div className='Edit'>
                 <button className='delete'>Delete</button>
             </div>
         </div>) */
    }
    return (
        <>
            {post}
        </>
    )
}

export default FullPost
