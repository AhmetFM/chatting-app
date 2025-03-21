import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ArrowUpIcon, Download } from "lucide-react";

const Detail = () => {
  return (
    <div className="flex-1 hidden 2xl:block">
      <div className="py-[30px] px-5 flex flex-col items-center gap-3 border-b border-[#dddddd35]">
        <Avatar className="w-[100px] h-[100px] object-cover">
          <AvatarImage src="https://github.com/ahmetfm.png" />
          <AvatarFallback>AFM</AvatarFallback>
        </Avatar>
        <h2>AFM</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vel!
        </p>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <div className="">
          <div className="flex items-center justify-between">
            <span>Chat Settings</span>
            <ArrowUpIcon
              size={30}
              className="bg-zinc-900/30 p-[10px] rounded-full cursor-pointer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between">
            <span>Privacy & help</span>
            <ArrowUpIcon
              size={30}
              className="bg-zinc-900/30 p-[10px] rounded-full cursor-pointer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between">
            <span>Shared Photos</span>
            <ArrowUpIcon
              size={30}
              className="bg-zinc-900/30 p-[10px] rounded-full cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5">
            {/* SinglePhoto */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  src="/images/bg-3.jpg"
                  className="w-10 h-10 rounded object-cover"
                  alt=""
                />
                <span className="text-sm text-gray-300 font-light">
                  photo_2025.2.png
                </span>
              </div>
              <Download
                size={30}
                className="bg-zinc-900/30 p-[10px] rounded-full cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  src="/images/bg-3.jpg"
                  className="w-10 h-10 rounded object-cover"
                  alt=""
                />
                <span className="text-sm text-gray-300 font-light">
                  photo_2025.2.png
                </span>
              </div>
              <Download
                size={30}
                className="bg-zinc-900/30 p-[10px] rounded-full cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  src="/images/bg-3.jpg"
                  className="w-10 h-10 rounded object-cover"
                  alt=""
                />
                <span className="text-sm text-gray-300 font-light">
                  photo_2025.2.png
                </span>
              </div>
              <Download
                size={30}
                className="bg-zinc-900/30 p-[10px] rounded-full cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  src="/images/bg-3.jpg"
                  className="w-10 h-10 rounded object-cover"
                  alt=""
                />
                <span className="text-sm text-gray-300 font-light">
                  photo_2025.2.png
                </span>
              </div>
              <Download
                size={30}
                className="bg-zinc-900/30 p-[10px] rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between">
            <span>Shared Files</span>
            <ArrowUpIcon
              size={30}
              className="bg-zinc-900/30 p-[10px] rounded-full cursor-pointer"
            />
          </div>
        </div>
        <button className="p-3 bg-red-600/50 hover:bg-red-600/80 text-white border-none rounded cursor-pointer">
          Block User
        </button>
        <button className="p-2 bg-[#1a73e8]">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
