"use client";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Camera,
  Image,
  Info,
  Mic,
  Phone,
  SmilePlus,
  Video,
} from "lucide-react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef<null | HTMLDivElement>(null);

  const handleEmoji = (e: EmojiClickData) => {
    setText((prev) => prev + e.emoji);
  };
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex-[2] border-x border-gray-700 h-full flex flex-col">
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
      {/* Chat Part */}
      <div className="flex-1 p-5 overflow-auto flex flex-col gap-5">
        <div className="message">
          <Avatar className="w-[30px] h-[30px] object-cover">
            <AvatarImage src="https://github.com/ahmetfm.png" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              consequuntur totam voluptatum accusantium unde itaque optio
              ducimus, perferendis, praesentium, corporis ipsum odio deleniti!
              Culpa assumenda, numquam dignissimos repellat aspernatur
              consequuntur.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          {/* <Avatar className="w-[60px] h-[60px] object-cover">
            <AvatarImage src="https://github.com/ahmetfm.png" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar> */}
          <div className="texts">
            <img src="/images/bg-3.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              consequuntur totam voluptatum accusantium unde itaque optio
              ducimus, perferendis, praesentium, corporis ipsum odio deleniti!
              Culpa assumenda, numquam dignissimos repellat aspernatur
              consequuntur.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      {/* Bottom Part */}
      <div className="p-5 flex items-center justify-between border-t border-[#dddddd35] gap-5 mt-auto">
        <div className="flex gap-5">
          <Image className="cursor-pointer" size={20} />
          <Camera className="cursor-pointer" size={20} />
          <Mic className="cursor-pointer" size={20} />
        </div>
        <input
          className="flex-1 bg-zinc-900/80 border-none outline-none text-white p-5 rounded-[10px] text-base"
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="relative">
          <SmilePlus
            className="cursor-pointer"
            size={20}
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="absolute bottom-[50px] left-0">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="bg-[#5183fe] text-white py-[10px] px-[20px] border-none rounded-[5px] cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
