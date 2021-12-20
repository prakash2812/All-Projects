import React, { useState, useEffect } from 'react';
import axios from 'axios'

const DataFetching = () => {
    const [post, setPost] = useState(() => []);
    const [id, setId] = useState(() => 1);
    const [btnid, setBtnId] = useState(() => 1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnid}`)
            .then(res => {
                console.log(res);
                setPost([res.data.title]);

            })
            .catch(error => console.log(error))

    }, [btnid]);

    const changeHandler = () => {
        setBtnId(id)
    }
    console.log('outside', post)

    return (
        <div>
            <input type='text'
                value={id} onChange={e => setId(e.target.value)} />
            <button onClick={() => setBtnId(id)}>fetchdata</button>
            {/* <div>{post.name}</div> */}
            {/* {simpleData} */}
            <br></br>
            {post.map(item => <p>title: {item}</p>)}
            {/* {post.title} */}
            {/* {post.map(pos => <li key={pos.id}>{pos.name}</li>)} */}
        </div>
    )

}

export default DataFetching