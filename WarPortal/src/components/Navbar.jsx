import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-yellow-500  text-yellow-900 border-8 border-white border-double m-4 p-6 rounded-full ">
      <nav>
        <ul className="flex flex-wrap gap-8 justify-center text-center place-items-center">
          <li className="hover:bg-red-900 w-20  hover:bg-opacity-20 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 hover:font-bold">
            <Link to="/Home">Home</Link>
          </li>
          <li className="hover:bg-red-900 w-20  hover:bg-opacity-20 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 hover:font-bold">
            <Link to="/Account">Account</Link>
          </li>
          <li className="hover:bg-red-900 w-20  hover:bg-opacity-20 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 hover:font-bold">           
          
           <Link to="/StoryArcs">Stories</Link>
          </li>
          <li className="hover:bg-red-900 w-20  hover:bg-opacity-20 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 hover:font-bold">
            <Link to="/Shop">Shop</Link>
          </li>
          <li className="hover:bg-red-900 w-30  hover:bg-opacity-20 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 hover:font-bold">
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <button className="hover:bg-red-900 w-20  hover:bg-opacity-20 p-2 rounded-full font-bold hover:text-white hover:border-white hover:border-2 hover:font-bold" onClick={handleOpen}>Other</button>
          {open ? (
            <div>
              <nav>
                <ul className=" gap-8 ">
                <li className="hover:bg-red-900 w-20 hover:bg-opacity-20 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 hover:font-bold">
                    <Link to="/Team">Team With War Portal</Link>
                  </li>

                  <li className="hover:bg-red-900 w-20  hover:bg-opacity-20 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 hover:font-bold">
                    <Link to="/OtherCreativeWorks">Other Creative Works</Link>
                  </li>
                  <li className="hover:bg-red-900 w-20  hover:bg-opacity-20 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 hover:font-bold">
                    <Link to="/Events">Events</Link>
                  </li>
                  <li className="hover:bg-red-900 w-20  hover:bg-opacity-20 p-2 rounded-full font-bold hover:text-white hover:border-white text-center hover:border-2 hover:font-bold">
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
