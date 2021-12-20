import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import buyCake from '../redux/cake/cakeActions'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function ReduxHooks() {
    const noOfCakes = useSelector(state => ({ cakes: state.cake.noOfCakes, counter: state.cake.counter }))
    const dispatch = useDispatch()
    const buyCakes = () => {
        console.log('toastify start');
        const name = 'logged in ---'
        toast.success(name, { autoClose: 2000 })
        console.log('toastify close');
        dispatch(buyCake())
        console.log('toastify close-----------');

    }
    return (
        <div>
            <h2> Number of cakes : {noOfCakes.cakes} {noOfCakes.counter}</h2>
            <button onClick={buyCakes}>Buy cakes</button>
        </div>
    )
}

export default ReduxHooks;