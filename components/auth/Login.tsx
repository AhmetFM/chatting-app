"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { toast } from "react-toastify";

type TAvatar = {
  file: File | null;
  url: string;
};

const Login = () => {
  const [avatar, setAvatar] = useState<TAvatar>({
    file: null,
    url: "",
  });

  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-full flex items-center gap-[100px]">
      <div className="item flex-1 flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold tracking-tight">Welcome back,</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center gap-5"
        >
          <input
            className="p-5 border-none outline-none bg-zinc-900/60 text-white rounded"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            className="p-5 border-none outline-none bg-zinc-900/60 text-white rounded"
            type="password"
            placeholder="Password"
            name="password"
          />
          <button className="w-full p-5 border-none text-white bg-[#1f8ef1] rounded cursor-pointer font-medium">
            Sign In
          </button>
        </form>
      </div>
      <div className="h-[80%] w-[2px] bg-[#dddddd35]" />
      <div className="item flex-1 flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold tracking-tight">Create an Account</h2>
        <form className="flex flex-col items-center justify-center gap-5">
          <label
            className="w-full flex items-center justify-between cursor-pointer"
            htmlFor="file"
          >
            <Avatar className="w-[50px] h-[50px] object-cover">
              <AvatarImage src={avatar.url} />
              <AvatarFallback className="opacity-60 text-white bg-zinc-900">
                AM
              </AvatarFallback>
            </Avatar>
            <span className="underline">Upload an Image</span>
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleAvatar}
          />
          <input
            className="p-5 border-none outline-none bg-zinc-900/60 text-white rounded"
            type="text"
            placeholder="Username"
            name="username"
          />
          <input
            className="p-5 border-none outline-none bg-zinc-900/60 text-white rounded"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            className="p-5 border-none outline-none bg-zinc-900/60 text-white rounded"
            type="password"
            placeholder="Password"
            name="password"
          />
          <button className="w-full p-5 border-none text-white bg-[#1f8ef1] rounded cursor-pointer font-medium">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
