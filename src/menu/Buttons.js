import React, { useContext, useReducer } from 'react';
import { movieContext } from '../context';

const Buttons = () => {
    const handleButton = useContext(movieContext);
    const init = [ 'btn1', 'btn2' ];
    const reducer = (state, action) => {
        handleButton(action.type);
        return state;
    }
    const [ state, dispatch ] = useReducer(reducer, init);

    return (
        <>
        <button className={ 'nav__btn' } onClick={ e => dispatch({ type: 'btn1' })}>&#10004;</button>
        <button className={ 'nav__btn nav__btn--reject' } onClick={ e => dispatch({ type: 'btn2' })}>✗</button>
        </>
    )
};

export default Buttons;

