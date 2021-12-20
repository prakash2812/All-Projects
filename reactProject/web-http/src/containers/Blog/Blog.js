import React, { Component } from 'react';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// ---------> Lazy route import NewPost from '../../containers/Blog/NewPost/NewPost';
import FullPost from '../../containers/Blog/FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

// Used for lazy route not required to bundle.js of all component until unless user route to new post component
// AsyncNewPost will chunk js of new ost when ever user used or routed
const asyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
});

class Blog extends Component {
    state = {
        auth: true

    }

    componentDidUpdate() {
        console.log(' blog  did update componet')
    }
    render() {
        console.log(' parent blog inside render')
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* NavLink is used to know to active class for knowing in which link u clicked
                            it creates a default class active and use that in css and u will see the link in active  */}
                            <li><NavLink
                                to='/posts/'
                                exact
                                activeClassName='my_className'
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/newposts',
                                hash: '#submit',
                                search: '?quick-submit'
                            }}>NewPosts</NavLink></li>

                            {/* <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                                pathname: '/newposts',
                                hash: '#submit',
                                search: '?quick-submit'
                            }}>NewPosts</Link></li> */}
                            {/* <li><a href='/'>Home</a></li>
                            <li><a href='/newposts'>New Post</a></li> */}
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h2>Hello world</h2>} />
                <Route path='/' render={() => <h2>Hello world</h2>} /> */}

                {/* Switch used to route only one at a time */}
                {/* <Route path='/' exact component={Posts} />

                <Switch>
                    <Route path='/newposts' component={NewPost} />
                    <Route path='/:id' component={FullPost} />
                </Switch> */}



                <Switch>
                    {/* <Route path='/newposts' component={NewPost} /> */}
                    <Route path='/newposts' component={asyncNewPost} />
                    {/* {this.state.auth ? <Route path='/newposts' component={NewPost} /> : null} */}
                    {/* Posts component holding nested Route of FullPost and removed exact to match our nested route path */}
                    <Route path='/posts/' component={Posts} />
                    {/* <Route render={() => <h1>Page not found ..</h1>} /> */}
                    {/* <Redirect from='/' to='/posts/' /> */}
                    {/* <Route path={'/'} component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;