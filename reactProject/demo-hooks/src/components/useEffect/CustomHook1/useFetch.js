import React, { useState, useEffect } from 'react'
import Axios from 'axios'
// -------------custom use state--------------------------
export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true })
    useEffect(() => {
        // setState(({ data: null, loading: true })) --- slow performance
        setState(state => ({ data: state.data, loading: state.loading }))

        Axios.get(url)
            .then(res => {
                setState(({ data: res.data, loading: false }))
                console.log(res.data)
            })
    }, [url, setState])

    return state;
}
// ---------------- good fast performance using call back-----------------------
// setState(state => ({ data: state.data, loading: state.loading }))



// ---------- slow performance using direct change-------------------------
// setState(({ data: null, loading: true }))
// setState(({ data: res.data, loading: false }))
