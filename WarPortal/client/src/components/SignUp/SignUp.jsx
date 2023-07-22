import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div class="font-zen flex justify-center gap-2  text-center">
        <button class="mt-2 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class="flex dark:text-amber-500 dark:bg-black hover: text-red-900  rounded-full bg-white">
            {" "}
            <Link class="justify-center p-2" to="/StoreOwnerSignUp">
              Store Owners
            </Link>{" "}
          </span>
        </button>

        <button class="mt-2 bg-gradient-to-r  hover:bg-gradient-to-t hover:from-yellow-500 hover:via-red-800  hover:to-yellow-500 from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <span class="flex dark:text-amber-500 dark:bg-black hover: text-red-900  rounded-full bg-white">
            {" "}
            <Link class="justify-center flex p-2" to="/CreatorSignUp">
              Creators
            </Link>{" "}
          </span>
        </button>
      </div>
    </>
  );
}
