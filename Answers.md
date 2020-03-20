What problem does the context API help solve?

-Context API helps to solve "prop drilling"

In your own words, describe actions, reducers and the store and their role in Redux. 
What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Reducer is a state management function, that allows to manage state in a predictable manner.
-Action is an object, which contains properties related to some action that happens in an app. Every action object is required to have a type property, which will “inform” the reducer actions happening in the app. 
-Store is a JavaScripts Object that representes everything that changes within an application. The store contains our state for our application. store known as a 'single source of truth' in a redux application because it contains the state of our application.

What is the difference between Application state and Component state? 
When would be a good time to use one over the other?

-Application state is global,any component, anywhere in the app can access it
-Component state is local. Component state lives within a specific component. It can only be updated within that component.
If you need to change Application state somewhere inside of one of your 'tree' branches it`s better to use application state, or to use component state to change something locally. 

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

-Redux Thunk is a middleware created by Dan Abramov, that provides the ability to handle asynchronous operations inside our Action Creators. Redux Thunk changes up the action creators to perform asynchronous API calls

What is your favorite state management system you've learned and this sprint? Please explain why!

I find Redux more enjoyable and pleasant, i like the the rules and syntax of that library. Also it allows to reuse a component, while Context API allows the same but with more complexity. 