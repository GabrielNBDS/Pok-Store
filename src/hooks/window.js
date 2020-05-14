import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect
} from 'react';

const WindowContext = createContext({});

const WindowProvider = ({ children }) => {
  const getWindowDimensions = useCallback(()=> {
    const { innerWidth: width } = window;
    return width;
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getWindowDimensions]);

  const value = React.useMemo(
    () => ({ windowDimensions }),
    [windowDimensions],
  );

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
};

function useWindow() {
  const context = useContext(WindowContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { WindowProvider, useWindow };