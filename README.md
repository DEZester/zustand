# ZUSTAND

A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't
boilerplatey or opinionated, but has enough convention to be explicit and flux-like.

- [zustandDoc](https://docs.pmnd.rs/zustand/getting-started/introduction)

## First create a store

Your store is a hook! You can put anything in it: primitives, objects, functions. The set function merges state.

```js
import {create} from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}))
```

## Then bind your components, and that's it!

```js
function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```