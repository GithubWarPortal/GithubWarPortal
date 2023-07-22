import { useState, useEffect } from "react";

export default function SubmitCards() {
  const [approved, setApproved] = useState([]);

  async function getApproved() {
    const response = await fetch("http://localhost:5000/GetApproved");
    const data = await response.json();
    setApproved(data);
  }

  useEffect(() => {
    getApproved();
  }, []);

  async function createCard() {
    const apiKey = import.meta.env.VITE_GAMECRAFTER_API_KEY;

    for (let i = 0; i < approved.length; i++) {
      const move = approved[i];

      const requestData = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${move.cardName} - ${move[`move${i + 1}`]}`,
          description: move[`move${i + 1}Description`],
          tags: ["example", "card"],
          card_type_id: 1, // replace with the ID of the card type you want to create
        }),
      };

      const response = await fetch(
        "https://www.thegamecrafter.com/api/v1/cards",
        requestData
      );
      const data = await response.json();
      console.log(data);
    }
  }

  async function removeCard(id) {
    await fetch("http://localhost:5000/RemoveCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    getApproved();
  }

  return (
    <>
      <div class="m-auto ">
        <div class="m-auto   mt-4 max-w-sm flex justify-center bg-gradient-to-r  from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <h1 class="m-auto font-zen text-2xl dark:text-amber-400 dark:bg-black   w-full hover: text-red-900 p-2 rounded-full bg-white text-center justify-center">
            Submit Cards
          </h1>
        </div>
        <div></div>
        <div>
          {approved.map((data) => {
            return (
              <div
                key={data.id}
                class="font-sans flex flex-col justify-center text-center text-lg"
              >
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
                  <div>{data.approved.toString()}</div>
                </div>

                <div>
                  {" "}
                  <h2 class="w-1/6 mt-4 p-1 m-auto justify-center text-white bg-gradient-to-tl rounded-full from-amber-500 to-amber-500 via-red-800 border-2">
                    Date
                  </h2>
                  <div>{data.submissionDate.slice(0, 10)}</div>
                </div>
                <button
                  onClick={
                    //createCard &&
                    () => removeCard(data.id)
                  }
                  class="w-1/3 p-2 mt-4 m-auto  text-white rounded-full bg-gradient-to-tl from-amber-500 to-amber-500 via-red-800 hover:from-red-800 hover:to-red-800 hover:via-amber-500"
                >
                  Create New Card
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
