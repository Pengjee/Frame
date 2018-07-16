import React,{Component} from 'react';
import { connect } from 'dva';
import { Button,Form, Row, Col, Card, Table , Modal ,Dropdown ,Icon ,Menu} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import FormInput from '../../components/FormInput/FormInput'
import ModalForm from './ModalForm';
import { routerRedux } from 'dva/router';


import Column from './SearchColumn';

const FormItem = Form.Item;
@Form.create()
@connect(({ testrequest, loading }) => ({
    testrequest,
    loading: loading.effects['testrequest/listpage'],
}))
class CommonList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isVisible:false,
        }
    }

    componentWillMount(){
        const { dispatch } = this.props;
        dispatch({
            type: 'testrequest/listpage',
            payload:{
                page:'1',
                type:'FundsType',
            },
        });
    }
    createSearchFrom(SearchData){
        const { form } = this.props;
        const children = [];
        for(let i = 0;i<SearchData.length; i++){
            const data = SearchData[i];
            children.push(
              <Col span={8} key={i}>
                <FormInput data={data} form={form} />
              </Col>
            )
        }
        return children;
    }

    handleSearch(){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset(){
        this.props.form.resetFields();
    }

    acceptForm = (type)=>{
        if(type === 'model'){
            this.setState({
                isVisible:true,
            });
        }
        if(type === 'page'){
            this.props.dispatch(routerRedux.push('/accept'));
        }
    }
    handleOk=()=>{
        this.setState({
            isVisible:false,
        })
    }
    handleCancel = () =>{
        this.setState({
            isVisible:false,
        })
    }
    menu(){
        return (
          <Menu>
            <Menu.Item>
                    删除
            </Menu.Item>
            <Menu.Item>
                    修改
            </Menu.Item>
          </Menu>
        );
    }
    render(){
        const dataSource = [{
            code:'F',
            name:'Cash (different denomination than the from/to side)',
            type:'FundsType',
        }];
        const columns = [{
            title: '编号',
            dataIndex: 'code',
            key:'code',
        },{
            title: '姓名',
            dataIndex: 'name',
            key:'name',
        },{
            title: '类型',
            dataIndex: 'type',
            key:'type',
        },{
            title: '操作',
            dataIndex: 'handle',
            render: (text, record) => {
                return(
                  <Dropdown
                    overlay={this.menu()}
                  >
                    <Button style={{ border: 'none'}}>
                      <Icon style={{ marginRight: 2 }} type="bars" />
                      <Icon type="down" />
                    </Button>
                  </Dropdown>
                );
            },
        }];
        const SearchData = Column;
        const { isVisible } = this.state;
        return(
          <PageHeaderLayout>
            <Card bordered={false}>
              <Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
              >
                <Row>
                  {
                      this.createSearchFrom(SearchData)
                  }
                </Row>
                <Row>
                  <Col span={16} style={{ textAlign: 'left' }}>
                    <Button type="primary" htmlType="submit">搜索</Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            重置
                    </Button>
                  </Col>
                  <Col span={8} style={{ textAlign:'right', float:'left' }} >
                    <Button onClick={()=>this.acceptForm('page')}>受理（Page）</Button>
                    <Button onClick={()=>this.acceptForm('model')}>受理（Model）</Button>
                  </Col>
                </Row>
              </Form>
              <div style={{marginTop:'20px'}}>
                <Table dataSource={dataSource} columns={columns} />
              </div>
              <Modal
                title="受理"
                visible={isVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <ModalForm />
              </Modal>
            </Card>
          </PageHeaderLayout>
        );
    }
}

export default CommonList;
