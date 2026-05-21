module.exports = {
  okapi: {
    url: 'http://localhost:8000',
    uiUrl: 'https://localhost:3000',
    authnUrl: 'http://keycloak.eureka:8080'
  },
  config: {
    useOkapiInterfaces: false,
    logCategories: 'core,path,action,xhr',
    showPerms: true,
    tenantOptions: {
      diku: { name: 'diku', clientId: 'diku-application' }
    },
    useSecureTokens: true,
    rtr: {
      idleSessionTTL: '4h',
      idleModalTTL: '2m',
    }
  },
  modules: {
    '@folio/acquisition-units': {},
    '@folio/agreements': {},
    '@folio/dashboard': {},
    '@folio/handler-stripes-registry': {},
    '@folio/erm-usage': {},
    '@folio/erm-comparisons': {},
    '@folio/eholdings': {},
    '@folio/local-kb-admin': {},
    '@folio/licenses': {},
    '@folio/notes': {},
    '@folio/oa': {},
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
    '@folio/serials-management': {},
    '@folio/service-interaction': {},
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
