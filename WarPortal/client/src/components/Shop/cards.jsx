import { useEffect, useState} from "react"
export default function Cards() {
    const [cards, setCards] = useState([])
    async function getWarPortalCards() {
      const gameID = '12345'; // replace with the actual game ID
      const apiKey = 'your_api_key_here'; // replace with your Game Crafter API key
      const url = `https://www.thegamecrafter.com/api/v1/games/${gameID}/cards`;
    
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
    
      const data = await response.json();
    
      return data;
    }
    useEffect(() => {
      getWarPortalCards();},  [], 
    )
}