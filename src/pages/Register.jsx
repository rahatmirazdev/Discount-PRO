import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { register, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    register(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#778DA9]">
      <div className="mx-2 max-w-[500px] max-h-[600px] bg-[#1B263B] text-white card-body rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Create a new account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="form-control mt-14">
            <button className="btn btn-primary" type="submit">Register</button>
          </div>
        </form>
        <button className="btn btn-secondary mt-4" onClick={() => signInWithGoogle().then(() => navigate("/"))}>Register with Google</button>
      <div className="mt-4">
          <NavLink to="/login" className="link link-hover">
            Already have an account? Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;