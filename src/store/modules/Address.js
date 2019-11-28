export default {
  state: {
    chosenAddressId: "",
    list: [
      {
        id: "1",
        name: "张三",
        tel: "13000000000",
        address: "北京市北京市东城区文三路 138 号东方通信大厦 7 楼 501 室",
        area: "北京市东城区",
        specific: "文三路 138 号东方通信大厦 7 楼 501 室"
      },
      {
        id: "2",
        name: "李四",
        tel: "1310000000",
        address: "天津市北京市东城区莫干山路 50 号",
        area: "天津市北京市东城区",
        specific: "北京市东城区莫干山路 50 号"
      }
    ],
    flag: true,
    lists: {
      id: "1",
      name: "张三",
      tel: "13000000000",
      address: "北京市北京市东城区文三路 138 号东方通信大厦 7 楼 501 室",
      area: "北京市东城区",
      specific: "文三路 138 号东方通信大厦 7 楼 501 室"
    }
  },
  mutations: {
    addFunc: function(state, obj) {
      state.lists = obj;
    },
    changeAddressFunc: function(state, obj) {
      let index = state.chosenAddressId - 1;
      window.console.log(typeof index);
      state.list[index] = obj;
      state.lists = obj;
    },
    addlistFunc: function(state, obj) {
      state.list.push(obj);
    },
    flagFunc: function(state, boolean) {
      state.flag = boolean;
    },
    delFunc: function(state, i) {
      state.list.splice(i, 1);
    }
  },
  actions: {}
};
