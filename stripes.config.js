module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    // autoLogin: { username: 'diku_admin', password: 'admin' }
    // disableAuth: false
    // hasAllPerms: true
    // logCategories: 'core,redux,connect,connect-fetch,substitute,path,mpath,mquery,action,event,perm,interface,xhr'
    // logPrefix: 'stripes'
    // logTimestamp: false
    // showHomeLink: false
    // showPerms: false
  },
  modules: {
    '@folio/agreements': {},
    '@folio/dashboard': {},
    '@folio/stripes-registry': {},
    '@folio/erm-usage': {},
    '@folio/erm-comparisons': {},
    '@folio/eholdings': {},
    '@folio/local-kb-admin': {},
    '@folio/licenses': {},
    '@folio/notes': {},
    '@folio/orders': {},
    '@folio/organizations': {},
    '@folio/plugin-find-agreement': {},
    '@folio/plugin-find-eresource': {},
    '@folio/plugin-find-erm-usage-data-provider': {},
    '@folio/plugin-find-interface': {},
    '@folio/plugin-find-license': {},
    '@folio/plugin-find-organization': {},
    '@folio/plugin-find-package-title': {},
    '@folio/plugin-find-po-line': {},
    '@folio/plugin-find-user': {},
    '@folio/stripes-acq-components': {},
    '@folio/stripes-erm-components': {},
    '@folio/tags': {},
    '@folio/tenant-settings': {},
  },
  branding: {
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './tenant-assets/opentown-libraries-favicon.png',
    },
  },
};
