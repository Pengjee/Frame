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
        xs: { span: 24 },
        sm: { span: 19 },
    },
}

export const FormItemLayoutPage = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 20 },
        sm: { span: 16 },
    },
}

export default {
  LoginConfig,
  PageHeaderConfig,
  FormItemLayoutModal,
  FormItemLayoutPage,
};


