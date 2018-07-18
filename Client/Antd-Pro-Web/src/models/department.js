import { departmentAdd,departmentDel,departmentEdit,departmentGet,departmentList,exportExcel,exportExcelAll } from '../services/department';
import { message } from 'antd';

export default {
  namespace: 'department',

  state: {
    visible:false,
    dataSource:[],
    currentRow:{
        createUserId: 0,
        id: 0,
        superiorDepartmentId: 0,
        updateUserId: 0,
    },  // 当前选择数据
    pagination : {
        pageSize : 10, // 一页多少条
        current :0,  // 当前页
        total:0,  // 总条数
        pages:0,  // 一共多少页
    },
    searchInfo : {}, // 检索Form表单
  },
  subscriptions: {

  },
  effects: {
    *add({ payload }, { call, put }) {
      const response = yield call(departmentAdd, payload);
      if(response.code === 0){
          yield put({
              type: 'listpage',
              payload:{
                  page:1,
                  pageSize:10,
              },
          });
          yield put({
              type: 'hiddenModal',
              payload:response,
          });
          message.success('新增成功');
      }else{
          message.error('新增失败');
      }
    },
    *edit({ payload }, { call, put }) {
       const response = yield call(departmentEdit, payload);
       if(response.code === 0){
         yield put({
             type: 'listpage',
             payload:{
                page:1,
                pageSize:10,
             },
         });
         yield put({
             type: 'hiddenModal',
             payload:response,
         });
         message.success('编辑成功');
       }else{
         message.error('编辑失败');
       }
    },
    *listpage({ payload }, { call, put }) {
      const response = yield call(departmentList, payload);
      yield put({
        type: 'save',
        payload:response.data,
      });
    },
    *delete({ payload }, { call, put }) {
      const response = yield call(departmentDel, payload);
      if(response.code === 0){
          yield put({
              type: 'save',
              payload:response.data,
          });
          yield put({
              type:'listpage',
              payload:{
                  page:1,
                  pageSize:10,
              },
          });
          message.success('删除成功');
      }else{
          message.success('删除失败');
      }
    },
  },
  reducers: {
    save(state, action) {
      const { data,pages,pageSize,total,pageNum } = action.payload;
      return {
        ...state,
        dataSource:data,
        pagination:{pages,pageSize,total,current:pageNum},
      };
    },
    showModal(state,action){
      return {
        ...state,
        visible:true,
        currentRow:{...action.payload},
      }
    },
    hiddenModal(state){
      return {
        ...state,
        visible:false,
        currentRow:{
            createUserId: 0,
            id: 0,
            superiorDepartmentId: 0,
            updateUserId: 0,
        },
      }
    },
    clearSearchInfo(state){
        return{
            ...state,
            searchInfo:{},
        }
    },
    setSearchInfo(state,action){
        return{
            ...state,
            searchInfo:{...action.payload},
        }
    },
  },
};
