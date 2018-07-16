

export default {
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {

  },

  reducers: {
    registerHandle(state, { payload }) {
      return {
        ...state,
        status: payload.status,
      };
    },
  },
};
