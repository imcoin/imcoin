(window.webpackJsonp=window.webpackJsonp||[]).push([[10,19],{723:function(e,t,c){var content=c(732);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(129).default)("00a69679",content,!0,{sourceMap:!1})},726:function(e,t,c){"use strict";c.r(t);c(110),c(451);var r=c(63),o=c(154),dialog=c(727),n=c(730);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,c)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={mixins:[dialog.default],data:function(){return{form:{access_id:"",secret_key:"",name:"",platform:"coinex"}}},computed:f(f({},Object(o.c)(["accountList","account"])),{},{rules:function(){return{access_id:[{required:!0,message:this.$t("请填写Acces_83b8"),trigger:"blur"}],secret_key:[{required:!0,message:this.$t("请填写Secre_ae2e"),trigger:"blur"}]}}}),methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.changeAccount(f({},t.form))}))},changeAccount:function(e){e&&(this.$store.dispatch("addAccount",e),this.dialogVisible=!1,this.$refs.form.resetFields())},removeAccount:function(e){if(this.accountList){var t=this.accountList.concat();t.splice(e,1),this.$store.commit("SET_ACCOUNT_LIST",t)}}}};m.methods?Object.assign(m.methods,{$t:function(e){if(!this.$lang&&!n.zh_Hans_CN)return e;var t=n[this.$lang]||n.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}}):m.methods={$t:function(e){if(!this.$lang&&!n.zh_Hans_CN)return e;var t=n[this.$lang]||n.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}};var d=m,_=(c(731),c(127)),component=Object(_.a)(d,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("el-dialog",{staticClass:"c-login",attrs:{title:e.$t("账户"),visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[c("div",{staticClass:"flex"},[e.accountList?c("div",{staticClass:"mr-20 border-gray-200 border-r pr-20"},e._l(e.accountList,(function(t,r){return c("div",{key:t.access_id,staticClass:"account-item flex",class:{active:e.account&&e.account.access_id===t.access_id}},[c("div",{staticClass:"flex items-center"},[c("i",{staticClass:"iconfont icon-xuanzhong text-blue-400 text-14"})]),e._v(" "),c("div",{staticClass:"flex-1 mx-10 cursor-pointer",on:{click:function(c){return e.changeAccount(t)}}},[t.name?c("p",[e._v(e._s(t.name))]):e._e(),e._v(" "),t.access_id?c("p",{staticClass:"text-12 text-gray-500"},[t.name?c("span"):e._e(),e._v(e._s(t.access_id.slicestr())),t.name?c("span"):e._e()]):e._e()]),e._v(" "),c("div",{staticClass:"flex items-center cursor-pointer"},[c("el-popconfirm",{attrs:{"icon-color":"red",title:e.$t("确定删除吗？")},on:{confirm:function(t){return e.removeAccount(r)}}},[c("i",{staticClass:"el-icon-error text-14 text-red-500",attrs:{slot:"reference"},slot:"reference"})])],1)])})),0):e._e(),e._v(" "),c("el-form",{ref:"form",staticClass:"flex-1",attrs:{model:e.form,rules:e.rules}},[c("div",{staticClass:"mb-15"},[c("span",[e._v(e._s(e.$t("平台：")))]),e._v(" "),c("span",{staticClass:"ml-10"},[e._v("CoinEx")])]),e._v(" "),c("el-form-item",{attrs:{prop:"access_id"}},[c("el-input",{attrs:{placeholder:"Access ID"},model:{value:e.form.access_id,callback:function(t){e.$set(e.form,"access_id",t)},expression:"form.access_id"}})],1),e._v(" "),c("el-form-item",{attrs:{prop:"secret_key"}},[c("el-input",{attrs:{"show-password":"",placeholder:"Secret Key"},model:{value:e.form.secret_key,callback:function(t){e.$set(e.form,"secret_key",t)},expression:"form.secret_key"}})],1),e._v(" "),c("el-form-item",{attrs:{prop:"name"}},[c("el-input",{attrs:{placeholder:e.$t("昵称")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),c("div",{staticClass:"text-right"},[c("el-button",{staticClass:"w-full mt-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v(e._s(e.$t("登录")))])],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports},727:function(e,t,c){"use strict";c.r(t),t.default={props:{visible:{type:Boolean,default:!1}},data:function(){return{dialogVisible:this.visible}},watch:{visible:function(){this.dialogVisible=this.visible},dialogVisible:function(e){e||this.closeDialog()}},methods:{closeDialog:function(){this.$emit("update:visible",!1)}}}},730:function(e){e.exports=JSON.parse('{"en_US":{"平台：":"平台：","昵称":"Nickname ","登录":"Sign In","确定删除吗？":"确定删除吗？","请填写Acces_83b8":"请填写 Access ID","请填写Secre_ae2e":"请填写 Secret Key","账户":"Account"},"zh_Hans_CN":{"平台：":"平台：","昵称":"昵称","登录":"登录","确定删除吗？":"确定删除吗？","请填写Acces_83b8":"请填写 Access ID","请填写Secre_ae2e":"请填写 Secret Key","账户":"账户"},"zh_Hant_HK":{"平台：":"平台：","昵称":"昵稱","登录":"登錄","确定删除吗？":"確定刪除嗎？","请填写Acces_83b8":"請填寫 Access ID","请填写Secre_ae2e":"請填寫 Secret Key","账户":"賬戶"}}')},731:function(e,t,c){"use strict";c(723)},732:function(e,t,c){var r=c(128)(!1);r.push([e.i,".c-login .account-item{border-color:var(--color-gray-200);border-bottom-width:1px;margin-bottom:10px;padding-bottom:10px}.c-login .account-item:last-child{margin-bottom:0}.c-login .account-item .icon-xuanzhong{opacity:0}.c-login .account-item.active .icon-xuanzhong{opacity:1}",""]),e.exports=r}}]);