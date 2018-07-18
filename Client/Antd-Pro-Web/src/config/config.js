export const LoginConfig = {
  LoginTitle: 'XXX管理平台',
  LoingText: '这是一段描述',
  Copyright: '这是CopyRight',
  LoginFooterLink: [
    {
      key: 'help',
      title: '帮助',
      href: '',
    },
    {
      key: 'privacy',
      title: '隐私',
      href: '',
    },
    {
      key: 'terms',
      title: '条款',
      href: '',
    },
  ],
  LoginBox: {
    LoginMethod: ['psw', 'phone'], //  登陆方式  psw账号密码    phone手机登陆
  },
};

export const PageHeaderConfig = {
  PageHeaderTitle: 'XXX管理平台',
  PageHeaderIcon: '',
};

export const FormItemLayoutModal = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 20 },
        sm: { span: 19 },
    },
};

export const FormItemLayoutModal1 = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5},
    },
    wrapperCol: {
        xs: { span: 20 },
        sm: { span: 10},
    },
};

//  页面的布局
export const SearchFormLayout = {
    xs:{span:24},
    sm:{span:12},
    md:{span:12},
    lg:{span:8},
}
// 搜索按钮的布局
export const SearchBtnLayout = {
    xs:{span:24},
    sm:{span:12,offset:12},
    md:{span:12,offset:12},
    lg:{span:8,offset:16},
}

//  每个输入框和lable的布局
export const FormItemLayoutPage = {
    labelCol: {
        xs: { span:7 },
        sm: { span: 7 },
        md: { span:7 },
        lg: { span: 7 },
    },
    wrapperCol: {
        xs: { span: 17 },
        sm: { span: 17 },
        md: { span: 17 },
        lg: { span: 17 },
    },
};

export default {
    LoginConfig,
    PageHeaderConfig,
    FormItemLayoutModal,
    FormItemLayoutPage,
    SearchFormLayout,
    SearchBtnLayout,
};


