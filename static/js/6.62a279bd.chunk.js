(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[6],{1078:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return K}));var i=t(33),c=t(3),a=t.n(c),r=t(12),o=t(17),l=t(8),s=t(9),d=t(1),u=t(4),b=t(6),j=t(7),O=t(2),v=t(56),x=t(13),m=t(35),p=t(177),h=t(200),C=t(361),f=t(188),y=t(25),R=t(119),I=t(111),E=t(60),g=t(38),T=t(22),U=t(61),w=t(42),Y=t(259),N=t(105),_=t(788),k=t(36),S=t(164);var L=t(57),B=t(66),P=t(213),A=t(30),D=t(102),q=t(219),Q=t(124),F=t(99),V=t(320);function M(){return Object(A.c)((function(e){return e.burn}))}var z,H=t(49),W=t(239),G=t(0),J=u.e.div(z||(z=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function K(e){var n,t,c,s,u,z,K,X,Z,$,ee,ne,te,ie,ce,ae,re,oe,le,se=e.history,de=e.match.params,ue=de.currencyIdA,be=de.currencyIdB,je=null!==(n=Object(U.c)(ue))&&void 0!==n?n:void 0,Oe=null!==(t=Object(U.c)(be))&&void 0!==t?t:void 0,ve=Object(T.a)(),xe=ve.account,me=ve.chainId,pe=ve.library,he=Object(d.useMemo)((function(){return[Object(L.b)(je,me),Object(L.b)(Oe,me)]}),[je,Oe,me]),Ce=Object(l.a)(he,2),fe=Ce[0],ye=Ce[1],Re=Object(x.b)().t,Ie=Object(H.e)(),Ee=M(),ge=Ee.independentField,Te=Ee.typedValue,Ue=function(e,n){var t,i,c,a,r,s=Object(T.a)(),d=s.account,u=s.chainId,b=M(),O=b.independentField,v=b.typedValue,x=Object(D.b)(e,n),m=Object(l.a)(x,2)[1],p=Object(F.e)(null!==d&&void 0!==d?d:void 0,[null===m||void 0===m?void 0:m.liquidityToken]),h=null===p||void 0===p?void 0:p[null!==(t=null===m||void 0===m||null===(i=m.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==t?t:""],C=[Object(L.b)(e,u),Object(L.b)(n,u)],f=C[0],y=C[1],R=(c={},Object(o.a)(c,V.a.CURRENCY_A,f),Object(o.a)(c,V.a.CURRENCY_B,y),Object(o.a)(c,V.a.LIQUIDITY,null===m||void 0===m?void 0:m.liquidityToken),c),I=Object(q.a)(null===m||void 0===m?void 0:m.liquidityToken),E=m&&I&&h&&f&&j.e.greaterThanOrEqual(I.raw,h.raw)?new j.k(f,m.getLiquidityValue(f,I,h,!1).raw):void 0,g=m&&I&&h&&y&&j.e.greaterThanOrEqual(I.raw,h.raw)?new j.k(y,m.getLiquidityValue(y,I,h,!1).raw):void 0,U=(a={},Object(o.a)(a,V.a.CURRENCY_A,E),Object(o.a)(a,V.a.CURRENCY_B,g),a),w=new j.g("0","100");if(O===V.a.LIQUIDITY_PERCENT)w=new j.g(v,"100");else if(O===V.a.LIQUIDITY){if(null===m||void 0===m?void 0:m.liquidityToken){var Y=Object(Q.a)(v,m.liquidityToken);Y&&h&&!Y.greaterThan(h)&&(w=new j.g(Y.raw,h.raw))}}else if(R[O]){var N=Object(Q.a)(v,R[O]),_=U[O];N&&_&&!N.greaterThan(_)&&(w=new j.g(N.raw,_.raw))}var k,S,B=(r={},Object(o.a)(r,V.a.LIQUIDITY_PERCENT,w),Object(o.a)(r,V.a.LIQUIDITY,h&&w&&w.greaterThan("0")?new j.k(h.token,w.multiply(h.raw).quotient):void 0),Object(o.a)(r,V.a.CURRENCY_A,f&&w&&w.greaterThan("0")&&E?new j.k(f,w.multiply(E.raw).quotient):void 0),Object(o.a)(r,V.a.CURRENCY_B,y&&w&&w.greaterThan("0")&&g?new j.k(y,w.multiply(g.raw).quotient):void 0),r);return d||(k="Connect Wallet"),B[V.a.LIQUIDITY]&&B[V.a.CURRENCY_A]&&B[V.a.CURRENCY_B]||(k=null!==(S=k)&&void 0!==S?S:"Enter an amount"),{pair:m,parsedAmounts:B,error:k}}(null!==je&&void 0!==je?je:void 0,null!==Oe&&void 0!==Oe?Oe:void 0),we=Ue.pair,Ye=Ue.parsedAmounts,Ne=Ue.error,_e=function(){var e=Object(A.b)();return{onUserInput:Object(d.useCallback)((function(n,t){e(Object(V.b)({field:n,typedValue:t}))}),[e])}}().onUserInput,ke=!Ne,Se=Object(d.useState)(!1),Le=Object(l.a)(Se,2),Be=Le[0],Pe=Le[1],Ae=Object(d.useState)(!1),De=Object(l.a)(Ae,2),qe=De[0],Qe=De[1],Fe=Object(d.useState)(""),Ve=Object(l.a)(Fe,2),Me=Ve[0],ze=Ve[1],He=Object(Y.a)(),We=Object(H.n)(),Ge=Object(l.a)(We,1)[0],Je=(Z={},Object(o.a)(Z,V.a.LIQUIDITY_PERCENT,Ye[V.a.LIQUIDITY_PERCENT].equalTo("0")?"0":Ye[V.a.LIQUIDITY_PERCENT].lessThan(new j.g("1","100"))?"<1":Ye[V.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)(Z,V.a.LIQUIDITY,ge===V.a.LIQUIDITY?Te:null!==(c=null===(s=Ye[V.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==c?c:""),Object(o.a)(Z,V.a.CURRENCY_A,ge===V.a.CURRENCY_A?Te:null!==(u=null===(z=Ye[V.a.CURRENCY_A])||void 0===z?void 0:z.toSignificant(6))&&void 0!==u?u:""),Object(o.a)(Z,V.a.CURRENCY_B,ge===V.a.CURRENCY_B?Te:null!==(K=null===(X=Ye[V.a.CURRENCY_B])||void 0===X?void 0:X.toSignificant(6))&&void 0!==K?K:""),Z),Ke=null===($=Ye[V.a.LIQUIDITY_PERCENT])||void 0===$?void 0:$.equalTo(new j.g("1")),Xe=Object(w.i)(null===we||void 0===we||null===(ee=we.liquidityToken)||void 0===ee?void 0:ee.address),Ze=Object(d.useState)(null),$e=Object(l.a)(Ze,2),en=$e[0],nn=$e[1],tn=Object(B.b)(Ye[V.a.LIQUIDITY],g.t),cn=Object(l.a)(tn,2),an=cn[0],rn=cn[1];function on(){return(on=Object(r.a)(a.a.mark((function e(){var n,t,i,c,r,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Xe&&we&&pe&&He){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=Ye[V.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,Xe.nonces(xe);case 7:t=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],c={name:"Pancake LPs",version:"1",chainId:me,verifyingContract:we.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:xe,spender:g.t,value:n.raw.toString(),nonce:t.toHexString(),deadline:He.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:c,primaryType:"Permit",message:o}),pe.send("eth_signTypedData_v4",[xe,l]).then(b.splitSignature).then((function(e){nn({v:e.v,r:e.r,s:e.s,deadline:He.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&rn()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ln=Object(d.useCallback)((function(e,n){return nn(null),_e(e,n)}),[_e]),sn=Object(d.useCallback)((function(e){return ln(V.a.LIQUIDITY,e)}),[ln]),dn=Object(d.useCallback)((function(e){return ln(V.a.CURRENCY_A,e)}),[ln]),un=Object(d.useCallback)((function(e){return ln(V.a.CURRENCY_B,e)}),[ln]),bn=Object(N.d)();function jn(){return On.apply(this,arguments)}function On(){return(On=Object(r.a)(a.a.mark((function e(){var n,t,c,r,l,s,d,u,b,O,x,m,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(me&&pe&&xe&&He){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=Ye[V.a.CURRENCY_A],c=Ye[V.a.CURRENCY_B],t&&c){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(k.g)(me,pe,xe),n={},Object(o.a)(n,V.a.CURRENCY_A,Object(k.c)(t,Ge)[0]),Object(o.a)(n,V.a.CURRENCY_B,Object(k.c)(c,Ge)[0]),l=n,je&&Oe){e.next=9;break}throw new Error("missing tokens");case 9:if(s=Ye[V.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=Oe===j.d,u=je===j.d||d,fe&&ye){e.next=16;break}throw new Error("could not wrap");case 16:if(an!==B.a.APPROVED){e.next=20;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],O=[d?fe.address:ye.address,s.raw.toString(),l[d?V.a.CURRENCY_A:V.a.CURRENCY_B].toString(),l[d?V.a.CURRENCY_B:V.a.CURRENCY_A].toString(),xe,He.toHexString()]):(b=["removeLiquidity"],O=[fe.address,ye.address,s.raw.toString(),l[V.a.CURRENCY_A].toString(),l[V.a.CURRENCY_B].toString(),xe,He.toHexString()]),e.next=25;break;case 20:if(null===en){e.next=24;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],O=[d?fe.address:ye.address,s.raw.toString(),l[d?V.a.CURRENCY_A:V.a.CURRENCY_B].toString(),l[d?V.a.CURRENCY_B:V.a.CURRENCY_A].toString(),xe,en.deadline,!1,en.v,en.r,en.s]):(b=["removeLiquidityWithPermit"],O=[fe.address,ye.address,s.raw.toString(),l[V.a.CURRENCY_A].toString(),l[V.a.CURRENCY_B].toString(),xe,en.deadline,!1,en.v,en.r,en.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(b.map((function(e){var n;return(n=r.estimateGas)[e].apply(n,Object(i.a)(O)).then(k.b).catch((function(n){console.error("estimateGas failed",e,O,n)}))})));case 27:if(x=e.sent,-1!==(m=x.findIndex((function(e){return v.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=b[m],h=x[m],Qe(!0),e.next=38,r[p].apply(r,Object(i.a)(O).concat([{gasLimit:h,gasPrice:Ie}])).then((function(e){var n,t;Qe(!1),bn(e,{summary:"Remove ".concat(null===(n=Ye[V.a.CURRENCY_A])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===je||void 0===je?void 0:je.symbol," and ").concat(null===(t=Ye[V.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol)}),ze(e.hash)})).catch((function(e){Qe(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function vn(){var e,n;return Object(G.jsxs)(m.a,{gap:"md",children:[Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.ub,{fontSize:"24px",children:null===(e=Ye[V.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:je,size:"24px"}),Object(G.jsx)(O.ub,{fontSize:"24px",ml:"10px",children:null===je||void 0===je?void 0:je.symbol})]})]}),Object(G.jsx)(y.c,{children:Object(G.jsx)(O.a,{width:"16px"})}),Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.ub,{fontSize:"24px",children:null===(n=Ye[V.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:Oe,size:"24px"}),Object(G.jsx)(O.ub,{fontSize:"24px",ml:"10px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]})]}),Object(G.jsx)(O.ub,{small:!0,textAlign:"left",pt:"12px",children:Re("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Ge/100})})]})}function xn(){var e,n,t;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.ub,{children:Re("%assetA%/%assetB% Burned",{assetA:null!==(e=null===je||void 0===je?void 0:je.symbol)&&void 0!==e?e:"",assetB:null!==(n=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==n?n:""})}),Object(G.jsxs)(y.c,{children:[Object(G.jsx)(E.b,{currency0:je,currency1:Oe,margin:!0}),Object(G.jsx)(O.ub,{children:null===(t=Ye[V.a.LIQUIDITY])||void 0===t?void 0:t.toSignificant(6)})]})]}),we&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.ub,{children:Re("Price")}),Object(G.jsxs)(O.ub,{children:["1 ",null===je||void 0===je?void 0:je.symbol," = ",fe?we.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(y.b,{children:[Object(G.jsx)("div",{}),Object(G.jsxs)(O.ub,{children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," = ",ye?we.priceOf(ye).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]})]}),Object(G.jsx)(O.n,{disabled:!(an===B.a.APPROVED||null!==en),onClick:jn,children:Re("Confirm")})]})}var mn=Re("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(ne=null===(te=Ye[V.a.CURRENCY_A])||void 0===te?void 0:te.toSignificant(6))&&void 0!==ne?ne:"",symbolA:null!==(ie=null===je||void 0===je?void 0:je.symbol)&&void 0!==ie?ie:"",amountB:null!==(ce=null===(ae=Ye[V.a.CURRENCY_B])||void 0===ae?void 0:ae.toSignificant(6))&&void 0!==ce?ce:"",symbolB:null!==(re=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==re?re:""}),pn=Object(d.useCallback)((function(e){ln(V.a.LIQUIDITY_PERCENT,e.toString())}),[ln]),hn=je===j.d||Oe===j.d,Cn=Boolean(me&&(je&&Object(j.o)(j.n[me],je)||Oe&&Object(j.o)(j.n[me],Oe))),fn=Object(d.useCallback)((function(e){be&&Object(S.a)(e)===be?se.push("/remove/".concat(Object(S.a)(e),"/").concat(ue)):se.push("/remove/".concat(Object(S.a)(e),"/").concat(be))}),[ue,be,se]),yn=Object(d.useCallback)((function(e){ue&&Object(S.a)(e)===ue?se.push("/remove/".concat(be,"/").concat(Object(S.a)(e))):se.push("/remove/".concat(ue,"/").concat(Object(S.a)(e)))}),[ue,be,se]),Rn=Object(d.useCallback)((function(){nn(null),Me&&ln(V.a.LIQUIDITY_PERCENT,"0"),ze("")}),[ln,Me]),In=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),c=Object(l.a)(i,2),a=c[0],r=c[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){n(e),o.current=void 0}),t)}),[t,n]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[a,s]}(Number.parseInt(Ye[V.a.LIQUIDITY_PERCENT].toFixed(0)),pn),En=Object(l.a)(In,2),gn=En[0],Tn=En[1],Un=Object(O.Mb)(Object(G.jsx)(p.c,{title:Re("You will receive"),customOnDismiss:Rn,attemptingTxn:qe,hash:Me||"",content:function(){return Object(G.jsx)(p.a,{topContent:vn,bottomContent:xn})},pendingText:mn}),!0,!0,"removeLiquidityModal"),wn=Object(l.a)(Un,1)[0];return Object(G.jsxs)(W.a,{children:[Object(G.jsxs)(f.a,{children:[Object(G.jsx)(f.b,{backTo:"/pool",title:Re("Remove %assetA%-%assetB% liquidity",{assetA:null!==(oe=null===je||void 0===je?void 0:je.symbol)&&void 0!==oe?oe:"",assetB:null!==(le=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==le?le:""}),subtitle:"To receive ".concat(null===je||void 0===je?void 0:je.symbol," and ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol),noConfig:!0}),Object(G.jsxs)(O.s,{children:[Object(G.jsxs)(m.a,{gap:"20px",children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.ub,{children:Re("Amount")}),Object(G.jsx)(O.n,{variant:"text",scale:"sm",onClick:function(){return Pe(!Be)},children:Re(Be?"Simple":"Detailed")})]}),!Be&&Object(G.jsxs)(J,{children:[Object(G.jsxs)(O.ub,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Je[V.a.LIQUIDITY_PERCENT],"%"]}),Object(G.jsx)(O.rb,{name:"lp-amount",min:0,max:100,value:gn,onValueChanged:function(e){return Tn(Math.ceil(e))},mb:"16px"}),Object(G.jsxs)(O.L,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(G.jsx)(O.n,{color:"#FFF",scale:"sm",onClick:function(){return ln(V.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(G.jsx)(O.n,{color:"#FFF",scale:"sm",onClick:function(){return ln(V.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(G.jsx)(O.n,{color:"#FFF",scale:"sm",onClick:function(){return ln(V.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(G.jsx)(O.n,{color:"#FFF",scale:"sm",onClick:function(){return ln(V.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!Be&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(m.b,{children:Object(G.jsx)(O.d,{color:"textSubtle",width:"24px",my:"16px"})}),Object(G.jsxs)(m.a,{gap:"10px",children:[Object(G.jsx)(O.ub,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("You will receive")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(O.L,{justifyContent:"space-between",mb:"8px",children:[Object(G.jsxs)(O.L,{children:[Object(G.jsx)(E.a,{currency:je}),Object(G.jsx)(O.ub,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===je||void 0===je?void 0:je.symbol})]}),Object(G.jsx)(O.ub,{small:!0,children:Je[V.a.CURRENCY_A]||"-"})]}),Object(G.jsxs)(O.L,{justifyContent:"space-between",children:[Object(G.jsxs)(O.L,{children:[Object(G.jsx)(E.a,{currency:Oe}),Object(G.jsx)(O.ub,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]}),Object(G.jsx)(O.ub,{small:!0,children:Je[V.a.CURRENCY_B]||"-"})]}),me&&(Cn||hn)?Object(G.jsx)(y.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:hn?Object(G.jsx)(_.a,{to:"/remove/".concat(je===j.d?j.n[me].address:ue,"/").concat(Oe===j.d?j.n[me].address:be),children:Re("Receive WBNB")}):Cn?Object(G.jsx)(_.a,{to:"/remove/".concat(je&&Object(j.o)(je,j.n[me])?"BNB":ue,"/").concat(Oe&&Object(j.o)(Oe,j.n[me])?"BNB":be),children:Re("Receive BNB")}):null}):null]})]})]}),Be&&Object(G.jsxs)(O.m,{my:"16px",children:[Object(G.jsx)(h.a,{value:Je[V.a.LIQUIDITY],onUserInput:sn,onMax:function(){ln(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ke,disableCurrencySelect:!0,currency:null===we||void 0===we?void 0:we.liquidityToken,pair:we,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.d,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Je[V.a.CURRENCY_A],onUserInput:dn,onMax:function(){return ln(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ke,currency:je,label:Re("Output"),onCurrencySelect:fn,id:"remove-liquidity-tokena"}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.a,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Je[V.a.CURRENCY_B],onUserInput:un,onMax:function(){return ln(V.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ke,currency:Oe,label:Re("Output"),onCurrencySelect:yn,id:"remove-liquidity-tokenb"})]}),we&&Object(G.jsxs)(m.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(G.jsx)(O.ub,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("Prices")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(O.L,{justifyContent:"space-between",children:[Object(G.jsxs)(O.ub,{small:!0,color:"textSubtle",children:["1 ",null===je||void 0===je?void 0:je.symbol," ="]}),Object(G.jsxs)(O.ub,{small:!0,children:[fe?we.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(O.L,{justifyContent:"space-between",children:[Object(G.jsxs)(O.ub,{small:!0,color:"textSubtle",children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," ="]}),Object(G.jsxs)(O.ub,{small:!0,children:[ye?we.priceOf(ye).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]})]})]}),Object(G.jsx)(O.m,{position:"relative",mt:"16px",children:xe?Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.n,{variant:an===B.a.APPROVED||null!==en?"success":"primary",onClick:function(){return on.apply(this,arguments)},disabled:an!==B.a.NOT_APPROVED||null!==en,width:"100%",mr:"0.5rem",children:an===B.a.PENDING?Object(G.jsx)(P.a,{children:Re("Enabling")}):an===B.a.APPROVED||null!==en?Re("Enabled"):Re("Enable")}),Object(G.jsx)(O.n,{variant:!ke&&Ye[V.a.CURRENCY_A]&&Ye[V.a.CURRENCY_B]?"danger":"primary",onClick:function(){wn()},width:"100%",disabled:!ke||null===en&&an!==B.a.APPROVED,children:Ne||Re("Remove")})]}):Object(G.jsx)(R.a,{})})]})]}),we?Object(G.jsx)(m.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(G.jsx)(C.a,{showUnwrapped:Cn,pair:we})}):null]})}},788:function(e,n,t){"use strict";var i,c=t(9),a=t(81),r=t(4),o=Object(r.e)(a.b)(i||(i=Object(c.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));n.a=o}}]);
//# sourceMappingURL=6.62a279bd.chunk.js.map