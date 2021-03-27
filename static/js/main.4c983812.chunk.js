(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={search:"filter_search__1X2RS"}},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=(n(17),n(12)),s=n(3),l=n(4),u=n(6),m=n(5),b=n(10),h=n(2),d=n.n(h),f=n(0),j=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{className:d.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:d.a.form__label,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",value:e,placeholder:"Enter name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(f.jsxs)("label",{className:d.a.form__label,children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",value:n,placeholder:"Enter number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(f.jsx)("button",{className:d.a.form__button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(7),p=n.n(_),O=function(t){var e=t.contacts,n=t.delContact;return Object(f.jsx)("ul",{className:p.a.contactList,children:e.map((function(t){return Object(f.jsxs)("li",{className:p.a.contactList__item,children:[Object(f.jsx)("span",{children:t.name}),Object(f.jsx)("span",{children:t.number}),Object(f.jsx)("button",{className:p.a.contactList__button,onClick:function(){return n(t.id)},children:"X"})]},t.id)}))})},x=n(11),v=n.n(x),C=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("input",{className:v.a.search,type:"text",value:e,placeholder:"Search",onChange:n})},g=n(21),L=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleForm=function(e){var n=e.name,a=e.number,c={id:Object(g.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name===c.name}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[c].concat(Object(i.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.delContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter.toLowerCase(),a=e.filter((function(t){return t.name.toLowerCase().includes(n)}));return Object(f.jsxs)("section",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(j,{onSubmit:this.handleForm}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(C,{value:this.state.filter,onChange:this.changeFilter}),Object(f.jsx)(O,{contacts:a,delContact:this.delContact})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"form_form__3zemM",form__label:"form_form__label__3jfC0",form__button:"form_form__button__xq39y"}},7:function(t,e,n){t.exports={contactList:"contactList_contactList__3LkeL",contactList__item:"contactList_contactList__item__ktFX7",contactList__button:"contactList_contactList__button__1iG7K"}}},[[19,1,2]]]);
//# sourceMappingURL=main.4c983812.chunk.js.map