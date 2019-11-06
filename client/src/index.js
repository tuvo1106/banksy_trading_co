/* modules */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'

/* components */
import App from './App'

/* styles */
import './index.css'

/* service worker */
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    {/* global Redux store */}
    <BrowserRouter>
      {/* Wrapper for React Router */}
      <PersistGate persistor={persistor}>
        {/* Takes Redux state object and saves it to persisted storage */}
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
)

serviceWorker.register()
