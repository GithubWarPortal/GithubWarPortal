import { useEffect, useState } from "react";

export function StoryArcs() {
  const [characters, setCharacters] = useState([]);

  async function getCharacters() {
  
      const response = await fetch("http://localhost:5000/CharacterStories");

        const data = await response.json();
        console.log(data);
        setCharacters(data);}

  useEffect(() => {
    getCharacters();
  }, []);

  const [creatures, setCreatures] = useState([]);
  async function getCreatures(){
    const response = await fetch("http://localhost:5000/CreatureStories")
  const data = await response.json();
  console.log(data);
    setCreatures(data);
  }

  useEffect(()=> {
    getCreatures();
  }, []);

  return (
    <>
      <div className="bg-[url('/images/kuri.jpg')]">
       <div class="bg-black text-white flex justify-center flex-col m-auto text-center"> {characters.map((data) => (
          <div key={data.id}>
            <p class="lg:p-4 lg:m-auto lg:text-3xl lg:w-1/4  font-zen  rounded-full bg-no-repeat bg-white bg-gradient-to-tr m-auto from-yellow-500  via-red-800 to-yellow-500 p-2  text-white lg:mt-10 lg:mb-10 ">{data.name}</p>
            <img src={data.imageUrl} class="m-auto w-2/3"/>
            <p class="p-16">{data.characterDescription}</p>
          </div>
        ))}
        </div>
        <div class="bg-black text-white flex justify-center flex-col m-auto text-center"> {creatures.map((data) => (
          <div key={data.id}>
            <p class="lg:p-4 lg:m-auto lg:text-3xl lg:w-1/4  font-zen  rounded-full bg-no-repeat bg-white bg-gradient-to-tr m-auto from-yellow-500  via-red-800 to-yellow-500 p-2  text-white lg:mt-10 lg:mb-10 ">{data.name}</p>
            <img src={data.imageUrl} class="m-auto w-2/3"/>
            <p class="p-16">{data.characterDescription}</p>
          </div>
        ))}
        </div></div>
    </>
  );
}
