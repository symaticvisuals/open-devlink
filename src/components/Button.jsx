"use client";
import React from "react";
import { Button } from "@nextui-org/react";

export default function Buttons({ text, fn }) {
  return (
    <Button color="primary" onPress={fn}>
      {text}
    </Button>
  );
}
