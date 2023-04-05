import { Link } from "react-router-dom";
export default function Create() {
  return (
    <>
      <button>
        {" "}
        <Link class="" to="/StoreOwner">Store Owners</Link>{" "}
      </button>
      <button>
        {" "}
        <Link class="" to="/Creator">Creator</Link>{" "}
      </button>
    </>
  );
}
