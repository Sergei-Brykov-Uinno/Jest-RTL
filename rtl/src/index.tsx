import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import { store } from 'store/configureStore';

import { QueryParamRouteAdapter } from 'components/global/QueryParamRouteAdapter/QueryParamRouteAdapter';

import App from './App';

import 'styles/index.scss';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={QueryParamRouteAdapter}>
        <App />
      </QueryParamProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
