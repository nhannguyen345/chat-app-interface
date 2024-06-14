import ChatMain from "../components/ChatMain";
import ContactInfo from "../components/ContactInfo";
import LeftBar from "../components/LeftBar";
import ChatProvider from "../context/ChatProvider";
import toast, { Toaster } from "react-hot-toast";
import WebSocketService from "../services/WebSocketService";
import { useEffect, useState } from "react";
import axios from "axios";
// #111b21

function getCurrentTime() {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let ampm = date.getHours() <= 12 ? "am" : "pm";

  return hours + ":" + minutes + " " + ampm;
}

const Chat = () => {
  let token = localStorage.getItem("key_token");
  const [isValidToken, setIsValidToken] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:3000/auth/cktoken", {
        token,
      })
      .then((res) => {
        console.log(res);
        setTimeout(() => toast.success("Đăng nhập thành công!"), 1000);
        let ws = WebSocketService.getInstance();
        ws.connect("http://localhost:3000");
        ws.query = {
          user: {
            id: localStorage.getItem("username"),
            lastMessage: "Click for more information",
            avatarUrl: "https://i.sstatic.net/l60Hf.png",
            date: getCurrentTime(),
          },
        };
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => toast.error("Bạn cần đăng nhập lại!"), 1000);
        setIsValidToken(false);
      });
  }, [token]);

  return (
    <div>
      {!isValidToken ? (
        <div className="absolute inset-0 m-auto w-[100vw] h-[100vh] bg-white">
          <h1>Đã có lỗi xảy ra! Bạn cần đăng nhập lại!</h1>
        </div>
      ) : (
        <div>
          <Toaster />
          <div className="absolute bg-black bg-opacity-10 top-[0px] w-screen h-screen"></div>
          <div className="min-w-[360px] absolute inset-0 m-auto w-[98vw] h-[96vh] bg-white ">
            <div className="flex shadow-md max-sm:max-w-full h-[96vh] overflow-hidden dark:bg-[#111b21]">
              <ChatProvider>
                <LeftBar />
                <ChatMain />
                <ContactInfo />
              </ChatProvider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
