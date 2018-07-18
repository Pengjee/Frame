import React,{Component} from 'react';
import {  Card,Form,Modal } from 'antd';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import AutoList from '../../components/List/List';
import AdvanceForm from './AdvanceForm';
import ToolBar from '../../components/ToolBar';
import SearchForm from './SearchForm';

const confirm = Modal.confirm;

@Form.create()
@connect(({ department, loading }) => ({
    department,
    loading: loading.effects['department/listpage'],
}))
class AdvanceList extends Component{
    constructor(props){
        super(props);
        this.state = {
            handleTitle:'新增',
            formMethod:'add',
        }
    }
    componentWillMount(){

    }
    listpage = ()=>{
        const { dispatch,department:{searchInfo,pagination} } = this.props;
        const { pageNum,pageSize } = pagination;
        dispatch({
            type:'department/listpage',
            payload:{
                page:pageNum,
                pageSize,
                ...searchInfo,
            },
        });
    }

    add =()=>{
        const { dispatch } = this.props;
        this.setState({
            formMethod:'add',
            handleTitle:'新增',
        });
        dispatch({
          type: 'department/showModal',
          payload:{
              createUserId: 0,
              id: 0,
              superiorDepartmentId: 0,
              updateUserId: 0,
          },
        });
    }

    // 编辑
    update=(record)=>{
        this.setState({
            handleTitle:'编辑',
            formMethod:'edit',
        });
        this.props.dispatch({
            type:'department/showModal',
            payload:{
                ...record,
            },
        });
    }
    // 删除
    delete=(record)=>{
        const than = this;
        if(record && record.id){
            confirm({
                title: '删除',
                content: '是否删除当前部门？',
                okText:'确定',
                cancelText:'取消',
                onOk() {
                    than.props.dispatch({
                        type:'department/delete',
                        payload:{
                            id:record.id,
                        },
                    });
                },
                onCancel() {

                },
            });

        }
    }

    turnPage = (e)=>{
        const {current,pageSize} = e;
        const { dispatch,department:{searchInfo} } = this.props;
        dispatch({
            type:'department/listpage',
            payload:{
                ...searchInfo,
                page:current,
                pageSize,
            },
        });
    }

    handleOk = (values) =>{
        const { formMethod } = this.state;
        const { currentRow } = this.props.department;
        this.props.dispatch({
            type:`department/${formMethod}`,
            payload:{
                ...currentRow,
                ...values,
            },
        });
    }

    handleCancel = () =>{
        this.props.dispatch({
            type:'department/hiddenModal',
        });
    }

    restSearch = () => {
        const {dispatch} = this.props;
        dispatch({
            type:'department/clearSearchInfo',
        });
        dispatch({
            type:'department/listpage',
            payload:{
                page:1,
                pageSize:10,
            },
        });
    }

    search = (values)=>{
        const {dispatch} = this.props;
        dispatch({
            type:'department/setSearchInfo',
            payload:{...values},
        });
        dispatch({
            type:'department/listpage',
            payload:{
                page:1,
                pageSize:10,
                ...values,
            },
        })
    }

    render(){
        const { department:{dataSource,visible,currentRow,searchInfo,pagination} } = this.props;
        const { form } = this.props;
        const { handleTitle } = this.state;
        const BtnList = [{
            icon:'plus',
            name:'新增',
            type:'',
            key:'1',
            click:this.add,
        }];
        const pageProps = {
          dataSource,
          columsList:{
            columns:[{
                title:'#',
                key:'index',
                dataIndex:'index',
                align:'center',
                render: (text, record, index) => {
                    return <span>{index + 1}</span>
                },
            },{
                title: '部门名称',
                key: 'name',
                dataIndex:'name',
            },{
                title: '缩写',
                key: 'abridge',
                dataIndex:'abridge',
            }, {
                title : '是否启用',
                key : 'status',
                dataIndex : 'status',
                render:(record)=>{
                    if(record === '1'){
                        return '启用'
                    }else{
                        return '停用'
                    }
                },
            },
            ],
            menulistArr:[{
                key:'handle-1',
                name:'修改',
                menuclick:this.update,
            },{
                key:'handle-2',
                name:'删除',
                menuclick:this.delete,
            }],
          },
          pagination,
        }
        const modalProps = {
          visible,
          handleOk:this.handleOk,
          handleCancel:this.handleCancel,
          title:`管理员表-${handleTitle}`,
          formInfo:  currentRow,
        }
        const searchProps = {
            parentForm:form,
            searchInfo,
            restForm:this.restSearch,
            search:this.search,
        }
        return(
          <PageHeaderLayout>
            <Card title="快速查询" bordered={false} style={{marginBottom:'20px'}}>
              <SearchForm {...searchProps}  />
            </Card>
            <Card bordered={false}>
              <ToolBar BtnList={BtnList} />
              <AutoList {...pageProps} turnPage={this.turnPage} />
              <AdvanceForm {...modalProps}  />
            </Card>
          </PageHeaderLayout>
        );
    }
}
export default AdvanceList;

