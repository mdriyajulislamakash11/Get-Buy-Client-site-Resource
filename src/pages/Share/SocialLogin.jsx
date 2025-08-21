import React from "react";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Google Login handler
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("✅ Google Login Success:", result.user);

        const userInfo = {
          email: result.user.email,
          name: result.user.displayName,
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.error("❌ Google login failed:", error.message);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full mb-3"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
