1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    concat, map , filter,

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are the functions that prepare the data and send the data to a reducer with a type (name).
the ruducer uses the type to find the case to use the send in data with. It then changes the state of the store with what it is meant to update.
The store is where the state is saved with redux. It wraps the app so that is is available within all connected components in the app.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is stored in side of the specific component. It can be passed down to other components as a prop but cannot be passed up to parent components.
The App state is availible within the entire app. This makes it easy to use within any component. It is essentially stored at the top level and is passed using context.

1.  What is middleware?

middleware is a function that is ran between the action and reducer part of the redux cycle. This can allow for any number of things to be done, including async js in redux.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware that allows for async js to be used with redux. A async action creator using redux thunk requires the action creator to return a function that contains the argument dispatch.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
