// import '@spygar-pim-edition/shared/src/components/keenicons/assets/duotone/';
// import './components/keenicons/assets/duotone/style.css';
// import '../../shared/src/components/keenicons/assets/duotone/style.css';

// const shared = import('@spygar-pim-edition/shared/src/components/keenicons/assets/duotone/');
//       shared += "./components/keenicons/assets/duotone/style.css";
//       shared + "./components/keenicons/assets/duotone/style.css";





import '@spygar-pim-edition/shared/components/keenicons/assets/duotone/style.css';

import '@spygar-pim-edition/shared/components/keenicons/assets/outline/style.css';
import '@spygar-pim-edition/shared/components/keenicons/assets/filled/style.css';
import '@spygar-pim-edition/shared/components/keenicons/assets/solid/style.css';
import './css/styles.css';

import axios from 'axios';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { setupAxios } from './auth';
import { ProvidersWrapper } from './providers';
import React from 'react';

/**
 * Inject interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  </React.StrictMode>
);
