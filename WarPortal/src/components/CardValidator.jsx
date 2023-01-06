import {useEffect} from 'react'
export default function CardValidator() {
 
function Validator() {
    useEffect(() => {
      fetch('http://localhost:3000/Validator')
  
         .catch((err) => {
            console.log(err.message("not found"));
         });
   } );
  
  }
   
  


    return (
        <>
          <h1>Card Validator</h1>
          <form onSubmit={Validator}>
            <h2>User ID</h2>
            <input  type="text"  placeholder="Enter Here" required></input>
            <h2>Card ID</h2>
            <input  type="text" placeholder="Enter Here" required></input>
           <button> <input type="reset"></input></button>
           <button><input type="submit"></input> </button>
          </form>
        </>
      );



}