import{p as m}from"./args-BsCWOTAb.js";import{h as b,s as y}from"./help-BJyDtiPg.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"3097f9d48cb4422c86ed4468c033b1ebaf503a65"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="044f14e8-7d93-472c-959f-8df583fcd695",e._sentryDebugIdIdentifier="sentry-dbid-044f14e8-7d93-472c-959f-8df583fcd695")})()}catch{}const C={name:"tr",summary:"translate or delete characters",usage:"tr [OPTION]... SET1 [SET2]",options:["-c, -C, --complement   use the complement of SET1","-d, --delete           delete characters in SET1","-s, --squeeze-repeats  squeeze repeated characters","    --help             display this help and exit"],description:`SET syntax:
  a-z         character range
  [:alnum:]   all letters and digits
  [:alpha:]   all letters
  [:digit:]   all digits
  [:lower:]   all lowercase letters
  [:upper:]   all uppercase letters
  [:space:]   all whitespace
  [:blank:]   horizontal whitespace
  [:punct:]   all punctuation
  [:print:]   all printable characters
  [:graph:]   all printable characters except space
  [:cntrl:]   all control characters
  [:xdigit:]  all hexadecimal digits
  \\n, \\t, \\r  escape sequences`},w=new Map([["[:alnum:]","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"],["[:alpha:]","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"],["[:blank:]"," 	"],["[:cntrl:]",Array.from({length:32},(e,r)=>String.fromCharCode(r)).join("").concat("")],["[:digit:]","0123456789"],["[:graph:]",Array.from({length:94},(e,r)=>String.fromCharCode(33+r)).join("")],["[:lower:]","abcdefghijklmnopqrstuvwxyz"],["[:print:]",Array.from({length:95},(e,r)=>String.fromCharCode(32+r)).join("")],["[:punct:]","!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],["[:space:]",` 	
\r\f\v`],["[:upper:]","ABCDEFGHIJKLMNOPQRSTUVWXYZ"],["[:xdigit:]","0123456789ABCDEFabcdef"]]);function g(e){let r="",t=0;for(;t<e.length;){if(e[t]==="["&&e[t+1]===":"){let l=!1;for(const[c,a]of w)if(e.slice(t).startsWith(c)){r+=a,t+=c.length,l=!0;break}if(l)continue}if(e[t]==="\\"&&t+1<e.length){const l=e[t+1];l==="n"?r+=`
`:l==="t"?r+="	":l==="r"?r+="\r":r+=l,t+=2;continue}if(t+2<e.length&&e[t+1]==="-"){const l=e.charCodeAt(t),c=e.charCodeAt(t+2);for(let a=l;a<=c;a++)r+=String.fromCharCode(a);t+=3;continue}r+=e[t],t++}return r}const S={complement:{short:"c",long:"complement",type:"boolean"},complementUpper:{short:"C",type:"boolean"},delete:{short:"d",long:"delete",type:"boolean"},squeeze:{short:"s",long:"squeeze-repeats",type:"boolean"}},T={name:"tr",async execute(e,r){if(b(e))return y(C);const t=m("tr",e,S);if(!t.ok)return t.error;const l=t.result.flags.complement||t.result.flags.complementUpper,c=t.result.flags.delete,a=t.result.flags.squeeze,d=t.result.positional;if(d.length<1)return{stdout:"",stderr:`tr: missing operand
`,exitCode:1};if(!c&&!a&&d.length<2)return{stdout:"",stderr:`tr: missing operand after SET1
`,exitCode:1};const p=g(d[0]),s=d.length>1?g(d[1]):"",h=r.stdin,u=o=>{const n=p.includes(o);return l?!n:n};let i="";if(c)for(const o of h)u(o)||(i+=o);else if(a&&d.length===1){let o="";for(const n of h)u(n)&&n===o||(i+=n,o=n)}else{if(l){const o=s.length>0?s[s.length-1]:"";for(const n of h)p.includes(n)?i+=n:i+=o}else{const o=new Map;for(let n=0;n<p.length;n++){const f=n<s.length?s[n]:s[s.length-1];o.set(p[n],f)}for(const n of h)i+=o.get(n)??n}if(a){let o="",n="";for(const f of i)s.includes(f)&&f===n||(o+=f,n=f);i=o}}return{stdout:i,stderr:"",exitCode:0}}};export{T as trCommand};
//# sourceMappingURL=tr-Cnx0o0lW.js.map
