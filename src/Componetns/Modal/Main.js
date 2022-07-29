import { Box, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import SwitchButton from "./SwitchButton";

const Main = () => {
  const [modalState] = useContext(ModalContext);

  return (
    <Box
      w={modalState.sidebarIsOpen ? `${modalState.mainWidth}%` : "100%"}
      transition={`width ${modalState.duration}s ease`}
      pos="relative"
      overflow="hidden"
    >
      <SwitchButton />
      <Box overflow="auto" h="100%">
        <Image
          src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          w="100%"
          mb="15px"
          alt=""
        />
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. What is Lorem Ipsum? Lorem Ipsum is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Box>
    </Box>
  );
};

export default Main;
