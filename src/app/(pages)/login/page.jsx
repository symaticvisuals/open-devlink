import React from "react";
import Image from "@/components/Image";
import Button from "@/components/Button";

export default function Login() {
  return (
    <div className="h-screen w-screen p-6">
      <div className="h-[10%] flex justify-between items-center">
        <h2 className="text-2xl font-bold">Open-DevLink</h2>
        <div className="flex gap-8">
          <Button text="Log in with Google" />
          <Button text="Log in with Github" />
        </div>
      </div>
      <div className="h-[80%] flex justify-center items-center gap-10">
        <div className="w-[40%]">
          <span className="text-4x">Open Source Marketplace -</span>
          <span className="text-3xl">Empowering Innovation</span>
        </div>
        <Image image_url="/Login_graphic.png" />
      </div>
    </div>
  );
}
