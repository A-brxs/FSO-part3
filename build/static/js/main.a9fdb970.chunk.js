(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{43:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var o=t(2),c=t(19),a=t.n(c),r=t(10),s=t(20),u=t(3),l=t(5),i=t.n(l),d="/api/persons",h=function(){return i.a.get(d).then((function(e){return e.data}))},j=function(e){return i.a.post(d,e).then((function(e){return e.data}))},b=function(e,n){return i.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},f=function(e){return i.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},m=(t(43),t(0)),O=function(e){var n=e.newSearch,t=e.handleSearch;return console.log("Search loaded"),console.log("newSearch: ",n),console.log("handleSearch: ",t),Object(m.jsxs)("div",{children:["filter shown with ",Object(m.jsx)("input",{name:"filter",value:n,onChange:t})]})},g=function(e){var n=e.process,t=e.newName,o=e.handleNameChange,c=e.newNumber,a=e.handleNumberChange;return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsxs)("div",{children:[" name: ",Object(m.jsx)("input",{name:"name",value:t,onChange:o})," "]}),Object(m.jsxs)("div",{children:[" number: ",Object(m.jsx)("input",{name:"number",value:c,onChange:a})," "]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})})},p=function(e){var n=e.persons,t=e.search,o=e.deletePerson,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:c.map((function(e){return Object(m.jsxs)("li",{children:[e.name,"  ",e.number,"   ",Object(m.jsx)("button",{onClick:function(){return o(e.id)},children:" delete "})]},e.id)}))})})},v=function(e){var n=e.message;return null===n?null:Object(m.jsx)("div",{className:"error",children:n})},x=function(e){var n=e.message;return null===n?null:Object(m.jsx)("div",{className:"notif",children:n})},w=function(){console.log("const App loaded");var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),l=Object(u.a)(a,2),i=l[0],d=l[1],w=Object(o.useState)(""),N=Object(u.a)(w,2),S=N[0],C=N[1],k=Object(o.useState)(""),y=Object(u.a)(k,2),P=y[0],D=y[1],A=Object(o.useState)(null),T=Object(u.a)(A,2),E=T[0],J=T[1],L=Object(o.useState)(null),M=Object(u.a)(L,2),B=M[0],I=M[1];console.log("this is App content of person: ",t);var q=function(){console.log("this is persons",t);var e=t.map((function(e){return e.id})),n={name:i,number:S,id:Math.max.apply(Math,Object(s.a)(e))+1};console.log("this is personObject",n),j(n).then((function(e){console.log("create person response: ",e),F(),d(""),C("")})),H(n.name)},z=function(){return t.find((function(e){return e.name===i&&e.number!==S}))},F=function(){h().then((function(e){console.log("updated people"),console.log(e),c(e)}))},G=function(e,n){if(window.confirm("Do you want to update ".concat(e," with ").concat(n))){var o=t.find((function(n){return n.name===e})),c=Object(r.a)(Object(r.a)({},o),{},{number:n});b(c.id,c).then((function(e){console.log("updated number"),console.log(e),F(e)}))}},H=function(e){J("Note '".concat(e,"' was added to the server")),setTimeout((function(){J(null)}),5e3)};return Object(o.useEffect)((function(){console.log("effect"),h().then((function(e){console.log("promise fulfilled"),c(e)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(v,{message:B}),Object(m.jsx)(x,{message:E}),Object(m.jsx)(O,{newSearch:P,handleSearch:function(e){console.log("handleSearch",e.target.value),D(e.target.value)}}),Object(m.jsx)("h3",{children:" Add a new "}),Object(m.jsx)(g,{process:function(e){console.log("This is processPerson event:",e),console.log("this is checkP()",z()),e.preventDefault(),z()?G(i,S):q()},newName:i,handleNameChange:function(e){console.log("handleNameChange",e.target.value),d(e.target.value)},newNumber:S,handleNumberChange:function(e){console.log("handleNumberChange",e.target.value),C(e.target.value)}}),Object(m.jsx)("h3",{children:"Numbers"}),Object(m.jsx)(p,{persons:t,search:P,deletePerson:function(e){window.confirm("Do you really want to delete person iD ".concat(e))&&(console.log("deletePerson:",t),f(e).then(F()).catch((function(n){I("Note '".concat(e,"' was already removed from server")),setTimeout((function(){I(null)}),5e3)})))}})]})};a.a.render(Object(m.jsx)(w,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a9fdb970.chunk.js.map