module.exports = {
  okapi: { 'url':'https://okapi-folio.apps.k-int.com', 'tenant':'gbv' },
  config: {
    // autoLogin: { username: 'diku_admin', password: 'admin' }
    // logCategories: 'core,redux,connect,connect-fetch,substitute,path,mpath,mquery,action,event,perm,interface,xhr'
    // logPrefix: 'stripes'
    // logTimestamp: false
    // showPerms: false
    // showHomeLink: false
    // listInvisiblePerms: false
    // disableAuth: false
    // hasAllPerms: true
  },
  modules: {
    '@folio/agreements': {},
    '@folio/erm-usage': {},
    '@folio/licenses': {},
    '@folio/notes': {},
    '@folio/orders': {},
    '@folio/organizations': {},
    '@folio/plugin-find-agreement': {},
    '@folio/plugin-find-interface': {},
    '@folio/plugin-find-license': {},
    '@folio/plugin-find-organization': {},
    '@folio/plugin-find-user': {},
    '@folio/stripes-erm-components': {},
    '@folio/tags': {},
    '@folio/tenant-settings': {},
    '@folio/users': {},
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
