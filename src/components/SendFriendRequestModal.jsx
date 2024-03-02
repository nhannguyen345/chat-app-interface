import ChatContext from "../context/chatContext";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { blue, red } from "@mui/material/colors";

const SendFriendRequestModal = (props) => {
  const { showFriendModal, handleShowFriendModal } = useContext(ChatContext);
  return (
    <div className="absolute top-0 left-0 z-20 h-[100%] w-[100%]">
      <div className="h-full w-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-fit sm:max-w-[400px] md:w-[400px] bg-white shadow-xl rounded-lg ring-gray-600 p-2 text-center">
        {/* Tên đầu đề */}
        <span className="text-2xl font-semibold text-[#54656f] py-5 block w-full mx-auto">
          Add New Contact
        </span>
        {/* Phần nội dung */}
        <div className="flex flex-col justify-center items-center">
          {/* <div className="w-full mb-6 h-[0.5px] bg-gray-400"></div> */}
          <img
            className="rounded-full shadow-md ring-1 ring-black ring-opacity-15 w-[140px] h-[140px]"
            src={showFriendModal.friend.avatarUrl}
            alt=""
          />
          <span className="text-lg font-medium text-[#54656f] mt-2">
            {showFriendModal.friend.name}
          </span>
          <div className="w-2/4 mt-2 h-[0.1px] bg-gray-400"></div>
          <div className="w-full mt-2 px-8 py-2 bg-white">
            <span className="text-[#54656f] underline">About</span>
            <p className="mt-2 text-[#54656f]">Hi, I am using messenger app.</p>
          </div>
          <div className="w-full mt-2 h-[0.5px] bg-gray-400"></div>
          <div className="w-full pt-6 pb-3 ">
            <p className=" text-[#54656f] font-medium text-[18px]">
              Do you want to send a friend request to this person?
            </p>
            <div className="w-2/5 py-2 mx-auto">
              <DoneIcon
                className="float-left bg-blue-100 rounded-full shadow-sm"
                sx={{
                  color: blue[600],
                  fontSize: 36,
                  padding: "3px",
                  cursor: "pointer",
                }}
              />
              <CloseIcon
                className="float-right bg-red-100 rounded-full shadow-sm"
                sx={{
                  color: red[600],
                  fontSize: 36,
                  padding: "3px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleShowFriendModal(false, -1, {}),
                    props.handleClose({
                      tabIndex: -1,
                      itemIndex: -1,
                    });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendFriendRequestModal;
