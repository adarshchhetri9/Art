import { useContext, useState } from "react";
import { UserContext } from "../components/Usercontext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  console.log(subpage);
  if (subpage === undefined) {
    subpage = "proflie";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  function linkClasses(type = null) {
    let classes = "py-2 px-6 border border-primary rounded-full ";
    if (type === subpage) {
      classes += " text-white  bg-primary ";
    }
    return classes;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <nav className="w-full flex mt-8 gap-4 justify-center mb-8">
        <Link className={linkClasses("proflie")} to={"/account"}>
          My Profile
        </Link>
        <Link className={linkClasses("booking")} to={"/account/booking"}>
          My Booking
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My Accomodations
        </Link>
      </nav>
      {subpage === "proflie" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name}({user.email})
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
