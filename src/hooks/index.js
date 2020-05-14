import React from 'react';

import { CartProvider } from './cart';
import { WindowProvider } from './window';

const AppProvider = ({ children }) => (
  <WindowProvider>
    <CartProvider>{children}</CartProvider>
  </WindowProvider>
);

export default AppProvider;