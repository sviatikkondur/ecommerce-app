import React from 'react'
import { createRoot } from 'react-dom/client'
import { RootComponent } from './RootComponent';
import { Provider } from 'react-redux';
import { store } from './store/store'

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <RootComponent />
  </Provider>
);