(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1d03d9a"],{2489:function(t,e,s){},"3b46":function(t,e,s){"use strict";function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s.d(e,"a",(function(){return a}))},"3b7c":function(t,e,s){var a=s("f429"),i=s("8a8a").f,o=Function.prototype,c=o.toString,r=/^\s*function ([^ (]*)/,n="name";!a||n in o||i(o,n,{configurable:!0,get:function(){try{return c.call(this).match(r)[1]}catch(t){return""}}})},"5c5d":function(t,e,s){"use strict";var a=s("2489"),i=s.n(a);i.a},"74f9":function(t,e,s){"use strict";s.r(e);var a,i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"background-color":"#fff"}},[s("van-nav-bar",{attrs:{title:this.$route.name},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[s("van-icon",{attrs:{slot:"right",name:"wap-home-o",color:"#ccc",size:"24"},slot:"right"}),s("van-icon",{attrs:{slot:"left",name:"arrow-left",color:"#ccc",size:"24"},slot:"left"})],1),s("div",{staticClass:"scroll-list"},[s("div",[s("div",{staticClass:"form"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col "},[t._v("收货人")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"col",attrs:{placeholder:"请输入收货人的姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col"},[t._v("手机号码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],staticClass:"col",attrs:{placeholder:"请输入收货人的手机号码",maxlength:"11",type:"tel"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}})]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col "},[t._v("省市区")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.area,expression:"area"}],staticClass:"col",attrs:{placeholder:"请选择"},domProps:{value:t.area},on:{input:function(e){e.target.composing||(t.area=e.target.value)}}}),s("span",{staticClass:"location"},[t._v("定位")])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col"},[t._v("详细地址")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.specific,expression:"specific"}],staticClass:"col",attrs:{placeholder:"请输入收货人的详细地址"},domProps:{value:t.specific},on:{input:function(e){e.target.composing||(t.specific=e.target.value)}}})])]),s("div",{staticClass:"operate-btns box box-tb box-align-center"},[s("div",{staticClass:"save",on:{click:t.save}},[t._v("保存地址")]),s("div",{staticClass:"remove",on:{click:t.del}},[t._v("删除地址")])])])])],1)},o=[],c=(s("3b7c"),s("3b46")),r=(a={created:function(){},data:function(){return{name:"",tel:"",area:"",address:"",specific:""}}},Object(c["a"])(a,"created",(function(){var t=[this.$store.state.Address.lists.name,this.$store.state.Address.lists.tel,this.$store.state.Address.lists.area,this.$store.state.Address.lists.specific],e=t[0],s=t[1],a=t[2],i=t[3];this.name=e,this.tel=s,this.area=a,this.specific=i})),Object(c["a"])(a,"methods",{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.$router.push({path:"/home/index"})},save:function(){var t=this.area+this.specific;this.$store.commit("changeAddressFunc",{id:this.$store.state.Address.chosenAddressId,name:this.name,tel:this.tel,address:t,area:this.area,specific:this.specific}),this.$router.push({path:"/address"})},del:function(){var t=this.$store.state.Address.chosenAddressId-1;this.$store.commit("delFunc",t),this.$router.push({path:"/address"})}}),a),n=r,l=(s("5c5d"),s("4e82")),d=Object(l["a"])(n,i,o,!1,null,"5e66b409",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-d1d03d9a.ac234a4e.js.map