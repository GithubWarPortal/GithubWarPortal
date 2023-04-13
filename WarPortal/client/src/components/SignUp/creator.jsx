import { useState } from "react";
export default function CreatorSignUp() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (req, res) => {
    const creator = await fetch("http://localhost:5000/createCreator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        email: userInput.email,
        password: userInput.password,
      }),
    });
  };
  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <label for="First Name">First Name</label>
          <input
            type="text"
            value={userInput.firstName}
            onChange={handleChange}
          ></input>
          <label for="Last Name">Last Name</label>
          <input
            type="text"
            value={userInput.lastName}
            onChange={handleChange}
          ></input>
          <label for="Email">Email</label>
          <input
            type="email"
            value={userInput.email}
            onChange={handleChange}
          ></input>
          <label for="Password">Password</label>
          <input
            type="text"
            value={userInput.password}
            onChange={handleChange}
          ></input>
          <input type="submit"></input>
        </form>
      </section>
    </>
  );
}
