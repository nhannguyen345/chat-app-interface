import { useState } from "react";
import bgChat from "../assets/bgChat.png";
import Picker from "emoji-picker-react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SendIcon from "@mui/icons-material/Send";
import ChatContext from "../context/chatContext";
import { useContext } from "react";

const ChatMain = () => {
  const [displayEmoji, setDisplayEmoji] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { showContactIf, handleChangeStatus } = useContext(ChatContext);

  const onEmojiClick = (emojiData, event) => {
    console.log(event);
    setInputValue((prevInput) => prevInput + emojiData.emoji);
  };

  return (
    <div
      className={
        "min-w-[40vw] h-full flex flex-col border-l-2 border-r-2 max-sm:hidden" +
        (!showContactIf ? " w-full" : "")
      }
    >
      {/* Thanh tiêu đề */}
      <div className="flex flex-row gap-4 items-center h-[58px] w-full px-5 py-1 bg-[#f0f2f5]">
        <img
          className="rounded-full shadow-md ring-1 ring-black ring-opacity-5 h-[42px] w-[42px] object-cover hover:cursor-pointer"
          src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1"
          alt=""
        />
        <div className="min-w-[120px] mr-5 flex flex-col justify-evenly">
          <span className="font-normal">Maria Ozawa</span>
          <span
            className="font-medium text-sm text-gray-400 hover:cursor-pointer"
            onClick={handleChangeStatus}
          >
            Click here for more info
          </span>
        </div>
      </div>

      {/* Nội dung chat */}
      <div
        className="w-full flex-1"
        style={{ backgroundImage: `url(${bgChat})` }}
      ></div>

      {/* Phần nhập liệu */}
      <div className="relative h-[80px] w-full flex flex-row justify-around items-center bg-[#F0F2F5] px-5">
        <div
          className={
            displayEmoji ? "block absolute bottom-[60px] left-[10px]" : "hidden"
          }
        >
          <Picker onEmojiClick={onEmojiClick} />
        </div>
        <InsertEmoticonIcon
          className="hover:cursor-pointer transform transition-transform active:scale-110"
          sx={{ fontSize: 28, color: "#5c6c75" }}
          onClick={() => setDisplayEmoji(!displayEmoji)}
        />
        <div className="relative">
          <AddPhotoAlternateOutlinedIcon
            className="relative hover:cursor-pointer transform transition-transform active:scale-110"
            sx={{ fontSize: 28, color: "#5c6c75" }}
          />
          <input
            className="absolute left-0 file:cursor-pointer w-[30px] opacity-0"
            type="file"
            accept="image/*"
            multiple={false}
          />
        </div>
        <input
          className="resize-none w-9/12 h-[50px] p-3 rounded-md outline-none"
          placeholder="Type a message"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <SendIcon
          className="hover:cursor-pointer transform transition-transform active:scale-110"
          sx={{ fontSize: 28, color: "#5c6c75" }}
        />
      </div>
    </div>
  );
};

export default ChatMain;
