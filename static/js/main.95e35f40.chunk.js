(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=(n(17),n(1)),i=n(2),s=n(4),u=n(3),m=n(5),h=(n(19),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!0},n.toggleDetails=function(){n.setState(function(e){return{collapsed:!e.collapsed}})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.collapsed;return r.a.createElement("div",null,r.a.createElement("h1",{className:"summary"},t.summary),r.a.createElement("p",{className:"event-start"},new Date(t.start.dateTime).toString()),r.a.createElement("p",{className:"event-location"},"@".concat(t.summary," | ").concat(t.location)),!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"about"},"About event:"),r.a.createElement("a",{className:"link",href:t.htmlLink},"See details on Google Calendar"),r.a.createElement("p",{className:"description"},t.description)),r.a.createElement("button",{className:"details-button",onClick:function(){return e.toggleDetails()}},n?"show":"hide"," details"))}}]),t}(a.Component)),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.events;return r.a.createElement("ul",{className:"EventList"},e.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))}))}}]),t}(a.Component),d=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value,a=n.props.locations.filter(function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1});n.setState({query:t,suggestions:a})},n.handleItemClicked=function(e){n.setState({query:e})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map(function(t){return r.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),r.a.createElement("li",{key:"all"},r.a.createElement("b",null,"See all cities"))))}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={num:32},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"changeNum",value:function(e){this.setState({num:e})}},{key:"render",value:function(){var e=this,t=this.state.num;return r.a.createElement("input",{className:"num",type:"number",value:t,onChange:function(t){e.changeNum(t.target.value)}})}}]),t}(a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,22)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)}),g()},8:function(e,t,n){e.exports=n(21)}},[[8,3,2]]]);
//# sourceMappingURL=main.95e35f40.chunk.js.map