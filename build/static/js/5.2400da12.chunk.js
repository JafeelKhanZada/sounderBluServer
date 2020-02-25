(this.webpackJsonpsonderblu=this.webpackJsonpsonderblu||[]).push([[5],{42:function(e,t,n){"use strict";var a=n(0),s=n.n(a);n(43);t.a=function(e){var t=e.width,n=e.label,a=e.refs,r=e.placeholder,i=e.type,l=e.errors,o=e.img,c=e.icon,u=e.name,d=e.isError,p=e.onClickHandle;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"COMMON_INPUT",style:{width:t,borderBottomColor:!0===d?l?"#e26868":"rgba(255,255,255,.25)":""}},s.a.createElement("label",{htmlFor:u},n),s.a.createElement("br",null),s.a.createElement("input",{ref:a,type:i,name:u,placeholder:r,id:u,style:{color:!0===d?l?"#e26868":"rgba(255,255,255,.25)":""}}),o?s.a.createElement("img",{src:o,alt:""}):s.a.createElement("i",{onClick:p,className:"fa fa-".concat(c),style:{color:!0===d?l?"#e26868":"rgba(255,255,255,.5)":""}})))}},43:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(44),s=n(0),r=n.n(s),i=n(47),l=n(48),o=n(49),c=n(42),u=n(46),d=n(14),p=n(1),m=n(2),E=n(5);n(8);function f(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var h=n(10),x=n.n(h),g=!1,v=r.a.createContext(null),N=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var s,r=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?r?(s="exited",a.appearStatus="entering"):s="entered":s=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:s},a.nextCallback=null,a}Object(E.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=x.a.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e,t){var n=this,a=this.props.enter,s=this.context?this.context.isMounting:t,r=this.getTimeouts(),i=s?r.appear:r.enter;!t&&!a||g?this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,s),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,s),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,s)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n&&!g?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=Object(m.a)(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"===typeof n)return r.a.createElement(v.Provider,{value:null},n(e,a));var s=r.a.Children.only(n);return(r.a.createElement(v.Provider,{value:null},r.a.cloneElement(s,a)))},t}(r.a.Component);function C(){}N.contextType=v,N.propTypes={},N.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},N.UNMOUNTED=0,N.EXITED=1,N.ENTERING=2,N.ENTERED=3,N.EXITING=4;var b=N,O=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.remove(a):"string"===typeof n.className?n.className=f(n.className,a):n.setAttribute("class",f(n.className&&n.className.baseVal||"",a)));var n,a}))},y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){t.removeClasses(e,"exit"),t.addClass(e,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=n?"appear":"enter";t.addClass(e,a,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=n?"appear":"enter";t.removeClasses(e,a),t.addClass(e,a,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),t.addClass(e,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){t.addClass(e,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){t.removeClasses(e,"exit"),t.addClass(e,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"===typeof n,s=a?""+(a&&n?n+"-":"")+e:n[e];return{baseClassName:s,activeClassName:a?s+"-active":n[e+"Active"],doneClassName:a?s+"-done":n[e+"Done"]}},t}Object(E.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(a+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.add(a):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,a)||("string"===typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(e,a)},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,s=n.active,r=n.done;this.appliedClasses[t]={},a&&O(e,a),s&&O(e,s),r&&O(e,r)},n.render=function(){var e=this.props,t=(e.classNames,Object(m.a)(e,["classNames"]));return r.a.createElement(b,Object(p.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(r.a.Component);y.defaultProps={classNames:""},y.propTypes={};var S=y;n(58);var k=function(e){var t=e.active,n=e.handleClick;return r.a.createElement("div",{className:"CHECKBOX"},r.a.createElement(S,{in:t,timeout:200,classNames:"item"},r.a.createElement("div",{onClick:n,className:"CHECKBOX_COMMON_CONTAINER"},r.a.createElement(S,{in:t,timeout:200,classNames:"alert"},r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("i",{className:"fa fa-check"}))))),r.a.createElement("span",{className:"text"},"I agree to the ",r.a.createElement(d.b,null,"Terms & Conditions")))};n(59);function w(e){var t=Object(u.a)({mode:"onBlur",defaultValues:{},validateCriteriaMode:"firstErrorDetected"}),n=t.register,p=t.errors,m=Object(s.useState)("eye"),E=Object(a.a)(m,2),f=E[0],h=E[1],x=Object(s.useState)(!1),g=Object(a.a)(x,2),v=g[0],N=g[1],C=Object(s.useState)(window.innerWidth),b=Object(a.a)(C,2),O=b[0],y=b[1],S=Object(s.useState)("60%"),w=Object(a.a)(S,2),T=w[0],L=w[1];return Object(s.useLayoutEffect)((function(){function e(){y(window.innerWidth),L(window.innerWidth<=768?"90%":"60%")}window.addEventListener("resize",e),window.innerWidth<=768&&e()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{fluid:!0,className:"SIGNUP_CONTAINER"},r.a.createElement(l.a,null,r.a.createElement(o.a,{className:"MOBILE_TITLE d-flex d-md-none"},r.a.createElement("img",{src:"img/Logo.png",className:"img-fluid",alt:""})),r.a.createElement(o.a,{md:6,className:"COVER_TITLE"},r.a.createElement("img",{src:"img/".concat(O<=786?"mobileCover@3x":"LoginImg@3x",".png"),alt:""})),r.a.createElement(o.a,{md:6,className:"LOGIN_FORM p-md-0 py-3"},r.a.createElement("img",{src:"img/Logo.png",className:"d-md-inline d-none",alt:""}),r.a.createElement("form",{style:{width:T},onSubmit:function(e){e.preventDefault()}},r.a.createElement(c.a,{width:"100%",placeholder:"Enter Name Here...",label:"Name",name:"name",type:"text",refs:n({required:!0}),img:"img/check.png",errors:p.name,isError:!0}),r.a.createElement(c.a,{width:"100%",placeholder:"Enter Email Here...",label:"E-mail",name:"email",type:"email",refs:n({required:!0}),img:"img/check.png",errors:p.email,isError:!0}),r.a.createElement(c.a,{width:"100%",placeholder:"Enter Password Here...",label:"Password",name:"password",type:"eye"===f?"password":"text",refs:n({required:!0}),icon:f,errors:p.password,isError:!0,onClickHandle:function(){return h("eye"===f?"eye-slash":"eye")}}),r.a.createElement("span",null,p.password||p.email||p.name?"Invalid Credentials":""),r.a.createElement(k,{active:v,handleClick:function(){return N(!v)}}),r.a.createElement("button",{disabled:!v,className:!0===v?"":"disabled"},"Sign Up"),r.a.createElement("div",{className:"Or"},r.a.createElement("div",{className:"line"}),r.a.createElement("p",null,"OR"),r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"SignUp"},r.a.createElement("p",null,"Already have an account?"),r.a.createElement(d.b,{to:"/login"},"Login")))))))}w.whyDidYouRender=!0;t.default=w}}]);
//# sourceMappingURL=5.2400da12.chunk.js.map