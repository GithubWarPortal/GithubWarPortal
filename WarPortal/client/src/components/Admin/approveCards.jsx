import { useState, useEffect } from "react";

export default function ApproveCards() {
  const [submissions, setSubmissions] = useState([]);
  async function getSubmissions() {
    const { data }  = await fetch("http://localhost:5000/submissions");
    console.log(data);
    
    setSubmissions(data);
  }
  useEffect(() => {
    getSubmissions();}, [submissions]
  );

  return (
    <>
      <div>
        <div class="m-auto mt-4 w-1/3 flex justify-center bg-gradient-to-r  from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <h1 class="font-zen text-2xl  dark:bg-black   w-full hover: text-red-900 p-2 rounded-full bg-white text-center justify-center">
            Approve Cards
          </h1>
        </div>
        <div>
        {submissions?.map((data) => (
        
            <div key={data.id}>
              <p>{data.Role}</p>
              <p>{data.cardName}</p>
              <p>{data.moveOne}</p>
              <p>{data.moveOneDescription}</p>
              <p>{data.moveTwo}</p>
              <p>{data.moveTwoDescription}</p>
              <p>{data.moveThree}</p>
              <p>{data.moveThreeDescription}</p>
              <p>{data.moveFour}</p>
              <p>{data.moveFourDescription}</p>
              <p>{data.gmail}</p>
              <p>{data.approved}</p>
              <p>{data.submissionDate}</p>
            
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
