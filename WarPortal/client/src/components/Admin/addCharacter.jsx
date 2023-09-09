import { useState } from "react";

export default function addCharacter() {
  const [userInput, setUserInput] = useState({
    name: "",
    imageUrl: "",
    description: "",
  });
  const onChange = (event) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [event.target.name]: event.target.value,
    }));
  };
  async function submitForm(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/addCharacter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userInput.name,
        imageUrl: userInput.imageUrl,
        description: userInput.description,
      }),
      
    });
    console.log(response)
  }
  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <h2 class="flex m-auto justify-center max-w-sm text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white da2/3g-black dark:text-amber-400">
            Name
          </h2>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={userInput.name}
            onChange={onChange}
            class="bg-white w-2/3 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"

          />
           <h2 class="flex m-auto justify-center max-w-sm text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white da2/3g-black dark:text-amber-400">
            Image URL
          </h2>
          <input
            type="text"
            name="imageUrl"
            placeholder="image Url"
            value={userInput.imageUrl}
            onChange={onChange}
            class="bg-white w-2/3 flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"

          />
           <h2 class="mt-10 flex m-auto justify-center max-w-sm text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white bg-white da2/3g-black dark:text-amber-400">
            Description
          </h2>
          <input
            type="text"
            name="description"
            placeholder="description"
            value={userInput.description}
            onChange={onChange}
            class="bg-white  mb-10 flex w-2/3  p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
