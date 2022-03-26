import React from 'react';

const Answer = () => {
    return (
        <div>
            <h1>Question and Answer</h1>
            <h3>Question 1: How React works</h3>
            <p>
                React is basically a JavaScript library that is used for creating user interfaces. But it was realized that DOM is pretty slow and is expensive to work with. For this reason React implements a virtual DOM that is a DOM tree representation in JavaScript. So for reading or writing it uses the virtual DOM. Then virtual DOM uses the most efficient way to update the browser’s DOM.

            </p>

            <h3>Question 2: Props vs State</h3>
            <p>
                Some differences between state and props are given below:
                <br></br>

                State is mutable and props are not mutable.<br></br>

                Props allow you to pass data from one component to other components as an argument. On the other hand, the state holds information about the components.
                <br></br>
                Stateless components can have Props.Stateless components cannot have State
                <br />
                Props are external and state are internal
                <br></br>
                Props are used to communicate between components.	States can be used for rendering dynamic changes with the component.


            </p>


        </div>
    );
};

export default Answer;