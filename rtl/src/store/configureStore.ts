import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { appConfig } from 'constants/appConfig';
import { baseApi } from 'services/baseApi';
import { rootReducer, combinedReducer } from 'store/rootReducer';

function configureAppStore() {
  const logger = createLogger({
    collapsed: true,
  });

  let middleware = new MiddlewareArray().concat(baseApi.middleware);

  if (appConfig.isDev) {
    middleware = middleware.concat(logger);
  }

  const devTools = appConfig.isDev;

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    devTools,
  });

  if (appConfig.isDev && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
  }

  return store;
}

const store = configureAppStore();

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;

export { store };
