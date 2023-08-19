import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <>
          <div class="bg-[url('/images/red.png')] bg-center w-full bg-cover bg-opacity-30 bg-no-repeat pl-22 p-6 md:text-2xl font-zen text-lg  m-auto flex md:flex-row flex-col justify-center text-center  bg-white dark:bg-black gap-4 ">
        <button class=" bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class=" dark:bg-black  block hover: text-red-900 p-2 rounded-full bg-white">
            {" "}
            <Link class="flex justify-center p-4" to="/StoreOwnerSignIn">
            Store Owners
            </Link>{" "}
          </span>
        </button>
        <button class=" bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class=" dark:bg-black  block hover: text-red-900 p-2 rounded-full bg-white">
            {" "}
            <Link class="flex justify-center p-4" to="/CreatorSignIn">
            Creators
            </Link>{" "}
          </span>
        </button>
        <button class=" bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class=" dark:bg-black  block hover: text-red-900 p-2 rounded-full bg-white">
            {" "}
            <Link class="flex justify-center p-4" to="/SignUp">
            Sign Up
            </Link>{" "}
          </span>
        </button>
      </div>

    </>
  );
}
