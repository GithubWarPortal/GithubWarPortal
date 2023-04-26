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
  
  return (
    <>
      <div>
        <div className="m-auto mt-4 w-1/3 flex justify-center bg-gradient-to-r from-yellow-500 via-red-800 p-2 to-yellow-500 rounded-full">
          <h1 className="font-zen text-2xl dark:bg-black w-full hover:text-red-900 p-2 rounded-full bg-white text-center justify-center">
            Approve Cards
          </h1>
        </div>
        <div>
          {submissions.map((data) => {
            return (
              <div key={data.id}>
                <div>Role: {data.Role}</div>
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
                <div>{data.approved}</div>
                <div>{data.submissionDate}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
  
}
