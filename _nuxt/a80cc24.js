(window.webpackJsonp=window.webpackJsonp||[]).push([[0,8,12,14],{369:function(t,e,r){"use strict";r.r(e),e.default={props:{market:{type:Object,default:function(){}}},data:function(){return{marketInfo:this.market}},computed:{marketStr:function(){return this.marketInfo&&this.marketInfo.dest&&this.marketInfo.currency?(this.marketInfo.dest+this.marketInfo.currency).toUpperCase():""}},watch:{market:function(t){this.marketInfo=t}}}},370:function(t,e,r){"use strict";r.r(e);r(93);var n={BTC:"https://file.coinex.com/2018-07-14/333CC02C095C49E29863F6B6D49E022D.png",USDT:"https://file.coinex.com/2018-07-17/A7AC5747219B40B49487F7AE723C8B63.png",USDC:"https://file.coinex.com/2018-10-11/3EF6B52D65F64B9284202DCC709336F3.png",DAI:"https://file.coinex.com/2020-03-17/78C03C4ACE214454955A36E848B6CC6F.png",CET:"https://file.coinex.com/2018-07-24/CFE4EAD0CC324280AF9972B194A40FE1.png",BCH:"https://file.coinex.com/2020-11-20/7F1C412915FC1FC9853E7E66497E3158.png",TUSD:"https://file.coinex.com/2019-03-05/89EBB7EFFF0F4D78AD4BACDA9AD7CCD4.png",ETH:"https://file.coinex.com/2018-07-24/6F74A9D735814E1A8AE81163E051B15E.png",ETC:"https://file.coinex.com/2018-07-24/FBB037600CB340E18208974F42348D51.png",EOS:"https://file.coinex.com/2018-07-23/BABBA667D02E4B639D1AA3FD0D074A12.png",XRP:"https://file.coinex.com/2018-07-22/89C65460F5D34029A11615D4EA55E5DA.png",BSV:"https://file.coinex.com/2019-03-01/FA6BE26B32C247839B2DE1D9A2EAB232.png",LTC:"https://file.coinex.com/2019-02-14/996138392B60400884FE3F1EB2F7C3E5.png",ONES:"https://file.coinex.com/2020-09-17/7F9A2D7E47429647FE4FF3ACB297584F.png",USDH:"https://file.coinex.com/2019-06-11/C0709BC1B77446409EFE0A843EAB1DB7.png",DOT:"https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",ADA:"https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",LINK:"https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",BNB:"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",XLM:"https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",UNI:"https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",DOGE:"https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",TRX:"https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",HT:"https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png"},c={props:{url:{type:String,default:""},name:{type:String,default:""}},data:function(){return{src:this.url,loaded:!1,title:this.name,srcSource:n}},computed:{finnalSrc:function(){return this.src||n[this.title]||""}},watch:{name:function(t){this.title=t},url:function(t){this.src=t},finnalSrc:function(t){this.loadImg(t)}},mounted:function(){this.loadImg(this.finnalSrc)},methods:{loadImg:function(t){var e=this,img=new Image;img.onload=function(){e.loaded=!0},img.src=t}}},o=r(37),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center overflow-hidden inline-block text-center",class:{"bg-gray-400 shadow-sm rounded-full":!t.loaded}},[t.loaded?r("img",{staticClass:"w-full h-full",attrs:{src:t.finnalSrc}}):r("p",{staticClass:"text-white text-center w-full"},[t._v(t._s(t.title[0]))])])}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,r){"use strict";r.r(e);r(56),r(39),r(40),r(68),r(224),r(226),r(29);var n=r(10),c=r(53),o=r(369),l=r(370),f=r(45),d=r(385);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{Logo:l.default},mixins:[o.default],props:{width:{type:String,default:"180"}},data:function(){return{marketPopoverVisible:!1,inputMarket:""}},computed:_(_({},Object(c.c)(["markets"])),{},{marketsList:function(){var t=this,e=[],r=f.d.map((function(t){return t+"USDT"})),n=[];return r.forEach((function(e){(t.markets||[]).includes(e)&&n.push(e)})),(this.markets||[]).forEach((function(t){r.includes(t)||n.push(t)})),n.forEach((function(r){for(var i=0;i<f.b.length;i++){var n=r.indexOf(f.b[i]);if(n>0){var c=!0;t.inputMarket&&(c=(r.substring(0,n)+"/"+f.b[i]).startsWith(t.inputMarket.toUpperCase())||(r.substring(0,n)+f.b[i]).startsWith(t.inputMarket.toUpperCase())),c&&e.push({currency:f.b[i],dest:r.substring(0,n)});break}}})),e}}),methods:{selectMarket:function(t){this.$emit("selectMarket",t),this.marketPopoverVisible=!1,this.inputMarket=""},goMarket:function(){var t=this.inputMarket.toUpperCase();if(t.indexOf("-")>0){var e=t.split("/");this.selectMarket({currency:e[0],dest:e[1]})}else for(var i=0;i<f.b.length;i++){var r=t.indexOf(f.b[i]);if(r>0){this.selectMarket({currency:f.b[i],dest:t.substring(0,r)});break}}}}};h.methods?Object.assign(h.methods,{$t:function(t){if(!this.$lang&&!d.zh_Hans_CN)return t;var e=d[this.$lang]||d.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):h.methods={$t:function(t){if(!this.$lang&&!d.zh_Hans_CN)return t;var e=d[this.$lang]||d.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var v=h,k=r(37),component=Object(k.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-popover",{attrs:{placement:"bottom",width:t.width,trigger:"click"},model:{value:t.marketPopoverVisible,callback:function(e){t.marketPopoverVisible=e},expression:"marketPopoverVisible"}},[r("div",{staticClass:"flex items-center cursor-pointer",attrs:{slot:"reference"},slot:"reference"},[r("div",{staticClass:"bg-white rounded-full p-5 shadow-md h-30 w-30 z-10"},[r("Logo",{key:t.marketInfo.dest,staticClass:"w-full h-full",attrs:{name:t.marketInfo.dest}})],1),t._v(" "),r("div",{staticClass:"bg-white rounded-full p-5 shadow-md h-30 w-30",staticStyle:{"margin-left":"-10px"}},[r("Logo",{key:t.marketInfo.currency,staticClass:"w-full h-full",attrs:{name:t.marketInfo.currency}})],1),t._v(" "),r("p",{staticClass:"font-w600 text-18 ml-10"},[t._v("\n      "+t._s(t.marketInfo.dest)+"/"+t._s(t.marketInfo.currency)+"\n    ")]),t._v(" "),r("i",{staticClass:"iconfont text-blue-500 icon-qiehuan ml-5"})]),t._v(" "),r("div",{on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goMarket(e)}}},[r("el-input",{attrs:{placeholder:t.$t("搜索交易对"),size:"small"},model:{value:t.inputMarket,callback:function(e){t.inputMarket=e},expression:"inputMarket"}},[r("i",{staticClass:"iconfont icon-qianwang text-blue-500 cursor-pointer block mt-5",attrs:{slot:"suffix"},on:{click:t.goMarket},slot:"suffix"})]),t._v(" "),r("div",{staticClass:"max-h-200 overflow-auto mt-10"},t._l(t.marketsList,(function(e){return r("div",{key:e.dest+e.currency,staticClass:"flex items-center cursor-pointer py-5",on:{click:function(r){return t.selectMarket(e)}}},[r("div",{staticClass:"bg-white rounded-full shadow-md h-20 w-20 z-10",staticStyle:{padding:"3px"}},[r("Logo",{staticClass:"w-full h-full text-12",attrs:{name:e.dest}})],1),t._v(" "),r("div",{staticClass:"bg-white rounded-full shadow-md h-20 w-20",staticStyle:{"margin-left":"-8px",padding:"3px"}},[r("Logo",{staticClass:"w-full h-full text-12",attrs:{name:e.currency}})],1),t._v(" "),r("p",{staticClass:"font-w500 text-14 ml-10 hover:text-blue-400"},[t._v("\n          "+t._s(e.dest)+"/"+t._s(e.currency)+"\n        ")])])})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(370).default})},385:function(t){t.exports=JSON.parse('{"en_US":{"搜索交易对":"搜索交易对"},"zh_Hans_CN":{"搜索交易对":"搜索交易对"},"zh_Hant_HK":{"搜索交易对":"搜索交易對"}}')},390:function(t,e,r){"use strict";r.r(e);r(28),r(39),r(93),r(41),r(7),r(67),r(29),r(38);var n=r(6),c=r(10),o=r(53),l=r(369),f=r(377),d=r(407);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{MarketSelector:f.default},mixins:[l.default],props:{canSwitchMarket:{type:Boolean,default:!0}},data:function(){return{endTime:0,beginTime:0,dateDict:{},buyCount:0,sellCount:0,feeEndTime:0,feeBeginTime:0,cetDateFee:{},limit:50,form:{currentPrice:"",feeType:"data"},isLoading:!1,feeMarket:"CETUSDT"}},computed:_(_({},Object(o.c)(["account","legal"])),{},{sumDay:function(){return(this.endTime-this.beginTime)/24/60/60},feeDict:function(){var t=this,e={};return this.dateDict&&Object.keys(this.dateDict).forEach((function(r){Object.keys(t.dateDict[r].feeDict).forEach((function(n){e[n]=e[n]||0,e[n]+=parseFloat(t.dateDict[r].feeDict[n])}))})),e},feeArr:function(){var t=this;return Object.keys(this.feeDict).map((function(e){return{name:e,amount:t.feeDict[e]}}))},total:function(){var t=this,e=0;return this.dateDict&&Object.keys(this.dateDict).forEach((function(r){e+=parseFloat(t.dateDict[r].profit)})),e},cost:function(){var t=this,e=0;return this.dateDict&&Object.keys(this.cetDateFee).forEach((function(r){e+=parseFloat(t.cetDateFee[r])})),this.$toToken(e,"USDT",this.marketInfo.currency)},totalLegal:function(){return this.$toLegal(this.total,this.marketInfo.currency)},feeLegal:function(){var t=this;if("cet"===this.form.feeType)return this.$toLegal(this.cost,this.marketInfo.currency);var e=0;return this.feeArr.forEach((function(r){e+=parseFloat(t.$toLegal(r.amount,r.name))})),e},netProfit:function(){return"cet"===this.form.feeType?this.total-this.cost:this.total-this.$toToken(this.feeLegal,this.legal,this.marketInfo.currency)},netProfitLegal:function(){return this.$toLegal(this.netProfit,this.marketInfo.currency)},dayNetProfits:function(){var t=this,e={},r=function(r){e[r]=e[r]||0,e[r]+=parseFloat(t.dateDict[r].profit),"cet"===t.form.feeType&&t.cetDateFee&&t.cetDateFee[r]?e[r]-=parseFloat(t.$toToken(t.cetDateFee[r],"USDT",t.marketInfo.currency)):Object.keys(t.dateDict[r].feeDict).forEach((function(n){e[r]-=parseFloat(t.$toToken(t.dateDict[r].feeDict[n],n,t.marketInfo.currency))}))};for(var n in this.dateDict)r(n);return Object.keys(e).map((function(t){return{date:t,amount:e[t]}}))}}),watch:{marketStr:function(){this.retrieveMarketData()},"form.currentPrice":function(t){window.localStorage["STA_PRICE_".concat(this.marketStr)]=t},account:function(){this.retrieveMarketData()}},mounted:function(){this.retrieveMarketData(),this.retrieveFeeData()},methods:{selectMarket:function(t){this.marketInfo=t,this.$router.push("/statistics?market=".concat(this.marketInfo.dest,"-").concat(this.marketInfo.currency))},calcWin:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,i,o,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.account){r.next=2;break}return r.abrupt("return");case 2:return e.isLoading=!0,r.prev=3,r.next=6,e.$axios.get(e.$url("/v1/order/user/deals"),e.$signGet({access_id:e.account.access_id,market:e.marketStr,page:t,limit:e.limit,tonce:(new Date).getTime()}));case 6:if(0!==(n=r.sent).data.code){r.next=31;break}c=!1,n.data.data.data.length>0&&!e.endTime&&!e.beginTime&&(e.endTime=e.beginTime=n.data.data.data[0].create_time),i=0;case 11:if(!(i<n.data.data.data.length)){r.next=22;break}if((o=n.data.data.data[i]).create_time>e.endTime&&(e.endTime=o.create_time),o.create_time<e.beginTime&&(e.beginTime=o.create_time),!(e.marketDataSaved&&e.marketDataSaved.endTime>=o.create_time)){r.next=18;break}return c=!0,r.abrupt("break",22);case 18:c||(l=o.create_time.toString().toTime("yyyy-MM-dd"),e.dateDict[l]=e.dateDict[l]||{profit:0,feeDict:{}},"buy"===o.type?e.buyCount++:e.sellCount++,f=Math.abs(parseFloat(o.amount)*parseFloat(e.form.currentPrice)-parseFloat(o.deal_money)),e.dateDict[l].profit+=f,e.dateDict[l].feeDict[o.fee_asset]=e.dateDict[l].feeDict[o.fee_asset]||0,e.dateDict[l].feeDict[o.fee_asset]+=parseFloat(o.fee),e.dateDict=_({},e.dateDict));case 19:i++,r.next=11;break;case 22:if(n.data.data.has_next&&!c){r.next=27;break}e.saveMarketData(),"cet"===e.form.feeType?e.calcFee(1):e.isLoading=!1,r.next=29;break;case 27:return r.next=29,e.calcWin(t+1);case 29:r.next=33;break;case 31:e.isLoading=!1,e.$message.error(n.data.message);case 33:r.next=39;break;case 35:r.prev=35,r.t0=r.catch(3),e.isLoading=!1,e.$message.error(r.t0.message);case 39:case"end":return r.stop()}}),r,null,[[3,35]])})))()},calcFee:function(){var t=arguments,e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,o,i,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,r.prev=1,r.next=4,e.$axios.get(e.$url("/v1/order/user/deals"),e.$signGet({access_id:e.account.access_id,market:e.feeMarket,page:n,limit:e.limit,tonce:(new Date).getTime()}));case 4:if(0!==(c=r.sent).data.code){r.next=29;break}o=!1,i=0;case 8:if(!(i<c.data.data.data.length)){r.next=20;break}if(l=c.data.data.data[i],c.data.data.data.length>0&&!e.feeEndTime&&!e.feeBeginTime&&(e.feeEndTime=e.feeBeginTime=c.data.data.data[0].create_time),l.create_time>e.feeEndTime&&(e.feeEndTime=l.create_time),l.create_time<e.feeBeginTime&&(e.feeBeginTime=l.create_time),!(e.feeDataSaved&&e.feeDataSaved.endTime>=l.create_time)){r.next=16;break}return o=!0,r.abrupt("break",20);case 16:o||(f=l.create_time.toString().toTime("yyyy-MM-dd"),e.cetDateFee[f]=e.cetDateFee[f]||0,e.cetDateFee[f]+=parseFloat(l.deal_money),e.cetDateFee=_({},e.cetDateFee));case 17:i++,r.next=8;break;case 20:if(c.data.data.has_next&&!o){r.next=25;break}e.isLoading=!1,e.saveFeeData(),r.next=27;break;case 25:return r.next=27,e.calcFee(n+1);case 27:r.next=31;break;case 29:e.isLoading=!1,e.$message.error(c.data.message);case 31:r.next=37;break;case 33:r.prev=33,r.t0=r.catch(1),e.isLoading=!1,e.$message.error(r.t0.message);case 37:case"end":return r.stop()}}),r,null,[[1,33]])})))()},saveMarketData:function(){this.marketDataSaved={beginTime:this.beginTime,endTime:this.endTime,dateDict:this.dateDict,buyCount:this.buyCount,sellCount:this.sellCount},localStorage.setItem("STA_"+this.marketStr+"_"+this.account.access_id,JSON.stringify(this.marketDataSaved))},saveFeeData:function(){this.feeDataSaved={beginTime:this.feeBeginTime,endTime:this.feeEndTime,cetDateFee:this.cetDateFee},localStorage.setItem("STA_FEE_"+this.feeMarket+"_"+this.account.access_id,JSON.stringify(this.feeDataSaved))},retrieveMarketData:function(){if(this.account){var t="STA_"+this.marketStr+"_"+this.account.access_id,data=localStorage.getItem(t);if(this.form.currentPrice=window.localStorage["STA_PRICE_".concat(this.marketStr)]||"",data)try{var e=JSON.parse(data);this.beginTime=e.beginTime,this.endTime=e.endTime,this.dateDict=e.dateDict,this.buyCount=e.buyCount,this.sellCount=e.sellCount,this.marketDataSaved=e}catch(t){}}},retrieveFeeData:function(){if(this.account){var t="STA_FEE_"+this.feeMarket+"_"+this.account.access_id,data=localStorage.getItem(t);if(data)try{var e=JSON.parse(data);this.feeBeginTime=e.beginTime,this.feeEndTime=e.endTime,this.cetDateFee=e.cetDateFee,this.feeDataSaved=e}catch(t){}}}}};h.methods?Object.assign(h.methods,{$t:function(t){if(!this.$lang&&!d.zh_Hans_CN)return t;var e=d[this.$lang]||d.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):h.methods={$t:function(t){if(!this.$lang&&!d.zh_Hans_CN)return t;var e=d[this.$lang]||d.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var v=h,k=(r(408),r(37)),component=Object(k.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-statistics p-20"},[t.canSwitchMarket?r("div",{staticClass:"flex"},[r("MarketSelector",{attrs:{market:t.marketInfo},on:{selectMarket:t.selectMarket}}),t._v(" "),r("div",{staticClass:"flex-1 text-right"},[r("nuxt-link",{attrs:{to:"/?market="+t.marketInfo.dest+"-"+t.marketInfo.currency}},[r("i",{staticClass:"iconfont icon-zhuanfa text-blue-500"})])],1)],1):t._e(),t._v(" "),r("div",{staticClass:"border-b border-dashed border-gray-300 pb-20 mt-20"},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",size:"mini","label-position":"left"}},[r("el-form-item",{attrs:{label:t.$t("当前价格")}},[r("el-input",{model:{value:t.form.currentPrice,callback:function(e){t.$set(t.form,"currentPrice",e)},expression:"form.currentPrice"}})],1),t._v(" "),r("el-form-item",{attrs:{label:t.$t("手续费")}},[r("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.feeType,callback:function(e){t.$set(t.form,"feeType",e)},expression:"form.feeType"}},[r("el-radio",{attrs:{label:"data"}},[t._v(t._s(t.$t("交易数据")))]),t._v(" "),r("el-radio",{attrs:{label:"cet"}},[t._v(t._s(t.$t("CET历史成交")))])],1)],1),t._v(" "),r("div",{staticClass:"text-center"},[r("el-button",{staticClass:"w-full",attrs:{loading:t.isLoading,type:"primary",plain:"",size:"small"},on:{click:function(e){return t.calcWin(1)}}},[t._v(t._s(t.$t("统计盈亏")))])],1)],1)],1),t._v(" "),r("table",{staticClass:"w-full mt-20"},[r("tbody",[r("tr",[r("td",{staticClass:"label"},[t._v(t._s(t.$t("开始时间")))]),t._v(" "),r("td",{staticClass:"value text-gray-800"},[t._v("\n          "+t._s(t.beginTime.toString().toTime())+"\n        ")])]),t._v(" "),r("tr",[r("td",{staticClass:"label"},[t._v(t._s(t.$t("结束时间")))]),t._v(" "),r("td",{staticClass:"value text-gray-800"},[t._v(t._s(t.endTime.toString().toTime()))])]),t._v(" "),r("tr",[r("td",{staticClass:"label"},[t._v(t._s(t.$t("累计")))]),t._v(" "),r("td",{staticClass:"value text-gray-800"},[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.sumDay.toFixed(2)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.$t("天")))])])]),t._v(" "),r("tr",[r("td",{staticClass:"label"},[t._v(t._s(t.$t("成交")))]),t._v(" "),r("td",{staticClass:"value"},[r("div",[r("span",[t._v(t._s(t.$t("累计成交")))]),t._v(" "),r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.buyCount+t.sellCount))]),t._v(" "),r("span",[t._v(t._s(t.$t("笔")))])]),t._v(" "),r("div",[r("span",[t._v(t._s(t.$t("买")))]),t._v(" "),r("span",{staticClass:"text-green-500 text-18"},[t._v(t._s(t.buyCount))]),t._v(" "),r("span",[t._v(t._s(t.$t("笔")))]),t._v(",\n\n            "),r("span",{staticClass:"ml-5"},[t._v(t._s(t.$t("卖")))]),t._v(" "),r("span",{staticClass:"text-red-500 text-18"},[t._v(t._s(t.sellCount))]),t._v(" "),r("span",[t._v(t._s(t.$t("笔")))])])])]),t._v(" "),r("tr",[r("td",{staticClass:"label"},[t._v(t._s(t.$t("盈利")))]),t._v(" "),r("td",{staticClass:"value"},[r("p",[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.total.toFixed(8)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.marketInfo.currency))])]),t._v(" "),r("p",[t._v("\n            ≈ "+t._s(t.totalLegal)+"\n            "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.legal))])])])]),t._v(" "),r("tr",[r("td",{staticClass:"label pb-10"},[t._v(t._s(t.$t("手续费")))]),t._v(" "),r("td",{staticClass:"value pb-10"},["cet"===t.form.feeType?r("span",[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.cost.toBFixed(8)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.marketInfo.currency))])]):t._e(),t._v(" "),"data"===t.form.feeType?r("div",[0==t.feeArr.length?r("span",[t._v("--")]):t._e(),t._v(" "),t._l(t.feeArr,(function(e,n){return r("div",{key:n},[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(e.amount.toString().toBFixed()))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(e.name))])])}))],2):t._e(),t._v(" "),r("p",[t._v("\n            ≈ "+t._s(t.feeLegal)+"\n            "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.legal))])])])]),t._v(" "),r("tr",{staticClass:"border-gray-300 border-t border-dashed"},[r("td",{staticClass:"label pt-10"},[t._v(t._s(t.$t("净利润")))]),t._v(" "),r("td",{staticClass:"value pt-10"},[r("p",[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.netProfit.toString().toBFixed(8)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.marketInfo.currency))])]),t._v(" "),r("p",[t._v("\n            ≈\n            "),r("span",{staticClass:"text-gray-800"},[t._v(t._s(t.netProfitLegal.toBFixed(2)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.legal))])])])]),t._v(" "),r("tr",[r("td",{staticClass:"label pt-10"},[t._v(t._s(t.$t("每月")))]),t._v(" "),r("td",{staticClass:"value pt-10"},[r("p",[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s((t.netProfit.toString()||"0").div(t.sumDay||1).mul(30).toBFixed(8)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.marketInfo.currency))])]),t._v(" "),r("p",[t._v("\n            ≈\n            "),r("span",{staticClass:"text-gray-800"},[t._v(t._s(t.netProfitLegal.div(t.sumDay||1).mul(30).toBFixed(2)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.legal))])])])]),t._v(" "),r("tr",[r("td",{staticClass:"label pt-10"},[t._v(t._s(t.$t("每日")))]),t._v(" "),r("td",{staticClass:"value pt-10"},[r("p",[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.netProfit.toString().div(t.sumDay||1).toBFixed(8)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.marketInfo.currency))])]),t._v(" "),r("p",[t._v("\n            ≈\n            "),r("span",{staticClass:"text-gray-800"},[t._v(t._s(t.netProfitLegal.div(t.sumDay||1).toBFixed(2)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.legal))])])])])])]),t._v(" "),r("div",{staticClass:"border-dashed border-t border-gray-300 mt-20"},[r("el-table",{staticClass:"w-full",attrs:{data:t.dayNetProfits,stripe:"",height:"300"}},[r("el-table-column",{attrs:{prop:"date",label:t.$t("时间")}}),t._v(" "),r("el-table-column",{attrs:{prop:"amount",label:t.$t("数量"),align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.amount.toBFixed(4))+"\n            "+t._s(t.marketInfo.currency))])]}}])})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MarketSelector:r(377).default})},405:function(t,e,r){var content=r(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("b5713582",content,!0,{sourceMap:!1})},407:function(t){t.exports=JSON.parse('{"en_US":{"CET历史成交":"CET历史成交","买":"买","交易数据":"交易数据","净利润":"净利润","卖":"卖","天":"天","开始时间":"开始时间","当前价格":"当前价格","成交":"成交","手续费":"手续费","数量":"数量","时间":"时间","每日":"每日","每月":"每月","盈利":"盈利","笔":"笔","累计":"累计","累计成交":"累计成交","结束时间":"结束时间","统计盈亏":"统计盈亏"},"zh_Hans_CN":{"CET历史成交":"CET历史成交","买":"买","交易数据":"交易数据","净利润":"净利润","卖":"卖","天":"天","开始时间":"开始时间","当前价格":"当前价格","成交":"成交","手续费":"手续费","数量":"数量","时间":"时间","每日":"每日","每月":"每月","盈利":"盈利","笔":"笔","累计":"累计","累计成交":"累计成交","结束时间":"结束时间","统计盈亏":"统计盈亏"},"zh_Hant_HK":{"CET历史成@DEPRECATED@":"CET歷史成","CET历史成交":"CET歷史成交","买":"買","交易数据":"交易數據","净利润":"凈利潤","卖":"賣","天":"天","开始时间":"開始時間","当前价格":"當前價格","成交":"成交","手续费":"手續費","数量":"數量","时间":"時間","每日":"每日","每月":"每月","盈利":"盈利","笔":"筆","累计":"累計","累计成交":"累計成交","结束时间":"結束時間","统计盈亏":"統計盈虧"}}')},408:function(t,e,r){"use strict";r(405)},409:function(t,e,r){var n=r(54)(!1);n.push([t.i,".c-statistics .label,.c-statistics .value{vertical-align:top;padding-top:5px;padding-bottom:5px}.c-statistics .label{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity))}.c-statistics .value{text-align:right;--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}",""]),t.exports=n}}]);