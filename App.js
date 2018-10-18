// @flow

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import ContactContainer from './src/containers/contact-container/contact-container';

const store = configureStore({});

const app = () => (
  <Provider store={store}>
    <ContactContainer />
  </Provider>
);

export default app;
