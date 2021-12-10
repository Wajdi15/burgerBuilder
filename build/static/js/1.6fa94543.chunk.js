webpackJsonp([1],{143:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),u=t.n(i),l=t(5),s=t(144),c=t(20),p=t(48),A=t(156),d=t.n(A),b=t(11),h=t(13),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),g=function(e){function n(){var e,t,r,i;a(this,n);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return t=r=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),r.state={authForm:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"your Password"},value:"",validation:{minLength:8},valid:!1,touched:!1}},isSignup:!0},r.validationHandler=function(e,n){var t=!0;return n.required&&(t=""!==e.trim()&&t),n.minLength&&(t=e.length>=n.minLength&&t),n.maxLength&&(t=e.length<=n.maxLength&&t),t},r.inputChangedHandler=function(e,n){var t=Object.assign({},r.state.authForm),a=Object.assign({},t[n]);a.value=e.target.value,a.valid=r.validationHandler(e.target.value,a.validation),a.touched=!0,t[n]=a,r.setState({authForm:t})},r.authHandler=function(e){e.preventDefault(),r.props.onAuth(r.state.authForm.email.value,r.state.authForm.password.value,r.state.isSignup)},r.signupHandler=function(){r.setState(function(e){return{isSignup:!e.isSignup}})},i=t,o(r,i)}return r(n,e),m(n,[{key:"render",value:function(){var e=this,n=u.a.createElement("form",{onSubmit:function(n){return e.authHandler(n)}},Object.keys(this.state.authForm).map(function(n,t){return u.a.createElement(s.a,{key:n,elementType:e.state.authForm[n].elementType,elementConfig:e.state.authForm[n].elementConfig,defaultValue:e.state.authForm[n].value,touched:e.state.authForm[n].touched,inValid:!e.state.authForm[n].valid,changed:function(t){return e.inputChangedHandler(t,n)}})}),u.a.createElement(c.a,{btnType:"Success"},this.state.isSignup?"SIGNUP":"SIGNIN"));this.props.loading&&(n=u.a.createElement(p.a,null));var t=null;return this.props.auth&&(t=this.props.continuePurchase?u.a.createElement(h.a,{to:"/checkout"}):u.a.createElement(h.a,{to:"/"})),u.a.createElement("div",{className:d.a.Auth},t,n,u.a.createElement(c.a,{btnType:"Danger",clicked:this.signupHandler},this.state.isSignup?"SIGNIN":"SIGNUP"),this.props.error?u.a.createElement("p",null,this.props.error.message):null)}}]),n}(i.Component),f=function(e){return{loading:e.auth.loading,error:e.auth.error,auth:e.auth.idToken,continuePurchase:e.burger.continuePurchase}},C=function(e){return{onAuth:function(n,t,a){e(b.b(n,t,a))}}};n.default=Object(l.b)(f,C)(g)},144:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(145),i=t.n(r),u=function(e){var n=null,t=[i.a.InputElement];switch(e.inValid&&e.touched&&t.push(i.a.Invalid),e.elementType){case"input":n=o.a.createElement("input",Object.assign({className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig));break;case"textarea":n=o.a.createElement("textarea",Object.assign({className:i.a.InputElement,value:e.value,onChange:e.changed},e.elementConfig));break;case"select":var a=[],r=!0,u=!1,l=void 0;try{for(var s,c=e.elementConfig.options[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var p=s.value;a.push(o.a.createElement("option",{value:p.value,key:p.value},p.displayValue))}}catch(e){u=!0,l=e}finally{try{!r&&c.return&&c.return()}finally{if(u)throw l}}n=o.a.createElement("select",{className:i.a.InputElement,onChange:e.changed},a);break;default:n=o.a.createElement("input",Object.assign({onChange:e.changed,className:i.a.InputElement,value:e.value},e.elementConfig))}return o.a.createElement("div",{className:i.a.Input},o.a.createElement("label",{className:i.a.Lable},e.label),n)};n.a=u},145:function(e,n,t){var a=t(146);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;t(140)(a,o);a.locals&&(e.exports=a.locals)},146:function(e,n,t){n=e.exports=t(139)(!0),n.push([e.i,".input__Input__5pmAb{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.input__Label__jdhlK{font-weight:700;display:block;margin-bottom:8px}.input__InputElement__3OvHA{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.input__InputElement__3OvHA:focus{outline:none;background-color:#ccc}.input__Invalid__2bFyW{background-color:#f4a460;border:1px solid red}","",{version:3,sources:["/home/wajdi/workspace/react/burger-builder-starting-setup/src/UI/iNPUT/input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AACD,uBACI,yBAA4B,AAC5B,oBAAsB,CACzB",file:"input.css",sourcesContent:[".Input {\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.Label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n}\n\n.InputElement {\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.InputElement:focus {\n    outline: none;\n    background-color: #ccc;\n}\n.Invalid{\n    background-color:sandybrown;\n    border: 1px solid red;\n}"],sourceRoot:""}]),n.locals={Input:"input__Input__5pmAb",Label:"input__Label__jdhlK",InputElement:"input__InputElement__3OvHA",Invalid:"input__Invalid__2bFyW"}},156:function(e,n,t){var a=t(157);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;t(140)(a,o);a.locals&&(e.exports=a.locals)},157:function(e,n,t){n=e.exports=t(139)(!0),n.push([e.i,".auth__Auth__20GUw{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.auth__Auth__20GUw{width:500px}}","",{version:3,sources:["/home/wajdi/workspace/react/burger-builder-starting-setup/src/containers/Auth/auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,yBACI,mBACI,WAAa,CAChB,CACJ",file:"auth.css",sourcesContent:[".Auth {\n    margin: 20px auto;\n    width: 80%;\n    text-align: center;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    border: 1px solid #eee;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n@media (min-width: 600px) {\n    .Auth {\n        width: 500px;\n    }\n}"],sourceRoot:""}]),n.locals={Auth:"auth__Auth__20GUw"}}});
//# sourceMappingURL=1.6fa94543.chunk.js.map