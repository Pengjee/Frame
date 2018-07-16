import React , {Component} from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button,Form, Select, Card, Input} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';


const FormItem = Form.Item;
const Option = Select.Option;
@Form.create()
@connect(({ pageform, loading }) => ({
    pageform,
    loading: loading.effects['testrequest/listpage'],
}))
class PageForm extends Component{
    constructor(props){
        super(props);
    }
    returnAccept = () =>{
        this.props.dispatch(routerRedux.push('/list/commonlist'));
    }
    render(){
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const { getFieldDecorator } = this.props.form;
        return(
          <PageHeaderLayout>
            <Card bordered={false} >
              <Form>
                <FormItem
                  {...formItemLayout}
                  label="姓名"
                >
                  {getFieldDecorator('name', {
                          rules: [{
                              required: true, message: '姓名是必填项',
                          }],
                      })(
                        <Input style={{ width: '100%' }} />
                      )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="编号"
                >
                  {getFieldDecorator('code', {
                          rules: [{
                              required: true, message: '编号是必填项',
                          }],
                      })(
                        <Input style={{ width: '100%' }} />
                      )}
                </FormItem>
                  <FormItem
                      {...formItemLayout}
                      label="类型"
                  >
                      {getFieldDecorator('type', {
                          rules: [{
                              required: true, message: '类型是必选项',
                          }],
                      })(
                          <Select style={{ width: '100%' }} >
                              <Option value="jack">Jack</Option>
                              <Option value="lucy">Lucy</Option>
                              <Option value="disabled" disabled>Disabled</Option>
                              <Option value="Yiminghe">yiminghe</Option>
                          </Select>
                      )}
                  </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="排名"
                >
                  {getFieldDecorator('sort', {
                          rules: [{
                              required: true, message: '排名是必填项',
                          }],
                      })(
                        <Input style={{ width: '100%' }} />
                      )}
                </FormItem>
                <FormItem>
                  <div style={{textAlign:'center' }}>
                    <Button style={{margin:'20px'}} onClick={this.returnAccept}>返回</Button>
                    <Button type="primary" style={{margin:'20px'}}>提交</Button>
                  </div>
                </FormItem>
              </Form>
            </Card>
          </PageHeaderLayout>
        );
    }
}
export default PageForm;
