(this.webpackJsonpface_recog=this.webpackJsonpface_recog||[]).push([[0],{162:function(e,t){},163:function(e,t){},164:function(e,t){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(95),n(172)),s=(n(96),function(){return r.a.createElement("div",{className:"global-header-style"},r.a.createElement(i.a,{title:"Face detection",subTitle:"Face image analysis",ghost:!0}))}),u=n(40),l=n(21),d=n.n(l),m=n(39),f=n(15),p=function(e){Promise.all([f.h("/models"),f.i("/models"),f.e("/models"),f.f("/models"),f.g("/models"),f.d("/models")]).then(Object(m.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e();case 1:case"end":return t.stop()}}),t)})))).catch((function(e){return console.error(JSON.stringify(e))}))},h=function(e){var t=e.faceDetection,n=e.screenShot,c=Object(a.useRef)(),o=Object(a.useState)(!1),i=Object(u.a)(o,2),s=i[0],l=i[1],h=Object(a.useRef)(),b=function(){console.log("screenShot"),h.current.getContext("2d").drawImage(c.current,0,0,h.current.width,h.current.height);var e=h.current.toDataURL("image/png");return new Promise((function(t,n){e?t(e):n("ERROR")}))},g=Object(a.useCallback)(function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=4;break}return e.next=3,c.current.pause();case 3:p(Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),c.current.srcObject=t,e.next=4,c.current.play();case 4:case"end":return e.stop()}}),e)}))));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[s]),w=Object(a.useCallback)((function(){navigator.getUserMedia({audio:!1,video:{width:500,height:500}},(function(e){return g(e)}),(function(e){return function(e){console.error(e)}(e)}))}),[g]);return Object(a.useEffect)((function(){var e;if(n&&n(b),w(),s)return e=setInterval(Object(m.a)(d.a.mark((function e(){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.current.getContext("2d").clearRect(0,0,h.current.width,h.current.height),n={width:c.current.width,height:c.current.height},f.j(h.current,n),e.next=5,f.b(c.current,new f.a).withFaceLandmarks().withFaceExpressions();case 5:a=e.sent,r=f.k(a,n),t.square&&f.c.drawDetections(h.current,r),t.landmarks&&f.c.drawFaceLandmarks(h.current,r),t.expression&&f.c.drawFaceExpressions(h.current,r);case 10:case"end":return e.stop()}}),e)}))),100),function(){return clearInterval(e)}}),[s,t,w,n]),r.a.createElement("div",null,r.a.createElement("canvas",{width:"500",height:"500",style:{position:"absolute"},ref:h}),r.a.createElement("video",{style:{visibility:"visible"},width:"500",height:"500",ref:c}))},b=n(52),g=function(e){var t=e.text,n=e.type,a=e.onClick;return r.a.createElement(b.a,{onClick:function(){return a()},type:n},t)},w=(n(166),function(e){var t=e.datas,n=e.pressedCallBack;return r.a.createElement("div",{className:"buttonList-global-container"},t.map((function(e,t){return r.a.createElement(g,{key:t,onClick:function(){return n(e.name)},type:e.type,text:e.text})})))}),k=(n(167),function(e){var t=e.datas;return r.a.createElement("div",{className:"main-text-list-container-style"},t.map((function(e){return e})))}),E=(n(168),function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(u.a)(o,2),s=i[0],l=i[1],d=Object(a.useState)(!1),m=Object(u.a)(d,2),f=m[0],p=m[1];return r.a.createElement("div",{className:"webcam-container-style"},r.a.createElement(h,{faceDetection:{square:n,landmarks:s,expression:f}}),r.a.createElement("div",{className:"propeties-managment-style"},r.a.createElement(w,{datas:[{type:"primary",text:"Face square",name:"face_square"},{type:"primary",text:"Face landmark",name:"face_landmark"},{type:"primary",text:"Face expression",name:"face_expression"}],pressedCallBack:function(e){return function(e){switch(e){case"face_square":c(!n);break;case"face_landmark":l(!s);break;case"face_expression":p(!f)}console.log(e)}(e)}}),r.a.createElement(k,{datas:[r.a.createElement("p",{key:"faceSquareKey"},"Face squares: ",r.a.createElement("span",{style:n?{color:"white",backgroundColor:"green",padding:"5px"}:{color:"white",backgroundColor:"red",padding:"5px"}},n?"Enabled":"Disabled")),r.a.createElement("p",{key:"faceLandmarksKey"},"Face landmarks: ",r.a.createElement("span",{style:s?{color:"white",backgroundColor:"green",padding:"5px"}:{color:"white",backgroundColor:"red",padding:"5px"}},s?"Enabled":"Disabled")),r.a.createElement("p",{key:"faceExpressionKey"},"Face expressions: ",r.a.createElement("span",{style:f?{color:"white",backgroundColor:"green",padding:"5px"}:{color:"white",backgroundColor:"red",padding:"5px"}},f?"Enabled":"Disabled"))]})))}),v=(n(169),function(){return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(E,null))});n(170);var x=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,n){e.exports=n(171)},95:function(e,t,n){},96:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.961da7ab.chunk.js.map