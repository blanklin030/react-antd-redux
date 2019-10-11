import React, { Component } from 'react';
import { connect } from "react-redux";
import * as Action from '../../redux/action/index'
import { Input } from 'antd';
const { TextArea } = Input;

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <TextArea value={this.props.api} autosize={{ minRows: 20, maxRows: 60 }} />
        )
    }
}
const mapStateToProps = state => ({
    api: state.api,
})

export default connect(mapStateToProps, Action)(Store);