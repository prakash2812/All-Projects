import React, { useContext } from 'react'

import { UseContext, ChainContext } from '../../App'

// --------------- complext of consumes if two dat consumers do useContext
// function ComponentF() {

//     return (
//         <div>
//             <UseContext.Consumer >
//                 {
//                     user => {
//                         return (
//                             <ChainContext.Consumer>
//                                 {chain => {
//                                     return <div> use context {user} and chain context {chain}</div>
//                                 }}
//                             </ChainContext.Consumer>
//                         )
//                     }
//                 }
//             </UseContext.Consumer>
//             Component F
//         </div>
//     )
// }


const ComponentF = () => {
    const userInput = useContext(UseContext)
    const chainInput = useContext(ChainContext)
    return (
        <div>
            {userInput}
            {chainInput}
        </div>
    )
}

export default ComponentF

