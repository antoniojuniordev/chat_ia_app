import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from 'core/styles/theme';
import Chat from 'screens/chat';

export default function ProvidersConfig() {
  return (
    <ThemeProvider theme={theme}>
      <Chat />
    </ThemeProvider>
  );
}
