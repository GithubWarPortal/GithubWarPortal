import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div class="text-lg flex flex-col dark:bg-black lg:p-6  h-1/6 font-zen">
      <header class="flex flex-col flex-wrap">
        <img
          class="w-1/3 l-1/3 m-auto mt-3 mb-6  border-double border-2  border-amber-700"
          src="/images/header.jpg"
        />
      </header>

      <nav class="flex flex-wrap ">
        <ul class="flex flex-wrap gap-2 justify-center text-center place-items-center font-open">
          <li>
            <button class=" w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="dark:text-amber-500 w-1/7 p-2 block hover: text-red-900 rounded-full dark:bg-black bg-white">
                {" "}
                <Link class="" to="/Create">
                  Create
                </Link>{" "}
              </span>
            </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="dark:text-amber-500  dark:bg-black w-1/7 block rounded-full hover: text-red-900  p-2 bg-white">
                {" "}
                <Link class="" to="/SignIn">
                  Sign In
                </Link>{" "}
              </span>
            </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="dark:text-amber-500  dark:bg-black w-1/7 block hover: text-red-900 rounded-full p-2 bg-white">
                {" "}
                <Link class="" to="/StoryArcs">
                  Stories
                </Link>{" "}
              </span>
            </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="dark:text-amber-500 dark:bg-black w-1/7 block hover: text-red-900 p-2 rounded-full bg-white">
                {" "}
                <Link class="" to="/Shop">
                  Shop
                </Link>{" "}
              </span>
            </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="dark:text-amber-500 dark:bg-black w-1/7 block hover: text-red-900 p-2 rounded-full bg-white">
                {" "}
                <Link class="" to="/Validator">
                  Validator
                </Link>{" "}
              </span>
            </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="dark:text-amber-500 dark:bg-black w-1/7 block hover: text-red-900 p-2 rounded-full bg-white">
                {" "}
                <Link class="" to="/ContactUs">
                  Contact
                </Link>{" "}
              </span>
            </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="dark:text-amber-500 dark:bg-black w-1/7 block hover: text-red-900 p-2 rounded-full bg-white">
                {" "}
                <Link class="" to="/Admin">
                  Admin
                </Link>{" "}
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              class="text-sm w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center"
            >
              <span class="dark:text-amber-500 dark:bg-black w-1/7 block hover: text-red-900 p-2 rounded-full bg-white">
                Dark Mode
              </span>
            </button>
          </li>{" "}
        </ul>
      </nav>
    </div>
  );
}
