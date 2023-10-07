"use client";
import { Badge, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

function RepoCards() {
  return (
    <div className="grid grid-cols-3">
      <Card>
        {/* TODO: Add Repo Name */}
        <CardHeader title="Repo Name" />

        <CardBody className="flex flex-col">
          <h4>Open-DevLink</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt,
            nam corporis tempore unde ratione dignissimos enim quo modi
            temporibus?
          </p>
          <Badge content={"Good Starter Issues 18"} />
        </CardBody>
      </Card>
    </div>
  );
}

export default RepoCards;
