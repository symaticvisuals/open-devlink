"use client";
import React from "react";
import { Button } from "@nextui-org/react";

export default function Buttons({ icon, text, color, fn }) {
  return (
    <Button
      color={color}
      className="text-lg mr-2 shadow-xl"
      variant="ghost"
      onPress={fn}
      startContent={icon}
      
    >
      {text}
    </Button>
  );
}
