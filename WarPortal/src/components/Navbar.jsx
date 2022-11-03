
import { Link} from "react-Router-dom";


import {Home}   from "./Home.jsx";
import {Account} from "./Account.jsx";
import {StoryArcs} from "./StoryArcs.jsx";
import {Shop} from "./Shop.jsx";
import {ContactUs} from "./ContactUs.jsx";
import {Team} from "./Team.jsx";
import {OtherCreativeWorks} from "./OtherCreativeWorks.jsx";
import {Events} from "./Events.jsx";
import{Investing} from "./Investing.jsx";


export default function Navbar() {
  return (
    <div>
   
        <nav>
        <ul>
          <li>
            
            <Link to="/Home" >Home</Link>

            
          </li>
          <li>
          
            <Link to="/Account">Account</Link>

            
          </li>
          <li>
          
            <Link to="/StoryArcs">Story Arcs</Link>

          </li>
          <li>
          
            <Link to="/Shop">Shop</Link>

            
          </li>
          <li>
          
            <Link to="/ContactUs">Contact Us</Link>
  
          
            </li>
          <li>
           
            <Link to="/Team">Team With War Portal</Link>

          
          </li>

           
          <li>
             
            <Link to="/OtherCreativeWorks" >Other Creative Works</Link>

            
          </li>
          <li>
               
            <Link to="/Events">Events</Link>
            
            
          </li>
          <li>
            
            <Link to="Investing">Investing</Link>

           
          </li>
        </ul>
      </nav> 
    </div>
  );
}
