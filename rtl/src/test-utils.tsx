import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';

const AllTheProviders = (
  {
    children,
  }: PropsWithChildren<unknown>,
) => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render };
