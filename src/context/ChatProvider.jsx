import { useState } from "react";
import ChatContext from "./chatContext";
const ChatProvider = ({ children }) => {
  const [showContactIf, setShowContactIf] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleChangeStatus = () => {
    setShowContactIf(!showContactIf);
  };

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <ChatContext.Provider
      value={{
        showContactIf,
        handleChangeStatus,
        showProfile,
        handleShowProfile,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
