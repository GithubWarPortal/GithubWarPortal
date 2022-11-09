import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="text-xl bg-yellow-500  border-8 border-white text-gray-900 border-double m-4 p-6 rounded-full ">
      <nav>
        <ul className="flex flex-wrap gap-8 justify-center text-center place-items-center">
          <li className=" w-1/7 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
            <Link className="text-xl" to="/Home">Home</Link>
          </li>
          <li className=" w-1/7 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
            <Link className="text-xl" to="/Account">Account</Link>
          </li>
          <li className="  w-1/7 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2">
            <Link className="text-xl" to="/StoryArcs">Stories</Link>
          </li>
          <li className="  w-1/7 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
            <Link className="text-xl" to="/Shop">Shop</Link>
          </li>
          <li className="  w-1/7 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
            <Link className="text-xl" to="/ContactUs">Contact Us</Link>
          </li>
          <button
            className=" w-20 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 "
            onClick={handleOpen}
          >
            Other
          </button>
          {open ? (
            <div>
              <nav>
                <ul className="gap-8 text-lg flex flex-wrap p-6 space-between">
                  <li className=" w-30 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
                    <Link to="/Team">Team With War Portal</Link>
                  </li>

                  <li className=" w-30 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900 hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
                    <Link to="/OtherCreativeWorks">Other Creative Works</Link>
                  </li>
                  <li className=" w-20 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
                    <Link to="/Events">Events</Link>
                  </li>
                  <li className=" w-30 hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-900  hover:to-yellow-500 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 ">
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
