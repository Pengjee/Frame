import React,{ Component } from 'react';
import { Button } from 'antd';
import styles from './index.less'

class ToolBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { BtnList } = this.props;

        return(
            <Button.Group className={styles.toolbarBox}>
                {
                    BtnList.map((item)=>{
                        return(
                            <Button
                                style={{display:item.ishow || 'inline'}}
                                icon={item.icon}
                                type={item.type || 'primary'}
                                onClick={item.click}
                                key={`toolbar${item.key}`}
                            >
                                {item.name}
                            </Button>
                        )
                    })
                }
            </Button.Group>
        );
    }
}
export default ToolBar;
