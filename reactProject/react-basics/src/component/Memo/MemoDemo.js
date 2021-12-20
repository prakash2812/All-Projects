// Memo we use for functional component since PureComponent is only for class component
import React from 'react'

function MemoDemo(props) {
    console.log('rendering regular function')
    return (
        <div>
            <h2>{props.count}</h2>
            <h2>Age:{props.age}</h2>
        </div>
    )
}

// export default MemoDemo
export default React.memo(MemoDemo)
