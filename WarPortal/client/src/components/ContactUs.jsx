export function ContactUs() {
  return (
    <>
      <div class="bg-white dark:bg-black text-center m-auto  justify-center flex flex-col  align-middle">
        <h1 class="lg:p-4 lg:m-6 lg:text-3xl lg:w-1/4 font-zen w-1/3  rounded-full  bg-white bg-gradient-to-tr m-auto from-yellow-500  via-red-800 to-yellow-500 p-2  text-white mt-3  ">
          Contact Us!
        </h1>
        <h2 class="text-red-900 mt-3  dark:text-red-300">
          {" "}
          We'd love to hear from you.
        </h2>
        <button
            
                class="lg:p-4 mt-2 lg:m-10 lg:text-3xl lg:w-1/6 w-1/3 m-auto rounded-full bg-gradient-to-tr  from-yellow-500   via-red-800  to-yellow-500 p-1 text-white hover:from-red-800 hover:via-yellow-500 hover:to-red-800"
              ><a class="mt-3" href="mailto:warportalonline@gmail.com">Click Here to Email Me!</a></button>
       
      </div>
    </>
  );
}
