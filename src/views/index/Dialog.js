import React, {Component} from 'react'
import { Modal, Input, Form } from 'antd';
const { TextArea } = Input;
const Dialog = Form.create({ name: 'form_in_modal' })(
    class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                
            }
        }
    
        render () {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    title="表单"
                    visible={visible}
                    onOk={onCreate}
                    onCancel={onCancel}
                >
                    <Form layout="vertical">
                        <Form.Item label="参数">
                        {getFieldDecorator(
                            'params', 
                            {rules: [{ required: true, message: 'Please input the params!' }]}
                        )(<TextArea  autosize={{ minRows: 5, maxRows: 10 }}/>)}
                        </Form.Item>
                    </Form>
                </Modal>
            )
        }
    }
)


export default Dialog;