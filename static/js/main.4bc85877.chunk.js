(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(5),s=n.n(r),c=n(1),i=n.n(c),l=n(2),u=n(6),d=n(7),f=n(9),h=n(8),m=n(3),p=n.n(m),g=function(t){var e=t.goods;return a.a.createElement("ul",null,e.map((function(t){var e=t.id,n=t.name,o=t.color;return a.a.createElement("li",{key:e,style:{color:o}},n)})))};n(16);function v(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("".concat(t.status));return t.json()}))}var b=function(){return v().then((function(t){return t.slice(0,5)}))},w=function(){return v().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},E=function(t){Object(f.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[],loading:"",loadFailed:!1},t.updateGoods=function(e){t.setState({goods:e,loading:""})},t.showErrorNote=function(){t.setState({loadFailed:!0,loading:""})},t.showAllGoods=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:"all"}),e.prev=1,e.next=4,v().then((function(e){t.updateGoods(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t.showErrorNote();case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),t.showFirst5Goods=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:"five"}),e.prev=1,e.next=4,b().then((function(e){t.updateGoods(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t.showErrorNote();case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),t.showRedGoods=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:"red"}),e.prev=1,e.next=4,w().then((function(e){t.updateGoods(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t.showErrorNote();case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.loading,o=t.loadFailed;return a.a.createElement("section",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"title is-1"},"Dynamic list of Goods"),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{className:p()("button","is-info",{"is-loading":"all"===n}),type:"button",onClick:this.showAllGoods},"Load all goods"),a.a.createElement("button",{className:p()("button","is-info",{"is-loading":"five"===n}),type:"button",onClick:this.showFirst5Goods},"Load 5 first goods"),a.a.createElement("button",{className:p()("button","is-info",{"is-loading":"red"===n}),type:"button",onClick:this.showRedGoods},"Load red goods")),a.a.createElement(g,{goods:e}),o&&a.a.createElement("div",{className:"notification is-danger is-light"},"Failed loading data from server")))}}]),n}(a.a.Component);s.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4bc85877.chunk.js.map