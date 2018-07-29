import React,{ Component } from 'react';
import { Form,Row,Col, Input, Button,message } from 'antd';
import CreateMaze from '../utils/utils';
import { INVALID_NUMBER,OUT_RANGE } from '../utils/error';
import './index.css';

const FormItem = Form.Item;
const { TextArea  }  = Input;
class MazePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            mazeList:[],
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let { row,col,inputString } = values;
                row = parseInt(row);
                col = parseInt(col);
                if(row<=0 || col <=0){
                    message.warning(OUT_RANGE);
                    return;
                }
                if(!(/^[0-9]+$/.test(row)) || !(/^[0-9]+$/.test(col))){
                    message.warning(INVALID_NUMBER);
                    return;
                }
                const maze = new CreateMaze(col,row,inputString);
                const { type,msg,result } = maze.drawRoad();
                if(type){
                    this.setState({
                        mazeList:result
                    });
                }else{
                    message.warning(msg);
                    return;
                }
            }
        });
    }
    handleReset=()=>{
        this.props.form.resetFields();
        this.setState({
            mazeList:[],
        })
    }
    render(){
        const { getFieldDecorator }  = this.props.form;
        const { mazeList } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        return(
            <div className="box">
                <div className="form">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="行数"
                        >
                            {getFieldDecorator('row', {
                                rules: [{ required: true, message: '请输入行数' }],
                            })(
                                <Input placeholder="请输入行数" />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="列数"
                        >
                            {getFieldDecorator('col', {
                                rules: [{ required: true, message: '请输入列数' }],
                            })(
                                <Input placeholder="请输入列数" />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="字符串"
                        >
                            {getFieldDecorator('inputString', {
                                rules: [{ required: true, message: '请输入道路网格字符串' }],
                            })(
                                <TextArea placeholder="请输入道路网格字符串" autosize={{ minRows: 4 }} />
                            )}
                        </FormItem>
                        <FormItem
                        >
                            <Row>
                                <Col span={24} style={{ textAlign: 'center' }}>
                                    <Button type="primary" htmlType="submit">确定</Button>
                                    <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                                        重置
                                    </Button>
                                </Col>
                            </Row>
                        </FormItem>
                    </Form>
                </div>
                <div className="showbox">
                    {
                        mazeList.map((child)=>{
                            return(
                                <div>
                                    {
                                        child.map((item)=>{
                                            if(item.label === '[W]'){
                                                return <div className="w_lable" key={item.id}>{item.label}</div>
                                            }else{
                                                return <div className="r_lable" key={item.id}>{item.label}</div>
                                            }
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const Maze = Form.create()(MazePage);
export default Maze;
