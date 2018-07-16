import React,{Component} from 'react';
import { Table } from 'antd';
import DropDown from '../../components/Dropdown/Dropdown'

const defaultPagination = {
    position: 'bottom',
    showTotal:(total) => `共 ${total} 条`,
    showQuickJumper:true,
    showSizeChanger:true,
}

class AutoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns:[],
            bordered: true,
            loading: false,
        }
    }
    componentDidMount(){
        this.createColums();
    }
    createColums=()=>{
        const {columsList:{columns,menulistArr}} = this.props;
        if(menulistArr.length>0){
          const handleOptions = {
            title: '操作',
            key: 'handle',
            width: 100,
            render:(text,record)=>{
              return <DropDown record={record} menuOptions={menulistArr} />
            },
          }
          columns.push(handleOptions);
        }
        this.setState({
            columns,
        });
    }
    render(){
        const { dataSource,turnPage,pagination } = this.props;
        const pageNation = {...pagination,...defaultPagination};
        return(
          <div>
            <Table
              pagination={pageNation}
              size="small"
              rowKey={record => record.id}
              {...this.state}
              dataSource={dataSource}
              onChange={turnPage}
            />
          </div>
        );
    }
}
export default AutoList;
