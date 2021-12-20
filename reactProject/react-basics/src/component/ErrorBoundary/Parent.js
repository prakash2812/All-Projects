import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hello from './Hello'



function Parent() {
    return (
        <div>
            <Hello name='arjun' />
            <Hello name='prakash' />
            <ErrorBoundary >
                <Hello name='joker' />
            </ErrorBoundary>
        </div>
    )
}

export default Parent
