import { useState } from "react";
import { useNavigate } from "react-router";

export default function StoreOwnerSignIn() {
  //useState

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const [isUserOwner, setIsUserOwner] = useState();

  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const [responseData, setResponseData] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event, req, res) => {
    event.preventDefault();
    try {
      const check = await fetch("http://localhost:5000/StoreSignIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userInput.email,
          password: userInput.password,
        }),
      });
      console.log(check);
      //Add response from server

      const data = await check.json();
      setResponseData(data);

      if (data == "Valid!") {
        navigate("/StoreOwner");
      }
    } catch (error) {
      //if else statement to add redirect API to creator submission page
      console.error(error);
    }
  };
  //Frontend API
  return (
    <>
      <section class="flex bg-white dark:bg-black text-red-900 dark:text-amber-500 justify-center m-auto flex-wrap md:text-xl md:align-middle text-center">
        <form
          onSubmit={handleSubmit}
          class="flex flex-col md:flex-row md:gap-4 md:"
        >
          <div>
            <h1 class=" m-auto md:mt-8 md:mr-4 mt-4 mb-4  text-xl flex justify-center  font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white w-full bg-white dark:bg-black dark:text-white md:p-4">
              Sign In
            </h1>
          </div>
          <div>
            <label class="  m-auto mt-2 mb-2 flex justify-center  font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white w-full bg-white dark:bg-black dark:text-white md:p-4">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Here..."
              value={userInput.email}
              onChange={handleChange}
              class="bg-white  m-auto mt-2 mb-4 dark:border-amber-500 border-2 border-red-800 w-full flex p-2 justify-center align-middle dark:bg-black text-red-900 dark:text-white rounded-full text-center"
              required
            ></input>
          </div>
          <div>
            <label class=" m-auto mt-2 mb-2 flex justify-center  font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white  w-full bg-white dark:bg-black dark:text-white md:p-4">
              Password
            </label>
            <input
              type="text"
              name="password"
              placeholder="Password Here..."
              value={userInput.password}
              onChange={handleChange}
              class="bg-white  m-auto mt-2 mb-4   dark:border-amber-500 border-2 border-red-800 w-full flex p-2 justify-center align-middle dark:bg-black text-red-900 dark:text-white rounded-full text-center"
              required
            ></input>
          </div>
          <div>
            <input
              type="submit"
              class="dark:text-white md:mt-8 md:ml-4 mb-4 font-zen bg-gradient-to-tr from-amber-500 to-amber-500 via-red-800 hover:bg-gradient-to-tl hover:from-red-800 hover:to-red-800 hover:via-amber-500 rounded-full text-white p-4 mt-2 focus:from-red-800 focus:to-red-800 focus:via-amber-500"
            ></input>
          </div>{" "}
          <div>Response: {responseData}</div>
        </form>
      </section>
    </>
  );
}