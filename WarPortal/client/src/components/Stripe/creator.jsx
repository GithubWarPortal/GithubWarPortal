import { useState, useEffect } from "react";
export default function CreatorStripe() {
  return (
    <>
      {" "}
      <form action="/create-creator-checkout-session" method="POST">
        <input type="hidden" name="priceId" value="price_G0FvDp6vZvdwRZ" />
        <button type="submit">Checkout</button>
      </form>
    </>
  );
}
