(this["webpackJsonppurrramid-react"]=this["webpackJsonppurrramid-react"]||[]).push([[0],{59:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),c=s(23),i=s.n(c),r=s(40),o=s(4),l=s(6),d=s(7),h=s(9),j=s(8),b=s(10),m=s.p+"static/media/cats.c73b695a.png",O=s(1),u=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).offset=-60,e}return Object(d.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{id:"description",className:"bg-black-30 w-100 text-white",children:[Object(O.jsxs)("div",{className:"navbar d-flex justify-content-around bold d-block d-sm-none",children:[Object(O.jsx)(b.Link,{className:"btn text-white",to:"community",offset:this.offset,children:"Community"}),Object(O.jsx)(b.Link,{className:"btn text-white",to:"games",offset:this.offset,children:"Games"}),Object(O.jsx)(b.Link,{className:"btn text-white",to:"streamers",offset:this.offset,children:"Streamers"})]}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-sm-4",children:Object(O.jsx)("img",{src:m,alt:"Purrramid Icon",id:"icon"})}),Object(O.jsxs)("div",{className:"p-5 col-sm-8",children:[Object(O.jsx)("h1",{children:"We are The Purrramid!"}),Object(O.jsx)("p",{children:"The Purrramid, more commonly known as \u201cFun Party House\u201d, (nobody calls it that) is the perfect place to hang out online. We're a community with members all around the world, from San Francisco, USA to Sydney, AU."}),Object(O.jsx)("p",{children:"We openly support individuals of any ethnicity, sexuality or gender identity. Any anti-LGBTQIA+, racist, sexist, or other kind of harassment is a big no-no."}),Object(O.jsx)("a",{className:"btn text-white btn-blurple px-4",href:"https://discord.gg/y8XHJHAZ5C",children:"Join the Discord!"})]})]})})]})}}]),s}(a.a.Component),x=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"my-3",id:"community",children:[Object(O.jsx)("h2",{children:"Community"}),Object(O.jsx)("p",{children:"We host multiple community-driven events every week! Check them out:"}),Object(O.jsxs)("div",{className:"d-grid grid-3",children:[Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"border rounded bg-black-30",children:[Object(O.jsx)("div",{className:"card-header",children:"Movie Night"}),Object(O.jsxs)("div",{className:"card-body",children:["Every Saturday, in coorperation with ",Object(O.jsx)("span",{className:"user",children:"@EmHasCats"})," \u2018",Object(O.jsx)("b",{children:"The Scardey Cats"}),"\u2019 server, we host a movie night."]})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"border rounded bg-black-30",children:[Object(O.jsx)("div",{className:"card-header",children:"Game Night"}),Object(O.jsxs)("div",{className:"card-body",children:["Every night (and sometimes day), we play videogames together! The big game in the community is ",Object(O.jsx)("b",{children:"Rainbow Six Siege"}),", but we do occasionally play other games like ",Object(O.jsx)(b.Link,{className:"text-light",to:"#games",children:"these"}),"."]})]})}),Object(O.jsx)("div",{children:Object(O.jsx)("h4",{children:"...and more!"})})]})]})}}]),s}(a.a.Component),f=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).name=e.name,n.img="https://static-cdn.jtvnw.net/ttv-boxart/".concat(encodeURIComponent(n.name),".jpg"),n.website=e.href,n}return Object(d.a)(s,[{key:"render",value:function(){return Object(O.jsx)("a",{rel:"noreferrer",href:this.website,target:"_blank",children:Object(O.jsx)("img",{src:this.img,alt:this.name,title:this.name,className:"rounded border"})})}}]),s}(a.a.Component),p=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"my-3",id:"games",children:[Object(O.jsx)("h2",{children:"Games"}),Object(O.jsx)("p",{children:"We play a lot of games, and when we say that, we mean it. Here's just a small list of the games we play."}),Object(O.jsxs)("games",{className:"d-grid grid-5",children:[Object(O.jsx)(f,{name:"Tom Clancy's Rainbow Six Siege",href:"https://rainbow6.com"}),Object(O.jsx)(f,{name:"Apex Legends",href:"https://apexlegends.com"}),Object(O.jsx)(f,{name:"Valheim",href:"https://valheimgame.com"}),Object(O.jsx)(f,{name:"The Forest",href:"https://endnightgames.com/games/the-forest"}),Object(O.jsx)(f,{name:"Dead by Daylight",href:"https://deadbydaylight.com"})]})]})}}]),s}(a.a.Component),v=s(32),w=s.n(v),y=s(20),g=s(18),N=s(39),k=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).firebase=e.firebase,n.state={streamers:{},loading:!0},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this,t={Accept:"application/vnd.twitchtv.v5+json","Client-ID":"i2x0iemvdx3sizjg7tz0vg3i6hnx3v"};this.firebase.database().ref("vips").once("value",function(){var s=Object(N.a)(w.a.mark((function s(n){var a;return w.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a=n.val(),s.next=3,fetch("https://api.twitch.tv/kraken/channels?id=".concat(a.join(",")),{headers:t}).then((function(e){return e.text()})).then(JSON.parse).then((function(t){t.channels.forEach((function(t){var s=document.createElement("img");s.src=t.logo;var n=document.createElement("a");n.href=t.url,n.appendChild(s),n.target="_blank",e.setState({streamers:Object(g.a)(Object(g.a)({},e.state.streamers),{},Object(y.a)({},t._id,{name:t.name,url:t.url,image:t.logo,id:t._id,isLive:!1}))})}))}));case 3:return s.next=5,fetch("https://api.twitch.tv/kraken/streams/?channel=".concat(a),{headers:t}).then((function(e){return e.text()})).then(JSON.parse).then((function(t){console.log(t),t.streams.forEach((function(t){e.setState({streamers:Object(g.a)(Object(g.a)({},e.state.streamers),{},Object(y.a)({},t.channel._id,Object(g.a)(Object(g.a)({},e.state.streamers[t.channel._id]),{},{isLive:!0})))}),console.log(e.state)}))})).finally((function(){e.setState({loading:!1}),console.log(e.state)}));case 5:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}())}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"my-3",id:"streamers",children:[Object(O.jsx)("h2",{children:"Streamers"}),Object(O.jsx)("p",{children:"Our community consists of a lot of amazing streamers. Below is a list of our VIP streamers."}),Object(O.jsx)("div",{id:"spinner",className:"spinner-border",hidden:!this.state.loading}),Object(O.jsx)("streamers",{className:"w-100 d-grid grid-7",children:Object.values(this.state.streamers).sort((function(e,t){return Math.random()>.5?1:-1})).sort((function(e,t){return e.isLive?-1:t.isLive?1:0})).map((function(e){return Object(O.jsx)("a",{className:"".concat(e.isLive?"live":""),href:e.url,target:"_blank",rel:"noreferrer",children:Object(O.jsx)("img",{alt:e.name,src:e.image})},e.id)}))}),Object(O.jsx)("a",{href:"#/streamers",className:"more d-block mt-3",children:"Show more"})]})}}]),s}(a.a.Component),S=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)(u,{}),Object(O.jsxs)("div",{className:"container text-white my-5",children:[Object(O.jsx)(x,{}),Object(O.jsx)(p,{}),Object(O.jsx)(k,{firebase:this.props.firebase})]})]})}}]),s}(a.a.Component),C=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(O.jsx)("main",{className:"container text-white my-5",children:Object(O.jsx)("div",{children:"This has not been implemented yet."})})}}]),s}(a.a.Component),L=(s(57),s(58),s(59),function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).offset=-70,n.state={top:!!e.mainSite&&0===window.scrollY,mainSite:n.props.mainSite||!1},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=function(t){e.setState({top:!!e.props.mainSite&&0===window.scrollY,mainSite:e.props.mainSite||!1})};window.addEventListener("scroll",t),window.addEventListener("hashchange",t)}},{key:"render",value:function(){return Object(O.jsx)("nav",{className:"navbar sticky-top shadow ".concat(this.state.top?"top":""),children:Object(O.jsxs)("div",{className:"container d-flex justify-content-between",children:[this.state.mainSite?Object(O.jsxs)(b.Link,{className:"btn text-white bold",to:"description",offset:this.offset,children:[Object(O.jsx)("img",{src:m,alt:"The Purrramid Icon"}),Object(O.jsx)("span",{children:"The Purrramid"})]}):Object(O.jsxs)("a",{className:"btn text-white bold",href:"#/",children:[Object(O.jsx)("img",{src:m,alt:"The Purrramid Icon"}),Object(O.jsx)("span",{children:"The Purrramid"})]}),Object(O.jsxs)("div",{hidden:!1===this.state.mainSite,children:[Object(O.jsx)(b.Link,{className:"btn text-white d-none d-sm-inline-block bold",to:"community",offset:this.offset,children:"Community"}),Object(O.jsx)(b.Link,{className:"btn text-white d-none d-sm-inline-block bold",to:"games",offset:this.offset,children:"Games"}),Object(O.jsx)(b.Link,{className:"btn text-white d-none d-sm-inline-block bold",to:"streamers",offset:this.offset,children:"Streamers"}),Object(O.jsx)("a",{className:"btn text-white bold",href:"https://marty-bot.web.app",id:"marty",children:"Marty Bot \u2197"}),Object(O.jsxs)("div",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"nav-link text-white dropdown-toggle d-inline-block d-sm-none",tabIndex:"0",role:"button",id:"navbarScrollingDropdown","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Jump"}),Object(O.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarScrollingDropdown",children:[Object(O.jsx)(b.Link,{className:"dropdown-item",to:"community",offset:this.offset,children:"Community"}),Object(O.jsx)(b.Link,{className:"dropdown-item",to:"games",offset:this.offset,children:"Games"}),Object(O.jsx)(b.Link,{className:"dropdown-item",to:"streamers",offset:this.offset,children:"Streamers"}),Object(O.jsx)("a",{className:"dropdown-item",href:"https://marty-bot.web.app",id:"marty",children:"MartyBot \u2197"})]})]})]})]})})}}]),s}(a.a.Component)),T=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(O.jsx)("footer",{className:"mt-5 py-5 w-100 bg-dark text-white",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{children:"Admins"}),Object(O.jsxs)("div",{className:"d-grid grid-3",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:Object(O.jsx)("span",{className:"user",children:"@Panash"})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://p4nash.github.io",children:"Website"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://www.youtube.com/channel/UCQKfmsTfUdJZW4EqfsWC2lQ",children:"YouTube"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://twitch.tv/P4NASH",children:"Twitch"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://twitter.com/PanashWasTaken",children:"Twitter"})})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:Object(O.jsx)("span",{className:"user",children:"@vortami"})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://vortami.web.app",children:"Website"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://www.youtube.com/channel/UCkyKacua1ThySkGtI-lF14Q",children:"YouTube"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://twitch.tv/vortami",children:"Twitch"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://twitter.com/vortamiBird",children:"Twitter"})})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:Object(O.jsx)("span",{className:"user",children:"@j_Lloyd_"})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"http://josephlselby.net/",children:"Website"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://twitch.tv/j_writer_",children:"Twitch"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://twitter.com/JLSelby",children:"Twitter"})})]})]})]}),Object(O.jsx)("div",{className:"text-center",children:"All images belong to their respective owners."}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsxs)("a",{href:"https://github.com/purrramid/react",className:"text-white text-decoration-none",children:["<> with \u2665 by ",Object(O.jsx)("span",{className:"user",children:"@vortami"})]})})]})})}}]),s}(a.a.Component),A=s(24);s(60);A.a.initializeApp({databaseURL:"https://djinnjadksnkjadsjknsadnjkdsa-default-rtdb.firebaseio.com"}),i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/streamers",exact:!0,children:Object(O.jsx)(L,{})}),Object(O.jsx)(o.a,{path:"/",children:Object(O.jsx)(L,{mainSite:!0})})]}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/streamers",exact:!0,children:Object(O.jsx)(C,{firebase:A.a})}),Object(O.jsx)(o.a,{path:"/",children:Object(O.jsx)(S,{firebase:A.a})})]}),Object(O.jsx)(T,{})]})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.dec1294a.chunk.js.map