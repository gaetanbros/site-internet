import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CZr5fx-U.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_DzXfh8mT.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/alessandro/dev/projet-GB/arts/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.R4uwzAYe.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.R4uwzAYe.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.R4uwzAYe.css"}],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/themes/api/search.json","isIndex":false,"type":"endpoint","pattern":"^\\/themes\\/api\\/search\\.json\\/?$","segments":[[{"content":"themes","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"search.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/themes/api/search.json.ts","pathname":"/themes/api/search.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.R4uwzAYe.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/themes/search","isIndex":false,"type":"page","pattern":"^\\/themes\\/search\\/?$","segments":[[{"content":"themes","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/themes/search.astro","pathname":"/themes/search","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.R4uwzAYe.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/themes","isIndex":true,"type":"page","pattern":"^\\/themes\\/?$","segments":[[{"content":"themes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/themes/index.astro","pathname":"/themes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.R4uwzAYe.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://gaetan-bros.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/dev/projet-GB/arts/src/pages/themes/api/search.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/themes/api/search.json@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/dev/projet-GB/arts/src/pages/themes/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/themes/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/dev/projet-GB/arts/src/pages/themes/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/themes/search@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro/dev/projet-GB/arts/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/alessandro/dev/projet-GB/arts/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/alessandro/dev/projet-GB/arts/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/alessandro/dev/projet-GB/arts/src/pages/pricing.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astro-page:src/pages/themes/api/search.json@_@ts":"pages/themes/api/search.json.astro.mjs","\u0000@astro-page:src/pages/themes/search@_@astro":"pages/themes/search.astro.mjs","\u0000@astro-page:src/pages/themes/index@_@astro":"pages/themes.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/alessandro/dev/projet-GB/arts/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BF3TbEFb.mjs","/Users/alessandro/dev/projet-GB/arts/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/alessandro/dev/projet-GB/arts/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_fJKB41tJ.mjs","\u0000@astrojs-manifest":"manifest_ucqIuaMY.mjs","/Users/alessandro/dev/projet-GB/arts/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DmsDnWaQ.js","/Users/alessandro/dev/projet-GB/arts/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts":"_astro/MainLayout.astro_astro_type_script_index_0_lang.Up69IGqP.js","/Users/alessandro/dev/projet-GB/arts/src/components/sections/Process.astro?astro&type=script&index=0&lang.ts":"_astro/Process.astro_astro_type_script_index_0_lang.ttvnHaM7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/alessandro/dev/projet-GB/arts/src/pages/index.astro?astro&type=script&index=0&lang.ts","var e=t=>{const n=document.querySelectorAll(\".section-hidden\"),s=window.innerHeight;n.forEach(i=>{i.getBoundingClientRect().top<s*.8&&(t||i.classList.add(\"animate-fadein\"),i.classList.add(\"section-visible\"))})};e(!0);window.addEventListener(\"scroll\",e.bind(null,!1));"],["/Users/alessandro/dev/projet-GB/arts/src/components/sections/Process.astro?astro&type=script&index=0&lang.ts","var l=()=>{const o=document.querySelectorAll(\".step\"),i=document.querySelectorAll(\".step-anim\"),e=document.querySelectorAll(\".line\"),a=window.innerHeight;o.forEach((t,s)=>{t.getBoundingClientRect().top<a*.8?(t.classList.add(\"step-visible\"),i[s].classList.add(\"animate-fadein\"),s>=0&&e.length&&(e[s].classList.add(\"line-visible\"),e[s].classList.add(\"animate-grow\"))):(t.classList.remove(\"step-visible\"),i[s].classList.remove(\"animate-fadein\"),s>=0&&e.length&&(e[s].classList.remove(\"line-visible\"),e[s].classList.remove(\"animate-grow\")))})};l();window.addEventListener(\"scroll\",l);"]],"assets":["/_astro/company-logo10.CW3NrGS9.svg","/_astro/company-logo11.Nb6nMecf.svg","/_astro/company-logo1.Bk11-Coi.svg","/_astro/company-logo13.BKlN5i4x.svg","/_astro/company-logo12.B3kb-KZi.svg","/_astro/company-logo16.BggS1Vb1.svg","/_astro/company-logo14.B9iH6v0H.svg","/_astro/company-logo15.B8ZIgKlA.svg","/_astro/company-logo18.KAu26KDc.svg","/_astro/company-logo2.CtLxYi0k.svg","/_astro/company-logo20.B-o9S56h.svg","/_astro/company-logo19.B4YIhlFI.svg","/_astro/company-logo21.C_QOMIx0.png","/_astro/company-logo4.DLLYQHXF.svg","/_astro/company-logo6.D6a40Nf4.svg","/_astro/company-logo7.CjZ8uE4n.svg","/_astro/company-logo17.CuyMA3d5.svg","/_astro/company-logo3.CBUF2MTZ.svg","/_astro/company-logo5.z_2Rwi54.svg","/_astro/company-logo8.LumU4AzQ.svg","/_astro/company-logo9.CydgtFrz.svg","/_astro/StarShape2.DooLA-Xt.svg","/_astro/element2.BADjzBXD.png","/_astro/element3.C9eWbYBM.png","/_astro/StarShape3.qVC8K4_U.svg","/_astro/StarShape.ClntorPI.svg","/_astro/perf2.BaULdocp.jpeg","/_astro/element1.IR0bTqGT.png","/_astro/about.R4uwzAYe.css","/404.svg","/Logo.svg","/logo.png","/_astro/MainLayout.astro_astro_type_script_index_0_lang.Up69IGqP.js","/themes/theme1.png","/themes/theme10.png","/themes/theme11.png","/themes/theme12.png","/themes/theme13.png","/themes/theme14.png","/themes/theme15.png","/themes/theme16.png","/themes/theme17.png","/themes/theme18.png","/themes/theme19.png","/themes/theme2.png","/themes/theme20.png","/themes/theme21.png","/themes/theme22.png","/themes/theme23.png","/themes/theme24.png","/themes/theme25.png","/themes/theme26.png","/themes/theme27.png","/themes/theme28.png","/themes/theme29.png","/themes/theme3.png","/themes/theme30.png","/themes/theme31.png","/themes/theme4.png","/themes/theme5.png","/themes/theme6.png","/themes/theme7.png","/themes/theme8.png","/themes/theme9.png","/fonts/bricolage/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf","/fonts/grotesk/SpaceGrotesk-Medium.woff","/fonts/grotesk/SpaceGrotesk-Regular.woff"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"1AAVkgI6xJgBs9YW1LPQZ7oJM5h8rxa1R/7KDJJJtYE="});

export { manifest };
