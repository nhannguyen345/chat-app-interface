import ChatContext from "../context/chatContext";
import { useContext } from "react";

const FriendInfoModal = () => {
  const { showFriendModal, handleShowFriendModal } = useContext(ChatContext);
  return (
    <div className="absolute top-0 left-0 z-20 h-[100%] w-[100%]">
      <div className="h-full w-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-fit w-fit bg-white shadow-xl rounded-lg ring-gray-600 p-5">
        {/* Header chứa nút đóng */}
        <div className="w-full flex flex-row justify-end p-1">
          <span className="text-2xl font-medium text-[#54656f]">
            Friend Infomation
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendInfoModal;
