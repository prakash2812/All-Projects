import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import Spinner from '../../../components/Spinner/Spinner';
import './Posts.css';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

    state = {
        posts: [],
        // selectedPostId: null,
        error: false,
    }

    componentDidUpdate() {
        console.log(' post  did update componet')
    }

    componentDidMount() {
        console.log(' post blog did mount')
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'max'
                    }
                })
                this.setState({ posts: updatedPosts })
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: true })
            })
    }

    displayDataFullPost = (id) => {
        this.props.history.push({ pathname: '/posts/' + id })
        // this.props.history.push('/' + id)
        // this.setState({
        //     selectedPostId: id,
        // })
    }
    render() {
        let post = null;
        console.log('Posts render');
        if (this.state.posts.length > 0) {
            post = this.state.posts
                .map(item => {
                    return (
                        // <Link key={item.id} to={'/' + item.id}>
                        <Post
                            clicked={() => this.displayDataFullPost(item.id)}
                            key={item.id}
                            title={item.title}
                            author={item.author} />
                        // </Link>
                    )
                })
        } else if (this.state.error) {
            post = <p style={{ textAlign: 'center', color: 'red' }}> Something went wrong !!</p>
        } else {
            post = <Spinner />
        }
        return (
            <Aux>
                <section className="Posts">
                    {post}
                </section>
                <Route path={this.props.match.url + "/:id"} component={FullPost} />
                {/* <Route path='/posts/:id' component={FullPost} /> */}
            </Aux>
        );
    }
}

export default Posts;