import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatContext from "../context/chatContext";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useContext, useState } from "react";
const Profile = () => {
  const { handleShowProfile } = useContext(ChatContext);
  const [statusEdtName, setStatusEdtName] = useState(false);
  const [statusEdtAbout, setStatusEdtAbout] = useState(false);

  const handleChangeStatusEdtName = () => setStatusEdtName(!statusEdtName);
  const handleChangeStatusEdtAbout = () => setStatusEdtAbout(!statusEdtAbout);
  return (
    <div className="w-full h-full flex flex-col animate-in slide-in-from-left-96 duration-300 bg-[#f0f2f5]">
      {/* Header */}
      <div className="bg-[#4866a1] h-[120px] pt-[64px] pl-[20px] flex flex-row items-center gap-8">
        <ArrowBackIcon
          className={"hover:cursor-pointer"}
          sx={{ fontSize: 24, color: "#ffffff" }}
          onClick={handleShowProfile}
        />
        <span className="text-white text-[21px]">Profile</span>
      </div>

      {/* Avatar */}
      <div className="relative">
        <img
          src="https://github.com/amitshuu/messenger-app/blob/main/client/src/assests/dummy_images/17a5c2c8df8a91680e74d9ae9871e11d.png?raw=true"
          className="w-[200px] h-[200px] mx-auto my-2"
          alt=""
        />
        <div className="absolute bottom-[10px] left-[64%] transform -translate-x-1/2 rounded-full bg-white p-1">
          <CameraAltIcon sx={{ fontSize: 24 }} />
          <input
            className="absolute left-0 w-[30px] opacity-0 file:cursor-pointer"
            type="file"
            accept="image/*"
            multiple={false}
          />
        </div>
      </div>

      {/* Infor */}
      <div className="bg-white w-full py-3 px-7">
        <label className="text-[#648ad6] text-[15px] leading-5" htmlFor="">
          Your name
        </label>
        <div className="flex flex-row items-center gap-2">
          <input
            className={
              "flex-1 outline-none py-1 text-lg border-b-[1.5px] border-[#4866a1] " +
              (!statusEdtName ? "pointer-events-none" : "")
            }
            type="text"
          />
          <EditIcon
            className={"hover:cursor-pointer"}
            sx={{
              fontSize: 24,
              color: "#5c6c75",
              display: `${!statusEdtName ? "initial" : "none"}`,
            }}
            onClick={handleChangeStatusEdtName}
          />
          <CloseIcon
            className={"hover:cursor-pointer "}
            sx={{
              fontSize: 24,
              color: "#5c6c75",
              display: `${!statusEdtName ? "none" : "initial"}`,
            }}
            onClick={handleChangeStatusEdtName}
          />
        </div>
      </div>
      <p className="text-center text-gray-500 mt-3 mb-6">
        This is not your usename. This name will be visible to you your contacts
        only
      </p>
      <div className="bg-white w-full py-3 px-7">
        <label className="text-[#648ad6] text-[15px] leading-5" htmlFor="">
          About
        </label>
        <div className="flex flex-row items-center gap-2">
          <input
            className={
              "flex-1 outline-none py-1 text-lg border-b-[1.5px] border-[#4866a1] " +
              (!statusEdtAbout ? "pointer-events-none" : "")
            }
            type="text"
          />
          <EditIcon
            className={"hover:cursor-pointer "}
            sx={{
              fontSize: 24,
              color: "#5c6c75",
              display: `${!statusEdtAbout ? "initial" : "none"}`,
            }}
            onClick={handleChangeStatusEdtAbout}
          />
          <CloseIcon
            className={"hover:cursor-pointer "}
            sx={{
              fontSize: 24,
              color: "#5c6c75",
              display: `${!statusEdtAbout ? "none" : "initial"}`,
            }}
            onClick={handleChangeStatusEdtAbout}
          />
        </div>
      </div>
      <button className="h-[34px] w-[260px] mt-3 text-center font-medium rounded-md bg-[#4866a1] text-white mx-auto">
        Confirm
      </button>
    </div>
  );
};

export default Profile;
