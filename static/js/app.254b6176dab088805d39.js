webpackJsonp([1],{Cs3W:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),a={data:function(){return{payload:null}},mounted:function(){var n=this;fetch("https://reqres.in/api/users?page=2").then(function(n){return n.json()}).then(function(t){console.log(t),n.payload=t})}},r={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("table",{attrs:{border:"1"}},n._l(n.payload.data,function(t){return e("tr",n._l(t,function(t,o){return e("td",["avatar"==o?e("img",{attrs:{src:t}}):e("span",[n._v("  "+n._s(o+"--"+t))])])}),0)}),0)])},staticRenderFns:[]};var i=e("VU/8")(a,r,!1,function(n){e("Xlr8")},null,null).exports,l={name:"App",components:{hello:i}},s={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("hello")],1)},staticRenderFns:[]};var c=e("VU/8")(l,s,!1,function(n){e("bAvw")},null,null).exports,u=e("/ocq"),d={data:function(){return{age:[1,2,3,4,5]}},methods:{iamclick:function(){this.$router.push({name:"HelloWorld"})}},mounted:function(){console.log("mounted")},created:function(){console.log("created")}},p={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._l(n.age,function(t){return e("h2",[n._v(" i am name  "+n._s(t)+" ")])}),n._v(" "),e("button",{attrs:{type:"button"},on:{click:function(t){return n.iamclick()}}},[n._v(" next page ")])],2)},staticRenderFns:[]};var f=e("VU/8")(d,p,!1,function(n){e("Cs3W")},null,null).exports,v=e("ArcA"),m=e.n(v),y={data:function(){return{manifestUri:"https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd",playerId:""}},methods:{initApp:function(){m.a.polyfill.installAll(),m.a.Player.isBrowserSupported()?this.initPlayer():console.error("Browser not supported!")},playerPlay:function(){document.getElementById("video").play()},playerPause:function(){document.getElementById("video").pause()},initPlayer:function(){this.playerId=document.getElementById("video"),this.initEvent(this.playerId);var n=new m.a.Player(this.playerId);window.player=this.playerId,n.load(this.manifestUri).then(function(){console.log("The video has now been loaded!")})},initEvent:function(n){}},mounted:function(){this.initApp();var n=document.getElementById("video");n.addEventListener("play",function(){console.log("play")}),n.addEventListener("loadeddata",function(){console.log("loadeddata")}),n.addEventListener("loadstart",function(){console.log("loadstart")}),n.addEventListener("playing",function(){console.log("playing")}),n.addEventListener("waiting",function(){console.log("waiting")})},created:function(){}},h={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("video",{attrs:{id:"video",width:"640",poster:"//shaka-player-demo.appspot.com/assets/poster.jpg",controls:"",autoplay:""}}),n._v(" "),e("button",{staticClass:"buttonStyle",on:{click:function(t){return n.playerPlay()}}},[n._v("play")]),n._v(" "),e("button",{staticClass:"buttonStyle",on:{click:function(t){return n.playerPause()}}},[n._v("pause")])])},staticRenderFns:[]};var g=e("VU/8")(y,h,!1,function(n){e("vRKN")},null,null).exports;o.a.use(u.a);var _=new u.a({routes:[{path:"/",name:"HelloWorld",component:i},{path:"/names",name:"name",component:f},{path:"/player",name:"player",component:g}],mode:"history"});o.a.config.productionTip=!1,new o.a({el:"#app",router:_,components:{App:c},template:"<App/>"})},Xlr8:function(n,t){},bAvw:function(n,t){},vRKN:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.254b6176dab088805d39.js.map