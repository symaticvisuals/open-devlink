import React from "react";
import Image from "@/components/Image";
import Button from "@/components/Button";
import { AiFillGithub } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";

export default function Login() {
  return (
    <div className="container h-screen w-full p-6 over">
      <div className="h-full flex justify-between items-center">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-5xl font-bold">Open-SpaceLink</h2>
              <h2 className="text-2xl">
                Open Source Marketplace - Empowering Innovation
              </h2>
              <div>
                <Button
                  icon={<BsGoogle />}
                  text="Log in with Google"
                  color="secondary"
                />
                <Button
                  icon={<AiFillGithub />}
                  text="Log in with Github"
                  color="primary"
                />
              </div>
            </div>
          </div>
          <Image image_url="/Login_graphic.png" />
        </div>
      </div>
    </div>
  );
}
