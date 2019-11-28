export default {
  state: {
    lists: [],
    num: 1,
    formPrice: 0
  },
  mutations: {
    addComfirmLists: function(state, arr) {
      window.console.log(arr);
      state.lists = state.lists.concat(arr);
      window.console.log(state.lists);
    },
    goConfrimFunc: function(state, i) {
      state.lists.splice(i, 1);
    },
    getNum: function(state, num) {
      state.num = num;
    },
    getformPrice: function(state, formPrice) {
      state.formPrice = formPrice;
    }
  }
};
