webpackJsonp([1],{"0cMz":function(t,e){},"6PJL":function(t,e){},"6zdN":function(t,e){},"7+Xs":function(t,e){},CIPM:function(t,e){},Do5P:function(t,e){},F2Dn:function(t,e){},LB1H:function(t,e){},MiXs:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("GYWr"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("SZvu")({name:"index"},o,!1,function(t){n("gbqo")},null,null).exports,s=(n("lI8v"),n("LwaJ")),i=n("Q9jj"),c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};n("SZvu")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){n("kHvd")},"data-v-3b884edb",null).exports,n("QISJ");var l=n("yr27"),u=(n("zbgw"),n("DQ2a")),v=(n("j2f9"),n("zbCP")),d=(n("7KBW"),n("iOnX")),m=(n("siKx"),n("eG4N")),f=(n("XvUJ"),n("rukP")),h=(n("x8GN"),n("TQmG")),p=(n("/52L"),n("6JwK")),g=(n("CR4D"),n("J8Rq")),_=(n("gObR"),n("/cj0")),b=(n("D+dt"),n("rWgm")),C=(n("9vI6"),n("wN/B")),w=(n("Lk88"),n("LrlO")),k=(n("NO/u"),n("RSHE")),x=(n("1IyC"),n("QQde")),$=(n("46+9"),n("b4L5")),I=(n("8XY3"),n("DSli")),y=(n("LBL/"),n("F7DQ")),S=(n("Llxr"),n("LceZ")),j=(n("XrZw"),n("2iq+")),E=(n("21v+"),n("V0SV")),R=(n("EKs9"),n("Ce2E")),F=(n("/2o1"),n("WftR")),Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("van-nav-bar",{staticClass:"header_nav",attrs:{title:this.title,"left-arrow":this.arrow},on:{"click-left":this.onClickLeft}})],1)},staticRenderFns:[]};var L=n("SZvu")({name:"Header",props:["title","left","arrow"],data:function(){return{msg:"i'm header"}},methods:{onClickLeft:function(){this.$router.go(-1)}}},Z,!1,function(t){n("CIPM")},"data-v-0ee7e682",null).exports,T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("router-view"),t._v(" "),n("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{replace:"",to:"/",icon:"home-o"}},[t._v("首页")]),t._v(" "),n("van-tabbar-item",{attrs:{replace:"",to:"/mall",icon:"shop-o"}},[t._v("商城")]),t._v(" "),n("van-tabbar-item",{attrs:{replace:"",to:"/cart",icon:"cart-o"}},[t._v("购物车")]),t._v(" "),n("van-tabbar-item",{attrs:{replace:"",to:"/mine",icon:"user-o"}},[t._v("我的")])],1)],1)},staticRenderFns:[]};var z=n("SZvu")({name:"Footer",data:function(){return{msg:"i'm footer",active:this.$store.state.tab}},methods:{change:function(t){switch(t){case"home":this.$store.dispatch("changeTab","home"),this.$router.push("/");break;case"mall":this.$store.dispatch("changeTab","mall"),this.$router.push("/mall");break;case"cart":this.$store.dispatch("changeTab","cart"),this.$router.push("/cart");break;case"mine":this.$store.dispatch("changeTab","mine"),this.$router.push("/mine")}}}},T,!1,function(t){n("qqsK")},"data-v-4a5820c4",null).exports,M=function(){a.a.component(L.name,L),a.a.component(z.name,z),a.a.component(F.a.name,F.a),a.a.component(R.a.name,R.a),a.a.component(E.a.name,E.a),a.a.component(j.a.name,j.a),a.a.component(S.a.name,S.a),a.a.component(y.a.name,y.a),a.a.component(I.a.name,I.a),a.a.component($.a.name,$.a),a.a.component(x.a.name,x.a),a.a.component(k.a.name,k.a),a.a.component(w.a.name,w.a),a.a.component(C.a.name,C.a),a.a.component(b.a.name,b.a),a.a.component(_.a.name,_.a),a.a.component(g.a.name,g.a),a.a.component(p.a.name,p.a),a.a.component(h.a.name,h.a),a.a.component(f.a.name,f.a),a.a.component(m.a.name,m.a),a.a.component(d.a.name,d.a),a.a.component(v.a.name,v.a),a.a.component(u.a.name,u.a),a.a.component(l.a.name,l.a)},O=n("Qv5k"),q=n.n(O),H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"tabPane"},[e("router-link",{attrs:{to:{path:this.url}}},[e("div",{staticClass:"tab-bar"},[e("p",[e("span",{staticClass:"icon iconfont"},[this._v("")])]),this._v(" "),e("p",[this._v("\n        "+this._s(this.name)+"\n      ")])])])],1)},staticRenderFns:[]};var A={name:"Home",data:function(){var t=this.$store.state;return{banner:t.banner,goods:t.goods}},methods:{calnum:function(t){return t>999?"999+":t},goDetail:function(t){this.$router.push("/detail/"+t.id)}},components:{TabPane:n("SZvu")({name:"Footer",props:["name","url","icon"],data:function(){return{msg:"i'm footer"}}},H,!1,function(t){n("b+aS")},"data-v-44e78b9a",null).exports}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("Header",{attrs:{title:"首页"}}),t._v(" "),n("content",{staticClass:"content"},[n("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.banner,function(t,e){return n("van-swipe-item",{key:e},[n("van-image",{attrs:{width:"100%",height:"3rem",src:t.src}})],1)}),1),t._v(" "),n("van-notice-bar",{attrs:{"left-icon":"volume-o"}},[t._v("\n      舌尖美味,赣南脐橙将于11月份采摘,基地直供请认准www.yaoxianguo.com【要鲜果】!\n    ")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"rec"},t._l(t.goods,function(e,a){return n("van-card",{key:a,attrs:{num:t.calnum(e.num),price:e.price,desc:e.desc,title:e.title,thumb:e.img,"origin-price":e.ori_price},on:{"click-thumb":function(n){return t.goDetail(e)}}},[n("div",{attrs:{slot:"tags"},slot:"tags"},[n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v(t._s(e.type))])],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("van-icon",{staticClass:"shop_car",attrs:{name:"cart-circle-o"}})],1)])}),1)],1),t._v(" "),n("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wish"},[e("div",{staticClass:"logo"},[this._v("橙")]),this._v(" "),e("div",{staticClass:"txt"},[e("p",[this._v("最新鲜的橙子不在超市,而是在你下单的时候它还在树上!")]),this._v(" "),e("p",[this._v("我什么都不能给你，除了最新鲜美味的赣南脐橙！【要鲜果】")])])])}]};var W=n("SZvu")(A,D,!1,function(t){n("lZWI")},"data-v-75cac06b",null).exports,Q=n("qWzu"),G=n.n(Q),J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-dropdown-menu",{attrs:{"active-color":"#ee0a24"},on:{change:t.change}},[n("van-dropdown-item",{attrs:{options:t.option[0]},model:{value:t.value[0],callback:function(e){t.$set(t.value,0,e)},expression:"value[0]"}}),t._v(" "),n("van-dropdown-item",{attrs:{options:t.option[1]},model:{value:t.value[1],callback:function(e){t.$set(t.value,1,e)},expression:"value[1]"}})],1)},staticRenderFns:[]};var N={name:"Mall",data:function(){return{msg:"商城内容"}},components:{Goods:n("SZvu")({name:"Goods",data:function(){var t=this.$store.state,e=t.filter_option;return{value:t.filter_val,msg:"货架导航",option:e}},methods:{change:function(t){}}},J,!1,function(t){n("uJ/q")},"data-v-bd4adf52",null).exports},methods:{calnum:function(t){return t>999?"999+":t},goDetail:function(t){this.$router.push("/detail/"+t.id)}},computed:{goods:function(){var t=this.$store.state,e=t.goods,n=t.filter_option,a=t.filter_val,o=a.map(function(t,e){return n[e].filter(function(e){return e.value===t})[0].text}),r=JSON.parse(G()(e));return a[0]&&(r=r.filter(function(t){return t.type===o[0]})),a[1]&&(1===a[1]&&(r=r.sort(function(t,e){return t.price-e.price})),2===a[1]&&(r=r.sort(function(t,e){return e.price-t.price}))),r}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("Header",{attrs:{left:!0,title:"商城"}}),t._v(" "),n("content",{staticClass:"content"},[n("div",{staticClass:"filter"},[n("Goods")],1),t._v(" "),n("div",{staticClass:"list"},t._l(t.goods,function(e){return n("van-card",{key:e.id,attrs:{num:t.calnum(e.num),price:e.price,desc:e.desc,title:e.title,thumb:e.img,"origin-price":e.ori_price},on:{"click-thumb":function(n){return t.goDetail(e)}}},[n("div",{attrs:{slot:"tags"},slot:"tags"},[n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v(t._s(e.type))])],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("van-icon",{staticClass:"icon",attrs:{name:"add-o"}}),t._v(" "),n("van-icon",{staticClass:"icon",attrs:{name:"cart-circle-o"}})],1)])}),1)]),t._v(" "),n("Footer")],1)},staticRenderFns:[]};var X=n("SZvu")(N,P,!1,function(t){n("QxDI")},"data-v-30891fee",null).exports,K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("Header",{attrs:{title:"购物车"}}),this._v(" "),e("content",{staticClass:"content"}),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var B=n("SZvu")({name:"Cart",data:function(){return{msg:"购物车"}},methods:{}},K,!1,function(t){n("hqn6")},"data-v-8d86767c",null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("Header",{attrs:{left:!0,arrow:!0,title:this.title}}),this._v(" "),e("content",{staticClass:"content"})],1)},staticRenderFns:[]};var V=n("SZvu")({name:"Order",data:function(){return{title:"我的订单"}},methods:{}},U,!1,function(t){n("7+Xs")},"data-v-3c8046dc",null).exports,Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("Header",{attrs:{left:!0,title:"商品详情",arrow:!0}}),t._v(" "),n("content",{staticClass:"content"},[n("div",{staticClass:"detail"}),t._v(" "),n("div",{staticClass:"goodAction"},[n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"home-o",text:"首页"},on:{click:function(e){return t.go("/")}}}),t._v(" "),n("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车"}}),t._v(" "),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"}}),t._v(" "),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"}})],1)],1)])],1)},staticRenderFns:[]};var tt=n("SZvu")({name:"Mall",data:function(){return{msg:"详情页"}},methods:{go:function(t){this.$router.push(t)}}},Y,!1,function(t){n("jTyw")},"data-v-39d89f6e",null).exports,et=n("Kt/F"),nt=n.n(et),at={name:"Mine",data:function(){return{msg:"个人中心内容",isLogin:!1,user:{}}},methods:{checkLogin:function(){var t=nt.a.get("username");this.isLogin=!!t},go_path:function(t){this.$store.dispatch("changeTab",t),this.$router.push("/"+t)},login_out:function(){nt.a.remove("username"),this.checkLogin()}},created:function(){this.checkLogin()}},ot={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("Header",{attrs:{left:!0,title:"个人中心"}}),t._v(" "),n("content",{staticClass:"content"},[n("van-row",{staticClass:"ad"},[n("van-image",{attrs:{width:"100%",height:"3rem",src:"https://img.yzcdn.cn/vant/cat.jpeg"}})],1),t._v(" "),n("van-row",{staticClass:"user",attrs:{type:"flex",justify:"center"}},[t.isLogin?n("van-col",{staticClass:"avatar",attrs:{span:"10"}},[n("van-image",{attrs:{round:"",width:"2rem",height:"2rem",src:t.user.img}})],1):t._e(),t._v(" "),t.isLogin?t._e():n("van-col",{staticClass:"no_login",attrs:{span:"10"}},[n("router-link",{attrs:{to:"/login"}},[n("div",{staticClass:"to_login"},[t._v("点击登录")])])],1)],1),t._v(" "),t.isLogin?n("div",{staticClass:"user_info"},[n("van-cell-group",[n("van-cell",{attrs:{title:"用户名",value:"周文星"}})],1),t._v(" "),n("van-cell-group",[n("van-cell",{attrs:{title:"性别",value:"男"}})],1),t._v(" "),n("van-cell-group",[n("van-cell",{attrs:{title:"我的订单",value:"查看全部订单","is-link":""},on:{click:function(e){return t.go_path("order")}}})],1),t._v(" "),n("van-cell-group",[n("van-cell",{attrs:{title:"购物车",value:"查看购物车","is-link":""},on:{click:function(e){return t.go_path("cart")}}})],1),t._v(" "),n("van-row",{staticClass:"align_center login_out"},[n("van-button",{attrs:{type:"info",size:"small"},on:{click:t.login_out}},[t._v("退出登录")])],1)],1):t._e()],1),t._v(" "),n("Footer")],1)},staticRenderFns:[]};var rt=n("SZvu")(at,ot,!1,function(t){n("hbai")},"data-v-0fe19276",null).exports,st={reg:/^[a-z|A-Z|\d]{2,18}$/,errMsg:"用户名只能包含数字和字母，长度2-18位"},it={reg:/^[a-z|A-Z|\d]{8,18}$/,errMsg:"用户名只能包含数字和字母，长度8-18位"},ct={reg:/^[a-z|A-Z|\d]{6,18}@[a-z|A-Z|\d]{1,9}\.[a-z|A-Z|\d]{1,9}$/,errMsg:"邮箱格式错误"},lt={reg:/^[\d]{4}$/,errMsg:"验证码是4位数字"},ut=n("UUVf"),vt=n.n(ut),dt=n("B2YR"),mt=n.n(dt),ft=n("s8s5"),ht=n.n(ft),pt=n("yd1l"),gt=n.n(pt),_t=n("gbCc"),bt=n.n(_t).a.create({baseURL:"/api",timeout:5e3}),Ct=function(){var t=gt()(vt.a.mark(function t(){var e,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return vt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.headers,n=ht()(s,["headers"]),"GET"!==(r=r.toUpperCase())?e=mt()({Accept:"application/json","Content-Type":"application/json"},e):(e=mt()({},e),o=G()(o)),t.abrupt("return",bt(mt()({url:a,method:r,data:o,headers:e},n)));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),wt={name:"Register",data:function(){return{regInfo:{username:"",usernameErrMsg:st.errMsg,psd:"",psdErrMsg:it.errMsg,email:"",emailErrMsg:ct.errMsg,code:"",codeAble:!0,code_time:60,codeErrMsg:lt.errMsg,isCheck:!1,showSlider:!1},slider:{text:"右滑验证"}}},methods:{showSlider:function(){this.regInfo.showSlider=!0},getCode:function(){this.regInfo.codeAble=!1,this.regInfo.code_time=60,this.calCodeTime();var t=this.regInfo,e=(t.username,t.psd,t.email);t.code;Ct("/get_code",{email:e}).then(function(t){1===t.data.success?Object(s.a)({title:"提示",message:"已发送验证码,请查收邮箱!"}):Object(s.a)({title:"提示",message:"获取验证码失败!"})}).catch(function(t){console.log(t),Object(s.a)({title:"提示",message:"获取验证码失败!"})})},register:function(){var t=this,e=this.regInfo,n=e.username,a=e.psd,o=e.email,r=e.code;Ct("/register",{username:n,psd:a,email:o,code:r}).then(function(e){var n=e.data;1===n.success?Object(s.a)({title:"提示",message:"注册成功!"}).then(function(){t.$router.push("/login")}):Object(s.a)({title:"提示",message:n.msg||"注册失败!"})}).catch(function(t){console.log(t),Object(s.a)({title:"提示",message:data.msg||"注册失败!"})})},calCodeTime:function(){var t=this;this.code_timer=setInterval(function(){console.log(t.regInfo.code_time),t.regInfo.code_time--,t.regInfo.code_time<=0&&(clearInterval(t.code_timer),t.regInfo.codeAble=!0,t.regInfo.code_time=60)},1e3)},isChecked:function(){},onSuccess:function(){this.regInfo.isCheck=!0,this.regInfo.showSlider=!1,this.getCode()},onFail:function(){this.regInfo.isCheck=!1},onRefresh:function(){this.regInfo.isCheck=!1},onChange:function(t){}},computed:{isRe:function(){var t=this.regInfo,e=t.username,n=t.psd,a=t.email,o=t.code,r=t.isCheck,s=!1,i=st.reg,c=it.reg,l=ct.reg,u=lt.reg;return e&&n&&a&&o&&i.test(e)&&c.test(n)&&l.test(a)&&u.test(o)&&(s=!0),!s||!r},isGetcode:function(){var t=this.regInfo,e=t.username,n=t.psd,a=t.email,o=t.codeAble,r=!1,s=st.reg,i=it.reg,c=ct.reg;return o&&e&&n&&a&&s.test(e)&&i.test(n)&&c.test(a)&&(r=!0),!r}}},kt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("Header",{attrs:{left:!0,arrow:!0,title:"注册"}}),t._v(" "),n("content",{staticClass:"content"},[n("van-cell-group",[n("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名",required:"",border:""},on:{input:t.onChange},model:{value:t.regInfo.username,callback:function(e){t.$set(t.regInfo,"username",e)},expression:"regInfo.username"}}),t._v(" "),n("van-field",{attrs:{label:"密码",type:"password",placeholder:"请输入密码",required:"",border:""},on:{input:t.onChange},model:{value:t.regInfo.psd,callback:function(e){t.$set(t.regInfo,"psd",e)},expression:"regInfo.psd"}}),t._v(" "),n("van-field",{attrs:{label:"邮箱",placeholder:"输入邮箱以接收验证码",required:"",border:""},on:{input:t.onChange},model:{value:t.regInfo.email,callback:function(e){t.$set(t.regInfo,"email",e)},expression:"regInfo.email"}}),t._v(" "),n("van-field",{attrs:{label:"验证码",maxlength:"4",center:"",clearable:"",placeholder:"请输入邮箱验证码",required:"",border:""},on:{input:t.onChange},model:{value:t.regInfo.code,callback:function(e){t.$set(t.regInfo,"code",e)},expression:"regInfo.code"}},[n("van-button",{attrs:{slot:"button",disabled:t.isGetcode,size:"small",type:"primary"},on:{click:t.showSlider},slot:"button"},[t._v("\n          "+t._s(t.regInfo.codeAble?"发送验证码":t.regInfo.code_time+"秒")+"\n        ")])],1)],1),t._v(" "),n("van-button",{staticClass:"register",attrs:{type:"info",disabled:t.isRe},on:{click:function(e){return t.register()}}},[t._v("\n      注册\n    ")]),t._v(" "),n("div",{staticClass:"tip"},[n("router-link",{staticClass:"toRe",attrs:{to:"/login"}},[t._v("已有账号？去登录")])],1),t._v(" "),n("van-dialog",{attrs:{title:t.slider.text,"show-cancel-button":"","show-confirm-button":!1},model:{value:t.regInfo.showSlider,callback:function(e){t.$set(t.regInfo,"showSlider",e)},expression:"regInfo.showSlider"}},[t.regInfo.showSlider?n("slide-verify",{staticClass:"slider",attrs:{l:42,r:10,w:310,h:155,"slider-text":t.slider.text},on:{success:t.onSuccess,fail:t.onFail,refresh:t.onRefresh}}):t._e()],1)],1)],1)},staticRenderFns:[]};var xt=n("SZvu")(wt,kt,!1,function(t){n("lvQ6")},"data-v-4f7852e4",null).exports,$t={name:"Login",data:function(){return{msg:"登录页面",logining:!1,user:{username:"",psd:""}}},methods:{login:function(){var t=this,e=this.user,n=e.username,a=e.psd;console.log(n,a);var o={username:n,psd:a};this.logining=!0,Ct("/login",o).then(function(e){console.log(e),t.logining=!1,1===e.data.success?Object(s.a)({title:"提示",message:"登录成功!"}).then(function(){nt.a.set("username",n),t.$store.go(-1)}):Object(s.a)({title:"提示",message:"登录失败!"})}).catch(function(e){t.logining=!1,console.log(e)})}}},It={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("Header",{attrs:{left:!0,arrow:!0,title:"登录"}}),t._v(" "),n("content",{staticClass:"content"},[n("van-cell-group",[n("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.user.psd,callback:function(e){t.$set(t.user,"psd",e)},expression:"user.psd"}})],1),t._v(" "),n("van-button",{staticClass:"login",attrs:{type:"info",loading:t.logining,disabled:t.logining},on:{click:t.login}},[t._v("登录")]),t._v(" "),n("div",{staticClass:"tip"},[n("router-link",{attrs:{to:"/register"}},[t._v("忘记密码？")]),t._v(" "),n("router-link",{staticClass:"toRe",attrs:{to:"/register"}},[t._v("注册")])],1)],1)],1)},staticRenderFns:[]};var yt=n("SZvu")($t,It,!1,function(t){n("xZc5")},"data-v-f72a441e",null).exports;a.a.use(i.a),a.a.use(s.a),a.a.use(M),a.a.use(q.a);var St=new i.a({routes:[{path:"/",name:"home",component:W},{path:"/mall",name:"mall",component:X},{path:"/cart",name:"cart",component:B},{path:"/order",name:"order",component:V},{path:"/detail/:id",name:"detail",component:tt},{path:"/mine",name:"mine",component:rt},{path:"/register",name:"register",component:xt},{path:"/login",name:"login",component:yt}]}),jt=n("L0CG");a.a.use(jt.a);var Et=[[{text:"全部商品",value:0},{text:"标准果",value:1},{text:"精品果",value:2}],[{text:"默认排序",value:0},{text:"价格升序",value:1},{text:"价格降序",value:2}]],Rt=new jt.a.Store({state:{tab:"home",goods:[{id:1,type:"标准果",num:1e3,price:78,desc:"10斤标准果,果径65-75mm",title:"10斤标准果",img:"https://img.yzcdn.cn/vant/cat.jpeg",ori_price:98},{id:2,type:"精品果",num:1e3,price:98,desc:"10斤精品果,果径75-85mm",title:"10斤精品果",img:"https://img.yzcdn.cn/vant/cat.jpeg",ori_price:128},{id:3,type:"标准果",num:1e3,price:138,desc:"20斤标准果,果径65-75mm",title:"20斤标准果",img:"https://img.yzcdn.cn/vant/cat.jpeg",ori_price:158},{id:4,type:"精品果",num:1e3,price:168,desc:"20斤精品果,果径75-85mm",title:"20斤精品果",img:"https://img.yzcdn.cn/vant/cat.jpeg",ori_price:198}],banner:[{},{},{},{}],filter_option:Et,filter_val:[0,0]},mutations:{saveTab:function(t,e){t.tab=e}},actions:{changeTab:function(t,e){t.commit("saveTab",e)}}});n("WCuT");a.a.config.productionTip=!1,new a.a({el:"#app",store:Rt,router:St,components:{App:r},template:"<App/>"})},O8Zs:function(t,e){},QxDI:function(t,e){},"W/K2":function(t,e){},W41r:function(t,e){},WCuT:function(t,e){var n=null;function a(){var t,e=document.documentElement.clientWidth;e=e>750?750:e,n=document.documentElement.clientWidth/750,(t="html",document.querySelectorAll(t))[0].style.fontSize=100*n+"px"}window.onload=function(){a(),window.onresize=a}},X8cw:function(t,e){},aFhN:function(t,e){},"b+aS":function(t,e){},dFU7:function(t,e){},emX1:function(t,e){},"gCh+":function(t,e){},gbqo:function(t,e){},hbai:function(t,e){},hqn6:function(t,e){},jTyw:function(t,e){},kHvd:function(t,e){},lZWI:function(t,e){},lvQ6:function(t,e){},muR0:function(t,e){},qqsK:function(t,e){},"tI/J":function(t,e){},tOO0:function(t,e){},uBw8:function(t,e){},"uJ/q":function(t,e){},vhN0:function(t,e){},xEzd:function(t,e){},xZc5:function(t,e){},yH7B:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.709bb6c836238dce4fca.js.map