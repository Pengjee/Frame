const column = [{
    lable:'',
    type:'input',
    value:'name',
    placeholder:'请输入姓名',
    rules: [{ required: true, message: 'Please input your username!' }],
},{
    lable:'级联',
    type:'cascader',
    options:[{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
        }],
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
        }],
    }],
    value:'cascader',
    placeholder:'请选择级联',
    rules: [{ required: true, message: 'Please input your username!' }],
},{
    lable:'选择',
    type:'select',
    value:'select',
    placeholder:'请选择',
    options:[{
        lable:'Jack',
        value:'jack',
    },{
        lable:'Lucy',
        value:'lucy',
    }],
    rules: [{ required: true, message: '请选择' }],
}]
export default column;
