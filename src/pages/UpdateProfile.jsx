import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import bg from "../assets/bg.svg";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(user, { displayName: name, photoURL })
      .then(() => {
        navigate("/my-profile");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-[#778DA9]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-2 max-w-[500px] max-h-[600px] bg-[#1B263B] text-white card-body rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="Photo URL"
              className="input text-black"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;