# cyberwar-2025

> A cyber themed educational wargame. Designed and developed at Naval Postgraduate School (Grad: December 2017).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Occasional Error (When Building After Cloning)
```
Error: Cannot find module 'fs.realpath'
    at Function.Module._resolveFilename (module.js:485:15)
    at Function.Module._load (module.js:437:25)
    at Module.require (module.js:513:17)
    at require (internal/module.js:11:18)
```
FIX:
``` bash
# remove outdated files
rm -rf node_modules
rm package-lock.json

# reinstall
npm install
```
