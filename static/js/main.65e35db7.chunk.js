(this["webpackJsonpcian-oruanaidh"]=this["webpackJsonpcian-oruanaidh"]||[]).push([[0],{34:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/cian_oruanaidh_resume_2020.d05d32d0.pdf"},37:function(e,t,a){e.exports=a.p+"static/media/assets-a-single-word-screen.3bb31c6d.png"},38:function(e,t,a){e.exports=a.p+"static/media/assets-toronto-bike-share-app-screen.5e8dca6b.png"},39:function(e,t,a){e.exports=a.p+"static/media/assets-click-bait-mock-up-screen.b6066b49.png"},41:function(e,t,a){e.exports=a(72)},46:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),c=(a(46),a(7)),i=a(8),s=a(10),u=a(9),m=a(4),f=a(18),p=a(15),d=a(5),h=a(2),g=a(14),b=(a(59),function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"social-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/CianORuanaidh",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:h.e}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/cian-o-ruanaidh-151b3455/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:h.i}))),r.a.createElement("li",null,r.a.createElement(p.Link,{activeClass:"active",to:"miscellaneous",spy:!0,smooth:!0,offset:-10,duration:900},r.a.createElement(d.a,{icon:g.c})))))});a(60);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var v=function(e){Object(s.a)(a,e);var t=E(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onToggle=function(){var e=!n.state.toggle;n.setState({toggle:e})},n.state={toggle:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:this.state.toggle?"show-overlay":"hide-overlay"},r.a.createElement("button",{className:"hamburger-link menu",onClick:this.onToggle},r.a.createElement("input",{type:"checkbox",checked:this.state.toggle,className:"toggler",onChange:this.onToggle}),r.a.createElement("div",{className:"hamburger"},r.a.createElement("div",null))),r.a.createElement("ul",{className:"link-list",onClick:this.onToggle},r.a.createElement("li",null,r.a.createElement(p.Link,{activeClass:"active",to:"about-me",spy:!0,smooth:!0,offset:-10,duration:500,onClick:this.onToggle},"about")),r.a.createElement("li",null,r.a.createElement(p.Link,{activeClass:"active",to:"resume",spy:!0,smooth:!0,offset:-10,duration:600,onClick:this.onToggle},"resume")),r.a.createElement("li",null,r.a.createElement(p.Link,{activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-10,duration:700,onClick:this.onToggle},"portfolio")),r.a.createElement("li",null,r.a.createElement(p.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-10,duration:800,onClick:this.onToggle},"contact")))))}}]),a}(r.a.Component);a(61);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var k=[{text:"Web developer",class:"alt-color-one"},{text:"Web developer",class:"alt-color-one"},{text:"creative thinker",class:"alt-color-two"},{text:"creative thinker",class:"alt-color-two"},{text:"creative thinker",class:"alt-color-two"},{text:"Problem solver",class:""},{text:"Problem solver",class:""},{text:"Problem solver",class:""},{text:"Web developer",class:"alt-color-one"}],w=function(e){Object(s.a)(a,e);var t=y(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={count:0,subheadings:k},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({count:this.state.count+1})}},{key:"render",value:function(){return r.a.createElement("section",{className:"hero"},r.a.createElement(v,null),r.a.createElement("div",{className:"hero-banner"},r.a.createElement("h1",null,"Cian O' Ruanidh"),r.a.createElement("span",{className:"phonetic"},"sounds like",r.a.createElement("em",null,"'Key-in Oh-Rooney'")),r.a.createElement("div",{className:"h2-holder"},r.a.createElement("h2",{className:this.state.count%3?"toggle-true "+this.state.subheadings[this.state.count%9].class:"toggle-false "+this.state.subheadings[this.state.count%9].class},this.state.subheadings[this.state.count%9].text))),r.a.createElement(b,null))}}]),a}(r.a.Component),N=(a(62),function(e){return r.a.createElement("div",{className:"section-header ".concat(e.alignLeft?"align-left":"")},!!e.subext&&r.a.createElement("span",null,e.subext),r.a.createElement("h2",null,e.text),r.a.createElement("div",{className:"animated-bar"}))}),C=a(36),j=a.n(C),O=(a(63),function(){return r.a.createElement("section",{className:"about-me",id:"about-me"},r.a.createElement(N,{text:"about me",subext:"some text"}),r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"I'm Cian, a Front-End Developer based in Toronto."),r.a.createElement("span",{className:"phonetic"},"sounds like",r.a.createElement("em",null,"'Key-in Oh-Rooney'")),r.a.createElement("p",{className:"bio"},"Currently building industry leading software with TravelEdge. Web development combines my three favourite things, creative thinking, problem solving and continuous learning. With a background in both Science and Fine Art I\u2019m a blend of technical problem solving and strong creative thinking. When I'm not coding I love doingthis like this.")),r.a.createElement("div",{className:"about-me-footer"},r.a.createElement("p",null,r.a.createElement("strong",null,"email: ")," ",r.a.createElement("a",{href:"mailto:oruanaidh.cian@gmail.com"},"oruanaidh.cian@gmail.com")),r.a.createElement(b,null),r.a.createElement("a",{href:j.a,target:"_blank",rel:"noopener noreferrer",className:"download-resume"},"Resume download")))});a(34);function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var S=function(e){Object(s.a)(a,e);var t=R(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.setState((function(e){return{isToggleOn:!e.isToggleOn,isMouseOver:e.isMouseOver}})),n.className()},n.className=function(){var e="experience-tile";return(n.state.isToggleOn||n.state.isMouseOver)&&(e+=" show-more"),e},n.state={isToggleOn:!1,isMouseOver:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.className(),onClick:this.handleClick,onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter},r.a.createElement("h4",{className:"title"},r.a.createElement("button",{className:"title"},this.props.item.company," - ",this.props.item.title),this.state.isToggleOn?r.a.createElement("span",{className:"toggle-on-icon"},r.a.createElement(d.a,{icon:g.b})):""),r.a.createElement("p",null,this.props.item.dates),this.props.item.project.map((function(e,t){return r.a.createElement("div",{key:"proj-key-".concat(t),className:"project"},r.a.createElement("h5",null,e.projectName),r.a.createElement("ul",null,e.bullets.map((function(e,a){return r.a.createElement("li",{key:"bullet-".concat(t,"-").concat(a)},e)}))))})),this.props.item.keyAchievements?r.a.createElement("div",{className:"project"},r.a.createElement("p",null,r.a.createElement("strong",null,"Key achievements:")),r.a.createElement("p",null,this.props.item.keyAchievements)):"")}}]),a}(r.a.Component),x=function(e){return r.a.createElement("div",{className:"experience-tile education"},r.a.createElement("h4",{className:"title"},e.item.class),r.a.createElement("p",null,e.item.college))};a(64);function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var D=[{label:"HTML5",icon:h.f},{label:"CSS3",icon:h.b},{label:"JavaScript",icon:h.h},{label:"Angular",icon:h.a},{label:"ReactJS",icon:h.l},{label:"NodeJS",icon:h.j},{label:"Sass",icon:h.m},{label:"Wordpress",icon:h.p},{label:"Shopify",icon:h.n},{label:"Python",icon:h.k},{label:"Git",icon:h.d}],L=[{title:"Software Developer",dates:"June 2019 - Present",company:"TravelEdge",project:[{projectName:"Digital Back Office web application",bullets:["Primary Front-End Developer on internal web application used by the TravelEdge finance department","Developed fully functional UI components using HTML, CSS, JavaScript, Angular8, .NET CORE and InVision Studio","Collaborated with Data Architect to design and implement UI components to complement lower tier functionality","Wrote and re-factored existing front-end code to be modular and reusable"]},{projectName:"Agent Digital Experience (ADX) web application",bullets:["Contributed to the development of an all-in-one virtual platform for travel agents","Developed fully functional UI components using JavaScript,Angular8, BackboneJS, HTML, CSS and InVision Studio","Worked in an Agile environment alongside UX team to understand and design for user needs","Worked with BE team to optimize new features by implementing API endpoints based on DB architecture"]}],keyAchievements:"High Margin feature release; DBO release; Helped get team\u2019s sprint completion rate above target of 85%."},{title:"Content Lead",dates:"August 2014 - Nov 2018",company:"Loblaw Digital",project:[{projectName:"Click & Collect (PC Express)",bullets:["Drove quality and accuracy for all product content across nine Loblaws Click & Collect websites","Established product content model based off of upstream and downstream dependencies","Designed and implemented all initial processes for product enrichment as well as best practices and guidelines for product content & photography","Developed, published and maintained in-house analytic dashboards and reports for Online Store Catalogue data","Partnered with automation and development teams to develop tools to update and QA Click & Collect website automatically"]}],keyAchievements:"Part of core team that built Click & Collect business from pre-launch through to status as Canada\u2019s #1 online grocery retailer with over 250 pickup locations nationwide."},{title:"Mentor",dates:"June 2019 - Present",company:"Juno College",project:[{projectName:"Bootcamp/CodeConnect student mentor",bullets:["Drove quality and accuracy for all product content across nine Loblaws Click & Collect websites","Established product content model based off of upstream and downstream dependencies"]}]}],W=[{class:"Full Stack Master Class",college:"Juno College of Technology"},{class:"Custom Theme Development (Wordpress & Shopify)",college:"Juno College of Technology"},{class:"Web Development Immersive Bootcamp",college:"Juno College of Technology"},{class:"BSc Statistics (Honours)",college:"University College Dublin"},{class:"BFA Fine Art (Honours)",college:"Institute of Art Design & Technology, Dun Laoghaire"}],I=function(e){Object(s.a)(a,e);var t=T(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={experience:L,education:W},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"resume",className:"my-resume"},r.a.createElement(N,{text:"resume",subext:"some text"}),r.a.createElement("h3",null,"Experience"),L.map((function(e,t){return r.a.createElement(S,{item:e,key:"key-experience-".concat(t)})})),r.a.createElement("h3",null,"Eduction"),W.map((function(e,t){return r.a.createElement(x,{item:e,key:"key-education-".concat(t)})})),r.a.createElement(N,{text:"stack",subext:"some technologies I'm fimilair with"}),r.a.createElement("div",{className:"skill-list"},D.map((function(e){return r.a.createElement("div",{key:"key-".concat(e.label),className:"skill-icon"},r.a.createElement("label",{className:"icon-label",htmlFor:e.icon},e.label),r.a.createElement(d.a,{id:e.icon,icon:e.icon,title:e.label}))}))))}}]),a}(r.a.Component),A=(a(65),function(){return r.a.createElement("section",{id:"contact",className:"contact"},r.a.createElement(N,{text:"get in touch",subext:"Let's collaborate"}),r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"Contact"),r.a.createElement("p",null,"If you like my work, want to share some ideas, or just want to say hi, I'd love to hear from you."),r.a.createElement("ul",{className:"contact-list"},r.a.createElement("li",{className:"contact-list-element"},r.a.createElement("span",{className:"contact-icon"},r.a.createElement(d.a,{icon:g.d,title:"email link icon"})),r.a.createElement("div",{className:"contact-list-element-content"},r.a.createElement("a",{href:"mailto:oruanaidh.cian@gmail.com",target:"_blank",rel:"noopener noreferrer"},"oruanaidh.cian@gmail.com"))),r.a.createElement("li",{className:"contact-list-element"},r.a.createElement("span",{className:"contact-icon"},r.a.createElement(d.a,{icon:h.i,title:"LinkedIn link icon"})),r.a.createElement("div",{className:"contact-list-element-content"},r.a.createElement("a",{href:"mailto:oruanaidh.cian@gmail.com",target:"_blank",rel:"noopener noreferrer"},"linkedIn"))))))}),M=a(37),B=a.n(M),J=a(38),P=a.n(J),_=a(39),F=a.n(_);a(66);function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var K=[{name:"A Single Word",description:"Created using React.js. The idea for this app came after discovering a great API holding a huge database of poems from classic authors. I really liked the idea of being able to collaborate and create something new at the click of a button.",imgUrl:B.a,liveLink:"https://cianoruanaidh.github.io/a-single-word-v2/",gitLink:"https://github.com/CianORuanaidh/a-single-word-v2"},{name:"Toronto Bike Share Races",description:"Created using React.js, Firebase and the citybike API. This app lets you create race routes using Toronto's bike share stations, and auto generate a race route too.",imgUrl:P.a,liveLink:"https://cianoruanaidh.github.io/bike-share-app/",gitLink:"https://github.com/CianORuanaidh/bike-share-app"},{name:"Click Bait",description:"This idea came out of a bad pun. A fun little game built utilizing jQuery and JS.",imgUrl:F.a,liveLink:"https://cianoruanaidh.github.io/cian-oruanaidh-project3/",gitLink:"https://github.com/CianORuanaidh/cian-oruanaidh-project3"}],U=function(e){Object(s.a)(a,e);var t=H(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={portfolio:K},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"portfolio",className:"portfolio"},r.a.createElement(N,{text:"portfolio",subext:"some text"}),r.a.createElement("h3",{className:"portfilio-sub-head"},"below are some project from my JunoCollege days"),r.a.createElement("div",{className:"portfilio-list"},K.map((function(e,t){return r.a.createElement("div",{key:t,className:"portflio-item"},r.a.createElement("div",{className:"img-holder"},r.a.createElement("img",{src:e.imgUrl,alt:e.name})),r.a.createElement("div",{className:"portflio-item-content"},r.a.createElement("h4",{className:"portflio-item-title"},e.name),r.a.createElement("a",{href:e.gitLink,className:"portfolio-git",target:"_blank",rel:"noopener noreferrer"},"github ",r.a.createElement(d.a,{icon:h.e})),r.a.createElement("a",{href:e.liveLink,className:"portfolio-live",target:"_blank",rel:"noopener noreferrer"},"live ",r.a.createElement(d.a,{icon:g.a})),r.a.createElement("p",{className:"portflio-item-desc"},e.description)))}))))}}]),a}(r.a.Component);a(3),a(67);a(70);function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var V=function(e){Object(s.a)(a,e);var t=Q(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"iframeLoaded",value:function(){}},{key:"render",value:function(){return r.a.createElement("section",{id:"miscellaneous",className:"misc-fun"},r.a.createElement(N,{text:"Hi",subext:"Check out some stuff I do when I'm not coding"}),r.a.createElement("div",{className:"project-list"},r.a.createElement("div",{className:"project-item swiims"},r.a.createElement("h2",null,"SWiiMS"),r.a.createElement("p",null,"SWiiMS have been around since late 2019. We signed with New Jersey label ",r.a.createElement("strong",null,"Mint400")," and released our debut EP ",r.a.createElement("em",null,r.a.createElement("a",{href:"https://open.spotify.com/artist/3AWbKI8LpSBCg9SYeFJ7AM",rel:"noopener noreferrer",target:"_blank"},"Through Waves"))," in August 2020."),r.a.createElement("iframe",{onLoad:this.iframeLoaded(),title:"Media player for Swiims Through Waves ep",src:"https://open.spotify.com/embed/album/47JEvHPJldsFaw37SqVCFt?si=AgWgxB4wT0Omic7Jwdcy2w",width:"300",height:"80",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}),r.a.createElement("p",null,"Below is a video I created video for our song ",r.a.createElement("em",null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=QBJ6PaQX0T8&t=131s",rel:"noopener noreferrer",target:"_blank"},"Hand Of Love"))," below."),r.a.createElement("iframe",{onLoad:this.iframeLoaded(),width:"800",height:"420",title:"Media player for Swiims Hand Of Love video",src:"https://www.youtube.com/embed/QBJ6PaQX0T8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("p",null,"If you like this, check out these other videos I did for ",r.a.createElement("em",null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=S-Vg1oSsjps",rel:"noopener noreferrer",target:"_blank"},"Counting An Hour"))," and ",r.a.createElement("em",null," ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=yEeJKZa1ouE",rel:"noopener noreferrer",target:"_blank"},"Let You Down"),".")," "),r.a.createElement("ul",{className:"band-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/SWiiMS-105562604274650/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d.a,{icon:h.c}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/swiimsmusic/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d.a,{icon:h.g}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://open.spotify.com/artist/3AWbKI8LpSBCg9SYeFJ7AM",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d.a,{icon:h.o}))))),r.a.createElement("div",{className:"project-item waking-west"},r.a.createElement("h2",null,"The Waking West"),r.a.createElement("p",null,"The Waking West have been around since 2014. We released our debut album ",r.a.createElement("em",null,r.a.createElement("a",{href:"https://open.spotify.com/artist/0KRuM7P6l14IjtciYuCkJN",rel:"noopener noreferrer"},"Routes & Roads"))," in May 2017."),r.a.createElement("iframe",{onLoad:this.iframeLoaded,title:"Media player for The Waking West Routes and Roads album",src:"https://open.spotify.com/embed/album/4ZaD2NQz0KiOZpK4AMrFXV?si=hbnsWTbMQf2M_Y5QrEfhjA",width:"300",height:"80",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}),r.a.createElement("p",null,"Below is a video I created video for our song ",r.a.createElement("em",null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=NVTpTByq2ow",target:"_blank",rel:"noopener noreferrer"},"Brother")),"."),r.a.createElement("iframe",{onLoad:this.iframeLoaded,title:"Media player for The Waking West Brother video",width:"800",height:"420",src:"https://www.youtube.com/embed/NVTpTByq2ow",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("ul",{className:"band-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/TheWakingWest/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d.a,{icon:h.c}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/thewakingwest/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d.a,{icon:h.g}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://open.spotify.com/artist/0KRuM7P6l14IjtciYuCkJN",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d.a,{icon:h.o})))))))}}]),a}(r.a.Component);a(71);function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var q=function(e){Object(s.a)(a,e);var t=Y(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onNavToTop=function(){window.scrollTo(0,0)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement("main",{id:"main-main",className:"main-body"},r.a.createElement(w,null),r.a.createElement(O,null),r.a.createElement(I,null),r.a.createElement(U,null),r.a.createElement(A,null),r.a.createElement(V,null)),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 Cian O'Ruanaidh 2020"))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.65e35db7.chunk.js.map