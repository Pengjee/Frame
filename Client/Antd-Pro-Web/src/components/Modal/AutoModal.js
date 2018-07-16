import React,{Component} from 'react';
import { Modal } from 'antd';

class AutoModal extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { visible,component,handleOk,handleCancel,title } = this.props;
    return(
      <div>
        <Modal
          title={title}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          { component }
        </Modal>
      </div>
    );
  }
}

export default AutoModal;
