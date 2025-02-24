import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Info, Phone, Video } from "lucide-react";

const Chat = () => {
  return (
    <div className="flex-[2] border-x border-gray-700 h-full ">
      <div className="p-5 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-5">
          <Avatar className="w-[60px] h-[60px] object-cover">
            <AvatarImage src="https://github.com/ahmetfm.png" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-[5px]">
            <span className="font-bold text-lg">Ahmet Furkan</span>
            <p className="text-sm font-light text-[#a5a5a5]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <Phone size={20} />
          <Video size={20} />
          <Info size={20} />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Chat;
