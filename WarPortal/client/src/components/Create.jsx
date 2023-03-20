export function Create() {
  return (
    <>
      <div class="bg-white dark:bg-black text-center flex-col flex m-auto justify-center ">
        <header class="lg:p-4 lg:m-auto lg:text-3xl lg:w-1/2 font-zen  rounded-full  bg-white bg-gradient-to-tr m-auto from-amber-500  via-red-800 to-amber-500 p-2  text-white mt-3  ">
          <h1>Create Your Own Card!</h1>
        </header>
        <section>
          <form class="flex flex-col gap-4 mt-4">
            <section>
              <label htmlFor="Character Name">
                <div class="lg:p-4 m-2 mt-2 lg:m-5 lg:text-3xl lg:w-1/6 w-1/3 rounded-full bg-gradient-to-tr  from-amber-500   via-red-800  to-amber-500 p-1 text-white hover:from-red-800 hover:via-amber-500 hover:to-red-800 ">
                  <h1 class="p-2 bg-white rounded-full dark:bg-black text-amber-900 dark:text-amber-400">
                    Character Name
                  </h1>
                </div>
              </label>
              <input type="text" class=""></input>
            </section>
            <section>
              {" "}
              <label htmlFor="Move 1 Name">
                <div class="lg:p-4 m-2 mt-2 lg:m-5 lg:text-3xl lg:w-1/6 w-1/3 rounded-full bg-gradient-to-tr  from-amber-500   via-red-800  to-amber-500 p-1 text-white hover:from-red-800 hover:via-amber-500 hover:to-red-800 ">
                  <h1 class="p-2 bg-white rounded-full dark:bg-black text-amber-900 dark:text-amber-400">
                    Move 1 Name
                  </h1>
                </div>
              </label>
              <input type="text" class=""></input>
            </section>
            <section>
              {" "}
              <label htmlFor="Move 2 Name">
                <div class="lg:p-4 m-2 mt-2 lg:m-5 lg:text-3xl lg:w-1/6 w-1/3 rounded-full bg-gradient-to-tr  from-amber-500   via-red-800  to-amber-500 p-1 text-white hover:from-red-800 hover:via-amber-500 hover:to-red-800 ">
                  <h1 class="p-2 bg-white rounded-full dark:bg-black text-amber-900 dark:text-amber-400">
                    Move 2 Name
                  </h1>
                </div>
              </label>
              <input type="text" class=""></input>
            </section>
            <section>
              {" "}
              <label htmlFor="Move 3 Name">
                <div class="lg:p-4 m-2 mt-2 lg:m-5 lg:text-3xl lg:w-1/6 w-1/3 rounded-full bg-gradient-to-tr  from-amber-500   via-red-800  to-amber-500 p-1 text-white hover:from-red-800 hover:via-amber-500 hover:to-red-800 ">
                  <h1 class="p-2 bg-white rounded-full dark:bg-black text-amber-900 dark:text-amber-400">
                    Move 3 Name
                  </h1>
                </div>
              </label>
              <input type="text" class=""></input>
            </section>

            <section>
              {" "}
              <label htmlFor="Move 4 Name">
                <div class="lg:p-4 m-2 mt-2 lg:m-5 lg:text-3xl lg:w-1/6 w-1/3 rounded-full bg-gradient-to-tr  from-amber-500   via-red-800  to-amber-500 p-1 text-red-900 hover:from-red-800 hover:via-amber-500 hover:to-red-800 ">
                  <h1 class="p-2 bg-white rounded-full dark:bg-black text-amber-900 dark:text-amber-400  lg:p-4">
                    Move 4 Name
                  </h1>
                </div>
              
              </label>
                              <div class=" m-2 mt-2 lg:m-5 lg:text-3xl lg:w-1/3 w-1/3 rounded-full bg-gradient-to-tr  from-amber-500   via-red-800  to-amber-500 p-1 text-red-900 hover:from-red-800 hover:via-amber-500 hover:to-red-800 ">
    <input
              class="  dark:bg-black bg-white text-center placeholder-red-800 lg:p-3 mt-2 lg:m-5 lg:text-3xl rounded-full"
              ></input></div>
            </section>
            <label htmlFor="Gmail" class="">
              Gmail
              <input type="email" class="ml-4"></input>
            </label>
            <label htmlFor="Move Images" class="">
              Move Images
              <button class="ml-4">Google Drive Picker</button>
            </label>
            <input type="submit" value="Submit for Approval!" class=""></input>
          </form>
        </section>
      </div>
    </>
  );
}
