"use client";

import TypeTabs from "@/components/tabs";
import { sdk } from "@/conf/Appwrite";

import { useEffect, useState } from "react";

const Home = () => {
  const [github, setGithub] = useState(null);
  const fetchData = async () => {
    const data = await sdk.getGithubData();
    setGithub(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // const data = await sdk.getGithubData();

  return (
    <div className="container mt-6 flex flex-col gap-4">
      <TypeTabs />

      <div className="">
        <pre className="">{JSON.stringify(github, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Home;
