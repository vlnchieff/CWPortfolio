
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CWPortfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/CWPortfolio/home",
    "route": "/CWPortfolio"
  },
  {
    "renderMode": 2,
    "route": "/CWPortfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/CWPortfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/CWPortfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/CWPortfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/CWPortfolio/404"
  },
  {
    "renderMode": 2,
    "route": "/CWPortfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3937, hash: 'd9733b36b69f610188a5c3db799563239edff60a45a14dcfa5285049b6ba3bfa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4450, hash: '2dfd3f1681b3561235eafaa719b9589b0ab7121c05349bca2a7e0a541ef85663', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 15100, hash: 'b424fd39226b9574bf113778bc4716941755767b173c91d9c4b3b838e35782f8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 13311, hash: 'c4946207cac25f1a32ec36d671f18478d04483a3d285dfc576edb83738bc7962', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 17283, hash: '71ee6aa8770ece28dddddcd7680081258c5e2243e1d936bd672328afc47ec3de', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 16763, hash: '9683674251852bff335150e9c59b8365703e623971452a3a6825d17d4e94ce40', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19274, hash: '95328dd3401cea3e04a829034f4cd5da11546f6b3e1215f43ecdf2c3e08fa479', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
