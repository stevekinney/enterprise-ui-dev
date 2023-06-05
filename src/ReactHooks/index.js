import './styles.css';
import { createElement } from './utils';

const React = (function () {
  let hooks = [];
  let idx = 0;

  function useState(initVal) {
    const state = hooks[idx] || initVal;
    const _idx = idx;
    const setState = (newVal) => {
      hooks[_idx] = newVal;
    };
    idx++;
    return [state, setState];
  }

  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  function useEffect(cb, depArray) {
    const oldDeps = hooks[idx];
    let hasChanged = true;

    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }
    // detect change
    if (hasChanged) {
      cb();
    }
    hooks[idx] = depArray;
    idx++;
  }

  return {
    useState,
    createElement,
    render,
    useEffect,
  };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState('Apple');
  React.useEffect(() => {
    console.log('jsc');
  }, [count, text]);
  return <h1> Hello Word </h1>;
}

let App = React.render(Component);
App.click();
App = React.render(Component);
App.type('Pear');
App = React.render(Component);
