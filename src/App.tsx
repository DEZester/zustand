import './App.css'
import {useCounterStore} from "./store.ts";

function App() {
    const count = useCounterStore((state) => state.count)

    return (
        <>
            <div>{count}</div>
        </>
    )
}

export default App
