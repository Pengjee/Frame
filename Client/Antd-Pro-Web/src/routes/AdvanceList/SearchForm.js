import React,{Component} from 'react';
import { Form,Input,Button,Select,Row,Col,Alert } from 'antd';
import {FormItemLayoutPage} from "../../config/config";
import styles from '../../theme/table.less';

const FormItem = Form.Item;
const Option = Select.Option;
@Form.create()
class SearchForm extends Component{
    constructor(props){
        super(props);
    }

    searchList=()=>{
        const { form,search } = this.props;
        form.validateFields((err, values) => {
            if(!err){
                for(const valuesName in values){
                    if(values.hasOwnProperty(valuesName)){
                        if(!values[valuesName]){
                            delete values[valuesName];
                        }
                    }
                }
                search(values);
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
    restSearchForm=()=>{
        const { form,restForm } = this.props;
        form.resetFields();
        restForm();
    }
    render(){
        const { searchInfo,form:{getFieldDecorator} } = this.props;
        const formItemLayout = FormItemLayoutPage;  // 通用样式表
        return(
          <Row>
            <Form className={styles.searchBox}>
              <Col span={6}>
                <FormItem
                  {...formItemLayout}
                  label="部门名称"
                >
                  {getFieldDecorator('name', {
                   initialValue:searchInfo.name || '',
                   rules: [],
                })(
                  <Input style={{ width:'100%' }} />
                )}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  {...formItemLayout}
                  label="部门缩写"
                >
                  {getFieldDecorator('abridge', {
                        initialValue:searchInfo.abridge || '',
                        rules: [],
                    })(
                      <Input style={{ width:'100%' }} />
                    )}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  {...formItemLayout}
                  label="是否启用"
                >
                  {getFieldDecorator('status', {
                        initialValue:searchInfo.status || null,
                        rules: [],
                    })(
                      <Select style={{ width:'100%' }}>
                        <Option value="1">启用</Option>
                        <Option value="2">停用</Option>
                      </Select>
                    )}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  {...formItemLayout}
                  style={{margin:0}}
                  className={styles.btnBox}
                >
                  <div>
                    <Button onClick={this.restSearchForm}>重置</Button>
                    <Button onClick={this.searchList} type="primary" icon="search">搜索</Button>
                  </div>
                </FormItem>
              </Col>
            </Form>
          </Row>
        );
    }
}
export default SearchForm;
