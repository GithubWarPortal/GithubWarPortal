export default function CreatorSignIn() {
    //useState

    //Frontend API
  return (
    <>
      <section>
        <form>
          <h1>Sign In</h1>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email Here..."
           // value={userInput.email}
            //handle change
            required
          ></input>
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password Here..."
          //  value={userInput.password}
            //handle change
            required
          ></input>                                                                                                                                                                                    
          <input type="submit"></input>
        </form>
      </section>
    </>
  );
}
