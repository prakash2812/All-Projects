import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './FullPost.css'
function FullPost(props) {
    // const { selectedPostId, data } = props
    const { id: selectedPostId, data } = props.match.params
    const [fullPost, setFullPost] = useState(() => [])

    let post = <p style={{ textAlign: 'center' }}>Please select a post</p>
    useEffect(() => {
        // --- if condition used so that we don't need first render call but after each re render it should pic
        console.log('params', props)
        console.log(selectedPostId)
        if (selectedPostId) {
            setFullPost(data.filter((item) => item.id === selectedPostId))
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
        /* axios.delete(`http://jsonplaceholder.typicode.com/posts/${selectedPostId}`)
            .then(res => {
                console.log(res)
            }) */
    }
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
