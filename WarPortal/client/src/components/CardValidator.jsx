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
      <div class="    mt-6 flex items-center justify-center text-center text-lg text-red-800">
        <form onSubmit={handleSubmit} class="">
          <header class=" flex justify-center">
            {" "}
            <h1 class="  text flex w-2/3 justify-center rounded-full  bg-white bg-gradient-to-tr from-yellow-500  via-red-800 to-yellow-500 p-2 text-center align-middle text-white ">
              Card Validator
            </h1>
          </header>

          <section class=" flex justify-center">
          <label for="User Id">

            {" "}
            <h2 class=" mt-2 w-1/3 rounded-full bg-gradient-to-tl from-yellow-500  via-red-800   to-yellow-500 p-1  text-white  hover:to-yellow-500">
              User ID
            </h2></label>
          </section>
          <section class="  mt-2  rounded-full  bg-gradient-to-tl   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
            <input
              class="rounded-full bg-white p-2 text-center placeholder-red-800"
              type="text"
              name="userId"
              placeholder="Enter Here"
              value={userInput.userId}
              onChange={handleChange}
              required
            ></input>
          </section>

          <section class="  flex justify-center">
            {" "}
            <h2 class=" mt-2 w-1/3 rounded-full bg-gradient-to-tl from-yellow-500  via-red-800   to-yellow-500 p-1  text-white  hover:to-yellow-500">
              Card ID
            </h2>
          </section>
          <section class="   mt-2  rounded-full  bg-gradient-to-tl   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
            <label for="Character Id">
              <input
              class=" rounded-full bg-white p-2 text-center placeholder-red-800"
              type="text"
                name="characterId"
                placeholder="Enter Here"
                value={userInput.characterId}
                onChange={handleChange}
                required
              ></input>
            </label>
          </section>
          <section class="  ">
            <label for="Submit Button">
              <input
                type="submit"
                class=" m-2 mt-2 w-1/3 rounded-full bg-gradient-to-tr  from-yellow-500   via-red-800  to-yellow-500 p-1 text-white hover:from-red-800 hover:via-yellow-500 hover:to-red-800"
              ></input>
            </label>
            <label for="Result">
              <h3 class=" text-red-800">Card is:</h3>
            </label>
            <div class="flex justify-center">
              {" "}
              <p class="flex w-1/3 justify-center  rounded-full  bg-gradient-to-tr  from-yellow-500   via-red-800 to-yellow-500 p-1 text-center align-middle text-white ">
                {" "}
                {responseData}
              </p>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
