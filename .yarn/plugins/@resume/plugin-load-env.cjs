/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@resume/plugin-load-env",
factory: function (require) {
var plugin=(()=>{var R=Object.create;var E=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var U=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var l=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var w=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),L=(e,t)=>{for(var n in t)E(e,n,{get:t[n],enumerable:!0})},D=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of J(t))!A.call(e,a)&&a!==n&&E(e,a,{get:()=>t[a],enumerable:!(r=H(t,a))||r.enumerable});return e};var $=(e,t,n)=>(n=e!=null?R(U(e)):{},D(t||!e||!e.__esModule?E(n,"default",{value:e,enumerable:!0}):n,e)),M=e=>D(E({},"__esModule",{value:!0}),e);var y=w((ie,W)=>{W.exports={name:"dotenv",version:"16.0.3",description:"Loads environment variables from .env file",main:"lib/main.js",types:"lib/main.d.ts",exports:{".":{require:"./lib/main.js",types:"./lib/main.d.ts",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},scripts:{"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec",prerelease:"npm test",release:"standard-version"},repository:{type:"git",url:"git://github.com/motdotla/dotenv.git"},keywords:["dotenv","env",".env","environment","variables","config","settings"],readmeFilename:"README.md",license:"BSD-2-Clause",devDependencies:{"@types/node":"^17.0.9",decache:"^4.6.1",dtslint:"^3.7.0",sinon:"^12.0.1",standard:"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2",tap:"^15.1.6",tar:"^6.1.11",typescript:"^4.5.4"},engines:{node:">=12"}}});var V=w((oe,j)=>{var G=l("fs"),P=l("path"),I=l("os"),Q=y(),z=Q.version,K=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function X(e){let t={},n=e.toString();n=n.replace(/\r\n?/mg,`
`);let r;for(;(r=K.exec(n))!=null;){let a=r[1],s=r[2]||"";s=s.trim();let i=s[0];s=s.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),i==='"'&&(s=s.replace(/\\n/g,`
`),s=s.replace(/\\r/g,"\r")),t[a]=s}return t}function F(e){console.log(`[dotenv@${z}][DEBUG] ${e}`)}function Y(e){return e[0]==="~"?P.join(I.homedir(),e.slice(1)):e}function Z(e){let t=P.resolve(process.cwd(),".env"),n="utf8",r=Boolean(e&&e.debug),a=Boolean(e&&e.override);e&&(e.path!=null&&(t=Y(e.path)),e.encoding!=null&&(n=e.encoding));try{let s=b.parse(G.readFileSync(t,{encoding:n}));return Object.keys(s).forEach(function(i){Object.prototype.hasOwnProperty.call(process.env,i)?(a===!0&&(process.env[i]=s[i]),r&&F(a===!0?`"${i}" is already defined in \`process.env\` and WAS overwritten`:`"${i}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[i]=s[i]}),{parsed:s}}catch(s){return r&&F(`Failed to load ${t} ${s.message}`),{error:s}}}var b={config:Z,parse:X};j.exports.config=b.config;j.exports.parse=b.parse;j.exports=b});var te={};L(te,{default:()=>ne});var _=l("util"),c=l("path"),o=l("fs"),S=l("@yarnpkg/cli"),p=l("clipanion"),v=$(V()),k=$(l("typanion")),B=async(e,t="production")=>{let n={};n.NODE_ENV=t||"development";let r=(0,c.resolve)(e,".env"),a=(0,o.existsSync)(r),s=(0,c.resolve)(e,".env.prod"),i=(0,c.resolve)(e,".env.production"),O=(0,o.existsSync)(s),d=(0,o.existsSync)(i),f=(0,c.resolve)(e,".env.dev"),g=(0,c.resolve)(e,".env.development"),m=(0,o.existsSync)(f),h=(0,o.existsSync)(g),N=(0,c.resolve)(e,".env.test"),x=(0,c.resolve)(e,".env.testing"),q=(0,o.existsSync)(N),T=(0,o.existsSync)(x);return a&&Object.assign(n,(0,v.parse)(await o.promises.readFile(r,"utf8"))),n.NODE_ENV==="production"&&(O&&Object.assign(n,(0,v.parse)(await o.promises.readFile(s,"utf8"))),d&&Object.assign(n,(0,v.parse)(await o.promises.readFile(i,"utf8")))),n.NODE_ENV==="development"&&(m&&Object.assign(n,(0,v.parse)(await o.promises.readFile(f,"utf8"))),h&&Object.assign(n,(0,v.parse)(await o.promises.readFile(g,"utf8")))),n.NODE_ENV==="test"&&(q&&Object.assign(n,(0,v.parse)(await o.promises.readFile(N,"utf8"))),T&&Object.assign(n,(0,v.parse)(await o.promises.readFile(x,"utf8")))),n},C=p.Command.Usage({description:"print environment variables",details:`
This command will print environment variables.

Environment variables are loaded from the following files:

 - .env

For NODE_ENV=production:  

 - .env.prod
 - .env.production

For NODE_ENV=development:  

 - .env.dev
 - .env.development

For NODE_ENV=test:  

 - .env.test
 - .env.testing
`.trimStart(),examples:[["Print environment variables","$0 env"],["Print environment variables for NODE_ENV=development","$0 env --env dev,development"],["Print environment variables for NODE_ENV=production","$0 env --env prod,production"],["Print environment variables for NODE_ENV=test","$0 env --env test,testing"],["Print environment as json","$0 env --json"],["Print environment as json-object","$0 env --json --object"],["Print environment as bash string (default)","$0 env --text"]],category:"Environment"}),u=class extends S.BaseCommand{constructor(){super(...arguments);this.text=p.Option.Boolean("--text",!0,{description:"Print environment as json"});this.json=p.Option.Boolean("--json",!1,{description:"Print environment as json"});this.object=p.Option.Boolean("--object,-o",!1,{description:"Print environment as javascript object. Uses with --json together"});this.envVar=p.Option.String("--envVar","production",{description:"Print and set environment variables for NODE_ENV",validator:k.isEnum(["production","development","testing","prod","dev","test"])})}async execute(){let n=["development","dev"],r=["production","prod"],a=["testing","test"],s=n.includes(this.envVar)?"development":r.includes(this.envVar)?"production":a.includes(this.envVar)?"test":"production",i={},O=[process.cwd().split(c.sep)[0],""].join(c.sep),d=process.cwd();for(;d.split(c.sep).length>1&&process.platform==="win32"&&d!==O;){let m=await B(d,s);Object.assign(i,m),d=(0,c.dirname)(d)}let f=Object.entries(i).map(([m,h])=>`${m}=${h}`).join(`
`),g=this.json?this.object?(0,_.inspect)(i,{colors:!0})+`
`:JSON.stringify(i,null,2):f;this.context.stdout.write(`${g}
`)}};u.paths=[["env"]],u.usage=C;var ee={hooks:{async setupScriptEnvironment(e,t){let n=await B(t.PROJECT_CWD,t.NODE_ENV);Object.assign(t,n)}},commands:[u]},ne=ee;return M(te);})();
return plugin;
}
};
