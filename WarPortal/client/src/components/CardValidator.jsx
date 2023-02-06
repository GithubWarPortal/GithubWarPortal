import { useState } from "react";
import axios from "axios";

export default function CardValidator() {
  const [userInput, setUserInput] = useState({
    userId: "",
    characterId: "",
  });

  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  const [responseData, setResponseData] = useState([]);

  const handleSubmit = async (event, req, res) => {
    event.preventDefault();
    console.log("clicked submit")
    try {
      const check  = await fetch("http://localhost:5000/CardValidator", {
        method: "POST",
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userInput.userId,
          characterId: userInput.characterId
        })
      });
      console.log("Post request succeeded");
 const data = await check.json();
      setResponseData(data);
     
  
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1>Card Validator</h1>

      <form onSubmit={handleSubmit}>
        <h2>User ID</h2>
        <input
          type="text"
          name="userId"
          placeholder="Enter Here"
          value={userInput.userId}
          onChange={handleChange}
          required
        ></input>
        <h2>Card ID</h2>
        <input
          type="text"
          placeholder="Enter Here"
          name="characterId"
          value={userInput.characterId}
          onChange={handleChange}
          required
        ></input>{" "}
        <input type="reset"></input>
        <input type="submit"></input></form> 
     
        <div>
{responseData}
  
</div>
        
       

    
       
     </>
  );
          }
