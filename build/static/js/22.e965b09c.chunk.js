(this.webpackJsonpsoundblu=this.webpackJsonpsoundblu||[]).push([[22],{237:function(e,a,t){"use strict";t.r(a);var n=t(24),l=t(25),s=t(27),i=t(26),c=t(28),r=t(0),m=t.n(r),o=t(76),d=t(3),u=t(29),p=(t(82),t(83),t(84)),g=t.n(p);var E=function(){var e=[1,2,3,4,5,6].map((function(e,a){return m.a.createElement("div",{className:"col-12 MovieContainer",key:a},m.a.createElement("div",{className:"Movie w-100"},m.a.createElement("div",{className:"img"},m.a.createElement("img",{src:"./img/cover/".concat(e,".png"),alt:""})),m.a.createElement("div",{className:"Detail"},m.a.createElement("p",null,"Untitled Movie"),m.a.createElement("span",null,"The Genre"),m.a.createElement("span",null,m.a.createElement("b",null,"2018")))))})),a=Object(d.a)({},u.i,{vertical:!0,verticalSwiping:!0,slidesToScroll:1,centerMode:!1,autoplay:!0,swipeToSlide:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]});return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container-fluid",id:"Trending"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement("h6",null,"Trending")),m.a.createElement(g.a,a,e))))},v=t(14),f=t(31);var N=Object(v.b)((function(e){return Object(d.a)({},e)}),(function(e){return{Searhing:function(a){e(f.c.onMovieSearch(a))}}}))((function(e){var a=e.SearchMovies.movies.map((function(e,a){return m.a.createElement("div",{className:"Poster",key:a},m.a.createElement("img",{src:"./img/cover/".concat(e,".png"),alt:""}))})),t=Object(d.a)({},u.i,{slidesToShow:5,centerPadding:"0px",autoplay:!0,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]});return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container-fluid",id:"MoviesSearch"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement("h6",null,"Search")),m.a.createElement("div",{className:"col-12 InputSearch"},m.a.createElement("div",{className:"content"},m.a.createElement("i",{className:"fas fa-search"}),m.a.createElement("input",{type:"text",placeholder:"Search Movies, Tv Shows, Trailers...."}),m.a.createElement("div",{className:"Dropdown"},m.a.createElement("select",null,m.a.createElement("option",null,"Chose Genres")),m.a.createElement("i",{className:"fas fa-chevron-down d-md-flex d-none"})))),m.a.createElement("div",{className:"col-12 Movies"},m.a.createElement("div",{className:"Heading"},m.a.createElement("h6",null,"Recently Played")),m.a.createElement(g.a,t,a)),m.a.createElement("div",{className:"col-12 Movies"},m.a.createElement("div",{className:"Heading"},m.a.createElement("h6",null,"Recently Played")),m.a.createElement(g.a,t,a)))))})),h=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).state={},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container-fluid SearchSection"},m.a.createElement(o.a,null),m.a.createElement("div",{className:"row SearchRow"},m.a.createElement("div",{className:"col-3 d-md-flex d-none"},m.a.createElement(E,null)),m.a.createElement("div",{className:"col-md-8 col-12 "},m.a.createElement(N,null)))))}}]),a}(r.Component);a.default=h},76:function(e,a,t){"use strict";var n=t(3),l=t(24),s=t(25),i=t(27),c=t(26),r=t(28),m=t(0),o=t.n(m),d=t(79),u=t.n(d),p=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"PopUp ".concat(this.props.classes),style:{display:"none"}},o.a.createElement("i",{className:"fas fa-caret-up"}),o.a.createElement("div",{className:"Content"},this.props.children))}}]),a}(m.Component),g=t(31),E=t(18),v=t(14),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(c.a)(a).call(this,e))).showDropDown=function(e){if(void 0!==e.target.id&&null!==e.target.id&&""!==e.target.id){for(var a=document.querySelectorAll(".PopUp"),t=0;t<a.length;t++)a[t].className.split(" ")[1]!==e.target.id&&u()(a[t]).slideUp();u()(".".concat(e.target.id)).slideToggle()}},t.menuHandler=function(e){t.props.openMenu()},t.componentWillReceiveProps=function(e){var a=e.Login.name;t.setState({name:a})},t.state={Msg:[{img:"./img/msg.png",name:"Taylor Devis",time:"1:45 PM",des:"Added You As Friend",type:"Notification"},{img:"./img/msg.png",name:"Taylor Devis",time:"1:45 PM",des:"Added You As Friend",type:"Notification"},{img:"./img/msg.png",name:"Taylor Devis",time:"1:45 PM",des:"Added You As Friend",type:"Notification"},{img:"./img/msg.png",name:"Taylor Devis",time:"1:45 PM",des:"Untitled Message....",type:"Message"},{img:"./img/msg.png",name:"Taylor Devis",time:"1:45 PM",des:"Untitled Message....",type:"Message"}],dropMenu:["Comedies","Sci Fi","Action"],UserDrop:[{img:"settings",name:"Setting",link:"/profile-setting"},{img:"help",name:"Help",link:""},{img:"exit",name:"Sign Out",link:""}],name:"Alexander "},t}return Object(r.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.UserDrop.map((function(e,a){return o.a.createElement("div",{className:"msgContainer",key:a},o.a.createElement("img",{src:"./img/icon/".concat(e.img,".png"),className:"img-fluid",alt:""}),o.a.createElement(E.b,{to:e.link},e.name))})),a=this.state.Msg.map((function(e,a){if("Message"===e.type)return o.a.createElement("div",{className:"msgContainer",key:a},o.a.createElement("div",{className:"Dp"},o.a.createElement("img",{src:e.img,className:"img-fluid",alt:""})),o.a.createElement("div",{className:"content"},o.a.createElement("p",null,e.name),o.a.createElement("span",null,e.des)),o.a.createElement("p",{className:"time"},e.time))})),t=this.state.Msg.map((function(e,a){if("Notification"===e.type)return o.a.createElement("div",{className:"msgContainer",key:a},o.a.createElement("div",{className:"Dp"},o.a.createElement("img",{src:e.img,className:"img-fluid",alt:""})),o.a.createElement("div",{className:"content"},o.a.createElement("p",null,e.name),o.a.createElement("span",null,e.des)),o.a.createElement("p",{className:"time"},e.time))})),n=this.state.dropMenu.map((function(e,a){return o.a.createElement("div",{className:"MenuContainer",key:a},o.a.createElement("p",null,e))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"MainNav py-md-5  p-0 col-12",style:{backgroundColor:void 0===this.props.color?void 0:this.props.color}},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row ".concat(!0!==this.props.display?"justify-content-between":"justify-content-center")},o.a.createElement("div",{className:"Logo col-md-2 col-sm-6 col-6 order-md-0 order-1"},o.a.createElement(E.b,{to:"/"}," ",o.a.createElement("img",{src:"./img/logo.png",className:"img-fluid ml-md-2 m-0 p-5 p-md-3",alt:""}))),o.a.createElement("div",{className:"NavItem col-md-6 col-sm-3 col-3 order-md-1 order-0 justify-content-md-end ".concat(!0!==this.props.display?"d-none":"d-flex")},o.a.createElement("img",{src:"./img/bars.png",className:"d-md-none d-block img-fluid ml-3",onClick:this.menuHandler,alt:""}),o.a.createElement("ul",{className:"d-md-flex d-none"},o.a.createElement("li",{id:"drop",onClick:this.showDropDown,style:{position:"relative"}},"Home",o.a.createElement("i",{id:"drop",className:"fas fa-chevron-down"}),o.a.createElement(p,{classes:"drop"},n)),o.a.createElement("li",null,"tv shows",o.a.createElement("i",{id:"drop",className:"fas fa-chevron-down"})),o.a.createElement("li",null,"web series",o.a.createElement("i",{id:"drop",className:"fas fa-chevron-down"})),o.a.createElement("li",null,"trailers",o.a.createElement("i",{id:"drop",className:"fas fa-chevron-down"})),o.a.createElement("li",null,"channels",o.a.createElement("i",{id:"drop",className:"fas fa-chevron-down"})))),o.a.createElement("div",{className:"col-md-4 col-sm-3 col-3 order-2 icons"},o.a.createElement("div",{className:"MainIcon  order-md-0 order-1"},o.a.createElement(E.b,{to:"/search"},o.a.createElement("div",{className:"Icons"},o.a.createElement("div",{className:"Inside"},o.a.createElement("img",{src:"./img/icon/search.png",alt:""}))))),o.a.createElement("div",{className:"MainIcon d-md-flex d-none",id:"Msg1",onClick:this.showDropDown},o.a.createElement("div",{className:"Icons",id:"Msg1"},o.a.createElement("div",{className:"Inside",id:"Msg1"},o.a.createElement("img",{src:"./img/icon/msg.png",id:"Msg1",alt:""}))),o.a.createElement(p,{classes:"Msg1 mt-5"},a)),o.a.createElement("div",{className:"MainIcon order-md-1 order-0",id:"Bell1",onClick:this.showDropDown},o.a.createElement("div",{className:"Icons",id:"Bell1"},o.a.createElement("div",{className:"Inside",id:"Bell1"},o.a.createElement("img",{src:"./img/icon/bell.png",id:"Bell1",alt:""}))),o.a.createElement(p,{classes:"Bell1"},t)),o.a.createElement("div",{className:"MainIcon flex-row  order-md-2 order-2",id:"userProfile",onClick:this.showDropDown},o.a.createElement("div",{className:"Icons",id:"userProfile"},o.a.createElement("img",{src:"./img/dp.png",alt:"",id:"userProfile"})),o.a.createElement("p",{className:"d-md-inline d-none",id:"userProfile"},this.state.name),o.a.createElement("i",{className:"fas fa-caret-down",id:"userProfile"}),o.a.createElement(p,{classes:"userProfile"},e)))))))}}]),a}(m.Component);a.a=Object(v.b)((function(e){return Object(n.a)({},e)}),(function(e){return{openMenu:function(){e(g.b.openMenu())}}}))(f)}}]);
//# sourceMappingURL=22.e965b09c.chunk.js.map