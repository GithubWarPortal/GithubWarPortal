import { useState, useEffect } from "react";
export default function SubmitCards() {
  const [approved, setApproved] = useState([]);

  async function getApproved(req, res) {
    const response = await fetch("http://localhost:5000/GetApproved");
    const data = await response.json();
    console.log(data)
    setApproved(data);
}
    useEffect(() => {
      getApproved();
    }, []);
  
  return (
    <>
      <div>
        <div class="m-auto mt-4 w-1/3 flex justify-center bg-gradient-to-r  from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <h1 class="font-zen text-2xl dark:text-amber-400 dark:bg-black   w-full hover: text-red-900 p-2 rounded-full bg-white text-center justify-center">
            Submit Cards
          </h1>
        </div>
        <div>
          {approved.map((data) => {
            return (
              <div key={data.id}>
                <div>{data.id}</div>
                <div>Card: {data.cardName}</div>
                <div>One: {data.moveOne}</div>
                <div>Desc: {data.moveOneDescription}</div>
                <div>Two: {data.moveTwo}</div>
                <div>Desc: {data.moveTwoDescription}</div>
                <div>Three: {data.moveThree}</div>
                <div>Desc: {data.moveThreeDescription}</div>
                <div>Four: {data.moveFour}</div>
                <div>Desc: {data.moveFourDescription}</div>
                <div>{data.gmail}</div>
                <div>{data.approved.toString()}</div>
                <div>{data.submissionDate}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
