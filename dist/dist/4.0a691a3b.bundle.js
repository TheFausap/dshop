(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1644:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),c=t(6),i=t.n(c),o=t(1),l=t.n(o),s=t(0),m=t.n(s),d=t(41),u=t(427),p=t(886),f=t(20),h=t.n(f),g=t(3),b=t.n(g),v=t(10),E=t.n(v),x=t(8),w=function(){return m.a.createElement("svg",{className:"icon icon-check-circle",viewBox:"0 0 50 50",fill:"none"},m.a.createElement("path",{d:"M25 49c13.255 0 24-10.745 24-24S38.255 1 25 1 1 11.745 1 25s10.745 24 24 24z"}),m.a.createElement("path",{d:"M15 24.51l7.307 7.308L35.125 19"}))};t(10)("\n  .icon.icon-check-circle\n    path\n      stroke: #1990c6\n      stroke-width: 2\n");var y=t(7),N=t(5),k=t(101),j=t.n(k),O=t(115),z=t(43);function I(){return(I=i()(r.a.mark((function e(n,t,a){var c,i,o,l,s,m,d,u,p,f,h,g,v,E,x,w;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.indexOf("0x")){e.next=27;break}return l=b()(a,"listingId"),s=l.split("-")[1],m=context.web3,e.next=6,m.eth.getTransactionReceipt(n);case 6:if(d=e.sent){e.next=10;break}return console.log("Could not find receipt"),e.abrupt("return",null);case 10:if(u=d.logs.find((function(e){return 0===e.topics[0].indexOf("0x6ee68")}))){e.next=14;break}return console.log("Could not find log"),e.abrupt("return",null);case 14:return p=m.utils.hexToNumber(u.topics[2]),f=m.utils.hexToNumber(u.topics[3]),h=u.data,e.next=19,Object(z.get)(context.config.ipfsGateway,h,1e4);case 19:return g=e.sent,c=g.encryptedData,i="".concat(l,"-").concat(f),e.next=24,context.marketplaces[s].contract.methods.offers(p,f).call();case 24:o=e.sent,e.next=28;break;case 27:c=n;case 28:return e.prev=28,e.next=31,Object(z.get)(context.config.ipfsGateway,c,1e4);case 31:return v=e.sent,e.next=34,openpgp.message.readArmored(v.buyerData);case 34:return E=e.sent,e.next=37,openpgp.decrypt({message:E,passwords:[t]});case 37:return x=e.sent,(w=JSON.parse(x.data)).offerId=i,e.abrupt("return",{cart:w,offer:o});case 43:return e.prev=43,e.t0=e.catch(28),e.abrupt("return",null);case 46:case"end":return e.stop()}}),e,null,[[28,43]])})))).apply(this,arguments)}var C=function(e,n,t){return I.apply(this,arguments)},S=function(e){var n=e.cart,t=Object(N.a)().config;if(!n)return m.a.createElement("div",null,"Loading...");var a=b()(n,"userInfo.phone");return m.a.createElement("div",{className:"checkout-confirmation"},m.a.createElement("div",{className:"d-none d-md-block"},m.a.createElement("h3",null,t.fullTitle)),m.a.createElement("div",{className:"thankyou"},m.a.createElement("div",{className:"check"},m.a.createElement(w,null)),m.a.createElement("div",{className:"details"},n.offerId?m.a.createElement("div",{className:"order-number"},"Order #".concat(n.offerId)):null,m.a.createElement("div",{className:"name"},"Thank you ".concat(b()(n,"userInfo.firstName")),"!"))),m.a.createElement("div",{className:"order-confirmed"},m.a.createElement("div",{className:"title"},"Your order is confirmed"),m.a.createElement("div",{className:"description"},"You’ll receive an email when your order is ready.")),m.a.createElement("div",{className:"customer-info"},m.a.createElement("h4",null,"Customer information"),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6"},m.a.createElement("h5",null,"Contact information"),m.a.createElement("div",{className:"value"},b()(n,"userInfo.email")),a?m.a.createElement("div",{className:"value"},a):null),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("h5",null,"Payment method"),m.a.createElement("div",{className:"value"},b()(n,"paymentMethod.label")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6"},m.a.createElement("h5",null,"Shipping address"),m.a.createElement("div",{className:"value"},j()(n.userInfo).map((function(e,n){return m.a.createElement("div",{key:n},e)})))),m.a.createElement("div",{className:"col-md-6"},m.a.createElement("h5",null,"Billing address"),m.a.createElement("div",{className:"value"},j()(n.userInfo,n.userInfo.billingDifferent?"billing":null).map((function(e,n){return m.a.createElement("div",{key:n},e)}))))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-6"},m.a.createElement("h5",null,"Shipping method"),b()(n,"shipping.label")))),m.a.createElement("div",{className:"actions"},m.a.createElement("div",null,"Need help?"," ",m.a.createElement("a",{href:"mailto:".concat(t.supportEmailPlain)},"Contact us")),m.a.createElement(x.a,{className:"btn btn-primary btn-lg",to:"/"},"Continue shopping")))};n.default=function(){var e=Object(N.a)().config,n=Object(s.useState)(),t=l()(n,2),a=t[0],c=t[1],o=Object(s.useState)(),f=l()(o,2),g=f[0],b=f[1],v=Object(y.b)(),x=l()(v,2)[1],w=Object(d.i)("/order/:tx"),k=Object(d.h)(),j=h.a.parse(k.search);return Object(s.useEffect)((function(){function n(){return(n=i()(r.a.mark((function n(){var t;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C(w.params.tx,j.auth,e);case 2:(t=n.sent)?(c(t.cart),b(!1),x({type:"orderComplete"})):b(!0);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[w.params.tx,j.auth]),Object(s.useEffect)((function(){window.orderCss||(E.a.addStylesheet(),window.orderCss=!0)}),[]),g?(console.error(g),m.a.createElement("div",{className:"checkout"},m.a.createElement("h3",{className:"d-md-none my-4 ml-4"},e.title),m.a.createElement("div",{className:"user-details"},"Error loading order"),m.a.createElement("div",{className:"order-summary-wrap"}))):a?m.a.createElement(u.a,{client:p.a},m.a.createElement("div",{className:"checkout"},m.a.createElement("h3",{className:"d-md-none my-4 ml-4"},e.title),m.a.createElement("div",{className:"user-details"},m.a.createElement(S,{cart:a})),m.a.createElement("div",{className:"order-summary-wrap"},m.a.createElement(O.a,{cart:a})))):m.a.createElement("div",{className:"loading-fullpage"},"Loading")};t(10)("\n  .checkout\n    display: flex\n    h3,h4,h5\n      font-weight: 400\n    .breadcrumbs\n      font-size: 0.8rem\n      a\n        color: #1990c6\n    > .user-details\n      flex: 7\n      padding: 3rem\n      display: flex\n      justify-content: flex-end\n      .checkout-information,.checkout-shipping\n        padding: 1rem\n        max-width: 600px\n        width: 100%\n      .actions\n        display: flex\n        justify-content: space-between\n        align-items: center\n        margin-top: 2rem\n    > .order-summary-wrap\n      padding: 3rem\n      flex: 6\n      min-height: 100vh\n      border-width: 0 0 0 1px\n      border-style: solid\n      border-color: #ddd\n      background: #f6f6f6\n\n\n  @media (max-width: 767.98px)\n    .checkout\n      flex-direction: column\n      > .user-details\n        padding: 1rem\n        order: 2\n        .checkout-information,.checkout-shipping\n          padding: 1rem 0\n        .actions\n          flex-direction: column-reverse\n          *\n            margin-bottom: 2rem\n      > .order-summary-wrap\n        padding: 1rem 1.25rem\n        border-width: 1px 0 1px 0\n        min-height: 0\n        .toggle-order-summary\n          display: flex\n          justify-content: space-between\n          .toggle\n            color: #1990c6\n          .icon-caret\n            fill: #1990c6\n            margin-left: 0.5rem\n          .icon-cart\n            margin-right: 0.5rem\n            width: 1.5rem\n          &.active\n            .icon-caret\n              transform: scaleY(-1)\n\n        .order-summary\n          margin-top: 2rem\n          display: none\n          &.show\n            display: block\n\n"),t(10)("\n  .order-summary\n    max-width: 430px\n    .item\n      display: flex\n      align-items: center\n      margin-bottom: 1rem\n      width: 100%\n      .title\n        font-weight: bold\n        flex: 1\n        .cart-options\n          font-size: 0.8rem\n          font-weight: normal\n      .price\n        font-weight: bold\n      .image\n        position: relative\n        margin-right: 1rem\n        .product-pic\n          border-radius: 0.5rem\n          border: 1px solid #ddd\n          min-width: 3rem\n        span\n          position: absolute\n          display: block\n          top: -0.5rem\n          right: -0.5rem\n          padding: 0.125rem 0.5rem\n          background: #999\n          color: #fff\n          border-radius: 1rem\n          font-size: 0.75rem\n    img\n      max-width: 60px\n    .sub-total,.total\n      margin-top: 1rem\n      padding-top: 1rem\n      border-top: 1px solid #ddd\n      > div\n        display: flex\n        justify-content: space-between\n        margin-bottom: 0.5rem\n    .total\n      font-size: 1.25rem\n\n"),t(10)("\n  .checkout-confirmation\n    width: 100%\n    max-width: 570px\n    .icon-check-circle\n      width: 3rem\n    .thankyou\n      display: flex\n      align-items: center\n      margin-top: 1rem\n      .check\n        margin-right: 1rem\n      .order-number\n        font-size: 0.875rem\n        color: #666\n      .name\n        font-size: 1.25rem\n    .order-confirmed\n      margin-top: 2rem\n      border: 1px solid #ddd\n      border-radius: 0.25rem\n      padding: 1rem\n      .title\n        font-size: 1.25rem\n        margin-bottom: 0.25rem\n      .description\n        color: #666\n    .customer-info\n      margin-top: 2rem\n      border: 1px solid #ddd\n      border-radius: 0.25rem\n      padding: 1rem\n      font-size: 0.875rem\n      color: #555\n      h4\n        font-size: 1.125rem\n        color: #333\n        margin-bottom: 0.25rem\n      h5\n        font-size: 0.875rem\n        margin-top: 1rem\n        font-weight: 500\n        color: #333\n\n")},637:function(e,n){},638:function(e,n){},658:function(e,n){},660:function(e,n){},679:function(e,n){},748:function(e,n){},827:function(e,n){},828:function(e,n){},833:function(e,n){}}]);