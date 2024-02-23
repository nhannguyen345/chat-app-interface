import { useState } from "react";
import ChatContext from "./chatContext";
const ChatProvider = ({ children }) => {
  const [showContactIf, setShowContactIf] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showImageModal, setShowImageModal] = useState({
    show: false,
    imageUrl: "",
  });
  const handleChangeStatus = () => {
    setShowContactIf(!showContactIf);
  };

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleShowImageModal = (flag, url) => {
    setShowImageModal({ show: flag, imageUrl: url });
  };

  return (
    <ChatContext.Provider
      value={{
        showContactIf,
        handleChangeStatus,
        showProfile,
        handleShowProfile,
        showImageModal,
        handleShowImageModal,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
