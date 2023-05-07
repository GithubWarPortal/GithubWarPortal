import { useState, useEffect } from "react";
export default function ApproveCards() {
  const [submissions, setSubmissions] = useState([]);

  async function getSubmissions() {
    const response = await fetch("http://localhost:5000/submissions");
    const data = await response.json();
    setSubmissions(data);
  }

  useEffect(() => {
    getSubmissions();
  }, []);

  async function approve(id) {
    await fetch("http://localhost:5000/approve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });

    const submission = submissions.find((submission) => submission.id === id);
    submission.approved = true;

    setSubmissions([...submissions]);
    getSubmissions();
  }

  return (
    <>
      <div>
      <div class="m-auto   mt-4 max-w-sm flex justify-center bg-gradient-to-r  from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <h1 class="m-auto font-zen text-2xl dark:text-amber-400 dark:bg-black   w-full hover: text-red-900 p-2 rounded-full bg-white text-center justify-center">
            Approve Cards
          </h1>
        </div>
        <div>
          {submissions.map((data) => {
            return (
              <div
                key={data.id}
                class="font-sans flex flex-col justify-center text-center text-lg"
              >
                 <div class="w-full h-1 mt-2  bg-red-800 text-red-800">. </div>
                <div>
                  <h2 class="p-1 w-1/6 mt-4 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    ID
                  </h2>
                  <div>{data.id}</div>
                </div>
                <div>
                  <h2 class="w-1/6 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Card
                  </h2>
                  <div>{data.cardName}</div>
                </div>
                <div>
                  <h2 class="w-1/3 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Move One
                  </h2>
                  <div>{data.moveOne}</div>
                </div>
                <div>
                  <h2 class="w-1/3 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Description
                  </h2>
                  <div>{data.moveOneDescription}</div>
                </div>
                <div>
                  <h2 class="w-1/3 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Move Two
                  </h2>
                  <div>{data.moveTwo}</div>
                </div>
                <div>
                  <h2 class="w-1/3 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Description
                  </h2>
                  <div>{data.moveTwoDescription}</div>
                </div>
                <div>
                  <h2 class="w-1/3 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Move Three
                  </h2>
                  <div>{data.moveThree}</div>
                </div>
                <div>
                  <h2 class="w-1/3 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Description
                  </h2>
                  <div>{data.moveThreeDescription}</div>
                </div>
                <div>
                  <h2 class="w-1/3 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Move Four
                  </h2>
                  <div>{data.moveFour}</div>
                </div>
                <div>
                  <h2 class="w-1/3 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Description
                  </h2>
                  <div>{data.moveFourDescription}</div>
                </div>
                <div>
                  <h2 class="w-1/6 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Gmail
                  </h2>
                  <div>{data.gmail}</div>
                </div>
                <div>
                  <h2 class="w-1/3 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Approved
                  </h2>
                  <button
                    class="w-1/5 p-2 mt-4 m-auto  text-white rounded-full bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500"
                    onClick={() => approve(data.id)}
                  >
                    {data.approved.toString()}
                  </button>
                </div>

                <div>
                  {" "}
                  <h2 class="w-1/6 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Date
                  </h2>
                  <div>{data.submissionDate.slice(0, 10)}</div>
                </div>
                <div class="w-full h-1 bg-red-800 text-red-800">.</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
