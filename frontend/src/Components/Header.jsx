import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { RiRedditLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
import Button from "./Button";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [userDropDownVisibilityClass, setUserDropDownVisibilityClass] =
    useState("hidden");

  function useUserDropDown(ref) {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setUserDropDownVisibilityClass("hidden");
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const userDropDownRef = useRef(null);

  useUserDropDown(userDropDownRef);

  function toggleUserDropDown() {
    if (userDropDownVisibilityClass === "hidden") {
      setUserDropDownVisibilityClass("block");
    } else {
      setUserDropDownVisibilityClass("hidden");
    }
  }

  return (
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
        className="bg-reddit_dark-brighter p-1  flex items-center border-reddit_border rounded-2xl p-1 mx-4 flex-grow"
      >
        {<CiSearch className="text-white h-7 w-7 p-1" />}

        <input
          type="text"
          placeholder="Search Reddit"
          className="bg-reddit_dark-brighter w-full text-gray-300 h-6 outline-none border-none p-2 text-sm p-1 block"
        />
      </form>

      {/* <button className="px-3 py-1">
        {" "}
        <GoBell className="text-white w-5 h-5  mx-2 " />{" "}
      </button>
      <button className="px-3 py-1">
        <IoChatbubbleEllipsesOutline className="text-white w-5 h-5  mx-2 " />{" "}
      </button>
      <button className="px-3 py-1">
        {" "}
        <FaPlus className="text-white w-5 h-5  mx-2 " />{" "}
      </button> */}

      <div className="mx-2 hidden sm:block">
        <Button outline className="mr-1 ">
          Log In
        </Button>
        <Button className="">Sign Up</Button>
      </div>

      <button
        onClick={() => {
          toggleUserDropDown();
        }}
        ref={userDropDownRef}
        className="bg-gray-600 rounded-md w-8 h-8 flex items-center"
      >
        <CiUser className="text-gray-400 w-5 h-5  mx-2 " />
        {/* <RiRedditLine className="text-white w-5 h-5  mx-2 " /> */}
      </button>

      <div
        className={
          "absolute  right-0 top-8 bg-reddit_dark border border-gray-700 z-10 rounded rounded-md text-reddit_text overflow-hidden " +
          userDropDownVisibilityClass
        }
      >
        <button className="block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm">
          {" "}
          <FiLogIn className="w-5 h-5 mr-2" /> Log In / Sign Up{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
