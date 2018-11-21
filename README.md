# FOLIO ERM platform

Copyright (C) 2015-2018 The Open Library Foundation

This software is distributed under the terms of the Apache License,
Version 2.0. See the file "[LICENSE](LICENSE)" for more information.

## Introduction

This is the ERM Stripes "platform". It consists simply of an
NPM [`package.json`](https://docs.npmjs.com/files/package.json) that
specifies the version of `@folio/stripes-core` and of any Stripes
modules you wish to make available as part of the ERM platform
to generate client bundles along with a utility for generating
module descriptors for each Stripes module.

Please see the
[quick start guide](https://github.com/folio-org/stripes/blob/master/doc/quick-start.md)
for more information.

The `stripes.config.js` is a configuration for a specific tenant. In
general, a platform supports multiple tenants, each of which may
include a different set of the available modules.  You can copy the
`stripes.config.js` file to be your `stripes.config.js.local`
configuration file.

## Installation

After cloning and `cd`ing into the directory, install platform dependencies
```
$ yarn config set @folio:registry https://repository.folio.org/repository/npm-folioci/
$ yarn
```

## Build and serve

To build and serve `platform-erm` in isolation for development purposes, run the "start" package script.
```
$ yarn start
```

The default configuration assumes an Okapi instance is running on http://localhost:9130 with tenant "diku".  The options `--okapi` and `--tenant` can be provided to match your environment.
```
$ yarn start --okapi http://localhost:9130 --tenant diku
```

To build a `platform-erm` bundle for production, modify `stripes.config.js` with your Okapi and tenant, then run the "build" script, passing it the name of the desired directory to place build artifacts.
```
$ yarn build ./output
```

See the [build](https://github.com/folio-org/stripes-cli/blob/master/doc/commands.md#build-command) and [serve](https://github.com/folio-org/stripes-cli/blob/master/doc/commands.md#serve-command) command reference in `stripes-cli` for a list of available options.

## Developing and Contributing to ERM Modules

To contribute to the modules (ui-agreements, ui-licenses, etc) that compose this platform, we recommend using the `stripes-cli` [Yarn Workspace functionality](https://github.com/folio-org/stripes-cli/blob/master/doc/user-guide.md#platform-development). 

- [After installing `stripes-cli`](https://github.com/folio-org/stripes-cli#installation), create a workspace using `stripes workspace` and selecting which modules you wish to wish to clone locally, enabling you to make local modifications and contribute to them. 
  - Note: Ensure you have selected `platform-erm` so that you can run the entire platform.
- `cd` into the created workspace (titled `stripes` by default) and run `yarn` to install the dependencies.
  - Note: Run `stripes platform pull` to `git pull` changes to the cloned repos.
  - Note: Rerun `yarn` whenever you want to fetch new versions of NPM modules that have _not_ been cloned locally.
- `cd` into `platform-erm`, and run `yarn start` to start serving.
- Note: If you do not have permissions to push branches to the repos directly, you can create a fork of that repo on Github, delete the copy that was cloned when running `stripes workspace`, and replace it with a manual clone of your _forked_ repo. Then you'll be able to push changes to that fork and make pull requests from that fork into the official folio-org repo.


## Tests

### Integration tests

Integration tests require a running Okapi.  The default configuration expects Okapi running on http://localhost:9130 with tenant "diku".  To build and run integration tests for `platform-erm` with these defaults, run the `test-int` script.
```
$ yarn test-int
```

To view tests while they are run, provide the `--show` option.
```
$ yarn test-int --show
```

To skip the build step and run integration tests against a build that is already running, provide the URL.
```
$ yarn test-int --url http://folio-testing.aws.indexdata.com/
```

As a convenience, `--local` can be used in place of `--url http://localhost:3000` for running tests against a development server that has already been started.
```
$ yarn test-int --local
```

### Regression tests

Integration tests for the entire platform and its apps can be run with the "test-regression" script.  This will invoke both cross-module tests defined in this platform's repository as well as all integration tests defined for the individual apps.

```
$ yarn test-regression --url http://folio-testing.aws.indexdata.com/
```

### Running specific tests

The `test-int` package script, when combined with the `--run` option, can be used for running specific tests for the platform and/or apps.  Use `WD` (working directory) when referencing platform tests, otherwise use the module app module name.

Example running "loan_renewal" test in `platform-erm`:
```
$ yarn test-int --run WD:loan_renewal
```

Example running "new_user" test in `ui-users`:
```
$ yarn test-regression --run users:new_user
```

## Additional information

See project [FOLIO](https://issues.folio.org/browse/FOLIO)
at the [FOLIO issue tracker](https://dev.folio.org/guidelines/issue-tracker/).

Other FOLIO Developer documentation is at [dev.folio.org](https://dev.folio.org/)

