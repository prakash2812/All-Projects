import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UseContext, ChainContext } from '../../App'


function ComponentE() {
    return (
        <div>
            {useContext(UseContext)}
            {useContext(ChainContext)}
            {/* <ComponentF /> */}
        </div>
    )
}

export default ComponentE
