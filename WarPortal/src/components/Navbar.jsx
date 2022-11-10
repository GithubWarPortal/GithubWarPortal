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
        <ul class="flex flex-wrap gap-8 justify-center text-center place-items-center">
          <li>
            <button class=" w-1/7 bg-gradient-to-r m-3 from-yellow-500 via-red-900  to-yellow-500 p-2 rounded-full font-bold text-center">
             
              <span class="w-1/7 block text-black rounded-full hover:text-white hover:bg-gray-900 bg-white"> <Link class="text-xl" to="/Home">Home</Link> </span>
              </button>
          </li>
          <li>
            <button class=" w-1/7 bg-gradient-to-r m-3 from-yellow-500 via-red-900  to-yellow-500 p-2 rounded-full font-bold text-center">
             
              <span class="w-1/7 block text-black rounded-full hover:text-white hover:bg-gray-900 bg-white"> <Link class="text-xl" to="/Account">Account</Link> </span>
              </button>
          </li>
          <li>
            <button class=" w-1/7 bg-gradient-to-r m-3 from-yellow-500 via-red-900  to-yellow-500 p-2 rounded-full font-bold text-center">
             
              <span class="w-20 block text-black rounded-full hover:text-white hover:bg-gray-900 bg-white"> <Link class="text-xl" to="/StoryArcs">Stories</Link> </span>
              </button>
          </li>
          <li>
            <button class=" w-1/7 bg-gradient-to-r m-3 from-yellow-500 via-red-900  to-yellow-500 p-2 rounded-full font-bold text-center">
             
              <span class="w-20 block text-black rounded-full hover:text-white hover:bg-gray-900 bg-white"> <Link class="text-xl" to="/Shop">Shop</Link> </span>
              </button>
          </li>
          
          <button
            class="  w-1/7 bg-gradient-to-r m-3 from-yellow-500 via-red-900  to-yellow-500 p-2 rounded-full font-bold text-center"
            onClick={handleOpen}
          >              <span class=" text-xl w-20 block text-black rounded-full hover:text-white hover:bg-gray-900 bg-white">  Other</span>

            
          </button>
          {open ? (
            <div>
              <nav>
                <ul class="gap-8 text-lg flex flex-wrap p-6 space-between">
                  <li class=" w-30 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
                    <Link to="/Team">Team With War Portal</Link>
                  </li>

                  <li class=" w-30 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900 hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
                    <Link to="/OtherCreativeWorks">Other Creative Works</Link>
                  </li>
                  <li class=" w-20 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
                    <Link to="/Events">Events</Link>
                  </li>
                  <li class=" w-30 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
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
