import React,{Component} from 'react';
import { Dropdown,Menu,Button,Icon } from 'antd';


class DropDown extends Component{
    constructor(props){
        super(props);
    }
    createMenu=()=>{
        const { menuOptions=[],record } = this.props;
        return menuOptions.map((item) =>
          <Menu.Item key={item.key} onClick={(e)=>item.menuclick(record,e)}>{item.name}</Menu.Item>
        )
    }
    render(){
        const { dropdownProps,buttonStyle } = this.props;
        return(
          <Dropdown
            overlay={<Menu>{this.createMenu()}</Menu>}
            {...dropdownProps}
          >
            <Button style={{ border: 'none', ...buttonStyle }}>
              <Icon style={{ marginRight: 2 }} type="bars" />
              <Icon type="down" />
            </Button>
          </Dropdown>
        );
    }
}
export default DropDown;
