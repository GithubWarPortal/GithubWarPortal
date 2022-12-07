export default function CardValidator() {
  
    return (
        <>
          <h1>Card Validator</h1>
          <form>
            <h2>User ID</h2>
            <input type="text" placeholder="Enter Here" required></input>
            <h2>Card ID</h2>
            <input type="text" placeholder="Enter Here" required></input>
           <button> <input type="reset"></input></button>
           <button><input type="submit"></input> </button>
          </form>
        </>
      );

}