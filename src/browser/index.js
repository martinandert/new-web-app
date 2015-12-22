import { render } from 'react-dom';
import { Router } from 'react-router';
import { createHistory } from 'history';

import routes from '../routes';

render(
  <Router routes={routes} history={createHistory()} />,
  document.getElementById('mount')
);

if (__DEV__ && module.hot) {
  const source = new EventSource('/__webpack_hmr');
  source.onmessage = (e) => {
    if (e.data === '\uD83D\uDC93') return;
    const data = JSON.parse(e.data);
    if (data.action !== 'built') return;
    const sheets = document.styleSheets;
    console.log('[CSS-in-JS HMR] Reloading...');

    setTimeout(() => {
      for (let i = 0, ii = sheets.length; i < ii; i++) {
        sheets[i].ownerNode.href = sheets[i].href + '?hmr';
      }
    }, 250);
  };
}
