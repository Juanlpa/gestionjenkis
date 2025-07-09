
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/usuarios"
  },
  {
    "renderMode": 2,
    "route": "/seguros"
  },
  {
    "renderMode": 2,
    "route": "/contratos"
  },
  {
    "renderMode": 2,
    "route": "/clientes"
  },
  {
    "renderMode": 2,
    "route": "/reembolsos"
  },
  {
    "renderMode": 2,
    "route": "/reembolsos/crear"
  },
  {
    "renderMode": 2,
    "route": "/reembolsos/pendientes"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28076, hash: 'e1ca28f1efce1ef24f9c3f2d1965baf9fdb243c0d6847552f8b2711d06882e79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17143, hash: 'e4f73966c6548055ff14489218799099e74c8f5acfd2880aebc23248ffa187a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 35823, hash: 'bd441a80eff0ebfd2730d923b9928f054ba928ebbd0cb45f0aaf107b10b9e1f5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'usuarios/index.html': {size: 35823, hash: 'bd441a80eff0ebfd2730d923b9928f054ba928ebbd0cb45f0aaf107b10b9e1f5', text: () => import('./assets-chunks/usuarios_index_html.mjs').then(m => m.default)},
    'seguros/index.html': {size: 35823, hash: 'bd441a80eff0ebfd2730d923b9928f054ba928ebbd0cb45f0aaf107b10b9e1f5', text: () => import('./assets-chunks/seguros_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 35823, hash: 'bd441a80eff0ebfd2730d923b9928f054ba928ebbd0cb45f0aaf107b10b9e1f5', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'clientes/index.html': {size: 35823, hash: 'bd441a80eff0ebfd2730d923b9928f054ba928ebbd0cb45f0aaf107b10b9e1f5', text: () => import('./assets-chunks/clientes_index_html.mjs').then(m => m.default)},
    'reembolsos/index.html': {size: 35823, hash: 'bd441a80eff0ebfd2730d923b9928f054ba928ebbd0cb45f0aaf107b10b9e1f5', text: () => import('./assets-chunks/reembolsos_index_html.mjs').then(m => m.default)},
    'reembolsos/crear/index.html': {size: 35823, hash: 'bd441a80eff0ebfd2730d923b9928f054ba928ebbd0cb45f0aaf107b10b9e1f5', text: () => import('./assets-chunks/reembolsos_crear_index_html.mjs').then(m => m.default)},
    'contratos/index.html': {size: 35823, hash: 'bd441a80eff0ebfd2730d923b9928f054ba928ebbd0cb45f0aaf107b10b9e1f5', text: () => import('./assets-chunks/contratos_index_html.mjs').then(m => m.default)},
    'reembolsos/pendientes/index.html': {size: 35823, hash: 'bd441a80eff0ebfd2730d923b9928f054ba928ebbd0cb45f0aaf107b10b9e1f5', text: () => import('./assets-chunks/reembolsos_pendientes_index_html.mjs').then(m => m.default)},
    'styles-SI3AFDTC.css': {size: 323096, hash: 'qJBIDsU6JtI', text: () => import('./assets-chunks/styles-SI3AFDTC_css.mjs').then(m => m.default)}
  },
};
