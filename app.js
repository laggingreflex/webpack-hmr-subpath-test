import Router from 'preact-router';
import { h, render } from 'preact';

render(h(Router, {}, [
  h('div', { path: '/', }, ['Home']),
  h('div', { path: '/path' }, ['/path']),
  h('div', { path: '/sub/path' }, [' !!! >>> MODIFY ME <<< !!!!!']),
]), document.getElementById('app'));

module.hot.accept()
