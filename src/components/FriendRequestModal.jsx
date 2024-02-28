import ChatContext from "../context/chatContext";
import { useContext } from "react";

const FriendRequestModal = () => {
  const { showFriendModal, handleShowFriendModal } = useContext(ChatContext);
  return <div>FriendRequestModal</div>;
};

export default FriendRequestModal;
