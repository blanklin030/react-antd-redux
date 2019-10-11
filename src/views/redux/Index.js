import React, { Component } from 'react';
import { Button } from 'antd'
import { connect } from "react-redux";
import * as Action from '../../redux/action/index'

class Redux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // count: store.getState()
        }
    }

    handleIncrement = () => {
        // this.setState({
        //   count: this.state.count + 1
        // })
        // store.dispatch(Action.increment())
        this.props.dispatch(Action.increment());
    }
    
    handleDecrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // })
        // store.dispatch(Action.decrement())
        this.props.dispatch(Action.decrement());
    }
    
    render() {
        // store.subscribe(() => {
        //     console.log("Store is changed: " + store.getState());
        //     this.setState({count: store.getState()})
        // })
        const { increment, decrement } = this.props;
        return (
            <div>
                {/* <h1>{this.state.count}</h1> */}
                <h1>{this.props.count}</h1>
                <p>
                    {/* <Button onClick={this.handleIncrement}>Increase</Button> */}
                    {/* <Button onClick={this.handleDecrement}>Decrease</Button> */}
                    <Button onClick={()=>increment()}>Increase</Button>
                    <Button onClick={()=>decrement()}>Decrease</Button>
                </p>
            </div>
        )
    }
    

}

const mapStateToProps = state => ({
    count: state.count,
})

export default connect(mapStateToProps, Action)(Redux);