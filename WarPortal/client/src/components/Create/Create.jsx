import { useState } from "react";
import Loader from "./Loader";
import handlePicker from "./Picker";

export function Create() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [showPicker, setShowPicker] = useState(false);
  Loader();
  handlePicker();

  //Add frontend API's here
  return (
    <>
      <div class="m-2 bg-white dark:bg-black text-center flex-col flex justify-center">
        <header class="lg:p-4 m-auto lg:text-3xl lg:w-1/2 max-w-md flex justify-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3">
          <h1>Create Your Own Card!</h1>
        </header>
        <button
          class="font-zen text-sm bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500 rounded-full text-white p-4 mt-2 focus:from-red-800 focus:to-red-800 focus:via-amber-500"
          onClick={handleOpen}
        >
          How To Correctly Upload Image Files
        </button>
        {open ? (
          <div>
            <p>
              Please upload your pictures in the order you create them below in
              _ format!
            </p>
          </div>
        ) : (
          <div></div>
        )}
        <section>
          <form class="flex flex-col gap-4 mt-4">
            <section class="flex flex-col justify-center">
              <label htmlFor="Character Name">
                <h1 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                  Character Name
                </h1>
              </label>
              <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                <input
                  type="text"
                  class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                ></input>
              </div>
            </section>

            <section class="flex flex-col justify-center">
              <label htmlFor="Move Name 1">
                <h1 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                  Move Name 1
                </h1>
              </label>
              <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                <input
                  type="text"
                  class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                ></input>
              </div>
              <label htmlFor="Move 1 Description">
                <h1 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                  Move 1 Description
                </h1>
              </label>
              <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                <input
                  type="text"
                  class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                ></input>
              </div>
            </section>

            <section class="flex flex-col justify-center">
              <label htmlFor="Move Name 2">
                <h1 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                  Move Name 2
                </h1>
              </label>
              <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                <input
                  type="text"
                  class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                ></input>
              </div>
              <label htmlFor="Move 2 Description">
                <h1 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                  Move 2 Description
                </h1>
              </label>
              <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                <input
                  type="text"
                  class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                ></input>
              </div>
            </section>

            <section class="flex flex-col justify-center">
              <label htmlFor="Move Name 1">
                <h1 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                  Move Name 3
                </h1>
              </label>
              <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                <input
                  type="text"
                  class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                ></input>
              </div>
              <label htmlFor="Move 3 Description">
                <h1 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                  Move 3 Description
                </h1>
              </label>
              <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                <input
                  type="text"
                  class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                ></input>
              </div>
            </section>

            <section class="flex flex-col justify-center">
              <label htmlFor="Move Name 4">
                <h1 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                  Move Name 4
                </h1>
              </label>
              <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                <input
                  type="text"
                  class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                ></input>
              </div>
              <label htmlFor="Move 4 Description">
                <h1 class="flex justify-center m-auto max-w-md font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 w-full bg-white dark:bg-black dark:text-amber-400 lg:p-4">
                  Move 4 Description
                </h1>
              </label>
              <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                <input
                  type="text"
                  class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                ></input>
              </div>
            </section>
            <section class="flex flex-col justify-center">
              <label htmlFor="Gmail">
                <h1 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                  Gmail
                </h1>
              </label>
              <div class="lg:text-3xl w-full m-auto mt-2 text-sm rounded-full bg-gradient-to-tl p-1 text-red-900 from-red-800 via-amber-500 to-red-800 hover:from-amber-500 focus:from-amber-500 focus:to-amber-500 focus:via-red-800 hover:to-amber-500 hover:via-red-800">
                <input
                  type="email"
                  class="bg-white w-full flex p-4 justify-center m-auto align-middle dark:bg-black text-red-900 dark:text-amber-400 rounded-full text-center"
                ></input>
              </div>
            </section>
            <section>
              {" "}
              <label htmlFor="Move Images">
                <h1 class="flex m-auto justify-center max-w-md text-center font-zen rounded-full bg-gradient-to-tr from-amber-500 via-red-800 to-amber-500 p-4 text-white mt-3 bg-white dark:bg-black dark:text-amber-400">
                  Move Images
                </h1>
              </label>
              <div>
                <button
                  class="font-zen bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500 rounded-full text-white p-4 mt-2 focus:from-red-800 focus:to-red-800 focus:via-amber-500"
                  onClick={Loader()}
                >
                  Select Image
                </button>
                {showPicker && createPicker()}
              </div>
            </section>
            {/*TODO: have file and data be sent to the backend API on submit*/}
            <input
              type="submit"
              value="Submit for Approval!"
              class="font-zen bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500 rounded-full text-white p-4 mt-2 focus:from-red-800 focus:to-red-800 focus:via-amber-500"
            //onClick={submit()}
            ></input>
          </form>
        </section>
      </div>
    </>
  );
}
