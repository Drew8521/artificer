(this.webpackJsonpartificer=this.webpackJsonpartificer||[]).push([[0],{33:function(e,t,n){e.exports=n(54)},38:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(28),c=n.n(l),i=(n(38),n(21)),o=n(8),u=n(12),s=n.n(u),m=n(19),p=n(15),f=(n(49),p.initializeApp({apiKey:"AIzaSyALKHTz_Lv92B1EZvTEjqvIKnNDrQVQNgw",authDomain:"artificer-f8573.firebaseapp.com",databaseURL:"https://artificer-f8573.firebaseio.com",projectId:"artificer-f8573",storageBucket:"artificer-f8573.appspot.com",messagingSenderId:"messagingSenderId: 994733388641"})),h=function(e){var t=e.history,n=Object(a.useCallback)(function(){var e=Object(m.a)(s.a.mark((function e(n){var a,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Made it here at least"),n.preventDefault(),a=n.target.elements,r=a.email,l=a.password,e.prev=3,e.next=6,f.auth().createUserWithEmailAndPassword(r.value,l.value);case 6:t.push("http://Drew8521.github.io/Artificer/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:n},r.a.createElement("label",null,"Email",r.a.createElement("input",{name:"email",type:"email",placeholder:"Email"})),r.a.createElement("label",null,"Password",r.a.createElement("input",{name:"password",type:"password",placeholder:"password"})),r.a.createElement("button",{type:"submit"},"Sign Up")),r.a.createElement("button",{onClick:function(){t.push("http://Drew8521.github.io/Artificer/logIn")}},"Log In"))},E=n(13),b=r.a.createContext(),g=function(e){var t=e.children,n=Object(a.useState)(null),l=Object(E.a)(n,2),c=l[0],i=l[1];return Object(a.useEffect)((function(){f.auth().onAuthStateChanged(i)}),[]),r.a.createElement(b.Provider,{value:{currentUser:c}},t)},d=function(e){var t=e.history,n=Object(a.useCallback)(function(){var e=Object(m.a)(s.a.mark((function e(n){var a,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.perventDefault(),a=n.target.elements,r=a.email,l=a.password,e.prev=2,e.next=5,f.auth().signInWithEmailAndPassword(r.value,l.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(a.useContext)(b).currentUser?r.a.createElement(o.a,{to:"http://Drew8521.github.io/Artificer/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Log in"),r.a.createElement("form",{onSubmit:n},r.a.createElement("label",null,"Email",r.a.createElement("input",{name:"email",type:"email",placeholder:"Email"})),r.a.createElement("label",null,"Password",r.a.createElement("input",{name:"password",type:"password",placeholder:"Password"})),r.a.createElement("button",{type:"submit"},"Log in")),r.a.createElement("button",{onClick:function(){t.push("http://Drew8521.github.io/Artificer/signUp")}},"Sign Up"))},v=f.storage(),w=(f.storage().ref().child("mountains.jpg"),function(){var e=Object(a.useState)(null),t=Object(E.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),i=Object(E.a)(c,2),o=i[0],u=i[1],s=Object(a.useState)(0),m=Object(E.a)(s,2),p=m[0],f=m[1];return r.a.createElement("div",null,r.a.createElement("progress",{value:p,max:"100"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:o||"http://via.placeholder.com/400x300",alt:"Uploaded Image",height:"300",width:"400"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"file",onChange:function(e){l(e.target.files[0])}}),r.a.createElement("button",{onClick:function(){v.ref("images/".concat(n.name)).put(n).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);f(t)}),(function(e){console.log(e)}),(function(){v.ref("images").child(n.name).getDownloadURL().then((function(e){console.log(e),u(e)}))}))}},"Upload"),r.a.createElement("br",null))}),j=n(31),O=function(){var e=p.storage().ref().child("images/"),t=(Object(j.a)(Array(3)),"");return e.listAll().then((function(e){e.items.forEach((function(e){e.getDownloadURL().then((function(e){t=e}))}))})).catch((function(e){console.log(e)})),console.log(t),r.a.createElement("div",null,r.a.createElement("img",{src:t}),";")},y=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Home"),r.a.createElement("p",null,"Profile"))},A=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(O,null),r.a.createElement("button",{onClick:function(){return f.auth().signOut()}},"Sign Out"))},x=n(32),D=function(e){var t=e.component,n=Object(x.a)(e,["component"]),l=Object(a.useContext)(b).currentUser;return r.a.createElement(o.b,Object.assign({},n,{render:function(e){return l?r.a.createElement(t,e):r.a.createElement(o.a,{to:"http://Drew8521.github.io/Artificer/login"})}}))},S=function(){return r.a.createElement(g,null,r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(D,{exact:!0,path:"http://Drew8521.github.io/Artificer/",component:A}),r.a.createElement(o.b,{exact:!0,path:"http://Drew8521.github.io/Artificer/login",component:d}),r.a.createElement(o.b,{exact:!0,path:"http://Drew8521.github.io/Artificer/signup",component:h}))))};c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.718a99b5.chunk.js.map