import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const SignInWithGithub = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleGithub = (e) => {
    e.preventDefault();
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      {userData && (
        <div>
          <h1>Welcome {userData.displayName}</h1>
          <img src={userData.photoURL} alt={userData.displayName} />
        </div>
      )}

      <form action="">
        <button onClick={handleGithub} className="btn btn-primary btn-block">
          Sign in with Github
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default SignInWithGithub;
