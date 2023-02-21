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
      <div class="lg:mt-10 lg:flex-wrap lg:justify-center lg:align-middle  mt-6 flex items-center justify-center text-center text-lg text-red-800">
        <form onSubmit={handleSubmit} class="">
        <header class=" flex justify-center">
            {" "}
            <h1 class="lg:text-3xl lg:w-1/4 flex w-2/3 justify-center rounded-full  bg-white bg-gradient-to-tr from-yellow-500  via-red-800 to-yellow-500 p-2 text-center align-middle text-white ">
              Card Validator
            </h1>
          </header>
 <div class="lg:flex lg:flex-row">
          <section class="lg:mr-2 lg:mt-8 lg:text-3xl lg:align-middle lg:justify-center flex justify-center">
            <label for="User Id">
              {" "}
              <h2 class="lg:flex lg:p-3 flex-col mt-2  rounded-full bg-gradient-to-tl from-yellow-500  via-red-800   to-yellow-500 pl-2 pt-1 pb-1  pr-2 text-white  hover:to-yellow-500">
                User ID
              </h2>
            </label>
          </section>
          <section class="lg:mt-4   mt-2  rounded-full  bg-gradient-to-tl   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
            <input
              class="   rounded-full bg-white p-2 lg:p-10 text-center placeholder-red-800"
              type="text"
              name="userId"
              placeholder="Enter Here"
              value={userInput.userId}
              onChange={handleChange}
              required
            ></input>
          </section>

          <section class="lg:mr-2 lg:ml-2 lg:mt-8 lg:text-3xl lg:align-middle lg:justify-center flex justify-center">
            <label for="User Id">
              {" "}
              <h2 class="lg:flex lg:p-3 flex-col mt-2  rounded-full bg-gradient-to-tl from-yellow-500  via-red-800   to-yellow-500 pl-2 pt-1 pb-1  pr-2 text-white  hover:to-yellow-500">
                Card ID
              </h2>
            </label>
          </section>
          <section class="lg:mt-4    mt-2  rounded-full  bg-gradient-to-tl   from-yellow-500 via-red-800 to-yellow-500 p-1 hover:to-yellow-500 ">
            <input
              class="   rounded-full bg-white p-2 lg:p-10 text-center placeholder-red-800"
              type="text"
              name="characterId"
              placeholder="Enter Here"
              value={userInput.characterId}
              onChange={handleChange}
              required
            ></input>
          </section>
</div>          <div class="lg:flex-wrap lg:flex-row ">
          <section class="  ">
            <label for="Submit Button">
              <input
                type="submit"
                class=" m-2 mt-2 lg:m-10 lg:text-3xl lg:w-1/6 w-1/3 rounded-full bg-gradient-to-tr  from-yellow-500   via-red-800  to-yellow-500 p-1 text-white hover:from-red-800 hover:via-yellow-500 hover:to-red-800"
              ></input>
            </label>
            <label for="Result">
              <h3 class="lg:text-3xl text-red-800">Card is:</h3>
            </label>
            <div class="flex justify-center">
              {" "}
              <p class="lg:text-3xl flex lg:w-1/6 w-1/3 justify-center  rounded-full  bg-gradient-to-tr  from-yellow-500   via-red-800 to-yellow-500 p-1 text-center align-middle text-white ">
                {" "}
                {responseData}
              </p>
            </div>
          </section></div>
        </form>
      </div>
    </>
  );
}
