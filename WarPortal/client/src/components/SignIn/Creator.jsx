export default function CreatorSignIn() {
  //useState

  //Frontend API
  return (
    <>
      <section class="flex bg-white dark:bg-black text-red-900 dark:text-amber-500 justify-center m-auto flex-wrap md:text-xl md:align-middle text-center">
        <form class="flex flex-col md:flex-row md:gap-4 md:">
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
              // value={userInput.email}
              //handle change
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
              //value={userInput.password}
              //handle change
              class="bg-white  m-auto mt-2 mb-4   dark:border-amber-500 border-2 border-red-800 w-full flex p-2 justify-center align-middle dark:bg-black text-red-900 dark:text-white rounded-full text-center"
              required
            ></input>
          </div>
          <div>
            <input
              type="submit"
              class="dark:text-white md:mt-8 md:ml-4 mb-4 font-zen bg-gradient-to-tr from-amber-500 to-amber-500 via-red-800 hover:bg-gradient-to-tl hover:from-red-800 hover:to-red-800 hover:via-amber-500 rounded-full text-white p-4 mt-2 focus:from-red-800 focus:to-red-800 focus:via-amber-500"
            ></input>
          </div>
        </form>
      </section>
    </>
  );
}
