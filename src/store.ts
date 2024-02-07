import {create} from 'zustand'

type CounterStore = {
    count: number;
    increment: () => void,
    incrementAsync: () => Promise<void>
    decrement: () => void
    decrementAsync: () => Promise<void>
}

/**
 * A custom store for managing a counter.
 *
 * @property {number} count - The current count value.
 * @property {Function} increment - Increments the count value by 1 synchronously.
 * @property {Function} incrementAsync - Increments the count value by 1 asynchronously with a delay of 2000ms.
 * @property {Function} decrement - Decrements the count value by 1 synchronously.
 * @property {Function} decrementAsync - Decrements the count value by 1 asynchronously with a delay of 2000ms.
 *
 * @param {Function} set - A function provided by the create function to update the state.
 * @returns {CounterStore} A new instance of the CounterStore.
 *
 * @example
 * const store = useCounterStore()
 *
 * console.log(store.count) // 0
 *
 * store.increment()
 * console.log(store.count) // 1
 *
 * store.decrement()
 * console.log(store.count) // 0
 *
 * store.incrementAsync()
 * console.log(store.count) // Logs 0 immediately, then logs 1 after a 2000ms delay
 *
 * store.decrementAsync()
 * console.log(store.count) // Logs 1 immediately, then logs 0 after a 2000ms delay
 */
export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({count: state.count + 1}))
    },
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        set((state) => ({count: state.count + 1}))
    },
    decrement: () => {
        set((state) => ({count: state.count - 1}))
    },
    decrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        set((state) => ({count: state.count - 1}))
    },
}))


