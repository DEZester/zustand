import './App.css'
import {useCounterStore} from "./store.ts";
import {useEffect} from "react";

/**
 * Sets the count to a value of 1000 after a delay of 2000 milliseconds.
 *
 * @function setCount
 * @returns {void}
 */
const setCount = () => {
    // const count = useCounterStore.getState().count
    // console.log(count)
    setTimeout(() => {
        useCounterStore.setState({count: 1000})
    }, 2000)
}

function App() {
    // const count = useCounterStore((state) => state.count) //same as second
    const {count} = useCounterStore((state) => state) //same as first
    const increment = useCounterStore((state) => state.incrementAsync)
    const decrement = useCounterStore((state) => state.decrementAsync)

    useEffect(() => {
        setCount()
    }, [])

    return (
        <>
            <div>{count}</div>
            <div className='container'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    )
}

export default App
