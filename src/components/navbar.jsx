"use client";
import {
  Avatar,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function MainNavbar() {
  return (
    <div>
      <Navbar className="" isBlurred isBordered shouldHideOnScroll>
        <NavbarBrand>
          <p className="font-bold text-inherit">open-spacelink{"<></>"}</p>
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <h1 className="text-md font-medium">Hi, Deepanshu </h1>
          </NavbarItem>
          <NavbarItem>
            <Avatar
              isBordered
              color="default"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}

export default MainNavbar;
