# juke-react-router
Spotify clone, part 4: learning to stabilize state management using Redux

Grace Hopper Academy Workshop, Week 5

The series of Juke workshops are designed to increase familiarity with the React
ecosystem by creating a Spotify clone as a single-page application. Such 
applications do not refresh and instead dynamically replace their content to 
simulate changing pages.

Redux is a powerful state management library, with a centralized store that can 
only be modified via actions dispatched to the reducer. Refactoring our current
Juke code to move our application state from the React components to the Redux 
store will enable Redux to help us write manageable, predictable, scalable UIs.
