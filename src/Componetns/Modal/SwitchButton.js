import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { ModalContext } from "../../context/modalContext";
import { useContext } from "react";

const SwitchButton = () => {
  const [modalState, setModalState] = useContext(ModalContext);
  const { onOpen, onClose } = useDisclosure();

  const onToggleSidebarHandler = () => {
    if (modalState.sidebarIsOpen) {
      onClose();
      setModalState({
        ...modalState,
        sidebarIsOpen: false
      });
    } else {
      onOpen();
      setModalState({
        ...modalState,
        sidebarIsOpen: true
      });
    }
  };

  return (
    <Box
      bg="white"
      p={2}
      borderBottomLeftRadius="5px"
      pos="absolute"
      right="0"
      top="0"
    >
      <Button p={0} onClick={onToggleSidebarHandler}>
        {modalState.sidebarIsOpen ? <ArrowRightIcon /> : <ArrowLeftIcon />}
      </Button>
    </Box>
  );
};

export default SwitchButton;
