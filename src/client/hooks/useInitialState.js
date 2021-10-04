import {useState} from 'react';
import initialState from '../initialState'

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToBarco = payload => {
        setState({
            ...state,
            barco: [...state.barco, payload]
        })
    }

    return {
        addToBarco,
        state,
    }
}


export default useInitialState;