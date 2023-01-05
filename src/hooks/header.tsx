import React, { createContext, useContext, useState } from 'react';

interface HeaderVisibleContextData {
  getHeaderVisible: boolean;
  setHeaderVisible: (visible: boolean) => void;
}

const HeaderVisibleContext = createContext<HeaderVisibleContextData>(
  {} as HeaderVisibleContextData,
);

const HeaderVisibleProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(true);

  const setHeaderVisible = (v: boolean) => {
    setVisible(v);
  };

  return (
    <HeaderVisibleContext.Provider
      value={{ getHeaderVisible: visible, setHeaderVisible }}>
      {children}
    </HeaderVisibleContext.Provider>
  );
};

function useHeaderVisible(): HeaderVisibleContextData {
  return useContext(HeaderVisibleContext);
}

export { HeaderVisibleProvider, useHeaderVisible };
