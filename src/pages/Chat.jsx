import ChatMain from "../components/Chatmain";
import ContactInfo from "../components/Contactinfo";
import LeftBar from "../components/LeftBar";
import ChatProvider from "../context/ChatProvider";

const Chat = () => {
  return (
    <div className="flex shadow-md max-sm:max-w-full h-[96vh] overflow-hidden">
      <ChatProvider>
        <LeftBar />
        <ChatMain />
        <ContactInfo />
      </ChatProvider>
    </div>
  );
};

export default Chat;
