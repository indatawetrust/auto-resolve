[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/auto-resolve.svg)](https://travis-ci.org/indatawetrust/auto-resolve)

# auto-resolve
automatic promise detector for promise.all

#### usage
```js
import autoResolve from 'auto-resolve'

autoResolve([() => 5, Promise.resolve(4)]).then(console.log) // [5,4]

autoResolve(Promise.resolve(6)).then(console.log) // 6

autoResolve(() => 7).then(console.log) // 7

```
