import React, { useState, useEffect } from 'react'

const AsyncComponent = (myComponent) => {
    return function Sample() {
        const [component, setComponent] = useState(() => null)
        useEffect(() => {
            myComponent()
                .then((res) => {
                    setComponent(res.default)
                })
        }, [])
        const Component = component
        return (
            <>
                {component ? <Component {...this.props} /> : null}
            </>
        )
    }

}

export default AsyncComponent
