import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { RiRedditLine } from "react-icons/ri";

const App = () => {
  return (
    <div className="box-border">
      <header className="flex items-center w-full bg-reddit_dark p-2">
        <div className="mx-4">
          <img
            className="w-8 h-8 object-contain mr-4 "
            src="./assets/images/reddit-logo.png"
            alt="Reddit Logo"
          />
        </div>

        <form
          action=""
          className="bg-reddit_dark-brighter p-1  flex items-center rounded-2xl p-1 mx-4 flex-grow"
        >
          {<CiSearch className="text-white h-7 w-7 p-1" />}

          <input
            type="text"
            placeholder="Search Reddit"
            className="bg-reddit_dark-brighter w-full text-gray-300 h-6 outline-none border-none p-2 text-sm p-1 block"
          />
        </form>

        <button className="px-3 py-1">
          {" "}
          <GoBell className="text-white w-5 h-5  mx-2 " />{" "}
        </button>
        <button className="px-3 py-1">
          <IoChatbubbleEllipsesOutline className="text-white w-5 h-5  mx-2 " />{" "}
        </button>
        <button className="px-3 py-1">
          {" "}
          <FaPlus className="text-white w-5 h-5  mx-2 " />{" "}
        </button>

        <button className="bg-gray-600 rounded-md w-8 h-8 flex items-center">
          <RiRedditLine className="text-white w-5 h-5  mx-2 " />
        </button>
      </header>
    </div>
  );
};
export default App;
