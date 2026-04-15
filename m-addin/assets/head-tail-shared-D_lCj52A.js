import{u as b}from"./help-BJyDtiPg.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"3097f9d48cb4422c86ed4468c033b1ebaf503a65"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="ec69f926-8238-4f93-9d2f-36a11cffab14",e._sentryDebugIdIdentifier="sentry-dbid-ec69f926-8238-4f93-9d2f-36a11cffab14")})()}catch{}function w(e,s){let n=10,i=null,o=!1,l=!1,r=!1;const a=[];for(let f=0;f<e.length;f++){const t=e[f];if(t==="-n"&&f+1<e.length){const u=e[++f];s==="tail"&&u.startsWith("+")?(r=!0,n=parseInt(u.slice(1),10)):n=parseInt(u,10)}else if(s==="tail"&&t.startsWith("-n+"))r=!0,n=parseInt(t.slice(3),10);else if(t.startsWith("-n"))n=parseInt(t.slice(2),10);else if(t==="-c"&&f+1<e.length)i=parseInt(e[++f],10);else if(t.startsWith("-c"))i=parseInt(t.slice(2),10);else if(t.startsWith("--bytes="))i=parseInt(t.slice(8),10);else if(t.startsWith("--lines="))n=parseInt(t.slice(8),10);else if(t==="-q"||t==="--quiet"||t==="--silent")o=!0;else if(t==="-v"||t==="--verbose")l=!0;else if(t.match(/^-\d+$/))n=parseInt(t.slice(1),10);else{if(t.startsWith("--"))return{ok:!1,error:b(s,t)};if(t.startsWith("-")&&t!=="-")return{ok:!1,error:b(s,t)};a.push(t)}}return i!==null&&(Number.isNaN(i)||i<0)?{ok:!1,error:{stdout:"",stderr:`${s}: invalid number of bytes
`,exitCode:1}}:Number.isNaN(n)||n<0?{ok:!1,error:{stdout:"",stderr:`${s}: invalid number of lines
`,exitCode:1}}:{ok:!0,options:{lines:n,bytes:i,quiet:o,verbose:l,files:a,fromLine:r}}}async function I(e,s,n,i){const{quiet:o,verbose:l,files:r}=s;if(r.length===0)return{stdout:i(e.stdin),stderr:"",exitCode:0};let a="",f="",t=0;const u=l||!o&&r.length>1;let d=0;for(let c=0;c<r.length;c++){const h=r[c];try{const p=e.fs.resolvePath(e.cwd,h),g=await e.fs.readFile(p);u&&(d>0&&(a+=`
`),a+=`==> ${h} <==
`),a+=i(g),d++}catch{f+=`${n}: ${h}: No such file or directory
`,t=1}}return{stdout:a,stderr:f,exitCode:t}}function k(e,s,n){if(n!==null)return e.slice(0,n);if(s===0)return"";let i=0,o=0;const l=e.length;for(;i<l&&o<s;){const r=e.indexOf(`
`,i);if(r===-1)return`${e}
`;o++,i=r+1}return i>0?e.slice(0,i):""}function v(e,s,n,i){if(n!==null)return e.slice(-n);const o=e.length;if(o===0)return"";if(i){let f=0,t=1;for(;f<o&&t<s;){const d=e.indexOf(`
`,f);if(d===-1)break;t++,f=d+1}const u=e.slice(f);return u.endsWith(`
`)?u:`${u}
`}if(s===0)return"";let l=o-1;e[l]===`
`&&l--;let r=0;for(;l>=0&&r<s;){if(e[l]===`
`&&(r++,r===s)){l++;break}l--}l<0&&(l=0);const a=e.slice(l);return e[o-1]===`
`?a:`${a}
`}export{I as a,v as b,k as g,w as p};
//# sourceMappingURL=head-tail-shared-D_lCj52A.js.map
