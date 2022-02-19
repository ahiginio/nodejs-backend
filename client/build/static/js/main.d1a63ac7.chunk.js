(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(38),s=c.n(r),o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))},i=c(2),j=c(4),l=c.n(j),u=c(0),d=Object(a.createContext)(),h=d.Provider,b=function(e){var t=e.children,c=localStorage.getItem("token"),n=localStorage.getItem("user"),r=Object(a.useState)({token:c,user:n?JSON.parse(n):{}}),s=Object(i.a)(r,2),o=s[0],j=s[1],l=function(e){var t=e.token,c=e.user;localStorage.setItem("token",t),localStorage.setItem("user",JSON.stringify(c)),j({token:t,user:c})};return Object(u.jsx)(h,{value:{authState:o,setAuthState:function(e){return l(e)},isAuthenticated:function(){return!!o.token},logout:function(){localStorage.getItem("token");localStorage.removeItem("token"),localStorage.removeItem("user"),j()}},children:t})},O=c(29),p=Object(a.createContext)(),x=p.Provider,m=function(e){var t=e.children,c=Object(a.useState)(localStorage.getItem("cartId")),n=Object(i.a)(c,2),r=n[0],s=n[1];return Object(u.jsx)(x,{value:{cart:r,setCart:s},children:t})},f=c(5),g=c(3);function v(){var e=Object(a.useContext)(d),t=e.authState,c=e.isAuthenticated;return Object(u.jsxs)("header",{children:[Object(u.jsx)("div",{className:"Logo",children:Object(u.jsx)("h1",{children:"Logo"})}),Object(u.jsx)("nav",{children:c?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{children:Object(u.jsx)(f.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(f.b,{to:"/products",children:"Products"})}),Object(u.jsx)("li",{children:Object(u.jsx)(f.b,{to:"/cart",children:"Cart"})}),Object(u.jsx)("li",{children:Object(u.jsx)(f.b,{to:"/chat",children:"Chat"})}),Object(u.jsx)("li",{children:Object(u.jsx)(f.b,{to:"/configuration",children:"Configuraciones"})}),Object(u.jsx)("div",{className:"user",children:"".concat(t.user.name," ").concat(t.user.apellido)})]}):Object(u.jsx)(u.Fragment,{})})]})}function N(){var e=Object(g.f)(),t=Object(a.useContext)(d),c=t.setAuthState,n=(t.isAuthenticated,t.authState,Object(a.useContext)(p).setCart),r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],j=s[1],h=Object(a.useState)(""),b=Object(i.a)(h,2),O=b[0],x=b[1];return Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)("h1",{children:"Iniciar Sesion"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"email",placeholder:"Email",name:"email",onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",name:"password",minLength:"8",onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("div",{className:"btn",onClick:function(t){return function(t){t.preventDefault();var a={email:o,password:O};l.a.post("https://coderback-house.herokuapp.com:8080/api/user/login",a).then((function(t){if(200===t.status){var a=t.data.token,r=t.data.user;localStorage.setItem("token",a),localStorage.setItem("user",JSON.stringify(r)),c(t.data),console.log(a),l.a.post("https://coderback-house.herokuapp.com:8080/api/cart/".concat(t.data.user.id),{},{headers:{Authorization:"Bearer ".concat(t.data.token)}}).then((function(t){n(t.data.id),localStorage.setItem("cartId",t.data.id),e("/products")})).catch((function(e){console.error(e)}))}})).catch((function(e){console.error(e)}))}(t)},children:"Iniciar Sesion"})]})]})}function S(){var e=Object(a.useContext)(d).setAuthState,t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),j=o[0],h=o[1],b=Object(a.useState)(""),O=Object(i.a)(b,2),p=O[0],x=O[1],m=Object(a.useState)(""),f=Object(i.a)(m,2),g=f[0],v=f[1],N=Object(a.useState)(""),S=Object(i.a)(N,2),C=S[0],k=S[1],I=Object(a.useState)(""),E=Object(i.a)(I,2),_=E[0],A=E[1],y=Object(a.useState)(""),T=Object(i.a)(y,2),D=T[0],P=T[1],F=Object(a.useState)(""),B=Object(i.a)(F,2),R=B[0],w=B[1],L={email:g,username:n,password:j,passwordCheck:p,firstName:C,lastName:_,age:D,phone:R,role:"admin"};return Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)("h1",{children:"Registrarse"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",placeholder:"Usuario",name:"username",onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("input",{type:"email",placeholder:"Email",name:"email",onChange:function(e){return v(e.target.value)}}),Object(u.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",name:"password",minLength:"8",onChange:function(e){return h(e.target.value)}}),Object(u.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",name:"passwordConfirm",minLength:"8",onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"Nombre",name:"firstName",onChange:function(e){return k(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"Apellido",name:"lastName",onChange:function(e){return A(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"Edad",name:"age",onChange:function(e){return P(e.target.value)}}),Object(u.jsx)("input",{type:"phone",placeholder:"Telefono",name:"phone",onChange:function(e){return w(e.target.value)}}),Object(u.jsx)("div",{className:"btn",onClick:function(){l.a.post("https://coderback-house.herokuapp.com:8080/api/user/register",L).then((function(t){200===t.status&&l.a.post("https://coderback-house.herokuapp.com:8080/api/user/login",{email:g,password:j}).then((function(t){if(200===t.status){var c=t.data.token,a=t.data.user;localStorage.setItem("token",c),localStorage.setItem("user",JSON.stringify(a)),e(t.data),alert("USUARIO LOGEADO, TOKEN GUARDADO")}})).catch((function(e){console.error(e)}))})).catch((function(e){console.error(e)}))},children:"Registrarse"})]})]})}function C(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Home"}),Object(u.jsx)(N,{}),Object(u.jsx)(S,{})]})]})}function k(e){var t=e.product,c=Object(a.useContext)(p).cart;console.log(c);var n=Object(a.useContext)(d).authState;console.log(n);return Object(u.jsxs)("div",{className:"product-card",children:[Object(u.jsx)(f.b,{to:"/product/".concat(t._id),children:t.photo?Object(u.jsx)("div",{className:"product-photo",children:Object(u.jsx)("img",{src:t.photo,alt:t.title})}):null}),Object(u.jsxs)("div",{className:"product-info",children:[Object(u.jsx)("h1",{className:"product-title",children:t.title}),Object(u.jsxs)("span",{className:"product-price",children:["$ ",t.price]}),Object(u.jsx)("div",{className:"btn",onClick:function(){return function(e){l.a.put("https://coderback-house.herokuapp.com:8080/api/cart/".concat(c,"/productos"),{product_id:e._id,qty:1},{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}(t)},children:"Comprar"})]})]})}function I(){var e=Object(a.useContext)(d).authState,t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){l.a.get("https://coderback-house.herokuapp.com:8080/api/categories",{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){r(e.data)})).catch((function(e){console.error(e)}))}),[]),Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)("h1",{children:"Categorias"}),Object(u.jsx)("ul",{className:"categories",children:n.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(f.b,{to:"/products/category/".concat(e._id),children:e.title})})}))})]})}function E(){var e=Object(a.useContext)(d).authState,t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){l.a.get("https://coderback-house.herokuapp.com:8080/api/products",{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){r(e.data),console.log(e)})).catch((function(e){console.error(e)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(I,{}),Object(u.jsxs)("div",{className:"products",children:[Object(u.jsx)("h1",{children:"Productos"}),Object(u.jsx)("div",{className:"products-container",children:n.map((function(e){return Object(u.jsx)(k,{product:e})}))})]})]})]})}function _(){var e=Object(g.g)().productId,t=Object(a.useContext)(d).authState,c=Object(a.useContext)(p).cart,n=Object(a.useState)([]),r=Object(i.a)(n,2),s=r[0],o=r[1];Object(a.useEffect)((function(){l.a.get("https://coderback-house.herokuapp.com:8080/api/product/".concat(e),{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){o(e.data),console.log(e)})).catch((function(e){console.error(e)}))}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"single-product",style:{width:"100%"},children:[Object(u.jsx)("div",{className:"product-photo",style:{width:"100%"},children:Object(u.jsx)("img",{src:s.photo,alt:s.title,style:{margin:"0 auto",display:"flex"}})}),Object(u.jsxs)("div",{className:"product-info",style:{marginTop:20},children:[Object(u.jsx)("h1",{children:s.title}),Object(u.jsx)("p",{style:{textAlign:"center"},children:s.description}),Object(u.jsx)("div",{className:"col-50",children:Object(u.jsx)("span",{className:"product-price",children:s.price})}),Object(u.jsx)("div",{className:"btn",onClick:function(){return function(e){l.a.put("https://coderback-house.herokuapp.com:8080/api/cart/".concat(c,"/productos"),{product_id:e._id,qty:1},{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}(s)},children:"Agregar al carrito"})]})]})})]})}function A(){var e=Object(g.g)().catId,t=Object(a.useContext)(d).authState,c=Object(a.useState)([]),n=Object(i.a)(c,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){l.a.get("https://coderback-house.herokuapp.com:8080/api/products/category/".concat(e),{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){s(e.data),console.log(e)})).catch((function(e){console.error(e)}))}),[e]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(I,{}),Object(u.jsxs)("div",{className:"products",children:[Object(u.jsx)("h1",{children:"Productos"}),Object(u.jsx)("div",{className:"products-container",children:r.map((function(e){return Object(u.jsx)(k,{product:e})}))})]})]})]})}function y(e){var t=e.item,c=e.deleteFromCart;Object(a.useContext)(p).cart,Object(a.useContext)(d).authState;return Object(u.jsxs)("div",{className:"product-card",children:[t.product.photo?Object(u.jsx)("div",{className:"product-photo",children:Object(u.jsx)("img",{src:t.product.photo,alt:t.product.title})}):null,Object(u.jsxs)("div",{className:"product-info",children:[Object(u.jsx)("h1",{className:"product-title",children:t.product.title}),Object(u.jsxs)("span",{className:"product-price",children:["$ ",t.product.price]}),Object(u.jsxs)("span",{className:"product-stock",children:["Cantidad: ",t.qty]}),Object(u.jsxs)("div",{className:"btn",onClick:function(){return c(t)},children:[" ","Eliminar"," "]})]})]})}function T(){var e=Object(a.useContext)(p).cart,t=Object(a.useContext)(d).authState;console.log(e);var c=Object(a.useState)([]),n=Object(i.a)(c,2),r=n[0],s=n[1],o=function(){l.a.get("https://coderback-house.herokuapp.com:8080/api/cart/".concat(e,"/productos"),{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){s(e.data.products),console.log(e)})).catch((function(e){console.error(e)}))},j=function(c){l.a.delete("https://coderback-house.herokuapp.com:8080/api/cart/".concat(e,"/productos/").concat(c._id),{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){o()})).catch((function(e){console.error(e)}))};return Object(a.useEffect)((function(){o()}),[]),console.log(r),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Cart"}),Object(u.jsx)("div",{className:"cart",children:Object(u.jsxs)("div",{className:"products-container",children:[e?r.map((function(e){return Object(u.jsx)(y,{item:e,deleteFromCart:j})})):null,Object(u.jsx)("div",{className:"btn",style:{width:"100%",textAlign:"center",color:"white"},children:Object(u.jsx)(f.b,{to:"/checkout",style:{color:"white"},children:"Finalizar compra"})})]})})]})]})}function D(e){var t=e.cartProducts;return Object(u.jsx)("div",{className:"order-products",children:t.map((function(e){return Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("div",{className:"product-photo",children:Object(u.jsx)("img",{src:e.product.photo,alt:e.product.title})}),Object(u.jsxs)("div",{className:"product-info",children:[Object(u.jsx)("h3",{children:e.product.title}),Object(u.jsx)("h4",{children:e.product.price}),Object(u.jsx)("p",{children:e.qty})]})]},e._id)}))})}function P(){var e=Object(a.useContext)(d).authState,t=Object(a.useContext)(p).cart,c=Object(a.useState)([]),n=Object(i.a)(c,2),r=n[0],s=n[1],o=Object(a.useState)(""),j=Object(i.a)(o,2),h=j[0],b=j[1],O=Object(a.useState)(!1),x=Object(i.a)(O,2),m=x[0],f=x[1],g=function(){l.a.get("https://coderback-house.herokuapp.com:8080/api/cart/".concat(t,"/productos"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){s(e.data.products),console.log(e)})).catch((function(e){console.error(e)}))};console.log(r);Object(a.useEffect)((function(){g()}),[]);var N=r.map((function(e){return{title:e.product.title,price:e.product.price,qty:e.qty,description:e.product.description}}));console.log(N);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"checkout",children:m?Object(u.jsx)("h1",{children:"Orden completada con exito"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Finalizar Compra"}),Object(u.jsx)(D,{cartProducts:r}),Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{for:"direccion",children:"Direccion de entrega"}),Object(u.jsx)("input",{type:"text",name:"direccion",placeholder:"Direccion de entrega",onChange:function(e){return b(e.target.value)}}),""===h?Object(u.jsx)("p",{children:"Completa la direccion para poder comprar"}):Object(u.jsx)("div",{className:"btn",onClick:function(){l.a.post("https://coderback-house.herokuapp.com:8080/api/order",{items:N,status:"generated",email:e.user.email,address:h},{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(c){f(!0),l.a.delete("https://coderback-house.herokuapp.com:8080/api/cart/".concat(t,"/clear"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){console.log(c)})).catch((function(e){console.error(e)}))})).catch((function(e){console.error(e)}))},children:"Comprar"})]})]})})})]})}function F(){var e=Object(a.useContext)(d).authState;return Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)("h1",{children:"Mi cuenta"}),Object(u.jsxs)("ul",{className:"categories",children:[Object(u.jsx)("li",{children:Object(u.jsx)(f.b,{to:"/chat",children:"Todos los mensajes"})}),Object(u.jsx)("li",{children:Object(u.jsx)(f.b,{to:"/chat/".concat(e.user.email),children:"Mis mensajes"})})]})]})}var B=c(42),R=c.n(B);function w(){var e=Object(a.useContext)(d).authState,t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),j=o[0],l=o[1],h=Object(a.useState)([]),b=Object(i.a)(h,2),p=b[0],x=b[1],m=Object(a.useState)([]),f=Object(i.a)(m,2),N=(f[0],f[1],Object(O.a)(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT)),S=Object(g.g)().emailParam;Object(a.useEffect)((function(){N.on("mensajes",(function(e){if(console.log(e),S){var t=e.filter((function(e){return e.email===S}));console.log(t),x(t)}else x(e)}))}),[S]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("h1",{children:["Bienvenido ",e.user.firstName]}),Object(u.jsx)(F,{}),Object(u.jsxs)("div",{className:"products-container",children:[Object(u.jsx)("div",{className:"message-container",children:p.reverse().map((function(e,t){return Object(u.jsxs)("div",{className:"mensaje",children:[Object(u.jsx)("span",{className:"mensaje-date",children:R()(e.createdAt).format("DD/MM/YYYY")}),Object(u.jsxs)("span",{className:"mensaje-email",children:[e.email," : "]}),Object(u.jsx)("span",{className:"mensaje-message",children:e.message})]},t)}))}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e={email:n,message:j,type:"user"};N.emit("update",e)}(),l([])},children:[Object(u.jsx)("input",{type:"text",placeholder:"email@email.com",onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("textarea",{placeholder:"Escribi tu mensaje",onChange:function(e){return l(e.target.value)},cols:"80",rows:"5"}),Object(u.jsx)("input",{type:"submit",className:"btn",value:"Enviar mensaje"})]})]})]})]})}function L(){var e=Object(a.useContext)(d).authState,t=Object(a.useState)(),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){l.a.get("https://coderback-house.herokuapp.com:8080/api/configuration",{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){r(e.data.configuraciones.parsed)}))}),[]),console.log(n),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"configurations",style:{width:"100%"},children:[Object(u.jsx)("h1",{children:"Configuraciones del servidor"}),n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["API_URL : ",n.API_URL]}),Object(u.jsxs)("p",{children:["JWT_SECRET : ",n.JWT_SECRET]}),Object(u.jsxs)("p",{children:["MONGO_DB_URI : ",n.MONGO_DB_URI]}),Object(u.jsxs)("p",{children:["MONGO_DB_URI_DEV : ",n.MONGO_DB_URI_DEV]}),Object(u.jsxs)("p",{children:["SKIP_PREFLIGHT_CHECK : ",n.SKIP_PREFLIGHT_CHECK]}),Object(u.jsxs)("p",{children:["TOKEN_EXPIRES_IN : ",n.TOKEN_EXPIRES_IN]}),Object(u.jsxs)("p",{children:["WHITELISTED_DOMAINS : ",n.WHITELISTED_DOMAINS]}),Object(u.jsxs)("p",{children:["PORT : ",n.PORT]}),Object(u.jsxs)("p",{children:["ADMIN_EMAIL : ",n.ADMIN_EMAIL]})]})]})})]})}function z(){var e=Object(a.useContext)(d).isAuthenticated;return Object(u.jsx)(m,{children:Object(u.jsx)(f.a,{children:Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{exact:!0,path:"/",element:e()?Object(u.jsx)(E,{}):Object(u.jsx)(C,{})}),Object(u.jsx)(g.a,{exact:!0,path:"/products",element:Object(u.jsx)(E,{})}),Object(u.jsx)(g.a,{exact:!0,path:"/product/:productId",element:Object(u.jsx)(_,{})}),Object(u.jsx)(g.a,{exact:!0,path:"/products/category/:catId",element:Object(u.jsx)(A,{})}),Object(u.jsx)(g.a,{exact:!0,path:"/cart",element:Object(u.jsx)(T,{})}),Object(u.jsx)(g.a,{exact:!0,path:"/checkout",element:Object(u.jsx)(P,{})}),Object(u.jsx)(g.a,{exact:!0,path:"/chat",element:e()?Object(u.jsx)(w,{}):Object(u.jsx)(C,{})}),Object(u.jsx)(g.a,{exact:!0,path:"/chat/:emailParam",element:e()?Object(u.jsx)(w,{}):Object(u.jsx)(C,{})}),Object(u.jsx)(g.a,{exact:!0,path:"/configuration",element:Object(u.jsx)(L,{})})]})})})}c(72);s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(b,{children:Object(u.jsx)(z,{})})}),document.getElementById("root")),o()}},[[73,1,2]]]);
//# sourceMappingURL=main.d1a63ac7.chunk.js.map