import React,{Component} from 'react';
import {Input,InputNumber,Cascader,Select,DatePicker,Form} from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;

class FormInput extends Component{
    render(){
        const { data,form } = this.props;
        switch (data.type){
            case 'input':
                return <SearchInput column={data} form={form} />
            case 'inputnumber':
                return <SearchNum column={data} form={form} />
            case 'cascader':
                return <SearchCascader column={data} form={form} />
            case 'select':
                return <SearchSelect column={data} form={form} />

            default:

        }
    }
}
const formItemLayout = {
    labelCol: {
        xs: { span:24},
        sm: { span:4},
    },
    wrapperCol: {
        xs: { span:24},
        sm: { span:20 },
    },
};
const SearchInput = ({column,form})=> {
    const {placeholder,disable,lable,value,rules} = column;
    const {getFieldDecorator} = form;
    return (
      <FormItem label={lable || ''}  {...formItemLayout}>
        {getFieldDecorator(value,{
                rules,
            })(
              <Input placeholder={placeholder} disabled={disable || false} style={{width:'100%'}} />
            )}
      </FormItem>
    )
}
const SearchNum = ({column,form})=> {
    const {placeholder,disable,min,max,lable,value,rules} = column;
    const {getFieldDecorator} = form;
    return (
      <FormItem label={lable || ''}  {...formItemLayout}>
        {getFieldDecorator(value,{
                rules,
            })(
              <InputNumber
                placeholder={placeholder}
                disabled={disable || false}
                min={min || 0}
                max={max || 99}
                style={{width:'100%'}}
              />
            )}
      </FormItem>
    )
}
const SearchCascader = ({column,form})=>{
    const {placeholder,options,lable,value,rules} = column;
    const {getFieldDecorator} = form;
    return(
      <FormItem label={lable || ''}  {...formItemLayout}>
        {getFieldDecorator(value,{
                rules,
            })(
              <Cascader
                options={options}
                placeholder={placeholder}
                style={{width:'100%'}}
              />
            )}
      </FormItem>
    )

}
const SearchSelect = ({column,form})=>{
    const {placeholder,options,lable,value,rules} = column;
    const {getFieldDecorator} = form;
    return(
      <FormItem label={lable}  {...formItemLayout}>
        {getFieldDecorator(value,{
                rules,
            })(
              <Select
                placeholder={placeholder}
                style={{width:'100%'}}
              >
                {
                        options.map((item,index)=>{
                            return(
                              <Option key={`options${index}`} value={item.value}>{item.lable}</Option>
                            )
                        })
                    }
              </Select>
            )}
      </FormItem>
    )
}

export default FormInput;
