import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function StoreOwnerSignUp() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    storeName: "",
    storeAddress: "",
    phone: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (req, res) => {
    const creator = await fetch("http://localhost:5000/CreateStore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        storeAddress: userInput.storeAddress,
        storeName: userInput.storeName,
        phone: userInput.phone,
        email: userInput.email,
        password: userInput.password,
      }),
    });
    console.log(creator);
    alert("Thank you for signing up!");
    useNavigate("/SignUp");
  };
  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  return (
    <>
      <section class="bg-white dark:bg-black">
        <label
          htmlFor="Store Owner"
          class="flex m-auto mt-4 justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4  text-white bg-white dark:bg-black "
        >
          Store Owner
        </label>
        <form
          onSubmit={handleSubmit}
          class="flex justify-center m-auto  flex-col"
        >
          <label
            htmlFor="First Name"
            class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black "
          >
            First Name
          </label>
          <input
            class="bg-white w-2/3 border-amber-500 border-2  mt-2 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900  rounded-full text-center"
            type="text"
            name="firstName"
            value={userInput.firstName}
            onChange={handleChange}
            required
          ></input>
          <label
            htmlFor="Last Name"
            class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black "
          >
            Last Name
          </label>
          <input
            class="bg-white w-2/3 border-amber-500 border-2  mt-2 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900  rounded-full text-center"
            type="text"
            name="lastName"
            value={userInput.lastName}
            onChange={handleChange}
            required
          ></input>
          <label
            htmlFor="Store Name"
            class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black "
          >
            Store Name
          </label>
          <input
            class="bg-white w-2/3 border-amber-500 border-2  mt-2 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900  rounded-full text-center"
            type="text"
            name="storeName"
            value={userInput.storeName}
            onChange={handleChange}
            required
          ></input>
          <label
            htmlFor="Store Address"
            class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black "
          >
            Store Address
          </label>
          <input
            class="bg-white w-2/3 border-amber-500 border-2  mt-2 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900  rounded-full text-center"
            type="text"
            name="storeAddress"
            value={userInput.storeAddress}
            onChange={handleChange}
            required
          ></input>
          <label
            htmlFor="Phone Number"
            class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black "
          >
            Phone Number
          </label>
          <input
            class="bg-white w-2/3 border-amber-500 border-2  mt-2 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900  rounded-full text-center"
            type="text"
            name="phone"
            value={userInput.phone}
            onChange={handleChange}
            required
          ></input>
          <label
            htmlFor="Email"
            class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black "
          >
            Email
          </label>
          <input
            class="bg-white w-2/3 border-amber-500 border-2  mt-2 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900  rounded-full text-center"
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
            required
          ></input>
          <label
            htmlFor="Password"
            class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black "
          >
            Password
          </label>
          <input
            class="bg-white w-2/3 border-amber-500 border-2 mb-4 mt-2 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900  rounded-full text-center"
            type="text"
            name="password"
            value={userInput.password}
            onChange={handleChange}
            required
          ></input>
          <input
            type="submit"
            class="font-zen w-2/3 m-auto bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500 rounded-full text-white p-4 mt-2 focus:from-red-800 focus:to-red-800 focus:via-amber-500"
          ></input>
        </form>
      </section>
    </>
  );
}
