import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div class="">
      <nav>
        <ul class="flex flex-wrap mt-2 gap-2 justify-center hover: text-center place-items-center">
          <li>
            <button class=" w-1/7 bg-gradient-to-r hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 from-yellow-500 via-red-900 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
             
              <span class="w-1/7 p-2 block hover: text-red-900 rounded-full bg-white"> <Link class="hover: text-xl" to="/Home">Home</Link> </span>
              </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 from-yellow-500 via-red-900 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
             
              <span class="w-1/7 block rounded-full hover: text-red-900  p-2 bg-white"> <Link class="hover: text-xl" to="/Account">Account</Link> </span>
              </button>
          </li>
          <li>
            <button class=" w-1/7 bg-gradient-to-r hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 from-yellow-500 via-red-900 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
             
              <span class="w-20 block hover: text-red-900 rounded-full p-2 bg-white"> <Link class="hover: text-xl" to="/StoryArcs">Stories</Link> </span>
              </button>
          </li>
          <li>
            <button class="w-1/7 bg-gradient-to-r hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 from-yellow-500 via-red-900 p-2 to-yellow-500  rounded-full font-bold hover: text-center">
             
              <span class="w-20 block hover: text-red-900 p-2 rounded-full bg-white"> <Link class="hover: text-xl" to="/Shop">Shop</Link> </span>
              </button>
          </li>
          
          <button
            class="  w-1/7 bg-gradient-to-r hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 from-yellow-500 via-red-900 p-2 to-yellow-500  rounded-full font-bold hover: text-centerr"
            onClick={handleOpen}
          >              <span class=" hover: text-red-900 hover: text-xl p-2 w-20 block rounded-full bg-white">  Other</span>

            
          </button>
          {open ? (
            <div>
              <nav>
                <ul class="  text-lg flex flex-wrap p-6 space-between">
                  <li class="hover:text-white w-30 hover:bg-gradient-to-t  hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:border-white hover: text-center hover:border-2 ">
                    <Link to="/Team">Team With War Portal</Link>
                  </li>

                  <li class="hover:text-white w-30 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900 hover:to-yellow-500 p-2 rounded-full font-bold hover:border-white hover: text-center hover:border-2 ">
                    <Link to="/OtherCreativeWorks">Other Creative Works</Link>
                  </li>
                  <li class="hover:text-white w-20 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:border-white hover: text-center hover:border-2 ">
                    <Link to="/Events">Events</Link>
                  </li>
                  <li class="hover:text-white w-30 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:border-white hover: text-center hover:border-2 ">
                    <Link to="/Investing">Investing</Link>
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
