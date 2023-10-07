"use client";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Chip,
  ScrollShadow,
} from "@nextui-org/react";
import React from "react";

function RepoCards() {
  return (
    <ScrollShadow className="w-full h-screen">
      <div className="grid grid-cols-3 gap-3">
        {Array(12)
          .fill()
          .map((_, i) => (
            <Card key={i}>
              {/* TODO: Add Repo Name */}
              <CardHeader title="Repo Name" />

              <CardBody className="flex flex-col">
                <h4 className="font-semibold text-lg">open-spacelink</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  sunt, nam corporis tempore unde ratione dignissimos enim quo
                  modi temporibus?
                </p>
                <div className="flex gap-3">
                  <Chip color="success" variant="faded" className="mt-2">
                    Javascript
                  </Chip>
                  <Chip color="success" variant="faded" className="mt-2">
                    Typescript{" "}
                  </Chip>
                  <Chip color="success" variant="faded" className="mt-2">
                    React
                  </Chip>
                </div>
              </CardBody>
            </Card>
          ))}
      </div>
    </ScrollShadow>
  );
}

export default RepoCards;
