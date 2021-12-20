import React, { useState } from 'react'
import axios from 'axios'
import './NewPost.css'
function NewPost() {
    const [form, setForm] = useState(() => ({ title: '', context: '', author: '' }))
    const { title, context, author } = form
    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const postHandler = () => {
        axios.post(`http://jsonplaceholder.typicode.com/posts`, form)
            .then((response) => {
                console.log('new Post response', response)
            })
            .catch(error => {
                console.log('something went wrong')
            })
    }

    return (
        <div className='NewPost'>
            <h2>Add a Post</h2>
            <label>Title</label>
            <input name='title' type='text' value={title} onChange={changeHandler} />
            <label>Content</label>
            <textarea name='context' row='10' type='text' value={context} onChange={changeHandler} />
            <label>Author</label>
            <select name='author' value={author} onChange={changeHandler}>
                <option value='Max'>Max</option>
                <option value='Manu'>Manu</option>
            </select>
            <button className='button' onClick={postHandler}>Add Post</button>

        </div>
    )
}

export default NewPost
