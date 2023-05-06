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
    const apiKey = process.env.REACT_APP_GAMECRAFTER_API_KEY;
    
    for (let i = 0; i < approved.length; i++) {
      const move = approved[i];
      
      const requestData = {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${move.cardName} - ${move[`move${i+1}`]}`,
          description: move[`move${i+1}Description`],
          tags: ['example', 'card'],
          card_type_id: 1 // replace with the ID of the card type you want to create
        })
      };
  
      const response = await fetch('https://www.thegamecrafter.com/api/v1/cards', requestData);
      const data = await response.json();
      console.log(data);
    }
  }
  
  

  return (
    <>
      <div class="m-auto ">
        <div class="m-auto   mt-4 max-w-sm flex justify-center bg-gradient-to-r  from-yellow-500 via-red-800 p-2 to-yellow-500  rounded-full ">
          <h1 class="m-auto font-zen text-2xl dark:text-amber-400 dark:bg-black   w-full hover: text-red-900 p-2 rounded-full bg-white text-center justify-center">
            Submit Cards
          </h1>
        </div>
        <div>
          
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
                <button onClick={createCard}>Create New Card</button>
              </div>
            );
          })}
        </div>
        
      </div>
    </>
  );
}