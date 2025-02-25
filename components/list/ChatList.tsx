"use client";
import { Minus, Plus, Search } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import AddUser from "./AddUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex items-center gap-5 p-5">
        <div className="flex-1 bg-zinc-900/80 flex items-center gap-5 rounded-xl p-[10px]">
          <Search size={20} className="w-5 h-5" />
          <input
            className="bg-transparent border-none outline-none text-white flex-1"
            type="text"
            placeholder="Search"
          />
        </div>
        {addMode ? (
          <Minus
            size={36}
            onClick={() => setAddMode(false)}
            className="bg-zinc-900/80 p-[10px] rounded-[10px] cursor-pointer"
          />
        ) : (
          <Plus
            size={36}
            onClick={() => setAddMode(true)}
            className="bg-zinc-900/80 p-[10px] rounded-[10px] cursor-pointer"
          />
        )}
      </div>
      {/* Single Item */}
      <div className="flex items-center gap-5 p-5 border-b border-gray-700 cursor-pointer">
        <Avatar className="w-[50px] h-[50px] object-cover">
          <AvatarImage src="https://github.com/ahmetfm.png" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-[10px]">
          <span className="font-medium">Ahmet Furkan Meriç</span>
          <p className="text-sm font-light">Last Message is</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
