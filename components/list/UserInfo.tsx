"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Ellipsis, SquarePen, Video } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { changeIndex } from "@/lib/features/background/backgroundSlice";

const bgImages = [
  {
    id: 1,
    url: "/images/bg-1.jpg",
    alt: "bg-image-1",
  },
  {
    id: 2,
    url: "/images/bg-2.jpeg",
    alt: "bg-image-2",
  },
  {
    id: 3,
    url: "/images/bg-3.jpg",
    alt: "bg-image-3",
  },
];

const UserInfo = () => {
  const [index, setIndex] = useState<number>(1);
  const dispatch = useAppDispatch();

  return (
    <div className="flex p-5 items-center justify-between">
      <div className="flex items-center gap-5">
        <Avatar className="w-[50px] h-[50px] object-cover">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2>John Doe</h2>
      </div>
      <div className="flex gap-4">
        <Drawer>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Ellipsis width={20} cursor={"pointer"} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-transparent backdrop-blur-lg shadow-lg shadow-white/25 text-white">
              <DropdownMenuLabel className="font-bold tracking-tight text-lg">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="focus:bg-white/85">
                <DrawerTrigger>Change Background</DrawerTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Video width={20} cursor={"pointer"} />
          <SquarePen width={20} cursor={"pointer"} />
          <DrawerContent className="bg-transparent">
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle className="text-2xl text-center">
                  Background image
                </DrawerTitle>
                <DrawerDescription className="text-center">
                  Choose an image
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex gap-5 items-center justify-center">
                {bgImages.map((bg) => (
                  <button key={bg.id} onClick={() => setIndex(bg.id)}>
                    <img
                      src={bg.url}
                      alt={bg.alt}
                      className={`${
                        bg.id === index
                          ? "border"
                          : " border border-transparent"
                      } min-w-48 h-36 object-cover rounded-md transition-colors duration-300`}
                    />
                  </button>
                ))}
              </div>
              <DrawerFooter>
                <Button onClick={() => dispatch(changeIndex(index))}>
                  Submit
                </Button>
                <DrawerClose asChild>
                  <button className="px-3 w-full py-2 rounded-md bg-white/85 text-black">
                    Cancel
                  </button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default UserInfo;
