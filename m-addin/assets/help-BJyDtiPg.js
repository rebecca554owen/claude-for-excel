(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"3097f9d48cb4422c86ed4468c033b1ebaf503a65"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4c2a1df7-a407-47ef-9407-c7e85ba20918",e._sentryDebugIdIdentifier="sentry-dbid-4c2a1df7-a407-47ef-9407-c7e85ba20918")})()}catch{}function s(e){let n=`${e.name} - ${e.summary}

`;if(n+=`Usage: ${e.usage}
`,e.description){if(n+=`
Description:
`,typeof e.description=="string")for(const t of e.description.split(`
`))n+=t?`  ${t}
`:`
`;else if(e.description.length>0)for(const t of e.description)n+=t?`  ${t}
`:`
`}if(e.options&&e.options.length>0){n+=`
Options:
`;for(const t of e.options)n+=`  ${t}
`}if(e.examples&&e.examples.length>0){n+=`
Examples:
`;for(const t of e.examples)n+=`  ${t}
`}if(e.notes&&e.notes.length>0){n+=`
Notes:
`;for(const t of e.notes)n+=`  ${t}
`}return{stdout:n,stderr:"",exitCode:0}}function o(e){return e.includes("--help")}function d(e,n){return{stdout:"",stderr:n.startsWith("--")?`${e}: unrecognized option '${n}'
`:`${e}: invalid option -- '${n.replace(/^-/,"")}'
`,exitCode:1}}export{o as h,s,d as u};
//# sourceMappingURL=help-BJyDtiPg.js.map
