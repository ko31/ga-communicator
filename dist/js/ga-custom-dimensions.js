/*! For license information please see ga-custom-dimensions.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){e.exports=n(3)},function(e,t){const{apiFetch:n}=wp,{render:r,Component:o}=wp.element,{Spinner:a}=wp.components,{__:c}=wp.i18n;class l extends o{constructor(e){super(e),this.state={loading:!0,error:"",dimensions:[]}}componentDidMount(){n({path:"ga/v1/dimensions"}).then((e=>{this.setState({dimensions:e})})).catch((e=>{this.setState({error:e.message})})).finally((()=>{this.setState({loading:!1})}))}render(){const{loading:e,error:t,dimensions:n}=this.state;return React.createElement(React.Fragment,null,e?React.createElement(a,null):React.createElement(React.Fragment,null,React.createElement("p",null,React.createElement("strong",null,c("Registered Dimension","ga-communicator"))),0<t.length&&React.createElement("div",{className:"wp-ui-notification"},t),React.createElement("ol",null,n.map(((e,t)=>React.createElement("li",{key:`dimension-${t}`},React.createElement("strong",null,e.name),React.createElement("code",{style:{margin:"0 10px"}},e.id),React.createElement("span",null,c("Scope","ga-communicator"),": ",e.scope)))))))}}const i=document.getElementById("ga-dimensions");r(React.createElement(l,null),i)}]);
//# sourceMappingURL=ga-custom-dimensions.js.map