"use client";

import Login from "@/components/auth/Login";
import Chat from "@/components/Chat";
import Detail from "@/components/Detail";
import List from "@/components/list/List";
import { changeIndex } from "@/lib/features/background/backgroundSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useEffect } from "react";

export default function Home() {
  const imageIndex = useAppSelector(
    (state: RootState) => state.background.index
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedIndex = localStorage.getItem("backgroundIndex");
    if (storedIndex) {
      const parsedIndex = parseInt(storedIndex, 10);
      if (!isNaN(parsedIndex)) {
        dispatch(changeIndex(parsedIndex));
      }
    }
  }, []);

  const user = true;
  return (
    <div
      className={` ${
        imageIndex === 1
          ? "bg-background1"
          : imageIndex === 2
          ? "bg-background2"
          : "bg-background3"
      } bg-no-repeat bg-center bg-cover h-screen flex items-center justify-center`}
    >
      <div className="w-[80vw] h-[80vh] border-white/25 border bg-zinc-900/60 backdrop-blur-md rounded-md flex">
        {user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}
