import React, { useContext } from "react";
import { UserContext } from "../components/Usercontext";
import { Navigate, Link, useParams } from "react-router-dom";

export default function AccountPage() {
  const { ready, user } = useContext(UserContext);

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  const { subpage } = useParams();
  console.log(subpage);

  return (
    <div>
      <nav className="w-full flex mt-8 gap-4 justify-center">
        <Link
          className="p-2 px-4 bg-primary text-white rounded-full"
          to={"/account"}
        >
          My Profile
        </Link>
        <Link className="p-2 px-4" to={"/account/booking"}>
          My Booking
        </Link>
        <Link className="p-2 px-4" to={"/account/places"}>
          My Accomodations
        </Link>
      </nav>
    </div>
  );
}
