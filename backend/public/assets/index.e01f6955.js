var te=Object.defineProperty,ae=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var H=(t,a,n)=>a in t?te(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,d=(t,a)=>{for(var n in a||(a={}))T.call(a,n)&&H(t,n,a[n]);if(w)for(var n of w(a))z.call(a,n)&&H(t,n,a[n]);return t},f=(t,a)=>ae(t,ne(a));var D=(t,a)=>{var n={};for(var r in t)T.call(t,r)&&a.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&w)for(var r of w(t))a.indexOf(r)<0&&z.call(t,r)&&(n[r]=t[r]);return n};import{R as e,B as R,C as p,a as s,b as c,r as u,c as re,d as oe,e as se,u as le,f as ce,g as h,F as i,I as O,L as P,T as ie,P as me,h as ue,M as de,i as pe,O as j,N as b,j as C,k as ge,l as g,m as Ee,n as fe,o as he}from"./vendor.3d8b004f.js";const be=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};be();const Ne={backgroundColor:"#fff"},N=t=>{const{text:a}=t,n=t.style||{},r=(t.className||"")+" rounded-pill pe-2 ps-2 p-1";return e.createElement(R,f(d({},t),{style:d(d({},Ne),n),className:r}),a)},ye={background:"#0BA55D",height:"110vh"},ve={fontSize:"3em",fontWeight:"bold",color:"white"},q=t=>e.createElement(p,{style:ye,fluid:!0},e.createElement(s,{className:"pt-5"})," ",e.createElement(s,null,e.createElement(c,{className:"text-center"},e.createElement("h1",{style:ve},"Matchsic"))),t.children),xe=t=>{const[a,n]=u.exports.useState(t);return[a,r=>{n(f(d({},a),{[r.target.id]:r.target.value}))}]},ke="_registerLink_1fax8_1",we="_invalidFeedback_1fax8_15";var L={registerLink:ke,invalidFeedback:we};const Pe={userProfile:{name:"",username:"",description:"",musicPreference:[],socialNetwork:[]},userSession:{username:"Lena_00",profileLink:"",profilePicture:{url:"",width:0,height:0},music:{trackName:"The Rover",authorsNames:["Led Zeppelin"],coverImage:{url:"https://extrachill.com/wp-content/uploads/2021/03/led-zeppelin-logos.jpeg",width:0,height:0},status:"stopped"},location:{coordinates:{latitude:28.47762873997604,longitude:-16.312475617040874}}},nearUsers:[],notifications:[],userIsLoggedIn:!1},U=re({name:"matchsic",initialState:Pe,reducers:{sayHi(t){return console.log("Hi!"),t},loggedIn(t,a){const{username:n,name:r,description:o,socialNetwork:l,musicPreference:m}=a.payload;t.userSession.username=n,t.userProfile.name=r,t.userProfile.username=n,t.userProfile.description=o,t.userProfile.musicPreference=m,t.userProfile.socialNetwork=l,t.userIsLoggedIn=!0},loggedOut(t){t.userSession.username="",t.userProfile.name="",t.userIsLoggedIn=!1}}}),{sayHi:Ce,loggedIn:Me,loggedOut:W}=U.actions;var Ie=U.reducer;const K=oe({reducer:{matchsic:Ie}}),S=se.create({baseURL:"http://localhost:3000",withCredentials:!0});S.interceptors.response.use(void 0,t=>{const{response:a}=t;return a&&a.status==401&&(console.log("401"),K.dispatch(W()),window.location.href="/"),Promise.reject(t)});const Le=(t,a)=>new Promise((n,r)=>{S.post("login",{user:{username:t,password:a}}).then(()=>{n()}).catch(()=>{r("Nombre de usuario o contrase\xF1a incorrectos")})}),Se=()=>new Promise((t,a)=>{setTimeout(()=>{t()},500)}),Be=()=>S.get("/user/data"),M={login:Le,logout:Se,getData:Be},B=()=>ce(),y=le,Fe={color:"#0BA55D",borderRadius:"100px",border:"none",width:"8em",height:"3em",fontWeight:"bold"},Ae=t=>{const[a,n]=u.exports.useState(!1),[r,o]=u.exports.useState({message:"Completa este campo",fromServer:!1}),l=h(),[m,I]=xe({username:"",password:""}),_=k=>{o(f(d({},r),{fromServer:!1})),n(!1),I(k)},Z=B(),X=k=>{const V=k.target;if(k.preventDefault(),n(!0),!V.checkValidity())return;const{username:$,password:ee}=m;M.login($,ee).then(()=>{M.getData().then(E=>{console.log(E.data),Z(Me(E.data)),l("/home")}).catch(E=>{console.log(E)})}).catch(E=>{o({message:E,fromServer:!0})})},J=()=>{if(a&&!m.username)return"Completa este campo";if(r.fromServer&&m.usernamme)return"";if(a&&r.fromServer)return r.message};return e.createElement(q,null,e.createElement(s,{className:"pt-5"})," ",e.createElement(s,{className:"pt-5"})," ",e.createElement(s,{className:"pt-5 ps-3 pe-3"},e.createElement(c,{className:"text-center"},e.createElement(i,{onSubmit:X,noValidate:!0},e.createElement(i.Group,{className:"mb-5",controlId:"username"},e.createElement(O,{hasValidation:!0,id:"usernameInputGroup"},e.createElement(i.Control,{required:!0,type:"text",placeholder:"Nombre de usuario",isInvalid:a&&(!m.username||r.fromServer),onChange:_}),e.createElement(i.Control.Feedback,{type:"invalid",className:L.invalidFeedback},J()))),e.createElement(i.Group,{className:"mb-5",controlId:"password"},e.createElement(O,{hasValidation:!0,id:"passwordInputGroup"},e.createElement(i.Control,{required:!0,type:"password",placeholder:"Contrase\xF1a",isInvalid:a&&!m.password,onChange:_}),e.createElement(i.Control.Feedback,{type:"invalid",className:L.invalidFeedback},"Completa este campo"))),e.createElement(N,{text:"Entrar",id:"loginButton",style:Fe,type:"submit"})))),e.createElement(s,{className:"pt-5"})," ",e.createElement(s,{className:"pt-5"},e.createElement(c,{className:"text-center"},e.createElement(P,{to:"/register",className:L.registerLink},"Registrarme"))))},Ge="_Background_1lq6l_1",_e="_BackgroundTopProfile_1lq6l_13",Te="_mainFrame_1lq6l_25",ze="_ButtonEditProfile_1lq6l_37",He="_MusicalRound_1lq6l_59",De="_ProfileCard_1lq6l_77",Re="_ProfileCardImage_1lq6l_89",Oe="_TextMuted_1lq6l_111",je="_TextBold_1lq6l_121";var F={Background:Ge,BackgroundTopProfile:_e,mainFrame:Te,ButtonEditProfile:ze,MusicalRound:He,ProfileCard:De,ProfileCardImage:Re,TextMuted:Oe,TextBold:je};const qe={width:"7rem",height:"7rem",border:"3px white solid",borderRadius:"60px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},Ue=t=>e.createElement("img",f(d({},t),{style:qe})),We=t=>{const{music:a}=t;let n;switch(a){case"Pop":n="#D166EE";break;case"Rock":n="#3D7CC9";break;default:n="#EEC566";break}const r={backgroundColor:n,border:"2px rgb(0, 0, 0) solid",borderRadius:"15px",textAlign:"center",margin:"5px",boxShadow:"0 5px 10px 0 rgba(0, 0, 0, 0.2)"};return e.createElement(c,{style:r},a)},Ke={fontWeight:"400",color:"hsl(0, 0%, 59%)"},A={fontSize:"18px",fontWeight:"700"},Ye=t=>{const{user:a}=t;return e.createElement(e.Fragment,null,e.createElement(s,{style:A},a.name),e.createElement(s,{style:Ke},a.username),e.createElement(s,null,a.description),e.createElement(s,{style:A},"Gustos musicales"),e.createElement(s,null,a.musicPreference.map((n,r)=>e.createElement(We,{music:n,key:r}))),e.createElement(s,{style:A},"Redes sociales"),e.createElement(s,null,a.socialNetwork.map((n,r)=>e.createElement(c,{key:r}," ",n))))},Qe=()=>{const{userProfile:t}=y(a=>a.matchsic);return e.createElement(p,{className:F.mainFrame,fluid:!0},e.createElement(s,{className:F.BackgroundTopProfile},e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"},e.createElement(c,{className:"ps-4"},e.createElement(Ue,{alt:"User Image",src:"https://thispersondoesnotexist.com/image"})),e.createElement(c,{className:"ps-4"},e.createElement(N,{text:"Editar Perfil",className:F.ButtonEditProfile})))),e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"}),e.createElement(s,null,e.createElement(c,null),e.createElement(c,{xs:10},e.createElement(Ye,{user:t}),e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"})),e.createElement(c,null)))},Ze={color:"#0BA55D",borderRadius:"100px",border:"none",width:"8em",height:"3em",fontWeight:"bold"},Xe=()=>{const t=a=>{a.preventDefault(),console.log("Register form submitted")};return e.createElement(q,null,e.createElement(s,{className:"pt-5"})," ",e.createElement(s,{className:"ps-3 pe-3"},e.createElement(c,{className:"text-center"},e.createElement(i,{onSubmit:t},e.createElement(i.Group,{className:"mb-5",controlId:"name"},e.createElement(i.Control,{type:"text",placeholder:"Nombre"})),e.createElement(i.Group,{className:"mb-5",controlId:"secondName"},e.createElement(i.Control,{type:"text",placeholder:"Apellidos"})),e.createElement(i.Group,{className:"mb-5",controlId:"birthDate"},e.createElement(i.Control,{type:"date",max:"2005-17-02"})),e.createElement(i.Group,{className:"mb-5",controlId:"username"},e.createElement(i.Control,{type:"text",placeholder:"Nombre de usuario"})),e.createElement(i.Group,{className:"mb-5",controlId:"email"},e.createElement(i.Control,{type:"email",placeholder:"Correo electr\xF3nico"})),e.createElement(i.Group,{className:"mb-5",controlId:"password"},e.createElement(i.Control,{type:"password",placeholder:"Contrase\xF1a"})),e.createElement(i.Group,{className:"mb-5",controlId:"passwordConfirm"},e.createElement(i.Control,{type:"password",placeholder:"Repite la contrase\xF1a"})),e.createElement(N,{text:"Registrarme",style:Ze})))))},Je="_mainFrame_g0zun_1",Ve="_senderProfilePicture_g0zun_8",$e="_notificationPayloadText_g0zun_14",et="_button_g0zun_18";var v={mainFrame:Je,senderProfilePicture:Ve,notificationPayloadText:$e,button:et};const tt=t=>{const l=t,{handleGoToMap:a}=l,n=D(l,["handleGoToMap"]),{sender:r}=t,o=()=>e.createElement("span",null,e.createElement("strong",null,e.createElement("a",{href:r.profileLink},r.username))," te ha dado un toque");return e.createElement("div",d({},n),e.createElement(s,null,e.createElement(c,{className:"col-2"}," ",e.createElement("img",{className:[v.senderProfilePicture].join(" "),src:"https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",alt:"Sender profile picture"})),e.createElement(c,{className:"ms-3 me-3"},e.createElement(s,{className:"mb-2"}," ",e.createElement(c,null,o())),e.createElement(s,null,e.createElement("span",{className:v.notificationPayloadText},t.payload)))),e.createElement(s,{className:"mt-2"},e.createElement(c,{className:"offset-2"},e.createElement(N,{className:`${v.button} border-0`,text:"Ir al mapa",onClick:a})),e.createElement(c,null,e.createElement(N,{className:`${v.button} border-0`,text:"Devolver"}))))},at=()=>{y(o=>{var l;return(l=o.matchsic.userSession)==null?void 0:l.username});const t=B(),a=h(),n=o=>l=>{a("/home"),console.log(`Went to home and focused on ${o}`)},r=()=>[{sender:{username:"Lena_00",profileLink:"sender/profile.com"},payload:"Hola, \xBFAlguna playlist que me recomiendes?",handleGoToMap:()=>t(Ce())},{sender:{username:"Fire_21",profileLink:"sender/profile.com"},payload:"Hey, What's up?",handleGoToMap:n([28.556347,-16.336054])},{sender:{username:"Fire_21",profileLink:"sender/profile.com"},payload:"Hey, What's up?",handleGoToMap:n([28.556347,-16.336054])},{sender:{username:"Fire_21",profileLink:"sender/profile.com"},payload:"Hey, What's up?",handleGoToMap:n([28.556347,-16.336054])},{sender:{username:"Fire_21",profileLink:"sender/profile.com"},payload:"Hey, What's up?",handleGoToMap:n([28.556347,-16.336054])},{sender:{username:"Fire_21",profileLink:"sender/profile.com"},payload:"Hey, What's up?",handleGoToMap:n([28.556347,-16.336054])}].map((o,l)=>e.createElement(tt,f(d({},o),{id:`notification${l}`})));return e.createElement(p,{className:`${v.mainFrame}`,fluid:!0},e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5 ps-4"},e.createElement(c,{className:"text-center col-sm-12 col-md-5 offset-sm-0 offset-md-1"},r().map(o=>e.createElement(s,{className:"mb-3",key:o.props.id},e.createElement(c,null,o))))))},nt="_map_fj24v_3",rt="_gray_background_fj24v_25";var Y={map:nt,gray_background:rt};const ot="_controlContainer_679kk_1",st="_controlLogo_679kk_19";var Q={controlContainer:ot,controlLogo:st},lt="data:image/png;base64,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";const ct=t=>{const a=y(r=>r.matchsic.userSession.location.coordinates),n=()=>{!t.map||t.map.setView({lat:a.latitude,lng:a.longitude},15)};return e.createElement("div",{className:"leaflet-bottom leaflet-right",onClick:n},e.createElement("div",{className:"leaflet-control "+Q.controlContainer},e.createElement("img",{className:Q.controlLogo,src:lt})))},it=()=>{const t={accessToken:"pk.eyJ1IjoibW9yZG9yMTExMCIsImEiOiJja3QwNDVpaDkyc3MzMnBwbng5Zm9razA4In0.DsMnEHEZiiPkEeyfjATGwA",url:"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',id:"mapbox/streets-v11",maxZoom:20,tileSize:512,zoomOffset:-1},{accessToken:a,url:n,attribution:r,id:o,maxZoom:l,tileSize:m,zoomOffset:I}=t;return e.createElement(ie,{accessToken:a,url:n,id:o,maxZoom:l,tileSize:m,zoomOffset:I})},mt="_userIcon_7qv2z_1";var ut={userIcon:mt};const dt="_popupContainer_7ne7u_1",pt="_coverImage_7ne7u_11",gt="_username_7ne7u_23",Et="_listeningTag_7ne7u_33",ft="_trackContent_7ne7u_43";var x={popupContainer:dt,coverImage:pt,username:gt,listeningTag:Et,trackContent:ft};const ht=t=>`${Math.min(15,t.length*.8).toFixed(2)}rem`,bt=t=>{const{username:a,music:n}=t.user,r=`${n.trackName}, ${n.authorsNames.join(", ")}`,o=ht(r);return e.createElement(me,null,e.createElement(p,{className:"p-0 "+x.popupContainer,style:{width:o}},e.createElement(s,null,e.createElement(c,{className:"mb-2"},e.createElement("span",{className:"h6 "+x.username},a))),e.createElement(s,null,e.createElement(c,{className:"p-0",xs:3},e.createElement("img",{className:x.coverImage,src:n.coverImage.url})),e.createElement(c,{className:"p-0",xs:9},e.createElement(s,null,e.createElement(c,null,e.createElement("span",{className:x.listeningTag},"Escuchando:"))),e.createElement(s,null,e.createElement(c,null,e.createElement("span",{className:x.trackContent},n.trackName,", ",n.authorsNames.join(", "))))))))},Nt=t=>{const{location:a,music:n}=t.user,r=ue.icon({iconUrl:n.coverImage.url,iconSize:[55,55],iconAnchor:[27,27],className:ut.userIcon}),o=[a.coordinates.latitude,a.coordinates.longitude];return e.createElement(de,{icon:r,position:o},e.createElement(bt,{user:t.user}))},yt=()=>{let t=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${t}px`);const{userSession:a}=y(o=>o.matchsic),[n,r]=u.exports.useState(null);return e.createElement(p,{fluid:!0},e.createElement(s,null,e.createElement(c,{className:"text-center "+Y.gray_background},e.createElement(pe,{center:[28.47762873997604,-16.312475617040874],zoom:13,scrollWheelZoom:!0,className:Y.map,whenCreated:o=>r(o)},e.createElement(it,null),e.createElement(Nt,{user:a}),e.createElement(ct,{map:n})))))},vt=()=>{const t=h();return u.exports.useEffect(()=>{t("/login")},[]),e.createElement(u.exports.Fragment,null,e.createElement(j,null))};var xt="/assets/Home.41ef54b1.svg",kt="/assets/notificacion.a33cc099.svg",wt="/assets/Perfil.122e4712.svg";const Pt={background:"#FFFF",bottom:0,right:0,left:0},G={background:"#5cb85c",borderRadius:50,flex:1,width:50,height:50,resizeMode:"contain"},Ct=()=>e.createElement(b,{className:"fixed-bottom",style:Pt},e.createElement(p,null,e.createElement(P,{to:"/home"},e.createElement(b.Brand,null,e.createElement("img",{style:G,src:xt}))),e.createElement(P,{to:"/notifications"},e.createElement(b.Brand,null,e.createElement("img",{style:G,src:kt}))),e.createElement(P,{to:"/profile"},e.createElement(b.Brand,null,e.createElement("img",{style:G,src:wt}))))),Mt={background:"#0BA55D"},It={color:"#FFFFFF",backgroundColor:"transparent",border:"none"},Lt=()=>{const[t,a]=u.exports.useState(!1),n=()=>a(!1),r=()=>a(!0),o=h(),l=B(),m=()=>{M.logout().then(()=>{l(W()),o("/login")}).catch(()=>{alert("Something went wrong!")})};return e.createElement(b,{className:"fixed-top",style:Mt},e.createElement(p,null,e.createElement("a",{onClick:r},e.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg"})),e.createElement(C,{show:t,onHide:n},e.createElement(C.Header,{closeButton:!0},e.createElement(C.Title,null,"Menu")),e.createElement(C.Body,null,"Options of menu")),e.createElement(R,{style:It,onClick:m},"Salir")))},St=()=>{const t=h();return u.exports.useEffect(()=>{M.getData().then(a=>{}),t("/home")},[]),e.createElement(u.exports.Fragment,null,e.createElement(Lt,null),e.createElement("div",{className:"pt-5"},e.createElement(j,null)),e.createElement(Ct,null))};function Bt(){const t=y(r=>r.matchsic.userIsLoggedIn),a=e.createElement(Ae,null),n=e.createElement(Xe,null);return e.createElement(ge,null,t?e.createElement(u.exports.Fragment,null,e.createElement(g,{path:"/",element:e.createElement(St,null)},e.createElement(g,{path:"/home",element:e.createElement(yt,null)}),e.createElement(g,{path:"/profile",element:e.createElement(Qe,null)}),e.createElement(g,{path:"/notifications",element:e.createElement(at,null)}))):e.createElement(u.exports.Fragment,null,e.createElement(g,{path:"/",element:e.createElement(vt,null)},e.createElement(g,{path:"/login",element:a}),e.createElement(g,{path:"/register",element:n}))))}Ee.render(e.createElement(e.StrictMode,null,e.createElement(fe,null,e.createElement(he,{store:K},e.createElement(Bt,null)))),document.getElementById("root"));
