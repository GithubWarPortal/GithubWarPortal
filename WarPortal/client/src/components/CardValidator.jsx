import { useState } from "react";
import "./index.css";

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
    console.log("clicked submit");
    try {
      const check = await fetch("http://localhost:5000/CardValidator", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userInput.userId,
          characterId: userInput.characterId,
        }),
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
      <div class="text-red-800 mt-2 mb-2 flex items-center justify-center text-center text-lg">
        <form onSubmit={handleSubmit} class="">
        <div class="flex justify-center">  <h1 class="text flex justify-center rounded-full bg-white  bg-gradient-to-tr from-yellow-500 via-red-800  to-yellow-500 p-2 text-center align-middle text-white w-2/3 ">
            Card Validator
          </h1></div>
          <div class="flex justify-center">

              {" "}
              <h2 class="mt-2 w-1/3 text-white rounded-full bg-gradient-to-tl  from-yellow-500   via-red-800 to-yellow-500  hover:to-yellow-500  p-1">User ID</h2>

          </div>
          <div class="mt-2  rounded-full  bg-gradient-to-tl   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
            <input
              class="text-center rounded-full bg-white p-2 placeholder-red-800"
              type="text"
              name="userId"
              placeholder="Enter Here"
              value={userInput.userId}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div class="flex justify-center">
              {" "}
              <h2 class="mt-2 w-1/3 text-white rounded-full bg-gradient-to-tl  from-yellow-500   via-red-800 to-yellow-500  hover:to-yellow-500  p-1">

                Card ID
              </h2>
           
 
          </div>
          <div class="mt-2  rounded-full  bg-gradient-to-tl   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
            <input
              class="text-center rounded-full bg-white p-2 placeholder-red-800"
              type="text"
              name="characterId"
              placeholder="Enter Here"
              value={userInput.characterId}
              onChange={handleChange}
              required
            ></input>
          </div>

          <input
            type="submit"
            class=" m-2 mt-2 w-1/3 rounded-full bg-gradient-to-tr  from-yellow-500   via-red-800  to-yellow-500 text-white hover:from-red-800 hover:via-yellow-500 p-1 hover:to-red-800"
          ></input>
          <h1 class=" text-red-800">Card is:</h1>
          <div class="flex justify-center">
            {" "}
            <p class="p-1 flex w-1/3  justify-center  rounded-full  bg-gradient-to-tr   from-yellow-500 via-red-800 to-yellow-500 text-center align-middle text-white ">
              {" "}
              {responseData}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
