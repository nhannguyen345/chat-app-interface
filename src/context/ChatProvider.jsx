import { useState } from "react";
import ChatContext from "./chatContext";
const ChatProvider = ({ children }) => {
  const [showContactIf, setShowContactIf] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showImageModal, setShowImageModal] = useState({
    show: false,
    imageUrl: "",
  });
  const [showFriendModal, setShowFriendModal] = useState({
    show: false,
    idxTab: -1,
    friend: {},
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

  const handleShowFriendModal = (flag, indexTab, infoFriend) => {
    setShowFriendModal({ show: flag, idxTab: indexTab, friend: infoFriend });
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
        showFriendModal,
        handleShowFriendModal,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
