import{h as y,s as w,u as I}from"./help-BJyDtiPg.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"3097f9d48cb4422c86ed4468c033b1ebaf503a65"}}catch{}})();try{(function(){var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},l=new t.Error().stack;l&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[l]="b64ab79c-1468-4acd-b87b-ae715500c017",t._sentryDebugIdIdentifier="sentry-dbid-b64ab79c-1468-4acd-b87b-ae715500c017")})()}catch{}const $={name:"comm",summary:"compare two sorted files line by line",usage:"comm [OPTION]... FILE1 FILE2",options:["-1             suppress column 1 (lines unique to FILE1)","-2             suppress column 2 (lines unique to FILE2)","-3             suppress column 3 (lines that appear in both files)","    --help     display this help and exit"]},F={name:"comm",async execute(t,l){if(y(t))return w($);let r=!1,f=!1,d=!1;const u=[];for(const e of t)if(e==="-1")r=!0;else if(e==="-2")f=!0;else if(e==="-3")d=!0;else if(e==="-12"||e==="-21")r=!0,f=!0;else if(e==="-13"||e==="-31")r=!0,d=!0;else if(e==="-23"||e==="-32")f=!0,d=!0;else if(e==="-123"||e==="-132"||e==="-213"||e==="-231"||e==="-312"||e==="-321")r=!0,f=!0,d=!0;else{if(e.startsWith("-")&&e!=="-")return I("comm",e);u.push(e)}if(u.length!==2)return{stdout:"",stderr:`comm: missing operand
Try 'comm --help' for more information.
`,exitCode:1};const c=async e=>{if(e==="-")return l.stdin;try{const g=l.fs.resolvePath(l.cwd,e);return await l.fs.readFile(g)}catch{return null}},p=await c(u[0]);if(p===null)return{stdout:"",stderr:`comm: ${u[0]}: No such file or directory
`,exitCode:1};const m=await c(u[1]);if(m===null)return{stdout:"",stderr:`comm: ${u[1]}: No such file or directory
`,exitCode:1};const n=p.split(`
`),s=m.split(`
`);n.length>0&&n[n.length-1]===""&&n.pop(),s.length>0&&s[s.length-1]===""&&s.pop();let o=0,i=0,a="";const h=r?"":"	",b=(r?"":"	")+(f?"":"	");for(;o<n.length||i<s.length;)o>=n.length?(f||(a+=`${h}${s[i]}
`),i++):i>=s.length?(r||(a+=`${n[o]}
`),o++):n[o]<s[i]?(r||(a+=`${n[o]}
`),o++):n[o]>s[i]?(f||(a+=`${h}${s[i]}
`),i++):(d||(a+=`${b}${n[o]}
`),o++,i++);return{stdout:a,stderr:"",exitCode:0}}};export{F as commCommand};
//# sourceMappingURL=comm-Cu5Up9s9.js.map
