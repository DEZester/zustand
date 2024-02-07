import {create} from 'zustand'

type CounterStore = {
    count: number;
    increment: () => void,
    decrement: () => void
}

/**
 * A custom counter store for managing count state.
 *
 * @typedef {Object} CounterStore
 * @property {number} count - The current count value.
 * @property {function} increment - A function for incrementing the count value.
 * @property {function} decrement - A function for decrementing the count value.
 *
 * @param {function} set - A callback function used to update the count state.
 * @returns {CounterStore} The counter store object.
 */
export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({count: state.count + 1}))
    },
    decrement: () => {
        set((state) => ({count: state.count - 1}))
    }
}))


