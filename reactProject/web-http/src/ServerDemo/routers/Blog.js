import React from 'react'

import './Blog.css'
import Posts from './Posts/Posts'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'


Promise.then(() => { }, () => { })

function Blog() {
    return (
        <div className='Blog'>

            <Posts />

            <section>
                <FullPost data={ post } selectedPostId={ id } />
            </section>

            <section>
                <NewPost />
            </section>
        </div >
    )
}

export default Blog