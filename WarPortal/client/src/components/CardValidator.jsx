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

  async function handleSubmit(req, res) {
const submittedUserId = userInput.userId;
const submittedCharacterId = userInput.characterId;
    try {
     const validator = await axios.post(`http://localhost:5000/CardValidator/${userId}/${characterId}`, {
        params: { userId: submittedUserId, characterId: submittedCharacterId ,}
      });
      console.log(validator)
    } catch (error) {
      console.error(error);
    }
  }

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
        <input type="submit"></input>
      </form>
    </>
  );
}
