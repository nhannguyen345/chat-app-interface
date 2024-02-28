import ChatContext from "../context/chatContext";
import { useContext } from "react";

const SendFriendRequestModal = () => {
  const { showFriendModal, handleShowFriendModal } = useContext(ChatContext);
  return <div>SendFriendRequestModal</div>;
};

export default SendFriendRequestModal;
