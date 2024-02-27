import { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GetAppIcon from "@mui/icons-material/GetApp";
import ChatContext from "../context/chatContext";

const ImageOverlay = (imageUrl) => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleShowImageModal } = useContext(ChatContext);
  return (
    <div className="absolute top-0 left-0 z-20 h-[100%] w-[100%]">
      <div className="h-full w-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[92vh] w-[92vw] bg-white shadow-lg ring-gray-600">
        {/* Header chứa nút đóng */}
        <div className="w-full flex flex-row justify-end p-1">
          <a
            className=" px-4 flex items-center h-[30px] w-fit mx-auto shadow-sm text-center transform transition-transform active:scale-110"
            href={imageUrl.imageUrl}
            download="filedowload"
            target="_blank"
            rel="noreferrer"
          >
            <GetAppIcon sx={{ fontSize: 20, marginRight: "3px" }} />
            <button className="mr-[3px] text-[14px]">
              Click here for dowload
            </button>
          </a>
          <CloseIcon
            className="bg-red-600 hover:cursor-pointer text-white transform transition-transform active:scale-110"
            sx={{ fontSize: 24, fontWeight: "300" }}
            onClick={() => handleShowImageModal(false, "")}
          />
        </div>
        {/* {setTimeout(() => {
          setIsLoading(false);
        }, 2000)} */}
        {isLoading ? (
          <div className="h-5/6 w-full flex justify-center items-center">
            <svg
              width="40"
              height="40"
              fill="currentColor"
              className="mr-2 animate-spin text-gray-500"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
            </svg>
          </div>
        ) : (
          <div className="w-full max-h-[90%] overflow-y-auto">
            <img
              className="md:max-h-[580px] md:max-w-[94%] object-cover mx-auto mt-1"
              src={imageUrl.imageUrl}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageOverlay;
