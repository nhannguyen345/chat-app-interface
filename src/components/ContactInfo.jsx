import CloseIcon from "@mui/icons-material/Close";
import ChatContext from "../context/chatContext";
import { useContext } from "react";
const ContactInfo = () => {
  const { showContactIf, handleChangeStatus } = useContext(ChatContext);

  return (
    <div
      className={`flex-1 max-sm:hidden bg-[#f0f2f5] dark:bg-[#202c33]  ${
        !showContactIf
          ? "hidden"
          : "animate-in slide-in-from-right-96 duration-300"
      }`}
    >
      <div className="flex flex-row gap-8 items-center h-[58px] w-full px-8 py-1 bg-[#f0f2f5] dark:bg-[#202c33]">
        <CloseIcon
          className="hover:cursor-pointer dark:fill-[#aebac1]"
          sx={{ fontSize: 24, color: "#5c6c75" }}
          onClick={handleChangeStatus}
        />
        <span className="text-lg text-[#585858] dark:text-white">
          Contact info
        </span>
      </div>
      <div className="w-full h-fit flex flex-col items-center gap-3 py-8 bg-white dark:bg-[#111b21]">
        <img
          className="rounded-full shadow-md ring-1 ring-black ring-opacity-15 w-[200px] h-[200px]"
          src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1"
          alt=""
        />
        <span className="text-2xl font-medium text-[#455260] dark:text-white">
          Maria Ozawa
        </span>
      </div>
      <div className="w-full mt-2 px-8 py-2 bg-white dark:bg-[#111b21]">
        <span className="text-[#797979] dark:text-white">About</span>
        <p className="mt-2 text-lg dark:text-white">
          Hi, I am using messenger app.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
