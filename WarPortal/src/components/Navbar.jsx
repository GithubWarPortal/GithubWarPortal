
import { Link} from "react-router-dom";



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
