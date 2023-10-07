"use client";
import Buttons from "@/components/Button";
import RepoCards from "@/components/cards";
import TypeTabs from "@/components/tabs";
import { sdk } from "@/conf/Appwrite";

import { redirect, useRouter } from "next/navigation";
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
  const router = useRouter();
  const fn = () => {
    sdk.logout();
    router.replace("/");
  };
  return (
    <div className="container mt-6 flex flex-col gap-4">
      <TypeTabs />
      <RepoCards />
      <Buttons fn={fn} text={"Logout"} />
      <div className="">
        <pre className="">{JSON.stringify(github, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Home;
