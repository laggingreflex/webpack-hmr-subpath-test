
Repro for https://github.com/webpack/webpack/pull/5864

When using hot module reloading in an app on a `/sub/path`, it tries to fetch the updates via url `/sub/xxx.hot-update.json` which it doesn't find and therefore end up doing a full reload.

```
npm i
npm start
```

Open `http://localhost:8080/sub/path`

Modify **`app.js`**:

```
render(h(Router, {}, [
  h('div', { path: '/', }, ['Home']),
  h('div', { path: '/path' }, ['/path']),
  h('div', { path: '/sub/path' }, [' !!! >>> MODIFY ME <<< !!!!!']),
]), document.getElementById('app'));
```

