
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/portfolio-app/home",
    "route": "/portfolio-app"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-app/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-app/resume"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-app/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-app/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-app/404"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3939, hash: 'a4e0f07cd98b47dd68eaebe40bcb05ee0d87ac7fe2f8e3a276fb6762651cb4fc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4452, hash: 'a2841102ceedfe2a755b439f585891e31da66cc8c752491527b5d696558e1ace', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 16773, hash: '52f566f269879517918363700fa323923ecddc18cea6391a7949dcf62daba812', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 15110, hash: 'b9a215b617651b0c1a51e97680cc7af277b317b7265167245853a0107ba802d6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19284, hash: '522078ae1c0018b616a9b31233e0bd5cbb446cc5492bf5c53ab24e818b8e37a7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 17293, hash: '30356f775a9ee3ea4b99b5f3b0495d1f983724d56342d4bcb5e07d0d6678e3d3', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 13323, hash: '74ea21a4a0d6f928b2e93329dfc12a271c3d3c402479ffcd774da0a2336ba40e', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
