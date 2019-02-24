(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,a){},154:function(e,t,a){},156:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(81),c=a.n(o);a(90),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(9),s=a(18),l=a(161),u=a(162),m=a(163),h=a(23),d=a(24),p=a(26),f=a(25),b=a(27),v=a(11),E=a.n(v),g=function(){return{type:"FETCH_MENTORS_BEGIN"}},_=function(e){return{type:"FETCH_MENTORS_SUCCESS",payload:{mentors:e}}},k=function(e){return{type:"FETCH_MENTORS_FAILURE",payload:{error:e}}};var y=a(8),O=function(e){return{type:"MENTOR_SELECTED",payload:e}},C=a(1),j=a(34),N=a(83),S=a.n(N),w=(a(152),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).uiConfig={signInFlow:"popup",signInOptions:[E.a.auth.GithubAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},a.state={value:"",list:[]},a.activementor=window.localStorage.getItem("mentor"),"undefined"!==a.activementor&&null!==a.activementor&&(a.props.select(JSON.parse(a.activementor)),a.props.push("/mentorsroom")),a.mentors=a.props.mentors.items,a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.auth().onAuthStateChanged(function(t){e.getMentorLink(t)})}},{key:"getMentorLink",value:function(e){var t=this;e&&fetch("https://api.github.com/user/".concat(e.providerData[0].uid)).then(function(e){return e.json()}).then(function(e){t.redirectToMentorRoom(e.html_url)})}},{key:"handleChange",value:function(e){var t=this,a=[];0!==e.target.value.length?(this.filtredmentors=this.mentors.filter(function(t){return t.gitaccount.replace("https://github.com/","").substr(0,e.target.value.length).toLowerCase()===e.target.value.toLowerCase()}),this.filtredmentors.forEach(function(e,n){var o=r.a.createElement("div",{key:n,onClick:t.setValueInInput.bind(t)},e.gitaccount.replace(/https:|github.com|\u002F/g,"").toLowerCase());a.push(o)}),this.setState({list:a})):this.setState({list:[]}),this.setState({value:e.target.value})}},{key:"setValueInInput",value:function(e){this.setState({value:e.target.innerText}),this.setState({list:[]})}},{key:"redirectToMentorRoom",value:function(e){var t=this;this.mentors.forEach(function(a){var n=null,r=a.gitaccount.replace(/https:|github.com|\u002F/g,"").toLowerCase();e&&(n=e.replace(/https:|github.com|\u002F/g,"").toLowerCase()),r!==t.state.value&&r!==n||(window.localStorage.setItem("mentor",JSON.stringify(a)),t.setState({value:[]}),t.props.select(a),t.props.push("/mentorsroom"))})}},{key:"onClick",value:function(e){this.redirectToMentorRoom(),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:"header-container flex-container",style:{flexDirection:"column"}},r.a.createElement("div",{className:"flex-container"},r.a.createElement("h1",null,"Mentors Dashboard")),r.a.createElement("div",{className:"header-container flex-container"},r.a.createElement("form",{onSubmit:this.handle,className:"header-container__form flex-container"},r.a.createElement("div",{ref:"autocomplete",className:"header-container__autocomplete"},r.a.createElement("div",{className:"header-container__autocomplete-inputcontainer flex-container"},r.a.createElement(j.a,{icon:"search",className:"header-container__autocomplete-icon"}),r.a.createElement("input",{className:"header-container__autocomplete-input",placeholder:"enter gitname",value:this.state.value,onChange:this.handleChange.bind(this)})),r.a.createElement("div",{className:"header-container__autocomplete-list"},this.state.list)),r.a.createElement("button",{onClick:this.onClick.bind(this),className:"header-container__form-button"},"Search")),"or",r.a.createElement("div",null,r.a.createElement(S.a,{className:"header-container__github",uiConfig:this.uiConfig,firebaseAuth:E.a.auth()},r.a.createElement(j.a,{icon:["fab","github"],className:"header-container__github-icon"})))))}}]),t}(n.Component));var T=Object(i.c)(function(e){return{mentors:e.mentors,link:e.link}},function(e){return Object(y.b)({select:O,push:C.d},e)})(w),I=(a(154),function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(function(e){e(g()),E.a.database().ref("/data").once("value",function(t){var a=t.val();e(_(JSON.parse(a.json)))}).catch(function(t){return e(k(t))})})}},{key:"render",value:function(){var e=this.props,t=e.error,a=e.loading;return t?r.a.createElement("div",null,"Error! ",t.message):a?r.a.createElement("div",{className:"loading-container"},r.a.createElement("img",{alt:"Loading...",src:"https://res.cloudinary.com/p-d/image/upload/v1550868069/cod-jam-culture/spinner1.gif"})):r.a.createElement(T,null)}}]),t}(r.a.Component)),M=Object(i.c)(function(e){return{loading:e.mentors.loading,error:e.mentors.error}})(I),R=function(){return r.a.createElement("div",null,r.a.createElement(M,null))},L=(a(156),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).mentor="",a.table={studentsname:[],taskname:[]},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"createHeader",value:function(){var e=this;this.table.studentsname.push(r.a.createElement("td",{key:"emptyline"})),this.mentor.students.forEach(function(t,a){var n=r.a.createElement("td",{key:a},r.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},t.name));e.table.studentsname.push(n),0===a&&t.tasks.forEach(function(t,a){e.fillTasks(t,a)})})}},{key:"fillTasks",value:function(e,t){var a=this,n=[];this.mentor.students.forEach(function(e,o){var c=a.checkTask(e.tasks[t].status);n.push(r.a.createElement("td",{key:o,className:c}))}),this.table.taskname.push(r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.task)),n))}},{key:"checkTask",value:function(e){switch(e){case"Checked":return"not-performed";case"Checking":return"need-to-check";case"In Progress":return"in-process";case"ToDo":return"todo-status";case 0:return"not-performed";default:return"checked-by-mentor"}}},{key:"onClick",value:function(){window.localStorage.setItem("mentor",void 0),E.a.auth().signOut(),this.props.push("/home")}},{key:"render",value:function(){if(this.props.mentor)this.mentor=this.props.mentor;else{var e=window.localStorage.getItem("mentor");this.mentor=JSON.parse(e)}return this.table.studentsname=[],this.table.taskname=[],this.createHeader(),r.a.createElement("div",{className:"mentors-room-container flex-container__mentorsroom"},r.a.createElement("div",{className:"mentors-room__button-container flex-container__mentorsroom"},r.a.createElement("button",{className:"mentors-room__button flex-container__mentorsroom",onClick:this.onClick.bind(this)},r.a.createElement(j.a,{icon:"sign-out-alt",style:{height:"40",width:"40"}}),"logout")),r.a.createElement("h2",{className:"mentors-room__header"},"Mentor: ",this.mentor.gitaccount.replace(/https:|github.com|[^a-zA-Z]/g,"").toLowerCase()),r.a.createElement("table",{className:"mentors-room__table"},r.a.createElement("thead",{className:"mentors-room__table-header"},r.a.createElement("tr",null,this.table.studentsname)),r.a.createElement("tbody",{className:"mentors-room__table-body"},this.table.taskname)))}}]),t}(n.Component));var x=Object(i.c)(function(e){return{mentor:e.active}},function(e){return Object(y.b)({push:C.d},e)})(L),D=function(){return r.a.createElement("div",null,r.a.createElement(x,null))},F=r.a.createElement(l.a,null,r.a.createElement(u.a,{exact:!0,path:"/home",component:R}),r.a.createElement(u.a,{path:"/mentorsroom",component:D}),r.a.createElement(u.a,{exact:!0,path:"",render:function(){return r.a.createElement(m.a,{to:"/home"})}})),A=function(e){var t=e.history;return r.a.createElement(s.a,{history:t,basename:"/mentor-dashboard"},F)},H=a(35),J=a(59),B=a(60),U=a(28),z=a(80),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENTOR_SELECTED":return t.payload;default:return e}},P=a(42),V={items:[],loading:!1,error:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MENTORS_BEGIN":return Object(P.a)({},e,{loading:!0,error:null});case"FETCH_MENTORS_SUCCESS":return Object(P.a)({},e,{loading:!1,items:t.payload.mentors});case"FETCH_MENTORS_FAILURE":return Object(P.a)({},e,{loading:!1,error:t.payload.error,items:[]});default:return e}},Z=function(e){return Object(y.c)({router:Object(s.b)(e),mentors:W,active:G})},K=a(84),$=Object(U.a)({basename:"/mentor-dashboard"});H.b.add(J.b,B.b,J.a,B.a),E.a.initializeApp({apiKey:"AIzaSyBCM56DMZTpzdh_ehIT8jf_jI_ljetLeE4",authDomain:"mentor-dashboard-b8c25.firebaseapp.com",databaseURL:"https://mentor-dashboard-b8c25.firebaseio.com",projectId:"mentor-dashboard-b8c25"});var q=Object(y.e)(Z($),Object(y.d)(Object(y.a)(Object(z.a)($),K.a)));c.a.render(r.a.createElement(i.a,{store:q},r.a.createElement(A,{history:$})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,t,a){e.exports=a(159)},90:function(e,t,a){}},[[85,2,1]]]);
//# sourceMappingURL=main.b002d372.chunk.js.map