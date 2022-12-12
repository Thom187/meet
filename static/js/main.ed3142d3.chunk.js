(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(t,e,n){t.exports=n(63)},34:function(t,e,n){},36:function(t,e,n){},39:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(24),i=n.n(o),c=(n(34),n(2)),s=n(3),u=n(5),l=n(4),h=n(6),f=(n(36),function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={collapsed:!0},n.toggleDetails=function(){n.setState(function(t){return{collapsed:!t.collapsed}})},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.props.event,n=this.state.collapsed;return a.a.createElement("div",null,a.a.createElement("h1",{className:"summary"},e.summary),a.a.createElement("p",{className:"event-start"},new Date(e.start.dateTime).toString()),a.a.createElement("p",{className:"event-location"},"@".concat(e.summary," | ").concat(e.location)),!n&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{className:"about"},"About event:"),a.a.createElement("a",{className:"link",href:e.htmlLink},"See details on Google Calendar"),a.a.createElement("p",{className:"description"},e.description)),a.a.createElement("button",{className:"details-button",onClick:function(){return t.toggleDetails()}},n?"show":"hide"," details"))}}]),e}(r.Component)),p=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.events;return a.a.createElement("ul",{className:"EventList"},t.map(function(t){return a.a.createElement("li",{key:t.id},a.a.createElement(f,{event:t}))}))}}]),e}(r.Component),d=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={query:"",suggestions:[],showSuggestions:void 0},n.handleInputChanged=function(t){var e=t.target.value,r=n.props.locations.filter(function(t){return t.toUpperCase().indexOf(e.toUpperCase())>-1});n.setState({query:e,suggestions:r})},n.handleItemClicked=function(t){n.setState({query:t,showSuggestions:!1}),n.props.updateEvents(t)},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"CitySearch"},a.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){t.setState({showSuggestions:!0})}}),a.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(e){return a.a.createElement("li",{key:e,onClick:function(){return t.handleItemClicked(e)}},e)}),a.a.createElement("li",{onClick:function(){return t.handleItemClicked("all")}},a.a.createElement("b",null,"See all cities"))))}}]),e}(r.Component),m=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={num:32},n.changeNum=function(t){n.setState({num:t}),n.props.updateNumberOfEvents(t)},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({num:this.props.num||32})}},{key:"render",value:function(){var t=this,e=this.state.num;return a.a.createElement("label",null,"Number of Events",a.a.createElement("input",{className:"num",type:"number",value:e,onChange:function(e){t.changeNum(e.target.value)}}))}}]),e}(r.Component),v=(n(39),[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}]),g=n(25),y=n(8),w=n(13),b=n.n(w),E=n(10),k=n.n(E);function O(){O=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new S(a||[]);return r(i,"_invoke",{value:E(t,n,c)}),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var m={};s(m,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==e&&n.call(g,o)&&(m=g);var y=d.prototype=f.prototype=Object.create(m);function w(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e(function(a,i){!function r(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,c)})}c(s.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return T()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=l(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(y),s(y,c,"Generator"),s(y,o,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var x=function(){var t=Object(y.a)(O().mark(function t(){var e,n,r,a,o,i;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("access_token"),t.t0=e,!t.t0){t.next=6;break}return t.next=5,S(e);case 5:t.t0=t.sent;case 6:if(n=t.t0,e&&!n.error){t.next=21;break}return t.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),t.next=13,r.get("code");case 13:if(a=t.sent){t.next=20;break}return t.next=17,b.a.get("https://aimss6nswg.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=t.sent,i=o.data.authUrl,t.abrupt("return",window.location.href=i);case 20:return t.abrupt("return",a&&T(a));case 21:return t.abrupt("return",e);case 22:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),j=function(t){var e=t.map(function(t){return t.location});return Object(g.a)(new Set(e))},S=function(){var t=Object(y.a)(O().mark(function t(e){var n;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(e)).then(function(t){return t.json()}).catch(function(t){return t.json()});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),L=function(){if(window.history.pushState&&window.location.pathname){var t=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",t)}else t=window.location.protocol+"//"+window.location.host,window.history.pushState("","",t)},T=function(){var t=Object(y.a)(O().mark(function t(e){var n,r,a;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURIComponent(e),t.next=3,fetch("https://aimss6nswg.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then(function(t){return t.json()}).catch(function(t){return t});case 3:return r=t.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),t.abrupt("return",a);case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(y.a)(O().mark(function t(){var e,n,r,a;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(k.a.start(),!window.location.href.startsWith("http://localhost")){t.next=4;break}return k.a.done(),t.abrupt("return",v);case 4:return t.next=6,x();case 6:if(!(e=t.sent)){t.next=16;break}return L(),n="https://aimss6nswg.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+e,t.next=12,b.a.get(n);case 12:return(r=t.sent).data&&(a=j(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(a))),k.a.done(),t.abrupt("return",r.data.events);case 16:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),C=function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(a)))).state={events:[],locations:[],numberOfEvents:32},n.updateEvents=function(t,e){N().then(function(e){var r="all"===t?e:e.filter(function(e){return e.location===t});n.setState({events:r.slice(0,n.state.numberOfEvents)})})},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"updateNumberOfEvents",value:function(t){this.setState({numberOfEvents:t})}},{key:"componentDidMount",value:function(){var t=this;this.mounted=!0,N().then(function(e){t.mounted&&t.setState({events:e.slice(0,t.state.numberOfEvents),locations:j(e)})})}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"App"},a.a.createElement(d,{locations:this.state.locations,updateEvents:this.updateEvents}),a.a.createElement(m,{num:this.state.numberOfEvents,updateNumberOfEvents:function(e){return t.updateNumberOfEvents(e)}}),a.a.createElement(p,{events:this.state.events}))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,64)).then(function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),o(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){console.error(t.message)}),Z()}},[[26,3,2]]]);
//# sourceMappingURL=main.ed3142d3.chunk.js.map