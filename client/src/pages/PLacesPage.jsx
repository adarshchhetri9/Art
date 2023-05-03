import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../components/Perks";
import axios from "axios";

const PlacesPage = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perkss, setPerkss] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuest, setMaxGuest] = useState(1);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <h2 className="text-gray-500 text-sm">{text}</h2>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
 
    setPhotoLink("");
  }

  return (
    <div>
      {action !== "new" && (
        <div>
          <div className="text-center">
            <Link
              className="bg-primary py-2 px-4 text-white rounded-full inline-flex gap-1"
              to={"/account/places/new"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add new Place
            </Link>
          </div>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            {preInput("Title")}
            <input
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              placeholder="Title, Eg: My Lovely apartment"
            />
            {preInput("Address")}
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
            />
            <div>
              {preInput("Photos", "Link for Photos")}
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Add your Link here"
                  value={photoLink}
                  onChange={(ev) => setPhotoLink(ev.target.value)}
                />
                <button
                  onClick={addPhotoByLink}
                  className="bg-white text-black border border-primary hover:text-white hover:bg-[#ff385d] rounded-full py-2 px-6"
                >
                  Add&nbsp;Photo
                </button>
              </div>
              <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:gird-cols-5">
                {addedPhotos.length > 0 &&
                  addedPhotos.map((link) => (
                    <div>
                      {link}
                      {/* <img
                        src={"http://localhost:4000/upload/" + link}
                        alt=""
                      /> */}
                    </div>
                  ))}
                <button className=" flex justify-center gap-2 border bg-transparent rounded-2xl px-2 py-6 text-2xl text-gray-600 border-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  Upload
                </button>
              </div>
            </div>
            {preInput("Description", "Descriptions of places")}
            <textarea
              className=" h-32"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <Perks selected={perkss} onChange={setPerkss} />
            {preInput("Extra info", "House rules, etc.. ")}
            <textarea
              value={extraInfo}
              onChange={(ev) => setExtraInfo(ev.value.target)}
            />
            {preInput(
              "Check In & Out Times , Max guests",
              "Add check in and out times, Remenber to have some time window for cleaning the room between guests"
            )}
            <div className="grid sm:grid-cols-3 gap-2">
              <div>
                <h3 className="mt-2-mb-1">Check in time</h3>
                <input
                  type="text"
                  value={checkIn}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                  placeholder="14:00"
                />
              </div>
              <div>
                <h3 className="mt-2-mb-1">Check out time</h3>
                <input
                  type="text"
                  placeholder="11:00"
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                />
              </div>
              <div>
                <h3 className="mt-2-mb-1">Max guests</h3>
                <input
                  type="text"
                  value={maxGuest}
                  onChange={(ev) => setMaxGuest(ev.target.value)}
                />
              </div>
            </div>
            <div>
              <button className="primary my-4">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PlacesPage;
