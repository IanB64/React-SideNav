(this.webpackJsonpsidenav=this.webpackJsonpsidenav||[]).push([[0],{23:function(e,t,a){},26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),o=(a(31),a(7)),l=a(8),u=a(10),i=a(9),m=a(4),p=Object(m.a)(),d=a(17),h=a(2),b=(a(23),a(12)),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onClick=function(t){e.props.selectNav(e.props.item)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.item,a=t.label,n=t.text,c=t.items,s=t.path,o=this.props.className?this.props.className:"sideNav-item",l=document.location.pathname.replace("".concat("/React-SideNav","/"),"/");"sideNav-item"!==o||!this.props.selectedNav&&0!==l.localeCompare(s)||0!==l.localeCompare(s)&&a!==this.props.selectedNav.label||(o+=" selected");var u=!!this.props.selectedNav&&this.props.selectedNav.path.includes(a)||window.location.href.includes(a),i=u?"sideNav-item-arrow-selected":"sideNav-item-arrow";return r.a.createElement("div",{className:"navItem"},r.a.createElement(d.b,{className:"link",to:s},r.a.createElement("div",{className:o,onClick:function(){return e.onClick()}},r.a.createElement("div",{style:{paddingLeft:this.props.depth*this.props.depthStep},className:"sideNav-item-content"},r.a.createElement("div",{className:"sideNav-item-text"},n),c?r.a.createElement("i",{className:i}):null))),r.a.createElement("div",{className:"subItems"},u&&Array.isArray(c)?r.a.createElement("div",null,c.map((function(t,a){return r.a.createElement(r.a.Fragment,{key:"".concat(t.name).concat(a)},r.a.createElement(v,{depth:e.props.depth+1,depthStep:e.props.depthStep,item:t}))}))):null))}}]),a}(r.a.Component),v=Object(b.b)((function(e){return{selectedNav:e.selectedNav}}),{selectNav:function(e){return{type:"NAV_SELECTED",payload:e}}})(E),f=Object(h.g)(v),x=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sideNav"},this.props.mainNav?r.a.createElement(f,{className:"mainNav",depthStep:10,depth:0,item:this.props.mainNav}):null,r.a.createElement("div",null,this.props.navs?this.props.navs.map((function(e,t){return r.a.createElement("div",{key:"".concat(e.name).concat(t)},r.a.createElement("hr",{className:"solid"}),r.a.createElement(f,{depthStep:10,depth:0,item:e}))})):null))}}]),a}(r.a.Component),g=Object(b.b)((function(e){return{navs:e.navs,mainNav:e.mainNav}}))(x),N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"This is the ",r.a.createElement("span",{style:{color:"red"}},this.props.text)," ","page"))}}]),a}(r.a.Component),O=(a(37),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{history:p,basename:"".concat("/React-SideNav","/")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"side-nav"},r.a.createElement(g,null)),r.a.createElement("div",{className:"content"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/"},r.a.createElement(h.a,{to:"/cs-home"})),r.a.createElement(h.b,{exact:!0,path:"/cs-home",component:function(){return r.a.createElement(N,{text:"CS home"})}}),r.a.createElement(h.b,{exact:!0,path:"/our-people",component:function(){return r.a.createElement(N,{text:"Our people"})}}),r.a.createElement(h.b,{exact:!0,path:"/about",component:function(){return r.a.createElement(N,{text:"About"})}}),r.a.createElement(h.b,{exact:!0,path:"/about/admin-structure",component:function(){return r.a.createElement(N,{text:"Administrative structure"})}}),r.a.createElement(h.b,{exact:!0,path:"/about/admin-structure/school-committees",component:function(){return r.a.createElement(N,{text:"School committees"})}}),r.a.createElement(h.b,{exact:!0,path:"/about/admin-structure/committee-membership",component:function(){return r.a.createElement(N,{text:"Committee membership"})}}),r.a.createElement(h.b,{exact:!0,path:"/about/fellowships-awards",component:function(){return r.a.createElement(N,{text:"Faculty Fellowships and Awards"})}}),r.a.createElement(h.b,{exact:!0,path:"/about/facts",component:function(){return r.a.createElement(N,{text:"Quick facts"})}}),r.a.createElement(h.b,{exact:!0,path:"/about/visit",component:function(){return r.a.createElement(N,{text:"Visit us"})}}),r.a.createElement(h.b,{exact:!0,path:"/about/contact",component:function(){return r.a.createElement(N,{text:"Contact us"})}}),r.a.createElement(h.b,{exact:!0,path:"/message-from-director",component:function(){return r.a.createElement(N,{text:"Message from the Director"})}}),r.a.createElement(h.b,{exact:!0,path:"/current-grad-students",component:function(){return r.a.createElement(N,{text:"Current graduate students"})}}),r.a.createElement(h.b,{exact:!0,path:"/current-grad-students/policies-procedures",component:function(){return r.a.createElement(N,{text:"Policies and procedures"})}}),r.a.createElement(h.b,{exact:!0,path:"/current-grad-students/programs",component:function(){return r.a.createElement(N,{text:"Programs"})}}),r.a.createElement(h.b,{exact:!0,path:"/current-grad-students/funding-awards",component:function(){return r.a.createElement(N,{text:"Funding and awards"})}}),r.a.createElement(h.b,{exact:!0,path:"/current-grad-students/courses",component:function(){return r.a.createElement(N,{text:"Courses"})}}),r.a.createElement(h.b,{exact:!0,path:"/current-grad-students/courses/course-calendar",component:function(){return r.a.createElement(N,{text:"Course calendar"})}}),r.a.createElement(h.b,{exact:!0,path:"/current-grad-students/courses/course-calendar/600-level",component:function(){return r.a.createElement(N,{text:"600 - level courses"})}}),r.a.createElement(h.b,{exact:!0,path:"/current-grad-students/courses/course-calendar/700-level",component:function(){return r.a.createElement(N,{text:"700 - level courses"})}}),r.a.createElement(h.b,{exact:!0,path:"/current-grad-students/courses/course-calendar/800-level",component:function(){return r.a.createElement(N,{text:"800 - level courses"})}}),r.a.createElement(h.b,{exact:!0,path:"/current-grad-students/degree-completion",component:function(){return r.a.createElement(N,{text:"Degree completion"})}})))))}}]),a}(r.a.Component)),w=a(14),C=function(){return{label:"cs-home",text:"Cheriton School of Computer Science home",path:"/cs-home"}},y=function(){return[{label:"our-people",text:"Our people",path:"/our-people"},{label:"about",text:"About the Cheriton School of Computer Science",path:"/about",items:[{label:"admin-structure",text:"Administrative structure",path:"/about/admin-structure",items:[{label:"school-committees",text:"School committees",path:"/about/admin-structure/school-committees"},{label:"committee-membership",text:"Committee membership",path:"/about/admin-structure/committee-membership"}]},{label:"fellowships-awards",text:"Faculty Fellowships and Awards",path:"/about/fellowships-awards"},{label:"facts",text:"Quick facts",path:"/about/facts"},{label:"visit",text:"Visit us",path:"/about/visit"},{label:"contact",text:"Contact us",path:"/about/contact"}]},{label:"message-from-director",text:"Message from the Director",path:"/message-from-director"},{label:"current-grad-students",text:"Current graduate students",path:"/current-grad-students",items:[{label:"policies-procedures",text:"Policies and procedures",path:"/current-grad-students/policies-procedures"},{label:"programs",text:"Programs",path:"/current-grad-students/programs"},{label:"funding-awards",text:"Funding and awards",path:"/current-grad-students/funding-awards"},{label:"courses",text:"Courses",path:"/current-grad-students/courses",items:[{label:"course-calendar",text:"Course calendar",path:"/current-grad-students/courses/course-calendar",items:[{label:"600-level",text:"600 - level courses",path:"/current-grad-students/courses/course-calendar/600-level"},{label:"700-level",text:"700 - level courses",path:"/current-grad-students/courses/course-calendar/700-level"},{label:"800-level",text:"800 - level courses",path:"/current-grad-students/courses/course-calendar/800-level"}]}]},{label:"degree-completion",text:"Degree completion",path:"/current-grad-students/degree-completion"}]}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"NAV_SELECTED"===t.type?t.payload:e},S=Object(w.c)(Object(w.b)({mainNav:C,navs:y,selectedNav:j}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(b.a,{store:S},r.a.createElement(O,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.fe32f041.chunk.js.map