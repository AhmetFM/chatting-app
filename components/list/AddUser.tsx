import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AddUser = () => {
  return (
    <div className="p-[30px] w-max h-max bg-zinc-900/80 rounded-[10px] absolute top-0 bottom-0 left-0 right-0 m-auto">
      <form className="flex gap-5">
        <input
          className="p-5 rounded-[10px] border-none outline-none"
          type="text"
          placeholder="Username"
          name="username"
        />
        <button className="p-5 rounded-[10px] bg-[#1a73e8] border-none text-white cursor-pointer">
          Search
        </button>
      </form>
      <div className="mt-[50px] flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Avatar className="w-[50px] h-[50px] object-cover">
            <AvatarImage src="https://github.com/ahmetfm.png" />
            <AvatarFallback className="opacity-60 text-white bg-zinc-900">
              AM
            </AvatarFallback>
          </Avatar>
          <span>John Doe</span>
        </div>
        <button className="p-[10px] rounded-[10px] bg-[#1a73e8] border-none text-white cursor-pointer">
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
