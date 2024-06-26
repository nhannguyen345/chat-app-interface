import { useState, useEffect, useRef } from "react";
import bgChat from "../assets/bgChat.png";
// import bgChatDarkMode from "../assets/bg-darkmode.jpg";
import Picker from "emoji-picker-react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SendIcon from "@mui/icons-material/Send";
import ChatContext from "../context/chatContext";
import { useContext } from "react";
import ImageOverlay from "./ImageOverlay";
import WebSocketService from "../services/WebSocketService";

const ChatMain = () => {
  const ws = WebSocketService.getInstance();
  const [displayEmoji, setDisplayEmoji] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chatContent, setChatContent] = useState([]);
  const {
    showContactIf,
    handleChangeStatus,
    showImageModal,
    handleShowImageModal,
  } = useContext(ChatContext);

  const refDiv = useRef(null);

  const scrollToLastMessage = () => {
    const lastChildElement = refDiv.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [chatContent]);

  useEffect(() => {
    ws.on("roomCreated", (data) => {
      console.log(`${ws.socket.id} say: ${data}`);
    });
    return () => {
      ws.off("roomCreated");
    };
  }, [ws]);

  const onEmojiClick = (emojiData, event) => {
    console.log(event);
    setInputValue((prevInput) => prevInput + emojiData.emoji);
  };

  const handleSendMessage = () => {
    setChatContent((prevChat) => [
      ...prevChat,
      {
        messageType: "text",
        message: inputValue,
        date: "3:00 pm",
        sender: 2,
        receiver: 1,
      },
    ]);
    setInputValue("");
    ws.emit("message", {
      roomname: localStorage.getItem("username"),
      message: inputValue,
    });

    // ws.emit("message", localStorage.getItem("username"));
  };

  const handleSendImage = (e) => {
    const img = e.target.files[0];
    if (img) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setChatContent((prevChat) => [
          ...prevChat,
          {
            messageType: "image",
            message: e.target.result,
            date: "3:00 pm",
            sender: 1,
            receiver: 2,
          },
        ]);
      };
      reader.readAsDataURL(img);
    }
  };

  return (
    <div
      className={
        "min-w-[40vw] h-full flex flex-col border-l-[0.5px] dark:border-l-gray-700 border-r-[0.5px] dark:border-r-gray-700 max-sm:hidden" +
        (!showContactIf ? " w-full" : "")
      }
    >
      {/* Thanh tiêu đề */}
      <div className="flex flex-row gap-4 items-center h-[58px] w-full px-5 py-1 bg-[#f0f2f5] dark:bg-[#202c33]">
        <img
          className="rounded-full shadow-md ring-1 ring-black ring-opacity-5 h-[42px] w-[42px] object-cover hover:cursor-pointer"
          src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1"
          alt=""
        />
        <div className="min-w-[120px] mr-5 flex flex-col justify-evenly dark:text-[#E3E3E3]">
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
        ref={refDiv}
        className={`w-full h-full overflow-y-auto flex-1 flex flex-col font-sans`}
        style={{ backgroundImage: `url(${bgChat})` }}
      >
        {chatContent.map((message, index) => {
          if (message.sender === 1) {
            return (
              <div
                className="w-full px-4 my-[5px] flex flex-col items-end"
                key={index}
              >
                {message.messageType === "text" ? (
                  <p className="w-fit max-w-[65%] h-fit p-2 bg-[#8bb8d5] rounded-lg whitespace-pre-line text-sm">
                    {message.message}
                    {"\t"}
                    <span className="text-[12px] text-gray-600">
                      {message.date}
                    </span>
                  </p>
                ) : (
                  <img
                    className="max-w-[400px] max-h-[400px] p-[5px] bg-[#8bb8d5] rounded-lg float-right"
                    key={index}
                    src={message.message}
                    alt=""
                    onClick={() => {
                      handleShowImageModal(true, message.message);
                    }}
                  />
                )}
              </div>
            );
          } else {
            return (
              <div
                className="w-full px-4 my-[5px] flex flex-col items-start"
                key={index}
              >
                {message.messageType === "text" ? (
                  <p className="w-fit max-w-[65%] h-fit p-2 bg-[white] rounded-lg whitespace-pre-line text-sm">
                    {message.message}
                    {"\t"}
                    <span className="text-[12px] text-gray-400">
                      {message.date}
                    </span>
                  </p>
                ) : (
                  <img
                    className="max-w-[400px] max-h-[400px] p-[5px] bg-[white] rounded-lg"
                    key={index}
                    src={message.message}
                    alt=""
                    onClick={() => {
                      handleShowImageModal(true, message.message);
                    }}
                  />
                )}
              </div>
            );
          }
        })}

        {/* Nơi hiển thị chế độ xem ảnh */}
        {showImageModal.show ? (
          <ImageOverlay imageUrl={showImageModal.imageUrl} />
        ) : (
          ""
        )}
      </div>

      {/* Phần nhập liệu */}
      <div className="relative h-[80px] w-full flex flex-row justify-around items-center bg-[#F0F2F5] dark:bg-[#202c33] px-5">
        <div
          className={
            displayEmoji ? "block absolute bottom-[60px] left-[10px]" : "hidden"
          }
        >
          <Picker onEmojiClick={onEmojiClick} />
        </div>
        <InsertEmoticonIcon
          className="hover:cursor-pointer transform transition-transform active:scale-110 fill-[#5c6c75] dark:fill-[#aebac1] "
          sx={{ fontSize: 28 }}
          onClick={() => setDisplayEmoji(!displayEmoji)}
        />
        <div className="relative">
          <AddPhotoAlternateOutlinedIcon
            className="relative hover:cursor-pointer transform transition-transform active:scale-110 fill-[#5c6c75] dark:fill-[#aebac1]"
            sx={{ fontSize: 28 }}
          />
          <input
            className="absolute left-0 file:cursor-pointer w-[30px] opacity-0"
            type="file"
            accept="image/*"
            multiple={false}
            onChange={handleSendImage}
          />
        </div>
        <textarea
          className="resize-none w-9/12 h-[50px] p-3 rounded-md outline-none font-sans dark:bg-[#2c373d] dark:text-white"
          placeholder="Type a message"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <SendIcon
          className="hover:cursor-pointer transform transition-transform active:scale-110 fill-[#5c6c75] dark:fill-[#aebac1]"
          sx={{ fontSize: 28 }}
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatMain;
