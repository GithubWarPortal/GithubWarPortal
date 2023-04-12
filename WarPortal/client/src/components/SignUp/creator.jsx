import CreatorStripe from "../Stripe/creator.jsx";

export default function CreatorSignUp() {
  return (
    <>
      <section>
       <form> 
          <label for="First Name">First Name</label><input type="text"></input>
          <label for="Last Name">Last Name</label><input type="text"></input>
          <label for="Email">Email</label>
          <input type="email"></input>
          <label for="Password">Password</label><input type="text"></input>
        
        </form>
      </section>
    </>
  );
}
