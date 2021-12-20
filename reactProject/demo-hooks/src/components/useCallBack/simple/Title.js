import React, { memo } from 'react'

const Title = () => {
    console.log('Rendering title');
    return (
        <div>
            <h2> Use Call back Hook Functionality</h2>
        </div>
    )
}

export default memo(Title)
