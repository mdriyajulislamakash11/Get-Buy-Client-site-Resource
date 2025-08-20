import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const { logInUser, googleLogin } = useAuth();
  const [disabled, setDisabled] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location?.state?.from?.pathname || '/';

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;

    console.log({ email, password, captcha });

    logInUser(email, password)
      .then((result) => {
        console.log("✅ User logged in:", result.user);
          navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("❌ Login failed:", error.message);
      });
  };

  // Google Login handler
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("✅ Google Login Success:", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("❌ Google login failed:", error.message);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // Re-chaptcha
  const handleCaptcha = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value)

    if (validateCaptcha(value) == true) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Right side - Login Card */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Login to Your Account
          </h2>

          <form onSubmit={handleFormSubmit} className="card-body p-0">
            {/* Email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            {/* chaptcha */}
            <div>
              <label className="label mt-1">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                onBlur={handleCaptcha}
                placeholder="Check Robot"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            {/* Button */}
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
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

          {/* Redirect to Register */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-medium hover:underline"
            >
              Register Now
            </Link>
          </p>
        </div>

        {/* Left side - Illustration or Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-indigo-700">
            Welcome Back!
          </h1>
          <p className="py-6 text-lg text-gray-700 max-w-md">
            Enter your credentials to access your account and continue exploring
            our amazing platform. We're glad to have you back!
          </p>
          <Link
            to="/"
            className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
