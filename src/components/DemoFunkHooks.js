// import React from 'react'; //this is nessessery for old versions becose of jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const DemoFuncHooks = () => {

    // const [count, setCount] = useState(0); //use always with "const"
    // const [state, setState] = useState({
    //     count: 11,
    //     step: 1
    // }); 

    const [count, setCount] = useState(1);
    const [step, setStep] = useState(1);
    // const [character, setCharacter] = useState({ name: 'Nobody' });
    const [character, isCharacterLoading] = useFetch(`https://swapi.dev/api/people/${step}`, {})

    // const [, toggleRefresh] = useState(true) //don`t
    // let counter = 666; //don`t

    // useEffect(() => {
    //     console.log('use efect');
    //     fetch(`https://swapi.dev/api/people/${step}`)
    //         .then(res => res.json())
    //         .then(result => setCharacter(result))

    //     return () => {
    //         console.log('Component will unmount');
    //     }
    // }, [step]);

    const onCounterButtonClickHandler = () => {
        // setCount(count + 1) //don`t do this! count is read only becose of "const". Ако има повече кликове няма да върне октуалното състояние.
        // setCount(oldState => oldState + 1);

        // setState(oldState => ({...oldState, count: oldState.count + oldState.step})); //работи но е малко тромаво. По елегантно е като се дефинират двата стейта по отделно.

        setCount(oldState => oldState + step)

        // counter++;
        // console.log(counter);
        // toggleRefresh(state => !state); //don`t
    };

    const onStepSelectChangeHandler = (e) => {
        const stepValue = Number(e.target.value);

        // setState(oldState => ({...oldState, step: stepValue})) //работи но е малко тромаво. По елегантно е като се дефинират двата стейта по отделно. 

        setStep(stepValue);
    }

    return (
        <div>
            <h1>{isCharacterLoading ? 'Loading...' : ` ${character.name}'s Counter`}</h1>
            {/* <div>{count}</div> */}
            {/* <div>{state.count}</div> */}
            {/* <div>{counter}</div> */}
            <div>{count}</div>
            <button onClick={onCounterButtonClickHandler}>Increment</button>

            <label htmlFor="step">Step</label>
            <select name="step" id="step" onChange={onStepSelectChangeHandler} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
};

export default DemoFuncHooks;