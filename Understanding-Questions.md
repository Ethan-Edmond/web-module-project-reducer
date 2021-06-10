# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The event listener registers a click
* The handleAddOne function is called
* addOne is called in the arguments of dispatch
* dispatch is called with the return value of addOne
* the reducer is called returning the updated state object
* dispatch sets the updated state object to state
* dispatch causes a rerender with 1 in the state instead of 0
...

* TotalDisplay shows the total plus 1.
