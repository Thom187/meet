(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,t,n){e.exports=n(353)},197:function(e,t,n){},198:function(e,t,n){},329:function(e,t,n){},330:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(52),i=n.n(o),c=(n(197),n(47)),s=n(22),u=n(29),l=n(25),h=n(23),f=n(24),p=(n(198),function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={collapsed:!0},n.toggleDetails=function(){n.setState(function(e){return{collapsed:!e.collapsed}})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.collapsed;return a.a.createElement("div",{className:"event"},a.a.createElement("h1",{className:"summary"},t.summary),a.a.createElement("p",{className:"event-start"},new Date(t.start.dateTime).toString()),a.a.createElement("p",{className:"event-location"},"@".concat(t.summary," | ").concat(t.location)),!n&&a.a.createElement("div",{className:"event-details"},a.a.createElement("h2",{className:"about"},"About event:"),a.a.createElement("a",{className:"link",href:t.htmlLink,target:"_blank",rel:"noopener noreferrer"},"See details on Google Calendar"),a.a.createElement("p",{className:"description"},t.description)),a.a.createElement("button",{className:"details-button",onClick:function(){return e.toggleDetails()}},n?"show":"hide"," details"))}}]),t}(r.Component)),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.events;return a.a.createElement("ul",{className:"EventList"},e.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(p,{event:e}))}))}}]),t}(r.Component),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Alert"},a.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(r.Component),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).color="blue",n}return Object(f.a)(t,e),t}(m),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).color="red",n}return Object(f.a)(t,e),t}(m),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).color="orange",n}return Object(f.a)(t,e),t}(m),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={query:"",suggestions:[],showSuggestions:void 0},n.handleInputChanged=function(e){var t=e.target.value;n.setState({showSuggestions:!0});var r=n.props.locations.filter(function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1});if(0!==r.length)return n.setState({query:t,suggestions:r,infoText:""});n.setState({query:t,infoText:"Could not find the city you are looking for. Please try another city."})},n.handleItemClicked=function(e){n.setState({query:e,suggestion:[],showSuggestions:!1,infoText:""}),n.props.updateEvents(e)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"CitySearch"},a.a.createElement(v,{text:this.state.infoText}),a.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),a.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(t){return a.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),a.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")}},a.a.createElement("b",null,"See all cities"))))}}]),t}(r.Component),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={num:32},n.changeNum=function(e){n.setState({num:e}),n.props.updateNumberOfEvents(e),e<1||e>32?n.setState({errorText:"Please select a value between 1 and 32"}):n.setState({errorText:""})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({num:this.props.num||32})}},{key:"render",value:function(){var e=this,t=this.state.num;return a.a.createElement("div",null,a.a.createElement(g,{text:this.state.errorText}),a.a.createElement("label",null,"Number of Events",a.a.createElement("input",{className:"num",type:"number",value:t,onChange:function(t){e.changeNum(t.target.value)}})))}}]),t}(r.Component),E=n(17),k=n(354),x=n(361),O=n(176),j=n(89),S=n(70),L=function(e){var t=e.events,n=Object(r.useState)([]),o=Object(E.a)(n,2),i=o[0],c=o[1],s=["#52d726","#ffeC00","#ff0000","#007ed6","#7cdddd"];return Object(r.useEffect)(function(){c(function(){return["React","JavaScript","Node","jQuery","AngularJS"].map(function(e){var n=t.filter(function(t){return t.summary.split(/[-!.,\s]/).includes(e)}).length;return{name:e,value:n}})})},[t]),a.a.createElement(k.a,{height:400},a.a.createElement(x.a,{width:400,height:400},a.a.createElement(O.a,{data:i,cx:"50%",cy:"50%",labelLine:!1,outerradius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.percent;return"".concat((100*t).toFixed(0),"%")}},i.map(function(e,t){return a.a.createElement(j.a,{key:"cell-".concat(t),fill:s[t]})})),a.a.createElement(S.a,{verticalAlign:"bottom",height:20})))};n(329),n(330);var N=function(e){return e.showWelcomeScreen?a.a.createElement("div",{className:"WelcomeScreen"},a.a.createElement("h1",null,"Welcome to the Meet app"),a.a.createElement("h4",null,"Log in to see upcoming events around the world for full-stack developers"),a.a.createElement("div",{className:"button_cont",align:"center"},a.a.createElement("div",{class:"google-btn"},a.a.createElement("div",{class:"google-icon-wrapper"},a.a.createElement("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\no.svg",alt:"Google sign-in"})),a.a.createElement("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text"},a.a.createElement("b",null,"Sign in with google")))),a.a.createElement("a",{href:"https://YOUR_GITHUB_USERNAME.github.io/meet/privacy.html",rel:"nofollow noopener"},"Privacy policy")):null},T=n(185),_=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],C=n(115),A=n.n(C),W=n(73),I=n.n(W);function Z(){Z=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(N){s=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new j(a||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var h={};function f(){}function p(){}function d(){}var m={};s(m,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==t&&n.call(g,o)&&(m=g);var y=d.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(s.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=l(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),s(y,c,"Generator"),s(y,o,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var G=function(){var e=Object(c.a)(Z().mark(function e(){var t,n,r,a,o,i;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,F(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,A.a.get("https://aimss6nswg.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",a&&D(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),P=function(e){var t=e.map(function(e){return e.location});return Object(T.a)(new Set(t))},F=function(){var e=Object(c.a)(Z().mark(function e(t){var n;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(){var e=Object(c.a)(Z().mark(function e(t){var n,r,a;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://aimss6nswg.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then(function(e){return e.json()}).catch(function(e){return e});case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(c.a)(Z().mark(function e(){var t,n,r,a,o;return Z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(I.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return I.a.done(),e.abrupt("return",_);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),I.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,G();case 10:if(!(n=e.sent)){e.next=20;break}return M(),r="https://aimss6nswg.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,A.a.get(r);case 16:return(a=e.sent).data&&(o=P(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),I.a.done(),e.abrupt("return",a.data.events);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),J=n(358),R=n(359),q=n(181),B=n(182),Y=n(74),z=n(186);function H(){H=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(N){s=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new j(a||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var h={};function f(){}function p(){}function d(){}var m={};s(m,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==t&&n.call(g,o)&&(m=g);var y=d.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(s.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=l(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),s(y,c,"Generator"),s(y,o,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var K=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={events:[],locations:[],numberOfEvents:32,showWelcomeScreen:void 0},n.updateEvents=function(e,t){U().then(function(t){var r="all"===e?t:t.filter(function(t){return t.location===e});n.setState({events:r.slice(0,n.state.numberOfEvents)})})},n.getData=function(){var e=n.state,t=e.locations,r=e.events;return t.map(function(e){var t=r.filter(function(t){return t.location===e}).length;return{city:e.split(", ").shift(),number:t}})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"updateNumberOfEvents",value:function(e){this.setState({numberOfEvents:e})}},{key:"componentDidMount",value:function(){var e=Object(c.a)(H().mark(function e(){var t,n,r,a,o=this;return H().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,F(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,r=new URLSearchParams(window.location.search),a=r.get("code"),this.setState({showWelcomeScreen:!(a||n)}),(a||n)&&this.mounted&&U().then(function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:P(e)})});case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return void 0===this.state.showWelcomeScreen?a.a.createElement("div",{className:"App"}):a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Meet"),a.a.createElement("div",{className:"filters"},a.a.createElement("h3",null,"Choose your city"),a.a.createElement("div",{className:"WarningAlert"},!navigator.onLine&&a.a.createElement(y,{text:"Seems like you are offline. Please check your connection for updated events."})),a.a.createElement(w,{locations:this.state.locations,updateEvents:this.updateEvents}),a.a.createElement(b,{num:this.state.numberOfEvents,updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}})),a.a.createElement("div",{className:"data-vis-wrapper"},a.a.createElement(L,{events:this.state.events}),a.a.createElement("h4",null,"Events in each city"),a.a.createElement(k.a,{height:400},a.a.createElement(J.a,{margin:{top:20,right:20,bottom:20,left:20}},a.a.createElement(R.a,null),a.a.createElement(q.a,{type:"category",dataKey:"city",name:"city"}),a.a.createElement(B.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),a.a.createElement(Y.a,{cursor:{strokeDasharray:"3 3"}}),a.a.createElement(z.a,{data:this.getData(),fill:"#8884d8"})))),a.a.createElement(d,{events:this.state.events}),a.a.createElement(N,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){G()}}))}}]),t}(r.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,362)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};n(183).config("fd2c715e5c334774b4c66c8bf82ba135").install(),i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(K,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/meet","/service-worker.js");V?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):X(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):X(t,e)})}}(),Q()}},[[192,1,2]]]);
//# sourceMappingURL=main.3a783445.chunk.js.map