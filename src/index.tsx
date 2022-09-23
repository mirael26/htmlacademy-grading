import * as React from 'react';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import App from 'components/app/app';
import store from 'components/store/store';

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
  ,
  document.getElementById('root'),
);
