(this["webpackJsonpadvice-helpline"]=this["webpackJsonpadvice-helpline"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(4),d=n.n(a),s=(n(13),n(5)),o=n(6),r=n(2),u=n(8),l=n(7),h=n(0),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={id:"",advice:""},i.newAdvice=i.newAdvice.bind(Object(r.a)(i)),i.randomBackgroundClr=i.randomBackgroundClr.bind(Object(r.a)(i)),i}return Object(o.a)(n,[{key:"randomBackgroundClr",value:function(){document.body.style.background="hsl("+Math.round(360*Math.random())+",50%,70%)"}},{key:"newAdvice",value:function(){var e=this;fetch("https://api.adviceslip.com/advice").then((function(e){return e.json()})).then((function(t){e.setState({id:t.slip.id,advice:t.slip.advice}),e.randomBackgroundClr()}))}},{key:"componentDidMount",value:function(){this.newAdvice()}},{key:"render",value:function(){var e=this.state.advice.length+13,t={width:"".concat(e,"ch"),animation:"typing ".concat(.09*e,"s steps(").concat(e,"), blink .5s step-end infinite alternate")};return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsxs)("div",{style:t,className:"typing-effect",children:["Advice #",this.state.id,": ",this.state.advice]},this.state.id),Object(h.jsx)("button",{className:"advice-button",onClick:this.newAdvice,children:"More Advice"})]})}}]),n}(c.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,d=t.getTTFB;n(e),i(e),c(e),a(e),d(e)}))};d.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.636e2e59.chunk.js.map