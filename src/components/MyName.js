import React from "react";
import PropTypes from "prop-types";
import withCounter from '../hoc/withCounter';

class MyName extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    increaseCounter = () => {
        this.props.increase(1);
    }

    render() {
        console.log(this.props.children);
        return (
            <>
                <h1>{this.props.name}</h1>
                {this.props.children}
                {this.props.counter !== undefined ? <><h1>{this.props.counter}</h1>
                    <button onClick={this.increaseCounter}>Increase</button></> : null}
            </>
        )
    }
}

MyName.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default withCounter(MyName);

//counter 