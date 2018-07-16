import React,{Component} from 'react';
import {Form,Input,Select,Modal,Alert} from 'antd';
import {FormItemLayoutModal} from "../../config/config";

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;


@Form.create()
class AdvanceForm extends Component{
    constructor(props){
        super(props);
    }

    onHandleCancel = ()=>{
        const { form,handleCancel } = this.props;
        form.resetFields();
        handleCancel();
    }
    onHandleOk = ()=>{
        const { form,handleOk } = this.props;
        form.validateFields((err, values) => {
            if(!err){
                handleOk(values);
            }else{
                return (
                  <Alert
                    description="表单验证失败"
                    type="error"
                  />
                )
            }
        });
    }
    render(){
        const { visible,title,formInfo,form:{getFieldDecorator} } = this.props;
        const formItemLayout = FormItemLayoutModal;  // 通用样式表
        return(
          <Modal
            title={title}
            visible={visible}
            onOk={this.onHandleOk}
            onCancel={this.onHandleCancel}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormItem
                {...formItemLayout}
                label="部门名称"
              >
                {getFieldDecorator('name', {
                        initialValue:formInfo.name || '',
                        rules: [{
                            required: true, message: '部门名称是必填项！',
                        }],
                    })(
                      <Input />
                    )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="部门缩写"
              >
                {getFieldDecorator('abridge', {
                  initialValue:formInfo.abridge || '',
                  rules: [{
                    required: true, message: '部门缩写是必填项！',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="状态"
              >
                {getFieldDecorator('status', {
                        initialValue:formInfo.status || '1',
                        rules: [{
                            required: true, message: '状态是必选项！',
                        }],
                    })(
                      <Select>
                        <Option value="1">启用</Option>
                        <Option value="2">停用</Option>
                      </Select>
                    )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="简介"
              >
                {getFieldDecorator('memo', {
                    initialValue:formInfo.memo || '',
                    rules: [{
                        required: true,min:0,max:500,
                    }],
                })(
                  <TextArea placeholder="请填入部门简介" autosize={{ minRows: 4, maxRows: 6 }} />
                )}
              </FormItem>
            </Form>
          </Modal>
        );
    }
}
export default AdvanceForm;

