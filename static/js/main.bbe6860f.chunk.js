(this["webpackJsonpinnovance-project"]=this["webpackJsonpinnovance-project"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(18),i=n(0),s=(n(44),n(3)),a=n(8),o=(n(45),n(1)),r=function(){return Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsx)(a.b,{to:"/",children:"Home"}),Object(o.jsx)(a.b,{to:"/movies",children:"Movies"}),Object(o.jsx)(a.b,{to:"/login",children:"Login"}),Object(o.jsx)(a.b,{to:"/signup",children:"Sign Up"})]})},l=(n(55),function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("p",{children:"2021 \u1427 Mertkan \u015een"})})}),u=n(4),d=(n(56),n(24)),j=(n(57),Object(i.createContext)()),b=function(e){var t=e.reducer,n=e.initialState,c=e.children;return Object(o.jsx)(j.Provider,{value:Object(i.useReducer)(t,n),children:c})},m=function(){return Object(i.useContext)(j)},O=n(16),h={SET_USER_INFO:"setLoggedIn",SET_LOG_IN:"setLogIn",SET_MOVIE_INFO:"setMovieInfo"},p=function(e){var t=e.logIn,n=m(),c=Object(u.a)(n,2),a=c[0].userInfo,r=c[1],l=Object(s.f)(),j=Object(i.useState)(""),b=Object(u.a)(j,2),O=b[0],p=b[1],g=Object(i.useState)(""),x=Object(u.a)(g,2),f=x[0],_=x[1],v=Object(i.useRef)(null),N=function(e,t){Object(d.b)(e),t&&setTimeout((function(){return l.push(t)}),3e3)};Object(i.useEffect)((function(){v.current.focus()}),[]);return Object(o.jsx)("div",{className:"signUp",children:Object(o.jsxs)("div",{className:"signUp__container",children:[Object(o.jsx)("h1",{children:t?"Log In":"Sign Up"}),Object(o.jsxs)("form",{id:"myForm",onClick:function(e){if(e.preventDefault(),function(e,t){return e.length>=4&&t.length>=4}(O,f))switch(e.target.name){case"logIn":!function(e,t,n){return e.username===t&&e.password===n}(a,O,f)?N("Email or Password is incorrect"):(r({type:h.SET_LOG_IN,term:!0}),function(e,t){e.isSignedUp&&t("Successfully logged in. You`ll be redirected to the Home Page","/")}(a,N));break;case"signUp":r({type:h.SET_USER_INFO,term:{username:O,password:f,isSignedUp:!0}}),N("User Signed Up. You'll be redirected to the Login page","/login")}},children:[Object(o.jsx)("h5",{className:"signUp__titre",children:"Username"}),Object(o.jsx)("input",{ref:v,className:O.length>0?O.length<4?"less":"more":"",value:O,placeholder:"Username must be at least 4 characters long",onChange:function(e){return p(e.target.value)}}),Object(o.jsx)("h5",{className:"signUp__titre",children:"Password"}),Object(o.jsx)("input",{className:f.length>0?f.length<4?"less":"more":"",disabled:O.length<4,value:f,onChange:function(e){return _(e.target.value)},placeholder:"Password must be at least 4 characters long",type:"password"}),t?Object(o.jsx)("button",{type:"submit",name:"logIn",className:"signUp__logInButton ".concat(f.length<4&&"movies__disabledButton"),disabled:f.length<4,children:"Log in"}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{children:["You need to ",Object(o.jsx)("b",{children:"Sign Up"})," and ",Object(o.jsx)("b",{children:"Login"})," to see the Home page..."]}),Object(o.jsx)("button",{name:"signUp",className:"signUp__signUpButton ".concat(f.length<4&&"movies__disabledButton"),type:"submit",disabled:f.length<4,children:"Create your account"})]}),Object(o.jsx)(d.a,{})]})]})})},g=(n(58),n(25)),x=n.n(g),f=n(97),_="https://image.tmdb.org/t/p/original",v=function(e){var t=e.movie,n=Object(s.f)(),c=m(),i=Object(u.a)(c,2)[1];return Object(o.jsxs)("div",{className:"videoCard",onClick:function(){i({type:h.SET_MOVIE_INFO,term:t}),n.push("/details")},children:[Object(o.jsx)("img",{src:_+t.backdrop_path,alt:"movie poster"}),Object(o.jsx)("p",{children:Object(o.jsx)(x.a,{text:t.overview,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"})}),Object(o.jsx)("h2",{children:Object(o.jsx)(x.a,{text:t.original_name||t.title,maxLine:"1",ellipsis:"...",trimRight:!0,basedOn:"letters"})}),Object(o.jsxs)("p",{className:"videoCard__stats",children:[t.release_date||t.first_air_date," \xb7 ",Object(o.jsx)(f.a,{})," ",t.vote_count]})]})},N=(n(61),function(){var e=Object(s.f)(),t=m(),n=Object(u.a)(t,2),c=n[0].userLoggedIn,a=n[1];Object(i.useEffect)((function(){!c&&e.push("/signup")}),[c,e]);return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsxs)("div",{className:"home__welcome",children:[Object(o.jsx)("h1",{children:"HOME PAGE"}),Object(o.jsx)("p",{children:"WELCOME"})]}),Object(o.jsxs)("div",{className:"home__info",children:[Object(o.jsx)("h1",{children:"Lorem, ipsum."}),Object(o.jsx)("h3",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),Object(o.jsx)("center",{children:Object(o.jsx)("button",{className:"home__logOutButton",onClick:function(){a({type:h.SET_LOG_IN,term:!1})},children:"Log Out"})})]}),Object(o.jsx)("div",{className:"home__quoteOfDay",children:Object(o.jsx)("h1",{children:"Quote of the day: Dum spiro spero!"})})]})}),I=function(){return Object(o.jsx)("div",{className:"login",children:Object(o.jsx)(p,{logIn:!0})})},E=(n(62),n(26)),S=n.n(E),U=n(35),L=n(36),w=n.n(L).a.create({baseURL:"https://api.themoviedb.org/3"}),T={fetchTrends:"trending/all/week?api_key=".concat("003b2e3479bd8e49efb6d7e842751e42","&language=en-US")},k=n(37),y=(n(82),function(){var e=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(U.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get(T.fetchTrends).catch((function(e){return console.log(e)}));case 2:t=e.sent,c(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){s()}),[]),{data:n}}().data,t=Object(i.useState)(!0),n=Object(u.a)(t,2),c=n[0],s=n[1];return Object(i.useEffect)((function(){setTimeout((function(){return s(!1)}),1200)}),[]),Object(o.jsx)("div",{classname:"movies__container",children:c?Object(o.jsx)("div",{className:"movies__indicator",children:Object(o.jsx)(k.Digital,{size:50})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"movies__pageTitle",children:"Trending Movies"}),Object(o.jsx)("div",{className:"movies",children:e.map((function(e){return Object(o.jsx)(v,{movie:e},e.backdrop_path)}))})]})})}),q=(n(83),function(){var e=Object(s.f)(),t=m(),n=Object(u.a)(t,1)[0].movie;Object(i.useEffect)((function(){!n.id&&e.push("/movies")}),[n,e]);return Object(o.jsxs)("div",{className:"detailPage",children:[Object(o.jsx)("img",{src:_+n.backdrop_path,alt:"movie poster"}),Object(o.jsxs)("div",{className:"detailPage__infobox",children:[Object(o.jsx)("p",{children:n.overview}),Object(o.jsx)("h2",{children:n.original_name||n.title}),Object(o.jsxs)("div",{className:"detailPage__buttonContainer",children:[Object(o.jsxs)("p",{className:"detailPage__stats",children:[n.release_date||n.first_air_date," \xb7 ",Object(o.jsx)(f.a,{})," ",n.vote_count]}),Object(o.jsx)("button",{className:"detailPage__backButton",onClick:function(t){return e.push("/movies")},children:"Back To Movies"})]})]})]})}),C=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(r,{}),Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{path:"/details",component:q}),Object(o.jsx)(s.a,{path:"/signup",component:p}),Object(o.jsx)(s.a,{path:"/login",component:I}),Object(o.jsx)(s.a,{path:"/movies",component:y}),Object(o.jsx)(s.a,{path:"/",component:N})]}),Object(o.jsx)(l,{})]})};Object(c.render)(Object(o.jsx)(b,{reducer:function(e,t){switch(t.type){case h.SET_USER_INFO:return Object(O.a)(Object(O.a)({},e),{},{userInfo:t.term});case h.SET_LOG_IN:return Object(O.a)(Object(O.a)({},e),{},{userLoggedIn:t.term});case h.SET_MOVIE_INFO:return Object(O.a)(Object(O.a)({},e),{},{movie:t.term})}},initialState:{userInfo:{username:"",password:"",isSignedUp:!1},userLoggedIn:!1,movie:{}},children:Object(o.jsx)(a.a,{children:Object(o.jsx)(C,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.bbe6860f.chunk.js.map