(self.webpackChunkappworks_fusion_design_lite=self.webpackChunkappworks_fusion_design_lite||[]).push([[528],{80219:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return U}});var r=i(67294),t=i(57631),o=i(31568),s=i(30411),a=i(88239),l=i(99663),c=i(49135),d=i(93196),u=i(45697),m=i.n(u),f=i(94184),p=i.n(f),h=i(46871),g=i(22270),v=i(81183),x,j,y=(j=x=function(e){function n(){return(0,l.Z)(this,n),(0,c.Z)(this,e.apply(this,arguments))}return(0,d.Z)(n,e),n.prototype.render=function e(){var i,t=this.props,o=t.prefix,s=t.className,l=t.dashed,c=t.direction,d=t.orientation,u=t.children,m=v.j6.pickOthers(n.propTypes,this.props),f=p()(((i={})[o+"divider"]=!0,i[o+"divider-dashed"]=!!l,i[o+"divider-"+c]=!!c,i[o+"divider-with-text-"+d]=!!d&&u,i),s);return r.createElement("div",(0,a.Z)({role:"separator",className:f},m),u&&r.createElement("span",{className:o+"divider-inner-text"},u))},n}(r.Component),x.propTypes={prefix:m().string,children:m().any,className:m().string,dashed:m().bool,direction:m().oneOf(["hoz","ver"]),orientation:m().oneOf(["left","right","center"])},x.defaultProps={prefix:"next-",direction:"hoz",orientation:"center",dashed:!1},j);y.displayName="Divider";var L=g.Z.config((0,h.polyfill)(y)),k=i(75999),B=i(69338),N=i(33486),w=i(61414),Z=i(44342),b=i(9172),I=i(35235);function S(e,n){var i=(0,r.useRef)(null);(0,r.useEffect)((function(){i.current=e})),(0,r.useEffect)((function(){var e;if(null!==n){var r=setInterval((function e(){i.current()}),n||0);return function(){return clearInterval(r)}}}),[n])}var A=i(62856),C=i.n(A),E=i(85893);function z(e,n){return M(e)||K(e,n)||q(e,n)||T()}function T(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function q(e,n){if(e){if("string"==typeof e)return X(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?X(e,n):void 0}}function X(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}function K(e,n){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r=[],t=!0,o=!1,s,a;try{for(i=i.call(e);!(t=(s=i.next()).done)&&(r.push(s.value),!n||r.length!==n);t=!0);}catch(e){o=!0,a=e}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return r}}function M(e){if(Array.isArray(e))return e}var _=t.Z.Item,O={name:"",password:"",autoLogin:!0,phone:"",code:""},Q=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dataSource:O},i=(0,Z.aC)(),a=z(i,2),l=a[0],c=a[1],d=n.dataSource,u=void 0===d?O:d,m=I.Z.useModel("user"),f=z(m,2),p=f[0],h=f[1],g=(0,r.useState)(u),v=z(g,2),x=v[0],j=v[1],y=(0,r.useState)(!1),A=z(y,2),T=A[0],q=A[1],X=(0,r.useState)(!1),K=z(X,2),M=K[0],Q=K[1],F=(0,r.useState)(59),W=z(F,2),P=W[0],U=W[1];S((function(){U(P-1),P<=0&&(q(!1),U(59))}),T?1e3:null);var Y=function e(n){j(n)},R=function e(n,i){i||q(!0)},V=function e(n,i){if(i)console.log("errors",i);else{console.log("values:",n);var r={};M?(r.phone=n.phone,r.code=n.code):(r.account=n.name,r.password=n.password),r.autoLogin=n.autoLogin,(0,b.Wy)(r).then((function(e){if(0!==(null==e?void 0:e.code));else{var n,i;if(o.Z.success("\u767b\u5f55\u6210\u529f"),localStorage.setItem("TOKEN",null!==(n=null==e?void 0:e.data)&&void 0!==n?n:""),c({isLogin:!0}),(0,b.Le)().then((function(e){if(0===e.code){var n=e.data;setTimeout((function(){var e,i;c({isLogin:!0,currentUser:{name:null!==(e=null==n?void 0:n.accountName)&&void 0!==e?e:"-",department:"",avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",userId:null!==(i=null==n?void 0:n.userId)&&void 0!==i?i:"-"}})}),300)}})),!N.m8)return;var r=null===w.Qw||void 0===w.Qw?void 0:(0,w.Qw)();N.m8.push(null!==(i=null==r?void 0:r.redirect)&&void 0!==i?i:"/")}}))}},D=(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{format:"tel",required:!0,requiredMessage:"\u5fc5\u586b",asterisk:!1,children:(0,E.jsx)(s.Z,{name:"phone",innerBefore:(0,E.jsxs)("span",{className:C().innerBeforeInput,children:["+86",(0,E.jsx)("span",{className:C().line})]}),maxLength:20,placeholder:"\u624b\u673a\u53f7"})}),(0,E.jsx)(_,{required:!0,requiredMessage:"\u5fc5\u586b",style:{marginBottom:0},children:(0,E.jsx)(s.Z,{name:"code",innerAfter:(0,E.jsxs)("span",{className:C().innerAfterInput,children:[(0,E.jsx)("span",{className:C().line}),(0,E.jsx)(t.Z.Submit,{text:!0,type:"primary",style:{width:64},disabled:!!T,validate:["phone"],onClick:R,className:C().sendCode,children:T?"".concat(P,"\u79d2\u540e\u518d\u8bd5"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"})]}),maxLength:20,placeholder:"\u9a8c\u8bc1\u7801"})})]}),G=(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{required:!0,requiredMessage:"\u5fc5\u586b",children:(0,E.jsx)(s.Z,{name:"name",maxLength:20,placeholder:"\u7528\u6237\u540d"})}),(0,E.jsx)(_,{required:!0,requiredMessage:"\u5fc5\u586b",style:{marginBottom:0},children:(0,E.jsx)(s.Z.Password,{name:"password",htmlType:"password",placeholder:"\u5bc6\u7801"})})]}),H=function e(){Q(!1)},J=function e(){Q(!0)};return(0,E.jsx)("div",{className:C().LoginBlock,children:(0,E.jsxs)("div",{className:C().innerBlock,children:[(0,E.jsx)("a",{href:"#",children:(0,E.jsx)("img",{className:C().logo,src:"https://img.alicdn.com/tfs/TB1KtN6mKH2gK0jSZJnXXaT1FXa-1014-200.png",alt:"logo"})}),(0,E.jsxs)("div",{className:C().desc,children:[(0,E.jsx)("span",{onClick:H,className:M?void 0:C().active,children:"\u8d26\u6237\u5bc6\u7801\u767b\u5f55"}),(0,E.jsx)(L,{direction:"ver"}),(0,E.jsx)("span",{onClick:J,className:M?C().active:void 0,children:"\u624b\u673a\u53f7\u767b\u5f55"})]}),(0,E.jsxs)(t.Z,{value:x,onChange:Y,size:"large",children:[M?D:G,(0,E.jsxs)("div",{className:C().infoLine,children:[(0,E.jsx)(_,{style:{marginBottom:0},children:(0,E.jsx)(k.Z,{name:"autoLogin",className:C().infoLeft,children:"\u81ea\u52a8\u767b\u5f55"})}),(0,E.jsx)("div",{children:(0,E.jsx)("a",{href:"/",className:C().link,children:"\u5fd8\u8bb0\u5bc6\u7801"})})]}),(0,E.jsx)(_,{style:{marginBottom:10},children:(0,E.jsx)(t.Z.Submit,{type:"primary",htmlType:"submit",onClick:V,className:C().submitBtn,validate:!0,children:"\u767b\u5f55"})}),(0,E.jsxs)("div",{className:C().infoLine,children:[(0,E.jsxs)("div",{className:C().infoLeft,children:["\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f ",(0,E.jsx)(B.Z,{type:"atm",size:"small"})," ",(0,E.jsx)(B.Z,{type:"atm",size:"small"})," ",(0,E.jsx)(B.Z,{type:"atm",size:"small"})]}),(0,E.jsx)("a",{href:"/",className:C().link,children:"\u6ce8\u518c\u8d26\u53f7"})]})]})]})})},F=Q;function W(){return(0,E.jsx)("div",{className:"Login-page",children:(0,E.jsx)(F,{})})}var P,U=W},62856:function(e){e.exports={LoginBlock:"LoginBlock--LoginBlock--14N5omi",innerBlock:"LoginBlock--innerBlock--n92n1gc",logo:"LoginBlock--logo--swKl-ms",infoLine:"LoginBlock--infoLine--3r8gycm",infoLeft:"LoginBlock--infoLeft--2V1Es5p",desc:"LoginBlock--desc--nzKi_4A",active:"LoginBlock--active--1pLEYkQ",line:"LoginBlock--line--39n9TLf",innerBeforeInput:"LoginBlock--innerBeforeInput--3EyQP7M",innerAfterInput:"LoginBlock--innerAfterInput--2vUoApC",sendCode:"LoginBlock--sendCode--iyEXNX8",otherLogin:"LoginBlock--otherLogin--2YnGQI0",icon:"LoginBlock--icon--28qWEYX",link:"LoginBlock--link--1Ao0Sgc",submitBtn:"LoginBlock--submitBtn--2zkmWKW"}}}]);