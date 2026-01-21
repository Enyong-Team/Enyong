import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Randomize() {
  const navigate = useNavigate();

  useEffect(() => {
    // list of categories to choose from
    const pages = [
      "/science",
      "/english",
      "/filipino",
      "/math",
      "/aralingpanlipunan",
      "/gmrc",
      "/musicart",
      "/pehealth",
      "/tle"
    ];

    const timer = setTimeout(() => {
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      if (randomPage) navigate(randomPage);
    }, 1300); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-[#081E41] animate-fade-in flex flex-col items-center justify-center p-3">
       {/* You can add a spinning animation here if you want */}
    </div>
  );
}

export default Randomize;
