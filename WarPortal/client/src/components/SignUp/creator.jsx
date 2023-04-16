import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CreatorSignUp() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    creatorId: "",
  });
  const handleSubmit = async (req, res) => {
    const creator = await fetch("http://localhost:5000/CreateCreator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        email: userInput.email,
        password: userInput.password,
        userId: userInput.userId,
      }),
    });
    console.log(creator)
  alert("Thank you for signing up!")
    useNavigate("/SignUp");
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
            name="firstName"
            value={userInput.firstName}
            onChange={handleChange}
            required
          ></input>
          <label for="Last Name">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userInput.lastName}
            onChange={handleChange}
            required
          ></input>
          <label for="Email">Email</label>
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
            required
          ></input>
          <label for="Password">Password</label>
          <input
            type="text"
            name="password"
            value={userInput.password}
            onChange={handleChange}
            required
          ></input>
          <label for="User Id">User ID (If you have a previous account)</label>
          <input
            type="text"
            name="userId"
            value={userInput.userId}
            onChange={handleChange}
          ></input>
          <input type="submit"></input>
        </form>
      </section>
    </>
  );
}
