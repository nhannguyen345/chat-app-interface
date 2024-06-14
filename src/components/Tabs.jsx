import { useEffect, useRef, useState } from "react";
import ChatContext from "../context/chatContext";
import { useContext } from "react";
import FriendInfoModal from "./FriendInfoModal";
import FriendRequestModal from "./FriendRequestModal";
import SendFriendRequestModal from "./SendFriendRequestModal";
import WebSocketService from "../services/WebSocketService";
const tabsData = [
  {
    label: "All message",
    content: [
      {
        id: 1,
        name: "Maria Ozawa",
        avatarUrl:
          "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1",
        lastMesage: "Hello, can you help me?",
        date: "2:23 pm",
      },
      {
        id: 2,
        name: "Tom Cruise",
        avatarUrl:
          "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg",
        lastMesage: "Oke, let do it",
        date: "4:16 pm",
      },
      {
        id: 3,
        name: "Mizuki Sataro",
        avatarUrl:
          "https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-dai-dien-facebook-dep-cho-nam-30-28-16-26-50.jpg",
        lastMesage:
          "i hate you, because everything is you cause. Please leave me alone!!!",
        date: "8:32 am",
      },
      {
        id: 4,
        name: "Maria Ozawa",
        avatarUrl:
          "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1",
        lastMesage: "Hello, can you help me?",
        date: "2:23 pm",
      },
      {
        id: 5,
        name: "Tom Cruise",
        avatarUrl:
          "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg",
        lastMesage: "Oke, let do it",
        date: "4:16 pm",
      },
      {
        id: 6,
        name: "Mizuki Sataro",
        avatarUrl:
          "https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-dai-dien-facebook-dep-cho-nam-30-28-16-26-50.jpg",
        lastMesage:
          "i hate you, because everything is you cause. Please leave me alone!!!",
        date: "8:32 am",
      },
      {
        id: 7,
        name: "Maria Ozawa",
        avatarUrl:
          "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1",
        lastMesage: "Hello, can you help me?",
        date: "2:23 pm",
      },
      {
        id: 8,
        name: "Tom Cruise",
        avatarUrl:
          "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg",
        lastMesage: "Oke, let do it",
        date: "4:16 pm",
      },
      {
        id: 9,
        name: "Mizuki Sataro",
        avatarUrl:
          "https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-dai-dien-facebook-dep-cho-nam-30-28-16-26-50.jpg",
        lastMesage:
          "i hate you, because everything is you cause. Please leave me alone!!!",
        date: "8:32 am",
      },
    ],
  },
  {
    label: "Contacts",
    content: [
      {
        id: 1,
        name: "Maria Ozawa",
        avatarUrl:
          "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1",
      },
      {
        id: 2,
        name: "Tom Cruise",
        avatarUrl:
          "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg",
      },
      {
        id: 3,
        name: "Mizuki Sataro",
        avatarUrl:
          "https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-dai-dien-facebook-dep-cho-nam-30-28-16-26-50.jpg",
      },
    ],
  },
  {
    label: "Request",
    content: [
      {
        id: 1,
        name: "Maria Ozawa",
        avatarUrl:
          "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1",
      },
      {
        id: 2,
        name: "Tom Cruise",
        avatarUrl:
          "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg",
      },
      {
        id: 3,
        name: "Mizuki Sataro",
        avatarUrl:
          "https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-dai-dien-facebook-dep-cho-nam-30-28-16-26-50.jpg",
      },
    ],
  },
  {
    label: "Contact +",
    content: [
      {
        id: 1,
        name: "Maria Ozawa",
        avatarUrl:
          "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?ssl=1",
      },
      {
        id: 2,
        name: "Tom Cruise",
        avatarUrl:
          "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg",
      },
      {
        id: 3,
        name: "Mizuki Sataro",
        avatarUrl:
          "https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-dai-dien-facebook-dep-cho-nam-30-28-16-26-50.jpg",
      },
    ],
  },
];

export function Tabs() {
  const ws = WebSocketService.getInstance();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [activeItemInTab, setActiveIteminTab] = useState({
    tabIndex: -1,
    itemIndex: -1,
  });

  const { showFriendModal, handleShowFriendModal } = useContext(ChatContext);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  useEffect(() => {
    ws.on("new_connection", (new_user) => {
      tabsData[0].content = [];
      tabsData[0].content.push(new_user);
    });
  });

  return (
    <div>
      <div className="relative px-3 mt-6 w-full">
        <div className="flex space-x-3 border-b-[0.5px] dark:border-b-[#202c33]">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="w-[100px] pt-2 pb-3 text-gray-600 dark:text-[#E3E3E3]"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label +
                  (idx !== 0 && idx !== 3 ? ` (${tab.content.length})` : "")}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-[6px] block h-[2px] bg-teal-500 dark:bg-[#E3E3E3] transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="px-3 h-full w-full max-h-[490px] overflow-y-auto scroll-smooth">
        {/* <p>{tabsData[activeTabIndex].content}</p> */}
        {tabsData[activeTabIndex].content.map((mess, idx) => (
          <div
            className={
              "flex flex-row gap-3 px-2 py-4 border-b-[0.5px] dark:border-b-[#202c33] hover:cursor-pointer " +
              (activeTabIndex === activeItemInTab.tabIndex &&
              idx === activeItemInTab.itemIndex
                ? "bg-zinc-200 dark:bg-slate-700 rounded-sm"
                : "")
            }
            key={idx}
            onClick={() => {
              setActiveIteminTab({ tabIndex: activeTabIndex, itemIndex: idx });
              if (activeTabIndex == 0) {
                return;
              } else handleShowFriendModal(true, activeTabIndex, mess);
            }}
          >
            <img
              className="rounded-full shadow-md ring-1 ring-black ring-opacity-15 w-[52px] h-[52px]"
              src={mess.avatarUrl}
              alt="avatar"
            />
            <div className="flex flex-col">
              <span className="text-lg dark:text-[#E3E3E3]">{mess.name}</span>
              {activeTabIndex === 0 ? (
                <div className="flex flex-row items-center gap-4 w-full">
                  <p className="text-md text-slate-600 font-medium max-w-[200px] truncate dark:text-[#E3E3E3]">
                    {mess.lastMesage}
                  </p>
                  <span className="text-md font-light dark:text-[#E3E3E3]">
                    {mess.date}
                  </span>
                </div>
              ) : (
                <span className="text-md font-light dark:text-[#E3E3E3]">
                  Click here for more infomation
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      {showFriendModal.show && showFriendModal.idxTab === 1 ? (
        <FriendInfoModal handleClose={setActiveIteminTab} />
      ) : (
        ""
      )}
      {showFriendModal.show && showFriendModal.idxTab === 2 ? (
        <FriendRequestModal handleClose={setActiveIteminTab} />
      ) : (
        ""
      )}
      {showFriendModal.show && showFriendModal.idxTab === 3 ? (
        <SendFriendRequestModal handleClose={setActiveIteminTab} />
      ) : (
        ""
      )}
    </div>
  );
}
