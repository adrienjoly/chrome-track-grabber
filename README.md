# Chrome-track-grabber

Based on [React Chrome Extension Boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate.git).

=> Published on [Chrome Web Store](https://chrome.google.com/webstore/detail/track-grabber/negicmkgmegjckjoagfdlmbegmdbdpnc)

## Installation

```bash
$ git clone https://github.com/adrienjoly/chrome-track-grabber.git
$ npm install
```

## Development

* Run script
```bash
# build files to './dev'
# start WebpackDevServer
$ npm run dev
```
* Allow `https://localhost:3000` connections. (Because `injectpage` injected GitHub (https) pages, so `webpack-dev-server` procotol must be https.)
* [Load unpacked extensions](https://developer.chrome.com/extensions/getstarted#unpacked) with `./dev` folder.

#### React/Redux hot reload

This boilerplate uses `Webpack` and `react-transform`, and use `Redux`. You can hot reload by editing related files of Popup & Window & Inject page.

#### Using Redux DevTools Extension

You can use [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) on development mode.

## Build (production release)

```bash
# build files to './build'
$ npm run build
```

## Compress and publish to Chrome Web Store

First, set version in `/chrome/manifest.prod.json`.

```bash
# compress build folder to {manifest.name}.zip and crx
$ npm run build
$ npm run compress -- [options]
```

...then upload `Track grabber.zip` to [Chrome Web Store Dashboard](https://chrome.google.com/webstore/developer/dashboard).

#### Options

If you want to build `crx` file (auto update), please provide options, and add `update.xml` file url in [manifest.json](https://developer.chrome.com/extensions/autoupdate#update_url manifest.json).

* --app-id: your extension id (can be get it when you first release extension)
* --key: your private key path (default: './key.pem')  
  you can use `npm run compress-keygen` to generate private key `./key.pem`
* --codebase: your `crx` file url

See [autoupdate guide](https://developer.chrome.com/extensions/autoupdate) for more information.

## Test

* `test/app`: React components, Redux actions & reducers tests
* `test/e2e`: E2E tests (use [chromedriver](https://www.npmjs.com/package/chromedriver), [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver))

```bash
# lint
$ npm run lint
# test/app
$ npm test
$ npm test -- --watch  # watch files
# test/e2e
$ npm run build
$ npm run test-e2e
```

## LICENSE

[MIT](LICENSE)
