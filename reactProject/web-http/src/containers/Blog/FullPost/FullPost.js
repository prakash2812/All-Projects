import React, { Component } from 'react';
import axios from 'axios'
import Spinner from '../../../components/Spinner/Spinner'


import './FullPost.css';



class FullPost extends Component {
    state = {
        loadedPost: null,
    }

    componentDidUpdate() {
        this.loadPost();
    }
    componentDidMount() {

        this.loadPost();

    }

    loadPost() {
        if (this.props.match.params.id) {
            if ((!this.state.loadedPost) || (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        // console.log(response)
                        this.setState({ loadedPost: response.data })
                    })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            }
            )
    }
    render() {
        console.log('full post render ')
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <Spinner />
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;