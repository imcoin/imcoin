(window.webpackJsonp=window.webpackJsonp||[]).push([[11,21],{730:function(e,t,r){var content=r(765);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(129).default)("00a69679",content,!0,{sourceMap:!1})},755:function(e,t,r){"use strict";r.r(t),t.default={props:{visible:{type:Boolean,default:!1}},data:function(){return{dialogVisible:this.visible}},watch:{visible:function(){this.dialogVisible=this.visible},dialogVisible:function(e){e||this.closeDialog()}},methods:{closeDialog:function(){this.$emit("update:visible",!1)}}}},763:function(e){e.exports=JSON.parse('{"en_US":{"存储":"存储","平台：":"平台：","昵称":"Nickname ","登录":"Sign In","确定删除吗？":"确定删除吗？","确认":"确认","请填写Acces_83b8":"请填写 Access ID","请填写Secre_ae2e":"请填写 Secret Key","账户":"Account"},"zh_Hans_CN":{"存储":"存储","平台：":"平台：","昵称":"昵称","登录":"登录","确定删除吗？":"确定删除吗？","确认":"确认","请填写Acces_83b8":"请填写 Access ID","请填写Secre_ae2e":"请填写 Secret Key","账户":"账户"},"zh_Hant_HK":{"存储":"存儲","平台：":"平台：","昵称":"昵稱","登录":"登錄","确定删除吗？":"確定刪除嗎？","确认":"確認","请填写Acces_83b8":"請填寫 Access ID","请填写Secre_ae2e":"請填寫 Secret Key","账户":"賬戶"}}')},764:function(e,t,r){"use strict";r(730)},765:function(e,t,r){var o=r(128)(!1);o.push([e.i,".c-login .account-item{border-color:var(--color-gray-200);border-bottom-width:1px;margin-bottom:10px;padding-bottom:10px}.c-login .account-item:last-child{margin-bottom:0}.c-login .account-item .icon-xuanzhong{opacity:0}.c-login .account-item.active .icon-xuanzhong{opacity:1}",""]),e.exports=o},787:function(e,t,r){"use strict";r.r(t);r(110),r(451);var o=r(63),c=r(154),dialog=r(755),n=r(763);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={mixins:[dialog.default],data:function(){return{storeDialogVisible:!1,sform:{key:"",value:""},form:{access_id:"",secret_key:"",name:"",platform:"coinex"}}},computed:f(f({},Object(c.c)(["accountList","account"])),{},{rules:function(){return{access_id:[{required:!0,message:this.$t("请填写Acces_83b8"),trigger:"blur"}],secret_key:[{required:!0,message:this.$t("请填写Secre_ae2e"),trigger:"blur"}]}}}),methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(r){if(!r)return!1;"sform"===e?(localStorage[t.sform.key]=t.sform.value,t.storeDialogVisible=!1):t.changeAccount(f({},t.form))}))},changeAccount:function(e){e&&(this.$store.dispatch("addAccount",e),this.dialogVisible=!1,this.$refs.form.resetFields())},removeAccount:function(e){if(this.accountList){var t=this.accountList.concat();t.splice(e,1),this.$store.commit("SET_ACCOUNT_LIST",t)}}}};m.methods?Object.assign(m.methods,{$t:function(e){if(!this.$lang&&!n.zh_Hans_CN)return e;var t=n[this.$lang]||n.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}}):m.methods={$t:function(e){if(!this.$lang&&!n.zh_Hans_CN)return e;var t=n[this.$lang]||n.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}};var d=m,_=(r(764),r(127)),component=Object(_.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{attrs:{title:e.$t("存储"),visible:e.storeDialogVisible},on:{"update:visible":function(t){e.storeDialogVisible=t}}},[r("el-form",{ref:"sform",staticClass:"flex-1",attrs:{model:e.sform}},[r("el-form-item",{attrs:{prop:"key",required:!0}},[r("el-input",{attrs:{placeholder:"Key"},model:{value:e.sform.key,callback:function(t){e.$set(e.sform,"key",t)},expression:"sform.key"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"value",required:!0}},[r("el-input",{attrs:{placeholder:"Value"},model:{value:e.sform.value,callback:function(t){e.$set(e.sform,"value",t)},expression:"sform.value"}})],1),e._v(" "),r("div",{staticClass:"text-right"},[r("el-button",{staticClass:"w-full mt-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("sform")}}},[e._v(e._s(e.$t("确认")))])],1)],1)],1),e._v(" "),r("el-dialog",{staticClass:"c-login",attrs:{title:e.$t("账户"),visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("p",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.$t("账户"))),r("i",{staticClass:"el-icon-setting ml-10",on:{click:function(t){e.storeDialogVisible=!0}}})]),e._v(" "),r("div",{staticClass:"flex"},[e.accountList?r("div",{staticClass:"mr-20 border-gray-200 border-r pr-20"},e._l(e.accountList,(function(t,o){return r("div",{key:t.access_id,staticClass:"account-item flex",class:{active:e.account&&e.account.access_id===t.access_id}},[r("div",{staticClass:"flex items-center"},[r("i",{staticClass:"iconfont icon-xuanzhong text-blue-400 text-14"})]),e._v(" "),r("div",{staticClass:"flex-1 mx-10 cursor-pointer",on:{click:function(r){return e.changeAccount(t)}}},[t.name?r("p",[e._v(e._s(t.name))]):e._e(),e._v(" "),t.access_id?r("p",{staticClass:"text-12 text-gray-500"},[t.name?r("span"):e._e(),e._v(e._s(t.access_id.slicestr())),t.name?r("span"):e._e()]):e._e()]),e._v(" "),r("div",{staticClass:"flex items-center cursor-pointer"},[r("el-popconfirm",{attrs:{"icon-color":"red",title:e.$t("确定删除吗？")},on:{confirm:function(t){return e.removeAccount(o)}}},[r("i",{staticClass:"el-icon-error text-14 text-red-500",attrs:{slot:"reference"},slot:"reference"})])],1)])})),0):e._e(),e._v(" "),r("el-form",{ref:"form",staticClass:"flex-1",attrs:{model:e.form,rules:e.rules}},[r("div",{staticClass:"mb-15"},[r("span",[e._v(e._s(e.$t("平台：")))]),e._v(" "),r("span",{staticClass:"ml-10"},[e._v("CoinEx")])]),e._v(" "),r("el-form-item",{attrs:{prop:"access_id"}},[r("el-input",{attrs:{placeholder:"Access ID"},model:{value:e.form.access_id,callback:function(t){e.$set(e.form,"access_id",t)},expression:"form.access_id"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"secret_key"}},[r("el-input",{attrs:{"show-password":"",placeholder:"Secret Key"},model:{value:e.form.secret_key,callback:function(t){e.$set(e.form,"secret_key",t)},expression:"form.secret_key"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"name"}},[r("el-input",{attrs:{placeholder:e.$t("昵称")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("div",{staticClass:"text-right"},[r("el-button",{staticClass:"w-full mt-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v(e._s(e.$t("登录")))])],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=component.exports}}]);