(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(5),o=n.n(s),i=n(2),r=n(6),a=n(7),c=n(9),l=n(8),u=n(4),b=n.n(u),d=n(1),h=n.n(d),f=(n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],O=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={isListVisible:!1,listOfGoods:j},t.reverseHandler=function(){t.setState((function(t){return{listOfGoods:Object(i.a)(t.listOfGoods).reverse()}}))},t.alphabeticalSortHandler=function(){t.setState((function(t){return{listOfGoods:Object(i.a)(t.listOfGoods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLengthHandler=function(){t.setState((function(t){return{listOfGoods:Object(i.a)(t.listOfGoods).sort((function(t,e){return t.length-e.length}))}}))},t.resetHandler=function(){t.setState({listOfGoods:[].concat(j)})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isListVisible,s=e.listOfGoods;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("ul",{className:b()("list",{"list-visible":n}),children:s.map((function(t){return Object(f.jsx)("li",{children:t},t)}))}),Object(f.jsxs)("div",{className:"buttons-block",children:[Object(f.jsx)("button",{type:"button",className:b()("button",{"button-hidden":n}),onClick:function(){t.setState({isListVisible:!0})},children:"Start"}),Object(f.jsx)("button",{type:"button",className:"button",onClick:this.reverseHandler,children:"Reverse"}),Object(f.jsx)("button",{type:"button",className:"button button-alphabet",onClick:this.alphabeticalSortHandler,children:"Sort alphabetically"}),Object(f.jsx)("button",{type:"button",className:"button button-by-length",onClick:this.sortByLengthHandler,children:"Sort by length"}),Object(f.jsx)("button",{type:"button",className:"button",onClick:this.resetHandler,children:"Reset"})]})]})}}]),n}(h.a.PureComponent),p=O;o.a.render(Object(f.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d350819a.chunk.js.map