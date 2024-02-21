import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import { Tabs } from "./Tabs";
import ChatContext from "../context/chatContext";
import { useContext } from "react";
import Profile from "./Profile";

const iconStyle = {
  color: "#54656f", // Đặt màu sắc mong muốn ở đây
  // Các thuộc tính CSS khác nếu cần
};

const LeftBar = () => {
  const { showProfile, handleShowProfile } = useContext(ChatContext);

  return (
    <div className="max-w-[420px] h-full w-full">
      {showProfile ? (
        <Profile />
      ) : (
        <div className="h-full w-full">
          <div className="flex flex-row justify-between items-center h-[58px] w-full px-5 py-1 bg-[#f0f2f5]">
            <img
              className="rounded-full shadow-md ring-1 ring-black ring-opacity-15 h-[42px] w-[42px] object-cover hover:cursor-pointer"
              src="https://github.com/amitshuu/messenger-app/blob/main/client/src/assests/dummy_images/17a5c2c8df8a91680e74d9ae9871e11d.png?raw=true"
              alt=""
              onClick={handleShowProfile}
            />
            <div className="min-w-[120px] mr-5 flex flex-row justify-between">
              <LogoutIcon className="hover:cursor-pointer" style={iconStyle} />
              <SettingsIcon
                className="hover:cursor-pointer"
                style={iconStyle}
              />
              <DarkModeIcon
                className="hover:cursor-pointer"
                style={iconStyle}
              />
            </div>
          </div>
          <div className="bg-[#f0f2f5] sm:w-10/12 flex justify-between mt-3 ml-4 rounded-md py-[6px] px-3">
            <SearchIcon className="hover:cursor-pointer" style={iconStyle} />
            <div className="h-[26px] w-[1px] bg-gray-400 -ml-4"></div>
            <input
              className="bg-transparent outline-none w-5/6 placeholder-gray-600 text-sm"
              type="text"
              placeholder="Search or start new chat"
            />
          </div>
          <Tabs />
        </div>
      )}
    </div>
  );
};

export default LeftBar;
