import { createContext, useState } from "react";

export const ModalContext = createContext();

const Provider = ({ children }) => {
  const [modalState, setModalState] = useState({
    mainWidth: 65, // %
    sidebarWidth: 35, // %
    duration: 0.5, // transition
    sidebarIsOpen: false // on start
  });
  return (
    <ModalContext.Provider value={[modalState, setModalState]}>
      {children}
    </ModalContext.Provider>
  );
};

export default Provider;
