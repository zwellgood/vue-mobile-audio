(function(t){function e(e){for(var a,i,u=e[0],s=e[1],c=e[2],d=0,f=[];d<u.length;d++)i=u[d],o[i]&&f.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"030f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=(n("5c0b"),n("2877")),u={},s=Object(i["a"])(u,o,r,!1,null,null,null);s.options.__file="App.vue";var c=s.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",[t._v("简单使用")]),n("m-audio",{attrs:{src:t.src}}),n("p",[t._v("自定义文字")]),n("m-audio",{attrs:{"show-duration":!1,text:"点这里播放",src:t.src}}),n("p",[t._v("设置是否在开始播放后显示时长（默认为true）")]),n("m-audio",{attrs:{"show-duration":!1,text:"播放3",src:t.src}}),n("p",[t._v("设置为行内元素（默认为块级元素）")]),n("m-audio",{attrs:{block:!1,src:t.src}}),n("m-audio",{attrs:{block:!1,src:t.src}})],1)},f=[],p={name:"home",data:function(){return{src:"http://1252014125.vod2.myqcloud.com/46740e39vodcq1252014125/1db79a9a5285890783173288539/ZOaFuTmGs30A.mp3"}}},m=p,v=Object(i["a"])(m,d,f,!1,null,null,null);v.options.__file="Home.vue";var h=v.exports;a["a"].use(l["a"]);var b=new l["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:h}]}),w=n("2f62");a["a"].use(w["a"]);var y=new w["a"].Store({state:{},mutations:{},actions:{}}),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrap",staticClass:"x-audio-wrap",class:{inline:!t.block},on:{click:t.play}},[n("div",{staticClass:"x-sector",class:{play:t.animate}},[n("div",{staticClass:"x-dot"})]),n("div",{staticClass:"x-time"},[t._v(t._s(t.duration&&t.showDuration?t.duration:t.text))])])},x=[],g=(n("a481"),n("ac6a"),{name:"m-audio",props:{src:{type:String,default:""},text:{type:String,default:"轻触播放"},showDuration:{type:Boolean,default:!0},block:{type:Boolean,default:!1}},data:function(){return{audio:null,animate:!1,timer:null,duration:null}},mounted:function(){var t=this;this.audio=new Audio,this.audio.src=this.src,this.audio.addEventListener("canplaythrough",function(){t.duration=t.format(t.audio.duration)}),this.audio.onplay=function(){t.animate=!0,t.timer=setInterval(function(){t.animate=!1,setTimeout(function(){t.animate=!0},50)},1250)},this.audio.onpause=function(){t.animate=!1,t.timer&&clearInterval(t.timer)},this.audio.onended=function(){t.animate=!1,t.timer&&clearInterval(t.timer)},window.audioList.push(this.audio)},methods:{play:function(){window.audioList.forEach(function(t){t.pause()}),this.audio.paused?this.audio.play():this.audio.pause()},format:function(t){var e="";if(t>-1){var n=Math.floor(t/60)%60,a=t%60;n<10&&(e+="0"),e+=n+"'",a<10&&(e+="0"),e+=a.toFixed(2)}return e=e.replace(".",'"'),e}}}),O=g,j=(n("c8f5"),Object(i["a"])(O,_,x,!1,null,"2f839de0",null));j.options.__file="audio.vue";var k=j.exports,S={install:function(t){window.audioList=[],t.component("m-audio",k)}};a["a"].use(S),a["a"].config.productionTip=!1,new a["a"]({router:b,store:y,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),o=n.n(a);o.a},"5e27":function(t,e,n){},c8f5:function(t,e,n){"use strict";var a=n("030f"),o=n.n(a);o.a}});
//# sourceMappingURL=app.241b55ea.js.map