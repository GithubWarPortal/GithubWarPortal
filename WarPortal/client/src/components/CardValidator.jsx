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
      <div class="m-10 flex items-center justify-center text-center text-xl">
        <div class="mr-10 h-1/6 w-1/4 justify-center rounded-full bg-gradient-to-r from-yellow-500 via-red-800  to-yellow-500 p-2 text-center hover:bg-gradient-to-t  hover:from-yellow-500 hover:via-red-800 hover:to-yellow-500 ">
          <h1 class=" justify-center rounded-full bg-white p-4 text-center ">
            Card Validator
          </h1>
        </div>
        <div class="flex justify-center  text-center">
          <div class="flex justify-center text-center">
            <form onSubmit={handleSubmit} class="">
              <div class="m-4 flex text-center">
                <div class="ml-2 mr-6 mt-2 w-1/2 rounded-full  bg-gradient-to-r   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
                  {" "}
                  <h2 class="flex rounded-full bg-white p-2 ">User ID</h2>
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

              <div class="m-4 flex text-center">
                <div class="ml-2 mr-6 mt-2 w-1/2 rounded-full  bg-gradient-to-r   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
                  {" "}
                  <h2 class=" flex rounded-full bg-white p-2">Card ID</h2>
                </div>
                <div class="mt-2  rounded-full  bg-gradient-to-r   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
                  <input
                    class="rounded-full bg-white p-2"
                    type="text"
                    name="characterId"
                    placeholder="Enter Here"
                    value={userInput.characterId}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <div class="mt-8 ">
                <input
                  type="submit"
                  class="w-1/3  rounded-full bg-gradient-to-tr from-yellow-500  via-red-800   to-yellow-500 p-4 text-white hover:from-red-800 hover:via-yellow-500 hover:to-red-800"
                ></input>
              </div>
            </form>
          </div>
        </div>
        <div class="ml-16    flex  rounded-full  bg-gradient-to-tr   from-yellow-500 via-red-800 to-yellow-500  p-4 align-middle text-white">
          {responseData}
        </div>
      </div>
    </>
  );
}
