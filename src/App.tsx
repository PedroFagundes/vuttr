import React from 'react';

import { ToolsProvider } from './contexts/tools';

import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <ToolsProvider>
      <Dashboard />
    </ToolsProvider>
  );
};

export default App;
