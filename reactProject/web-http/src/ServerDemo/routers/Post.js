import React, { memo, PureComponent } from 'react'
import './Post.css'
import axios from 'axios'

const Post = (props) => {
    const { title, selectedPost, author } = props
    return (
        <article className="Post" onClick={selectedPost}>
            <h1>{title}</h1>
            <div className="Info">
                <div className="Author">{author}</div>
            </div>
            {/* {JSON.stringify('arjun post rendering')} */}
        </article>
    )
}

export default Post
