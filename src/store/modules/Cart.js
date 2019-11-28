export default {
  state: {
    goodslists: [],
    checkedGoods: [],
    formPrice: 0,
    num: 0,
    isCart: true
  },
  mutations: {
    addCarFunc: function(state, obj) {
      let index = state.goodslists.findIndex(value => value.id == obj.id);
      if (index == -1) {
        state.goodslists.push(obj);
        state.checkedGoods = state.goodslists.map(value => value.id);
      } else {
        state.goodslists[index].num += 1;
      }
      // window.console.log(state.checkedGoods);
    },
    delCarFunc: function(state, i) {
      state.goodslists.splice(i, 1);
    },
    delAllFunc: function(state) {
      state.goodslists = state.goodslists.filter(item => {
        if (!item.isCheck) {
          return item;
        }
      });
    },
    selectCarFunc: function(state, i) {
      state.goodslists[i].isCheck = !state.goodslists[i].isCheck;
    },
    getFormPrice: function(state, price) {
      state.formPrice = price;
    },
    getNum: function(state, num) {
      state.num = num;
    },
    delOrderFunc: function(state) {
      state.goodslists = [];
    }
  }
};
