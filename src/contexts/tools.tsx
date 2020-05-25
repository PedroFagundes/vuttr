import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

import ToolInterface from '../models/Tool';

interface ToolsContextInterface {
  tools: ToolInterface[];
  setTools: (tools: ToolInterface[]) => void;
  toolToRemove: ToolInterface | null;
  setToolToRemove: (tool: ToolInterface) => void;
  modalVisibility: boolean;
  setModalVisibility: (state: boolean) => void;
}

const ToolsContext = createContext<ToolsContextInterface>(
  {} as ToolsContextInterface,
);

export const ToolsProvider: React.FC = ({ children }) => {
  const [tools, setTools] = useState<ToolInterface[]>([]);
  const [toolToRemove, setToolToRemove] = useState<ToolInterface | null>(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    api.get('/tools').then(response => {
      setTools(response.data);
    });
  }, []);

  return (
    <ToolsContext.Provider
      value={{
        tools,
        setTools,
        toolToRemove,
        setToolToRemove,
        modalVisibility,
        setModalVisibility,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
};

export default ToolsContext;
