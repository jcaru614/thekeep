(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/thekeep.0294faef.png"},47:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),s=a(7),c=a(11),i=a(5),m=a(40),u=a.n(m),d=a(4),p=a(6),g=a.n(p),f=a(36),h=a.n(f),E=a(16),b={dev_ip_address:"http://10.0.0.97:8000",prod_heroku_address:"https://thekeepapp.herokuapp.com"},w=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(E.a,{className:"test"},r.a.createElement(E.a.Toggle,{variant:"",id:"dropdown-basic"},r.a.createElement(h.a,{className:"listicon"})),r.a.createElement(E.a.Menu,null,r.a.createElement(E.a.Item,{href:"#/action-1",onClick:function(){Object(d.c)("/update")}},"Edit Profile"),r.a.createElement(E.a.Item,{href:"#/action-2",onClick:function(){g.a.get("".concat(b.prod_heroku_address,"/api/v1/logout"),{withCredentials:!0}).then((function(e){l(!a),localStorage.clear(),Object(d.c)("/")})).catch((function(e){return console.log(e)}))}},"Logout"))))},v=a(38),O=a.n(v),j=function(e){console.log("navbar prop!!!",e.refs);var t=Object(n.useState)({}),a=Object(i.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(""),c=Object(i.a)(s,2),m=c[0],u=c[1];return Object(n.useEffect)((function(){null===localStorage.getItem("userId")?Object(d.c)("/"):g.a.get("".concat(b.prod_heroku_address,"/api/v1/readOne/").concat(localStorage.getItem("userId")),{withCredentials:!0}).then((function(e){console.log(e),o(e.data)})).catch((function(e){console.log(e),o({}),u("Please login to display data")}))}),[]),r.a.createElement("header",{className:"navheader"},r.a.createElement("img",{className:"thekeepimg",src:O.a,alt:""}),"/"!==e.path?r.a.createElement("div",null,m.length>0?r.a.createElement(d.a,{to:"/"},"Login to view data"):null,r.a.createElement("div",{className:"hamburgericon"},r.a.createElement(w,null)),r.a.createElement("h1",{className:"name"},"Hello ",l.firstName)):null)},N=a(39),S=a.n(N),k=function(e){console.log("the props notes",e.info),console.log("the props refs",e.refs);return r.a.createElement("div",null,void 0!==e.info.tasks&&e.info.tasks.map((function(t,a){return r.a.createElement("div",{className:"note",key:a},r.a.createElement("div",{className:"innNote"},r.a.createElement("button",{onClick:function(a){return function(t,a){console.log("e",t),t.preventDefault(),console.log("the item:",a),console.log("the item _id:",a._id);var n=Object(c.a)({},e.info);n.tasks=n.tasks.filter((function(e){return e._id!==a._id})),g.a.put("".concat(b.prod_heroku_address,"/api/v1/updateOne/").concat(e.info._id),n,{withCredentials:!0}).then((function(){return e.refs.setRefreshState(!e.refs.refreshState)})).catch((function(e){return console.log(e)}))}(a,t)}},r.a.createElement(S.a,null)),r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.date.substring(0,10))),r.a.createElement("hr",null),r.a.createElement("div",{className:"p"},r.a.createElement("p",null,t.description)))})))},C=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)({title:"",description:"",date:""}),m=Object(i.a)(o,2),p=m[0],f=m[1],h=Object(n.useState)(""),E=Object(i.a)(h,2),w=E[0],v=E[1],O=Object(n.useState)(!1),N=Object(i.a)(O,2),S=N[0],C=N[1];Object(n.useEffect)((function(){null===localStorage.getItem("userId")?Object(d.c)("/"):g.a.get("".concat(b.prod_heroku_address,"/api/v1/readOne/").concat(localStorage.getItem("userId")),{withCredentials:!0}).then((function(e){console.log(e),l(e.data)})).catch((function(e){console.log(e),l({}),v("Please login to display data")}))}),[S]),console.log("localstorage from home",localStorage.getItem("userId")),console.log("userstate from home",a),console.log("formstate from home",p);var y=function(e){f(Object(c.a)({},p,Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement("div",{className:"home"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=Object(c.a)({},a);t.tasks.unshift(p),console.log("temp",t),console.log("temp.tasks",t.tasks),g.a.put("".concat(b.prod_heroku_address,"/api/v1/updateOne/").concat(localStorage.getItem("userId")),t,{withCredentials:!0}).then((function(e){console.log(e),C(!S),e.data.errors?v({title:e.data.errors.title?e.data.errors.title.message:"",description:e.data.errors.description?e.data.errors.description.message:"",date:e.data.errors.date?e.data.errors.date.message:""}):(console.log("successfully updated the users tasks"),f({title:"",description:"",date:""}),C(!S),Object(d.c)("/home"))})).catch((function(e){console.log("the error:",e)}))}},r.a.createElement("input",{type:"text",name:"title",value:p.title,placeholder:"Title",onChange:y}),""!==w.title?r.a.createElement("p",null,w.title):null,r.a.createElement("input",{type:"date",className:"date",value:p.date,onChange:y,name:"date"}),""!==w.date?r.a.createElement("p",null,w.date):null,r.a.createElement("textarea",{type:"text",name:"description",value:p.description,placeholder:"Write a task down...",rows:"3",onChange:y}),""!==w.description?r.a.createElement("p",null,w.description):null,r.a.createElement("button",{type:"submit"},r.a.createElement(u.a,null))),r.a.createElement(k,{info:a,refs:{refreshState:S,setRefreshState:C}})))},y=a(42),I=a.n(y),_=a(41),P=a.n(_),x=a(20),D=a(43),L=a.n(D),R=function(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),u=m[0],p=m[1],f=Object(n.useState)(!1),h=Object(i.a)(f,2),E=h[0],w=h[1];Object(n.useEffect)((function(){null===localStorage.getItem("userId")?Object(d.c)("/"):g.a.get("".concat(b.prod_heroku_address,"/api/v1/readOne/").concat(localStorage.getItem("userId")),{withCredentials:!0}).then((function(e){console.log(e),l(e.data)})).catch((function(e){console.log(e),l({}),p("Please login to display data")}))}),[E]),console.log("localstorage from update",localStorage.getItem("userId")),console.log("userstate from update",a);var v=function(e){l(Object(c.a)({},a,Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement(j,{refs:{refreshState:E,setRefreshState:w}}),r.a.createElement(d.a,{to:"/home"},r.a.createElement(P.a,{className:"back"})),r.a.createElement("div",{className:"updatepage"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=Object(c.a)({},a);console.log("temp from update",t),g.a.put("".concat(b.prod_heroku_address,"/api/v1/updateinfo/").concat(localStorage.getItem("userId")),t,{withCredentials:!0}).then((function(e){console.log(e),w(!E),e.data.errors?p({firstName:e.data.errors.firstName?e.data.errors.firstName.message:"",lastName:e.data.errors.lastName?e.data.errors.lastName.message:"",email:e.data.errors.email?e.data.errors.email.message:"",password:e.data.errors.password?e.data.errors.password.message:"",confirmPassword:e.data.errors.confirmPassword?e.data.errors.confirmPassword.message:""}):(console.log("successfully updated the user info"),w(!E),alert("Profile Updated ".concat(a.firstName)),Object(d.c)("/home"))})).catch((function(e){console.log("the error:",e)}))}},r.a.createElement("h1",null,"Edit Profile"),r.a.createElement("input",{type:"text",name:"firstName",value:a.firstName,onChange:v}),""!==u.firstName?r.a.createElement("p",null,u.firstName):null,r.a.createElement("input",{type:"text",name:"lastName",value:a.lastName,onChange:v}),""!==u.lastName?r.a.createElement("p",null,u.lastName):null,r.a.createElement("input",{type:"text",name:"email",value:a.email,onChange:v}),""!==u.email?r.a.createElement("p",null,u.email):null,r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:v}),""!==u.password?r.a.createElement("p",null,u.password):null,r.a.createElement("input",{type:"password",name:"confirmPassword",placeholder:"Confirm Password",onChange:v}),""!==u.confirmPassword?r.a.createElement("p",null,u.confirmPassword):null,r.a.createElement("button",{type:"submit"},r.a.createElement(I.a,null))),r.a.createElement(x.a,{className:"deleteAccount",variant:"danger",size:"sm",onClick:function(){g.a.delete("".concat(b.prod_heroku_address,"/api/v1/deleteOne/").concat(localStorage.getItem("userId")),{withCredentials:!0}).then((function(e){console.log(e),console.log("user has been deleted"),localStorage.clear(),Object(d.c)("/")})).catch((function(e){console.log(e)}))}},"Delete Account ",r.a.createElement(L.a,null))))};var T=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))},A=a(44),W=a.n(A),B=function(){var e,t=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),a=Object(i.a)(t,2),l=a[0],o=a[1],m=Object(n.useState)([]),u=Object(i.a)(m,2),p=u[0],f=u[1],h=function(e){o(Object(c.a)({},l,Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g.a.post("".concat(b.prod_heroku_address,"/api/v1/create"),l,{withCredentials:!0}).then((function(e){e.data.errors?f({firstName:e.data.errors.firstName?e.data.errors.firstName.message:"",lastName:e.data.errors.lastName?e.data.errors.lastName.message:"",email:e.data.errors.email?e.data.errors.email.message:"",password:e.data.errors.password?e.data.errors.password.message:"",confirmPassword:e.data.errors.confirmPassword?e.data.errors.confirmPassword.message:""}):"Email already exists"===e.data.msg?(console.log(e.data.msg),f({email:"A user with this email is already registered to The Keep"})):(localStorage.setItem("userId",e.data._id),console.log("registration Succsesful"),Object(d.c)("/home"))})).catch((function(e){console.log(e)}))}},r.a.createElement("h1",null,"Register"),r.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name",onChange:h}),""!==p.firstName?r.a.createElement("p",null,p.firstName):null,r.a.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name",onChange:h}),""!==p.lastName?r.a.createElement("p",null,p.lastName):null,r.a.createElement("input",{type:"text",name:"email",placeholder:"Email",onChange:h}),""!==p.email?r.a.createElement("p",null,p.email):null,r.a.createElement("input",(e={type:"text"},Object(s.a)(e,"type","password"),Object(s.a)(e,"name","password"),Object(s.a)(e,"placeholder","Password"),Object(s.a)(e,"onChange",h),e)),""!==p.password?r.a.createElement("p",null,p.password):null,r.a.createElement("input",{type:"password",name:"confirmPassword",placeholder:"Confirm Password",onChange:h}),""!==p.confirmPassword?r.a.createElement("p",null,p.confirmPassword):null,r.a.createElement("button",{type:"submit"},r.a.createElement(W.a,null))))},F=a(45),J=a.n(F),z=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),m=Object(i.a)(o,2),u=m[0],p=m[1],f=function(e){l(Object(c.a)({},a,Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g.a.post("".concat(b.prod_heroku_address,"/api/v1/login"),a,{withCredentials:!0}).then((function(e){console.log(e),e.data.errors?p({email:e.data.errors.email?e.data.errors.email.message:"",password:e.data.errors.password?e.data.errors.password.message:""}):"success"!==e.data.msg?(console.log(e.data.msg),p({email:"This email doesn't exist or password is incorrect"})):(localStorage.setItem("userId",e.data._id),console.log(localStorage.getItem("userId")),console.log("login succsesful"),Object(d.c)("/home"))})).catch((function(e){console.log(e)}))}},r.a.createElement("h1",null,"Login"),""!==u.email?r.a.createElement("p",null,u.email):null,r.a.createElement("input",{type:"text",name:"email",placeholder:"Email",onChange:f}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:f}),r.a.createElement("button",{type:"submit"},r.a.createElement(J.a,null))))},H=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(j,{path:"/"}),r.a.createElement(B,null),r.a.createElement(z,null))};var K=function(){return r.a.createElement("div",null,r.a.createElement(d.b,null,r.a.createElement(H,{path:"/"}),r.a.createElement(C,{path:"/home"}),r.a.createElement(R,{path:"/update"})),r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.72ac5e7c.chunk.js.map