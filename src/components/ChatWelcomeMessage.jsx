import logo from "../assets/Logo.png";
const ChatWelcomeMessage = () => {
  return (
    <div className="flex-1 h-full flex flex-col justify-center items-center bg-slate-100">
      <img className="h-[260px]" src={logo} alt="" />
      <span className="text-2xl font-extralight text-gray-600 max-w-[600px] text-center">
        Start your new chat by clicking any conversation in left side
      </span>
    </div>
  );
};

export default ChatWelcomeMessage;
