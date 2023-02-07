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
      <div class="flex items-center justify-center text-center">
        <div class="mr-10 h-1/6  w-1/4 justify-center rounded-full bg-gradient-to-r from-yellow-500 via-red-800  to-yellow-500 p-2 text-center hover:bg-gradient-to-t  hover:from-yellow-500 hover:via-red-800 hover:to-yellow-500 ">
          <h1 class="flex-row justify-center rounded-full bg-white p-4 text-center text-xl">
            Card Validator
          </h1>
        </div>
        <div class="flex justify-center text-center">
          <div class="flex">
            <form onSubmit={handleSubmit} class="y rounded-full bg-white">
              <div class="flex text-center">
                <div class="ml-2 mr-2 mt-2 w-1/2 rounded-full  bg-gradient-to-r   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
                  {" "}
                  <h2 class="flex rounded-full bg-white p-2">User ID</h2>
                </div>
                <div class="mt-2 w-5/6 rounded-full  bg-gradient-to-r   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
                  <input
                    class="rounded-full bg-white p-2"
                    type="text"
                    name="userId"
                    placeholder="Enter Here"
                    value={userInput.userId}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>

              <div class="flex text-center">
                <div class="ml-2 mr-2 mt-2 w-1/2 rounded-full  bg-gradient-to-r   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
                  {" "}
                  <h2 class="flex rounded-full bg-white p-2">Card ID</h2>
                </div>
                <div class="mt-2  rounded-full  bg-gradient-to-r   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
                  <input
                    class="rounded-full bg-white p-2"
                    type="text"
                    name="userId"
                    placeholder="Enter Here"
                    value={userInput.characterId}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>

              <input type="reset"></input>
              <input type="submit"></input>
            </form>
          </div>
        </div>
        <div>{responseData}</div>
      </div>
    </>
  );
}
