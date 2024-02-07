import './App.css'
import {useCounterStore} from "./store.ts";

function App() {
    const count = useCounterStore((state) => state.count)
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)

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
