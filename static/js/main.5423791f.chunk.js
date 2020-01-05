(this.webpackJsonpkdt3=this.webpackJsonpkdt3||[]).push([[0],{137:function(e,t,n){e.exports={select:"select_select__XlnEk"}},138:function(e,t,n){e.exports={button:"button_button__H5057"}},150:function(e,t,n){e.exports={visualizer:"visualizer_visualizer__IqrZE"}},151:function(e,t,n){e.exports={block:"block_block__2bW7g"}},152:function(e,t,n){e.exports={link:"link_link__24NwO"}},16:function(e,t,n){e.exports={scheduler:"App_scheduler__1vHEb",header:"App_header__2L3DO",controls:"App_controls__2MSL9",timeline:"App_timeline__1jgvV",customTimeline:"App_customTimeline__LuqHI",error:"App_error__1LS0k"}},184:function(e,t,n){e.exports=n(373)},373:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),l=n.n(c),o=n(7),i=n(137),u=n.n(i),s=function(e){var t=e.options,n=void 0===t?[]:t,a=e.onChange,c="object"===typeof n[0];return r.a.createElement("select",{onChange:a,className:u.a.select},n.map((function(e){return c?r.a.createElement("option",{key:e.value,value:e.value},e.label):r.a.createElement("option",{key:e},e)})))},m=n(138),f=n.n(m),b=function(e){var t=e.label,n=e.onClick,a=e.disabled;return r.a.createElement("button",{className:f.a.button,disabled:a,onClick:n},t)},p=n(153),v=n(20);var d=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},h=n(150),E=n.n(h),_=function(e){var t=e.pattern,n=e.algorithm,c=e.started,l=e.setStarted,i=e.setError,u=(e.error,Object(a.useState)(0)),s=Object(o.a)(u,2),m=s[0],f=s[1],b=Object(a.useState)([10]),h=Object(o.a)(b,2),_=h[0],O=h[1],S=Object(a.useState)(t.slice(0)),g=Object(o.a)(S,2),j=g[0],N=g[1];d((function(){C()}),c?700:null),Object(a.useEffect)((function(){A(),l(!1)}),[t,n]),Object(a.useEffect)((function(){c&&A()}),[c]),Object(a.useEffect)((function(){c&&(f(0),i(""))}),[i,c]);var A=function(){f(0),N(t.slice(0)),O([10])},C=function(){var e,t=_[_.length-1];switch(n){case"FCFS":e=j.shift();break;case"SSTF":j.sort((function(e,n){return Math.abs(e-t)-Math.abs(n-t)})),e=j.shift();break;case"SCAN":case"LOOK":var a="SCAN"===n;!!j.find((function(e){return e>=t}))||a&&!_.includes(49)?(e=j.filter((function(e){return e>=t})).sort((function(e,t){return e-t}))[0]||a&&49,j.includes(e)&&j.splice(j.indexOf(e),1)):e=j.sort((function(e,t){return e-t})).pop()}O(_.concat([e])),f(m+1),0===j.length&&l(!1)};return r.a.createElement("div",{className:E.a.visualizer},r.a.createElement(v.d,{width:"90%",height:40*(_.length+1)},r.a.createElement(v.c,{layout:"vertical",data:_.map((function(e,t){return{index:t,value:e}}))},r.a.createElement(v.f,{domain:[0,49],tickCount:50,interval:0,orientation:"top",type:"number"},r.a.createElement(v.a,{offset:-5,position:"insideTop",value:"Head position",style:{fontSize:"85%",fill:"rgba(255, 255, 255, 0.87)"}})),r.a.createElement(v.g,{domain:[0,_.length],ticks:Object(p.a)(_.keys()),interval:0,dataKey:"index",type:"number"}),r.a.createElement(v.b,{dataKey:"value",stroke:"#8884d8"}),r.a.createElement(v.e,{labelFormatter:function(e){return 0===e?"Initial position":"Step: ".concat(e)},formatter:function(e){return["Position: ".concat(e),null]},isAnimationActive:!1,active:!c&&_.length>1}))),r.a.createElement(k,{scannedPositions:_,stepCount:m}))},O=(n(4),[{label:"First Come First Serve",value:"FCFS"},{label:"Shortest Seek Time First",value:"SSTF"},{label:"SCAN (Elevator)",value:"SCAN"},{label:"LOOK",value:"LOOK"}]),S=["1,10,44,2,12,3,13,20","2,5,13,29,7,1,18,40,49,4","45,6,16,9,33,28,11,37,49,25","custom"],g=(n(151),n(82)),j=n.n(g),k=function(e){e.stepCount;var t=e.scannedPositions,n=Object(a.useState)(0),c=Object(o.a)(n,2),l=c[0],i=c[1];return Object(a.useEffect)((function(){for(var e=0,n=1;n<t.length;n++){var a=t[n],r=t[n-1];e+=a>r?a-r:r-a}i(e)}),[t]),r.a.createElement("div",{className:j.a.counter},r.a.createElement("div",null,"total travel: ",r.a.createElement("span",{className:j.a.number},l)))},N=n(152),A=n.n(N),C=function(){return r.a.createElement("div",{className:A.a.link},r.a.createElement("a",{href:"https://ottmartens.github.io/cpu-algorithms/"},"CPU Scheduler"),r.a.createElement("a",{href:"https://ottmartens.github.io/ram-algorithms/"},"RAM Scheduler"),r.a.createElement("a",{href:"https://ottmartens.github.io/file-allocation/"},"File Allocation"))},y=function(e,t){try{t("");var n=e.split(","),a=[];return n.forEach((function(e){if(""===e||isNaN(Number(e))||Number(e)>49)throw new Error;a.push(Number(e))})),a}catch(r){t("Invalid rotation pattern!")}},x=n(16),F=n.n(x),T=function(){var e=Object(a.useState)(O[0].value),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(S[0]),i=Object(o.a)(l,2),u=i[0],m=i[1],f=Object(a.useState)(!1),p=Object(o.a)(f,2),v=p[0],d=p[1],h=Object(a.useState)([]),E=Object(o.a)(h,2),g=E[0],j=E[1],k=Object(a.useState)(""),N=Object(o.a)(k,2),A=N[0],x=N[1];return Object(a.useEffect)((function(){"custom"!==u&&j(y(u,x))}),[u]),r.a.createElement("div",{className:F.a.scheduler},r.a.createElement(C,null),r.a.createElement("header",{className:F.a.header},r.a.createElement("h1",{className:F.a.title},"Disk rotation scheduler"),r.a.createElement("div",{className:F.a.controls},r.a.createElement("div",{className:F.a.timeline},r.a.createElement("h3",null,"Rotation pattern"),r.a.createElement(s,{options:S,onChange:function(e){var t=e.target.value;m(t),d(!1)}}),"custom"===u&&r.a.createElement("input",{className:F.a.customTimeline,onBlur:function(e){j(y(e.target.value,x))},onKeyPress:function(e){"Enter"===e.key&&j(y(e.target.value,x))}})),r.a.createElement("div",{className:F.a.algo},r.a.createElement("h3",null,"Algorithm"),r.a.createElement(s,{options:O,onChange:function(e){var t=e.target.value;c(t),d(!1)}}))),r.a.createElement(b,{disabled:"Invalid timeline!"===A,label:v?"STOP":"START",onClick:function(){d(!v)}}),A&&r.a.createElement("span",{className:F.a.error},A)),r.a.createElement(_,{algorithm:n,pattern:g,started:v,setStarted:d,setError:x,error:A}))};l.a.render(r.a.createElement(T,null),document.getElementById("root"))},82:function(e,t,n){e.exports={counter:"counter_counter__3ZU8z",number:"counter_number__QGA_A"}}},[[184,1,2]]]);
//# sourceMappingURL=main.5423791f.chunk.js.map