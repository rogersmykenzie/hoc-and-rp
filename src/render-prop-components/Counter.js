import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increase = num => {
        this.setState({counter: this.state.counter + num});
    }

    decrease = num => {
        this.setState({counter: this.state.counter - num});
    }
    //prop called render
    //returns jsx
    render() {
        let api = {
            counter: this.state.counter,
            increase: this.increase,
            decrease: this.decrease
        }
        return this.props.render(api);
    }
}

export default Counter;