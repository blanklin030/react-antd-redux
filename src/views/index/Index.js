import React, {Component, Fragment} from 'react';
import http from "../../utils/fetch"
import TodoItem from './Item'
import { Button, Input, Card, Col, Row, Empty } from 'antd';
import { connect } from "react-redux";
import * as Action from '../../redux/action/index'
const { TextArea } = Input;
class ApiControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
      inputValue: '',
      index: 0,
      content: '',
      params: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleGet = this.handleGet.bind(this)
    this.handlePost = this.handlePost.bind(this)
    this.handlePut = this.handlePut.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleInputChange(event){
    this.setState({ inputValue: event.target.value })
  }

  handleButtonClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleRemove(index){
    const list = [...this.state.list] 
    list.splice(index, 1)
    this.setState({list})
  }

  handleGet(index){
    const api = this.state.list[index]
    http.get(api).then((data)=>{
      this.setState({content: JSON.stringify(data, null, 2)})
      this.handleRedux()
    })
  }
  handlePost(index, params){
    const api = this.state.list[index]
    http.post(api, params).then((data)=>{
      this.setState({content: JSON.stringify(data, null, 2)})
      this.handleRedux()
    })
  }
  handlePut(index, params){
    const api = this.state.list[index]
    http.put(api, params).then((data)=>{
      this.setState({content: JSON.stringify(data, null, 2)})
      this.handleRedux()
    })
  }
  handleDelete(index, params){
    const api = this.state.list[index]
    http.delete(api, params).then((data)=>{
      this.setState({content: JSON.stringify(data, null, 2)})
      this.handleRedux()
    })
  }

  handleRedux() {
    this.props.add_api(this.state.content)
  }

  getTodoItems() {
    if (this.state.list.length <= 0) {
        return (
          <Empty />
        )
    }
    return (
      this.state.list.map((item,index)=>{
        return (
          <TodoItem 
          remove={this.handleRemove} 
          get={this.handleGet} 
          post={this.handlePost} 
          put={this.handlePut} 
          delete={this.handleDelete} 
          content={item} 
          key={index} 
          index={index}
          />
        )
      })
    )
  }

  getApiContent() {
    return (
      <TextArea value={this.state.content} autosize={{ minRows: 20, maxRows: 60 }} />
    )
  }

  render() {
    return (
      <Fragment>
        <h1 style={{textAlign:'center'}}>API Control</h1>
        <div>
          <Input style={{marginBottom:'10px'}} value={this.state.inputValue} onChange={this.handleInputChange}/>
          <Button style={{marginBottom:'10px'}} type="primary" block onClick={this.handleButtonClick}>add</Button>
        </div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="接口列表" bordered={false}>
                <div>{this.getTodoItems()}</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="接口内容" bordered={false}>
              {this.getApiContent()}
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>

    )
  }
}

const mapStateToProps = state => ({
  api: state.api,
})

export default connect(mapStateToProps, Action)(ApiControl);
