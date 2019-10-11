import React, {Component} from 'react'
import { Button, Col, Row, Menu, Dropdown, Icon } from 'antd';
import Dialog from './Dialog'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            flag: 1
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMenuClick = this.handleMenuClick.bind(this)
    }
    handleMenuClick = e => {
        const idx = parseInt(e.key)
        this.setState({flag: idx})
        if (idx === 1) {
            this.props.get(this.props.index)
            return false;
        } 
        this.showModal();
        return true;
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
    handleCreate = e => {
        const { form } = this.formRef.props;
        const method = {2:'post', 3:'put', 4:'delete'}
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
          const params = JSON.parse(values.params);
          this.props[method[this.state.flag]](this.props.index, params)
          form.resetFields();
          this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleRemove() {
        this.props.remove(this.props.index)
    }

    render(){
        const menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1">GET</Menu.Item>
              <Menu.Item key="2">POST</Menu.Item>
              <Menu.Item key="3">PUT</Menu.Item>
              <Menu.Item key="4">DELETE</Menu.Item>
            </Menu>
          );
        return(
            <div style={{borderBottom:'1px dashed #ccc',paddingBottom:'5px'}}>
                <Row gutter={16}>
                    <Col span={19}>
                        <div>{this.props.content}</div>
                    </Col>
                    <Col span={5}>
                        <Button type="link" onClick={this.handleRemove}>REMOVE</Button>
                        <Dropdown overlay={menu}>
                            <Button type="link">
                            Hover me <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
                <Dialog 
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}/>
            </div>
        )
    }
}
export default TodoItem;