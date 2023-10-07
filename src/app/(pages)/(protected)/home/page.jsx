import RepoCards from "@/components/cards";
import TypeTabs from "@/components/tabs";

const Home = () => {
  return (
    <div className="container mt-6 flex flex-col gap-4">
      <TypeTabs />
      <RepoCards />
    </div>
  );
};

export default Home;
