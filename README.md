# Component | Props/State
## 1. What is the diffference between the React's function components and class components ?
Function Components | Class Components |
--- | --- | 
Is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). | Requires you to extend from React. Component and create a render function which returns a React element | 
No need render method| Must have render() method return JXS | 
Constructors are not used | Constructor are used as it needs to store state.

## 2. What is the component state ?
- React components has a built-in state object.
- The state object is where application store property values that belongs to the component.
- When the state object changes, the component re-renders
