import React from 'react';
import { connect } from 'tls';

function withCounter(Component) {
    return class extends React.Component {
        constructor(){ 
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
    
        render() {
            console.log("withCounter props", this.props)
            return <Component 
            counter={this.state.counter} 
            increase={this.increase}
            decrease={this.decrease}
            {...this.props}
            />
        }
    }
}

export default withCounter;