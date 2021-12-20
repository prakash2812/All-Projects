import React, { useState } from 'react'
import axios from 'axios'
import './NewPost.css'
import { Redirect } from 'react-router'

const formData = {
    title: '',
    context: '',
    author: ''
}
function NewPost(props) {
    const [form, setForm] = useState(() => formData)
    const [submit, setSubmit] = useState(() => false)
    const { title, context, author } = form
    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const postHandler = () => {
        axios.post(`http://jsonplaceholder.typicode.com/posts`, form)
            .then((response) => {
                // after posted we are clearing the fields of title and context 
                setForm(formData)
                // once submitted we are redirecting to home page
                setSubmit(true)
                // using history push and replace
                // props.history.push('/')
                // props.history.replace('/')
                console.log('new Post response', response)
            })
            .catch(error => {
                console.log('something went wrong')
            })
    }

    return (
        <div className='NewPost'>
            {!submit ? null : <Redirect to='/' />}
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
