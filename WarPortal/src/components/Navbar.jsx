import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div class="dark:bg-gray-900 dark:text-white h-1/6">
      <nav>
        <ul class="flex flex-wrap mt-2 gap-2 justify-center text-center place-items-center font-sans">
          <li>
            <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="w-1/7 p-2 block hover: text-red-900 rounded-full bg-white">
                {" "}
                <Link class="focus:text-red-800 focus:ring focus:ring-red-900" to="/Home">
                  Home
                </Link>{" "}
              </span>
            </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="w-1/7 block rounded-full hover: text-red-900  p-2 bg-white">
                {" "}
                <Link class="" to="/Account">
                  Account
                </Link>{" "}
              </span>
            </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="w-1/7 block hover: text-red-900 rounded-full p-2 bg-white">
                {" "}
                <Link class="" to="/StoryArcs">
                  Stories
                </Link>{" "}
              </span>
            </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
              <span class="w-1/7 block hover: text-red-900 p-2 rounded-full bg-white">
                {" "}
                <Link class="" to="/Shop">
                  Shop
                </Link>{" "}
              </span>
            </button>
          </li>

          <button
            class="w-1/7 bg-gradient-to-r hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center"
            onClick={handleOpen}
          >
            {" "}
            <span class=" hover: text-red-800 hover:  p-2 w-1/7 block rounded-full bg-white">
              {" "}
              Other
            </span>
          </button>
          {open ? (
            <div>
              <nav>
                <ul class="flex flex-wrap mt-2 gap-2 justify-center hover: text-center place-items-center">
                  <li>
                    <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
                      <span class="w-1/7 block hover: text-red-900 p-2 rounded-full bg-white">
                        {" "}
                        <Link class="" to="/Team">
                          Team
                        </Link>{" "}
                      </span>
                    </button>
                  </li>

                  <li>
                    <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
                      <span class="w-1/7 block hover: text-red-900 p-2 rounded-full bg-white">
                        {" "}
                        <Link class="" to="/Events">
                          Events
                        </Link>{" "}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
                      <span class="w-1/7 block hover: text-red-900 p-2 rounded-full bg-white">
                        {" "}
                        <Link class="" to="/Investing">
                          Investing
                        </Link>{" "}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button class="w-1/7 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
                      <span class="w-1/7 block hover: text-red-900 p-2 rounded-full bg-white">
                        {" "}
                        <Link class="" to="/OtherCreativeWorks">
                          Other Works
                        </Link>{" "}
                      </span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}
