module.exports = {
  okapi: {
    url: 'https://api-bugfest-trillium.int.aws.folio.org',
    uiUrl: 'https://localhost:3000',
    authnUrl: 'https://keycloak-bugfest-trillium.int.aws.folio.org'
  },
  config: {
    useOkapiInterfaces: false,
    logCategories: 'core,path,action,xhr',
    showPerms: true,
    tenantOptions: {
      fs09000000: { name: 'fs09000000', clientId: 'fs09000000-application' }
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
