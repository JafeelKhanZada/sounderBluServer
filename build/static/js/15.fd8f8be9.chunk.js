(this.webpackJsonpsoundblu=this.webpackJsonpsoundblu||[]).push([[15],{222:function(e,a,t){"use strict";t.r(a);var r=t(30),s=t(24),n=t(25),l=t(27),c=t(26),m=t(28),i=t(0),o=t.n(i),u=t(95),d=t(18),h=t(11),p=t(78),E=t(75),b=(t(16),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(c.a)(a).call(this,e))).setStateHandler=function(e){t.setState(Object(r.a)({errors:e.errors},e.name,e[e.name]))},t.HandleChanging=function(e){var a=Object(E.a)(e,t.state);t.setState(a)},t.passwordHandler=function(e){"fa-eye"===e.target.className.split(" ")[1]?t.setState({passIcon:"fa-eye-slash"}):t.setState({passIcon:"fa-eye"})},t.handleTNC=function(e){t.setState({TNC:e.target.checked})},t.onSubmitHandler=function(e){e.preventDefault(),""===t.state.errors.username&&""===t.state.errors.email&&t.state.errors.password},t.state={username:"",password:"",email:"",passIcon:"fa-eye",errors:{username:null,password:null,email:null},TNC:!1},t}return Object(m.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid SignUp"},o.a.createElement("div",{className:"row"},o.a.createElement(u.a,null),o.a.createElement("div",{className:"col-md-6 col-12 SignUpForm"},o.a.createElement("div",{className:"content"},o.a.createElement("img",{src:"./img/logo.png",className:"logo",alt:""}),o.a.createElement("form",{onSubmit:this.onSubmitHandler},o.a.createElement(p.a,{label:"Username",name:"username",type:"text",state:this.state,stateHandler:this.setStateHandler}),""!==this.state.errors.username?o.a.createElement("span",{className:"error text-danger"},this.state.errors.username):"",o.a.createElement("div",{className:"inputs"},o.a.createElement(p.a,{label:"Email",name:"email",type:"email",state:this.state,stateHandler:this.setStateHandler})),""!==this.state.errors.email?o.a.createElement("span",{className:"error text-danger"},this.state.errors.email):"",o.a.createElement("div",{className:"inputs"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{type:"fa-eye"===this.state.passIcon?"password":"text",name:"password",id:"password",placeholder:"Enter Your Password Here",onChange:this.HandleChanging}),o.a.createElement("i",{className:"fas ".concat(this.state.passIcon),onClick:this.passwordHandler}))),""!==this.state.errors.password?o.a.createElement("span",{className:"error text-danger"},this.state.errors.password):"",o.a.createElement(d.b,{to:"/step"},"Register")),o.a.createElement("div",{className:"TNC"},o.a.createElement("input",{type:"checkbox",name:"terms",id:"terms",onChange:this.handleTNC}),o.a.createElement("label",{htmlFor:"terms",id:"terms"},o.a.createElement("div",{style:{backgroundColor:!0===this.state.TNC?"#2AABE4":"transparent"}})),o.a.createElement("label",{htmlFor:"terms",className:"Terms"},o.a.createElement("u",null,"I agree with terms and conditions."))),o.a.createElement("span",{className:"register"},"Already have an account? ",o.a.createElement("u",null,"Login")))))))}}]),a}(i.Component));a.default=Object(h.f)(b)},75:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(30),s=t(29),n=function(e,a){var t;e.persist();var n=e.target,l=n.name,c=n.value,m=a.errors;switch(l){case"username":m.username=c.length<6?"Username Must Be Greater Than 5 Character!":"";break;case"creditCardNumber":m.creditCardNumber=s.m.test(c)?"":"Please Enter Valid Card Number";break;case"email":m.email=s.n.test(c)?"":"Please Enter Valid Email!";break;case"password":m.password=c.length<6?"Password must be 6 characters long!":"";break;case"Fullname":m.Fullname=c.length<6?"Username Must Be Greater Than 5 Character!":"";break;case"phoneNumber":m.phoneNumber=s.o.test(c)?"":"Please Enter Valid Phone Number!";break;default:m[l]=c.length>=1?"":"Fill The Field!"}return t={errors:m},Object(r.a)(t,l,c),Object(r.a)(t,"name",l),t}},78:function(e,a,t){"use strict";var r=t(0),s=t.n(r),n=t(75);a.a=function(e){var a=e.name,t=e.label,r=e.state,l=e.stateHandler,c=e.types,m=e.width,i=e.divW,o=e.place,u=e.icon,d=r.errors;return s.a.createElement("div",{className:"inputs",style:{width:i}},s.a.createElement("label",{htmlFor:a},t),s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{type:c,name:a,id:a,placeholder:""===o||null===o||void 0===o?"Enter Your ".concat(t," Here"):o,style:{width:m},onChange:function(e){var a=Object(n.a)(e,r);l(a)}}),s.a.createElement("i",{className:void 0===u?""===d[a]?"fas fa-check":"fas fa-times":u})))}},95:function(e,a,t){"use strict";var r=t(0),s=t.n(r);a.a=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"col-6 d-md-block d-none LoginLeft"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-10 CoverLogin"},s.a.createElement("img",{src:"./img/login/main.png",className:"img-fluid",alt:""})),s.a.createElement("div",{className:"col-2 pattern"}))))}}}]);
//# sourceMappingURL=15.fd8f8be9.chunk.js.map