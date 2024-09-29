import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { persistorStore, store } from './state';
import App from './App.tsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistorStore}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
