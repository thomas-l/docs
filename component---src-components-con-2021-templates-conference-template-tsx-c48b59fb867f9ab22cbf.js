(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1yoX":function(e,t,a){e.exports=a.p+"static/logo-7627efc8539d857dc967c0ab41828c8c.svg"},"9ht/":function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a("Wgwc"),r=a.n(n),c=function(e,t){var a=e.start?r()("2021-09-10T"+e.start):r()(),n=t.start?r()("2021-09-10T"+t.start):r()();return a.isBefore(n)?-1:a.isAfter(n)?1:0},l=function(e){return r()("2021-09-10T"+e).format("HH:mm A")},o=function(e){return 12>=parseInt(e.split(":")[0],10)}},"9jLW":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("TJpk"),l=a.n(c),o=a("TSYQ"),i=a.n(o),s=a("Wbzz"),m=a("q5Oq"),d=a("uQiK");t.a=function(e){var t=e.speaker,a=e.social,n=void 0===a||a,c=e.hoverable,o=void 0===c||c,p=t.id,u=t.name,f=t.job,E=Object(s.useStaticQuery)("2760183193").allFile.nodes.find((function(e){return e.name===p})),h=E&&Object(m.j)(E),g={"@context":"http://schema.org","@type":"Person",name:t.name,jobTitle:t.job};return r.a.createElement("div",{className:"conf__speaker-resume"},r.a.createElement(l.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g))),r.a.createElement("a",{className:i()("conf__speaker-content",{hoverable:o}),href:t.slug},r.a.createElement("div",{className:"circle__effect"},r.a.createElement("div",{className:"circle"},r.a.createElement(m.a,{image:h,className:"circle__picture",alt:u}),r.a.createElement("svg",{className:"circle__plus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 281.49 281.49"},r.a.createElement("path",{d:"M140.74,0C63.14,0,0,63.14,0,140.74S63.14,281.49,140.74,281.49s140.75-63.14,140.75-140.75S218.35,0,140.74,0Zm0,263.49A122.75,122.75,0,1,1,263.49,140.74,122.88,122.88,0,0,1,140.74,263.49Z"}),r.a.createElement("path",{d:"M210.91,131.74H149.74V70.58a9,9,0,1,0-18,0v61.16H70.58a9,9,0,1,0,0,18h61.16v61.17a9,9,0,0,0,18,0V149.74h61.17a9,9,0,0,0,0-18Z"})))),r.a.createElement("div",{className:"infos"},r.a.createElement("span",{className:"overline"},f),r.a.createElement("h3",{className:"h5 lined"},u))),n&&r.a.createElement(d.a,{speaker:t}))}},"D/fY":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("iWEp"),l=a("xUk1"),o=a("TSYQ"),i=a.n(o),s=a("sg5C"),m=a("UHdS"),d=a("9jLW"),p=a("9ht/"),u=a("lTCa");t.default=function(e){var t=e.pageContext,a=t.html,n=t.title,o=t.speakers,f=t.track,E=t.start,h=t.end,g=Object(u.a)(o),v=s.a.find((function(e){return e.id===f}));return r.a.createElement(c.b,{logoAlwaysVisible:!0},r.a.createElement("div",{className:"conf__conference"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"conference__header"},r.a.createElement(l.a,{dark:!0,lined:!0,h1:!0,small:50<n.length},r.a.createElement("strong",null,n)),v?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"overline header__subtitle"},r.a.createElement("strong",null,"Track #"+v.id+" "),"- "+v.type),r.a.createElement("p",{className:"header__date"},h&&E?"September, 10 2021 · "+Object(p.a)(E)+" - "+Object(p.a)(h):"Sep, 10 2021")):null),r.a.createElement("div",{className:"conference__content"},r.a.createElement("div",{className:i()("conference__speaker",{minified:1<g.length})},g.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement(d.a,{speaker:e,hoverable:!1,social:!1}),r.a.createElement(m.a,{className:"white square",size:"small",to:e.slug},"See speaker details"))}))),r.a.createElement("div",{className:"conference__abstract dotted-corner corner-bottom",dangerouslySetInnerHTML:{__html:a}})))))}},UHdS:function(e,t,a){"use strict";var n=a("zLVn"),r=a("q1tI"),c=a.n(r),l=a("TSYQ"),o=a.n(l);t.a=function(e){var t=e.children,a=e.className,r=e.empty,l=e.disabled,i=e.to,s=e.size,m=void 0===s?"large":s,d=Object(n.a)(e,["children","className","empty","disabled","to","size"]),p=c.a.createElement("div",Object.assign({className:o()("conf__button",{small:"small"===m,empty:r,disabled:l},a)},d),t);return i?c.a.createElement("a",{href:i},p):p}},iWEp:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a("q1tI"),r=a.n(n),c=a("Wgwc"),l=a.n(c),o=a("TJpk"),i=a.n(o),s=(a("xQ/7"),a("0Xs4")),m=a("FybP"),d=a("1yoX"),p=a.n(d),u=function(){return r.a.createElement("div",{className:"conf__footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer__columns"},r.a.createElement("div",{className:"footer__event"},r.a.createElement("img",{src:p.a,className:"footer__logo",alt:"Api Platform Conference"}),r.a.createElement("span",{className:"footer__by"},"an event by"),r.a.createElement("a",{className:"footer__tilleuls",href:"https://les-tilleuls.coop/en",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(m.a,{width:"100%"}))),r.a.createElement("div",{className:"footer__column"},r.a.createElement("span",{className:"h6 footer__title"},"The event"),r.a.createElement("a",{href:"/con/2021/speakers"},"Speakers"),r.a.createElement("a",{href:"/con/2021/#schedule"},"Schedule"),r.a.createElement("a",{href:"/con/2021/#venue"},"Venue"),r.a.createElement("a",{href:"/con/"},"Other editions")),r.a.createElement("div",{className:"footer__column"},r.a.createElement("span",{className:"h6 footer__title"},"Legal"),r.a.createElement("a",{href:"/con/2021/code-of-conduct"},"Code of conduct"),r.a.createElement("a",{href:"/con/2021/faq"},"FAQ"),r.a.createElement("a",{href:"/con/2021/transparency"},"Revenues transparency"))),r.a.createElement("span",{className:"body2 footer__copyright"},"Copyright © 2021"," ",r.a.createElement("a",{href:"https://les-tilleuls.coop/en",target:"_blank",rel:"noreferrer noopener"},"Les-Tilleuls.coop"))),r.a.createElement(s.a,{className:"footer__wave"}))},f=a("YiP8"),E=a("ezFS"),h=a("I631"),g=a.n(h),v=a("8sp2"),_={logoLink:"/con/2021",backLink:{to:"/con/",text:"Back to current edition"},links:[{to:"/con/2021/",text:"Home",mobileOnly:!0},{to:"/con/2021/speakers",text:"Speakers"},{to:"/con/2021/#schedule",text:"Schedule"},{to:"/con/2021/#venue",text:"Venue"},{to:"/con/2021/review",text:"Review"}]},b=[{id:1,title:"On-site edition",languages:"French and english-speaking tracks",offers:[{title:"Early bird",limitDate:"2021-04-30",price:69},{title:"Regular ticket",limitDate:"2021-08-20",price:89},{title:"Late bird",limitDate:"2021-09-09",price:109}]},{id:2,title:"Online edition",languages:"English-speaking track",offers:[{title:"Online ticket",limitDate:"2021-09-08",price:39}]}],y=a("YVFd"),k=a("YwZP"),N="API Platform Conference 2021",w="The first international conference dedicated to API Platform and its ecosystem",S="https://api-platform.com/conf-facebook.png",O=a("VJqp");l.a.extend(g.a);var j=Object(n.createContext)(null);t.b=function(e){var t=e.logoAlwaysVisible,a=e.children;l.a.extend(g.a);var c=b.map((function(e){var t=e.offers.sort((function(e,t){return l()(e.limitDate).isAfter(l()(t.limitDate))?1:l()(t.limitDate).isAfter(l()(e.limitDate))?-1:0})),a=t.find((function(e){return l()(e.limitDate).isAfter(l()())}))||t[t.length-1];return{"@type":"Offer",availability:"https://schema.org/InStock",price:a.price+".00",name:1===e.offers.length?e.title:e.title+" - "+a.title,priceCurrency:"EUR",url:"https://www.eventbrite.fr/e/api-platform-conference-2021-tickets-146559873527",validFrom:"2021-03-19"}})),o={"@context":"https://schema.org","@type":"Event",name:"API Platform Conference 2021",description:"The first international conference dedicated to API Platform and its ecosystem",url:"https://api-platform.com/con/2021/",eventStatus:"http://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",startDate:"2021-09-10",endDate:"2021-09-10",organizer:{"@type":"Organization",name:"Les-Tilleuls.coop",url:"https://les-tilleuls.coop/en"},location:[{"@type":"Place",name:"Euratechnologies",address:{"@type":"PostalAddress",addressLocality:"Lille",addressRegion:"Hauts de France",postalCode:"59000",streetAddress:"Place de Saintignon, 165 avenue de Bretagne"}},{"@type":"VirtualLocation",url:"https://api-platform.com/con/2021/"}],image:S,offers:c},s=Object(k.useLocation)().pathname,m=Object(n.useState)([]),d=m[0],p=m[1],h=Object(n.useMemo)((function(){var e=null==d?void 0:d[d.length-1];return e&&"home"!==e&&d.length?s+"#"+d[d.length-1]:s}),[d,s]);return Object(n.useEffect)((function(){window.history.replaceState({},"",h)}),[h]),r.a.createElement(y.a.Provider,{value:{nav:_,activeLink:h}},r.a.createElement(j.Provider,{value:{sectionsVisibles:d,setSectionsVisibles:p}},r.a.createElement(i.a,O.a.head,r.a.createElement("title",null,N),r.a.createElement("meta",{name:"description",content:w}),r.a.createElement("meta",{property:"og:url",content:"https://api-platform.com/con/2021/"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:N}),r.a.createElement("meta",{property:"og:description",content:w}),r.a.createElement("meta",{property:"og:image",content:S}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:"@coopTilleuls"}),r.a.createElement("meta",{name:"twitter:title",content:N}),r.a.createElement("meta",{name:"twitter:description",content:w}),r.a.createElement("meta",{name:"twitter:image",content:S}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"https://schema.org","@type":"Website",name:"API Platform Conference",url:"https://api-platform.com/con/2021/"})),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(o)),r.a.createElement("script",{defer:!0,src:"https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"}),r.a.createElement("style",{type:"text/css"},"\n          body, html {\n            background-color: #001226;\n          }\n    ")),r.a.createElement(v.a,null),r.a.createElement("div",{className:"conf conf__layout",id:"conf"},r.a.createElement("div",{className:"conf__background"}),r.a.createElement(f.a,{logoAlwaysVisible:t,edition:"2021"}),r.a.createElement(E.a,null),r.a.createElement("div",{className:"conf__content"},a,r.a.createElement(u,null)))))}},lTCa:function(e,t,a){"use strict";var n=a("Wbzz");t.a=function(e){return Object(n.useStaticQuery)("2622028926").allMarkdownRemark.nodes.filter((function(t){return!e||e.includes(t.frontmatter.id)})).map((function(e){return Object.assign({},e.frontmatter,{slug:e.fields.slug})}))}},sg5C:function(e,t,a){"use strict";t.a=[{id:"EN",type:"English-speaking track",date:"10 sep, 2021"},{id:"FR",type:"French-speaking track",date:"10 sep, 2021"}]},uQiK:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.speaker,a=t.github,n=t.twitter;return r.a.createElement("div",{className:"social__list"},a&&r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-github"})),n&&r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-twitter"})))}},"xQ/7":function(e,t,a){},xUk1:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("TSYQ"),l=a.n(c);t.a=function(e){var t=e.children,a=e.dark,n=void 0!==a&&a,c=e.lined,o=void 0!==c&&c,i=e.h1,s=void 0!==i&&i,m=e.small,d=void 0!==m&&m;return r.a.createElement("div",{className:l()("conf__section-title",{dark:n,small:d})},s?r.a.createElement("h1",{className:"h2 title__layer"},t):r.a.createElement("h2",{className:"title__layer"},t),r.a.createElement("div",{className:l()("h2",{lined:o})},t))}}}]);
//# sourceMappingURL=component---src-components-con-2021-templates-conference-template-tsx-c48b59fb867f9ab22cbf.js.map