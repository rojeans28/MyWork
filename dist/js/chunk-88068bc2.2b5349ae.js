(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88068bc2"],{"3b7c":function(t,a,e){var s=e("f429"),i=e("8a8a").f,o=Function.prototype,c=o.toString,l=/^\s*function ([^ (]*)/,n="name";!s||n in o||i(o,n,{configurable:!0,get:function(){try{return c.call(this).match(l)[1]}catch(t){return""}}})},"5a63":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"background-color":"#fff"}},[e("van-nav-bar",{attrs:{title:this.$route.name},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[e("van-icon",{attrs:{slot:"right",name:"wap-home-o",color:"#ccc",size:"24"},slot:"right"}),e("van-icon",{attrs:{slot:"left",name:"arrow-left",color:"#ccc",size:"24"},slot:"left"})],1),e("div",{staticClass:"scroll-list"},[e("div",[e("div",{staticClass:"form"},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col "},[t._v("收货人")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"col",attrs:{placeholder:"请输入收货人的姓名"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col"},[t._v("手机号码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],staticClass:"col",attrs:{placeholder:"请输入收货人的手机号码",maxlength:"11",type:"tel"},domProps:{value:t.tel},on:{input:function(a){a.target.composing||(t.tel=a.target.value)}}})]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col "},[t._v("省市区")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.area,expression:"area"}],staticClass:"col",attrs:{placeholder:"请选择"},domProps:{value:t.area},on:{input:function(a){a.target.composing||(t.area=a.target.value)}}}),e("span",{staticClass:"location"},[t._v("定位")])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col"},[t._v("详细地址")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.specific,expression:"specific"}],staticClass:"col",attrs:{placeholder:"请输入收货人的详细地址"},domProps:{value:t.specific},on:{input:function(a){a.target.composing||(t.specific=a.target.value)}}})])]),e("div",{staticClass:"operate-btns box box-tb box-align-center"},[e("div",{staticClass:"save",on:{click:t.save}},[t._v("保存地址")])])])])],1)},i=[],o=(e("3b7c"),{created:function(){},data:function(){return{name:"",tel:"",area:"",specific:""}},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.$router.push({path:"/home/index"})},save:function(){var t=this.area+this.specific,a=this.$store.state.Address.list.length+1;this.$store.commit("addlistFunc",{id:a,name:this.name,tel:this.tel,area:this.area,specific:this.specific,address:t}),this.$router.push({path:"/address"})}}}),c=o,l=(e("c4a5"),e("4e82")),n=Object(l["a"])(c,s,i,!1,null,"3395cb1a",null);a["default"]=n.exports},b89c:function(t,a,e){},c4a5:function(t,a,e){"use strict";var s=e("b89c"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-88068bc2.2b5349ae.js.map