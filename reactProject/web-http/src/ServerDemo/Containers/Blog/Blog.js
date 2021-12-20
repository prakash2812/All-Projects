import React from 'react'

import './Blog.css'
import Posts from './Posts/Posts'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
// import NewPost from './NewPost/NewPost'
import AsyncComponent from '../hoc/AsyncComponent'

const AsyncComp = AsyncComponent(() => import('./NewPost/NewPost'))
function Blog() {
    return (
        <div className='Blog'>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/"
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: "#fa923f",
                                textDecoration: 'underline'
                            }}
                        >Posts</NavLink></li>
                        <li><NavLink to="/new-post"
                        >New Post</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Switch>
                {/* <Redirect from='/new-post' to='/' /> */}

                <Route path='/new-post' component={AsyncComp} />
                <Route path='/' component={Posts} />

            </Switch>

            {/* <Posts /> */}
            {/* 
            <section>
                <FullPost data={post} selectedPostId={id} />
            </section>

            <section>
                <NewPost />
            </section> */}
        </div >
    )
}

export default Blog