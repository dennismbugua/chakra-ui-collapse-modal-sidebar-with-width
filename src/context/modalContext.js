import { createContext, useState, useCallback } from "react";

export const ModalContext = createContext();

const Provider = ({ children }) => {
  const [modalState, setModalState] = useState({
    mainWidth: 70, // % - Optimized for better content display
    sidebarWidth: 30, // % - Professional sidebar width
    duration: 0.4, // transition - Smoother, faster transitions
    sidebarIsOpen: true, // on start - Show sidebar by default for better UX
    isAnimating: false, // Track animation state
    theme: 'professional' // Theme variant
  });

  // Enhanced state management with animation tracking
  const updateModalState = useCallback((updates) => {
    setModalState(prevState => ({
      ...prevState,
      ...updates,
      isAnimating: true
    }));

    // Clear animation flag after transition
    setTimeout(() => {
      setModalState(prevState => ({
        ...prevState,
        isAnimating: false
      }));
    }, modalState.duration * 1000);
  }, [modalState.duration]);

  // Toggle sidebar with enhanced state management
  const toggleSidebar = useCallback(() => {
    updateModalState({
      sidebarIsOpen: !modalState.sidebarIsOpen
    });
  }, [modalState.sidebarIsOpen, updateModalState]);

  // Adjust sidebar width dynamically
  const adjustSidebarWidth = useCallback((width) => {
    const newSidebarWidth = Math.max(20, Math.min(50, width)); // Constrain between 20-50%
    const newMainWidth = 100 - newSidebarWidth;
    
    updateModalState({
      sidebarWidth: newSidebarWidth,
      mainWidth: newMainWidth
    });
  }, [updateModalState]);

  const contextValue = {
    modalState,
    setModalState,
    updateModalState,
    toggleSidebar,
    adjustSidebarWidth
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default Provider;
