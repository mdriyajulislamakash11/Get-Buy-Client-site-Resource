import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Login = () => {
  const { logInUser, googleLogin } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });

    logInUser(email, password)
      .then((result) => {
        console.log("✅ User logged in:", result.user);
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
      })
      .catch((error) => {
        console.error("❌ Google login failed:", error.message);
      });
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
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover text-indigo-500">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Button */}
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all">
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
            <Link to="/register" className="text-indigo-600 font-medium hover:underline">
              Register Now
            </Link>
          </p>
        </div>

        {/* Left side - Illustration or Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-indigo-700">Welcome Back!</h1>
          <p className="py-6 text-lg text-gray-700 max-w-md">
            Enter your credentials to access your account and continue exploring 
            our amazing platform. We're glad to have you back!
          </p>
          <Link to='/' className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all">Go To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
