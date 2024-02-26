import ChatMain from "../components/Chatmain";
import ContactInfo from "../components/ContactInfo";
import LeftBar from "../components/LeftBar";
import ChatProvider from "../context/ChatProvider";

const Chat = () => {
  return (
    <div>
      <div className="absolute bg-black bg-opacity-10 top-[0px] w-screen h-screen"></div>
      <div className="min-w-[360px] absolute inset-0 m-auto w-[98vw] h-[96vh] bg-white ">
        <div className="flex shadow-md max-sm:max-w-full h-[96vh] overflow-hidden">
          <ChatProvider>
            <LeftBar />
            <ChatMain />
            <ContactInfo />
          </ChatProvider>
        </div>
      </div>
    </div>
  );
};

export default Chat;
